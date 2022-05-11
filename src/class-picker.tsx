import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { course } from "./Interfaces/course";
import { semester } from "./Interfaces/semester";

interface PassNewClass {
    addClass: (n: string, r: string, s: number) => void;
}
interface editNewClass {
    editClass: (n: string, r: string, s: number, o: course) => void;
    previousCourse: course;
}

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function AddClass({ addClass }: PassNewClass): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [code, setCode] = useState<string>("CISC108");
    const [name, setName] = useState<string>(
        "Introduction to Computer Science I"
    );
    const [credits, setCredits] = useState<number>(4);
    function updateCode(event: ChangeEvent) {
        setCode(event.target.value);
    }
    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }
    function updateCredits(event: React.ChangeEvent<HTMLSelectElement>) {
        setCredits(parseFloat(event.target.value));
    }
    return (
        <div>
            {" "}
            {edit && (
                <Form.Group controlId="code">
                    <Form.Label>Class Code:</Form.Label>
                    <Form.Control value={code} onChange={updateCode} />
                </Form.Group>
            )}
            {edit && (
                <Form.Group controlId="name">
                    <Form.Label>Class Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}
            {edit && (
                <Form.Group controlId="credits">
                    <Form.Label>Session Season</Form.Label>
                    <Form.Select value={credits} onChange={updateCredits}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </Form.Select>
                </Form.Group>
            )}
            {edit && (
                <Button onClick={() => addClass(code, name, credits)}>
                    Confirm
                </Button>
            )}
            <Button onClick={() => setEdit(!edit)}>Add Course</Button>
        </div>
    );
}
export function EditClass({
    editClass,
    previousCourse
}: editNewClass): JSX.Element {
    const [name, setName] = useState<string>(previousCourse.name);
    const [credits, setCredits] = useState<number>(previousCourse.credits);
    const [code, setCode] = useState<string>(previousCourse.code);
    const [edit, setEdit] = useState<boolean>(false);
    function updateCode(event: ChangeEvent) {
        setCode(event.target.value);
    }
    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }
    function updateCredits(event: React.ChangeEvent<HTMLSelectElement>) {
        setCredits(parseFloat(event.target.value));
    }
    return (
        <div>
            {" "}
            <Button onClick={() => setEdit(!edit)}>Edit</Button>
            {edit && (
                <>
                    <Form.Group controlId="code">
                        <Form.Label>Class Code:</Form.Label>
                        <Form.Control value={code} onChange={updateCode} />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Class Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Group controlId="credits">
                        <Form.Label>Session Season</Form.Label>
                        <Form.Select value={credits} onChange={updateCredits}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </Form.Select>
                    </Form.Group>
                    <Button
                        onClick={() =>
                            editClass(code, name, credits, previousCourse)
                        }
                    >
                        Confirm
                    </Button>
                </>
            )}
        </div>
    );
}

export function ClassPicker({
    semester,
    semesters
}: {
    semester: semester;
    semesters: semester[];
}): JSX.Element {
    const [classes, setClasses] = useState<course[]>(semester.courses);
    const [moving, setMoving] = useState<boolean>(false);
    function addClass(newCode: string, newName: string, newCredits: number) {
        const newClasses = [
            ...classes,
            {
                code: newCode,
                name: newName,
                prereqs: "None",
                credits: newCredits,
                taken: true
            }
        ];
        setClasses(newClasses);
    }
    function editClass(
        newCode: string,
        newName: string,
        newCredits: number,
        oldCourse: course
    ) {
        let newClasses: course[] = classes.filter(
            (Class: course): boolean => Class.code !== oldCourse.code
        );
        newClasses = [
            ...newClasses,
            {
                code: newCode,
                name: newName,
                prereqs: "None",
                credits: newCredits,
                taken: true
            }
        ];
        setClasses(newClasses);
    }
    function removeClass(codeFind: string) {
        const newClasses = classes.filter(
            (Class: course): boolean => Class.code !== codeFind
        );
        setClasses(newClasses);
    }
    function moveClass(newID: number, course: course) {
        if (newID !== semester.id) {
            for (let i = 0; i < semesters.length; i++) {
                if (semesters[i].id === newID) {
                    semesters[i].courses.push(course);
                }
            }
            removeClass(course.code);
        }
    }
    function clearClasses() {
        const newClasses: course[] = [];
        setClasses(newClasses);
    }
    return (
        <div>
            {classes.map(
                (course: course): JSX.Element => (
                    <p key={course.code}>
                        {" "}
                        {course.code} {course.name}
                        <EditClass
                            editClass={editClass}
                            previousCourse={course}
                        ></EditClass>
                        <Button onClick={() => setMoving(!moving)}>Move</Button>
                        {moving && (
                            <Form.Group controlId="semesters">
                                Pick a Semester to move to:
                                {semesters.map(
                                    (semester: semester): JSX.Element => (
                                        <p key={semester.session}>
                                            {" "}
                                            <Button
                                                onClick={() =>
                                                    moveClass(
                                                        semester.id,
                                                        course
                                                    )
                                                }
                                            >
                                                {semester.session}{" "}
                                                {semester.year}
                                            </Button>
                                        </p>
                                    )
                                )}{" "}
                            </Form.Group>
                        )}
                        <Button onClick={() => removeClass(course.code)}>
                            Delete
                        </Button>
                    </p>
                )
            )}{" "}
            <AddClass addClass={addClass}></AddClass>
            <Button onClick={() => clearClasses()}>Clear Courses</Button>
        </div>
    );
}
