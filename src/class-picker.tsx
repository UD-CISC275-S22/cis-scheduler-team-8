import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { course } from "./Interfaces/course";

interface PassNewClass {
    addClass: (n: string, r: string, s: number) => void;
}
interface EditNewClass {
    editClass: (n: string, r: string, s: number) => void;
}

const starting_class: course[] = [
    {
        code: "CISC108",
        name: "Introduction to Computer Science I",
        prereqs: "None",
        credits: 4,
        taken: true
    }
];

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
export function EditClass(
    { editClass }: EditNewClass,
    newCode: string,
    newName: string,
    newCredits: number
): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [code, setCode] = useState<string>(newCode);
    const [name, setName] = useState<string>(newName);
    const [credits, setCredits] = useState<number>(newCredits);
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
                    <Form.Label>Credits</Form.Label>
                    <Form.Select value={credits} onChange={updateCredits}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </Form.Select>
                </Form.Group>
            )}
            {edit && (
                <Button onClick={() => editClass(code, name, credits)}>
                    Confirm
                </Button>
            )}
            <Button onClick={() => setEdit(!edit)}>Edit</Button>
        </div>
    );
}

export function ClassPicker(): JSX.Element {
    const [classes, setClasses] = useState<course[]>(starting_class);
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
    function removeClass(codeFind: string) {
        const newClasses = classes.filter(
            (Class: course): boolean => Class.code !== codeFind
        );
        setClasses(newClasses);
    }
    function editClass(newCode: string, newName: string, newCredits: number) {
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
                            editClass={() =>
                                editClass(
                                    course.code,
                                    course.name,
                                    course.credits
                                )
                            }
                        ></EditClass>
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
