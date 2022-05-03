import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { course } from "./Interfaces/course";
import testData from "./Data/courseData1.json";

interface PassNewClass {
    addClass: (n: string, r: string, s: number) => void;
}

//const starting_class: course[] = testData;

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
export function ClassPicker({
    intialClass
}: {
    intialClass: course[];
}): JSX.Element {
    const [classes, setClasses] = useState<course[]>(intialClass);
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
    function editClass(codeFind: string) {
        const newClasses = classes.filter(
            (Class: course): boolean => Class.code !== codeFind
        );
        setClasses(newClasses);
    }
    return (
        <div>
            <table className="edit-table">
                <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                </tr>
                {classes.map(
                    (course: course): JSX.Element => (
                        <tr key={course.code}>
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                            <td>
                                <Button onClick={() => editClass(course.code)}>
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() => removeClass(course.code)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                )}
            </table>
            <AddClass addClass={addClass}></AddClass>
        </div>
    );
}
