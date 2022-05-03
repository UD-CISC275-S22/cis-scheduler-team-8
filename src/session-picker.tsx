import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { semester } from "./Interfaces/semester";
import { ClassPicker } from "./class-picker";

interface PassNewSemester {
    addSemester: (n: string, r: string) => void;
}

const starting_semester: semester[] = [
    { id: 1, session: "Fall", year: "2022", courses: [] }
];
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function AddSession({ addSemester }: PassNewSemester): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [currentSession, setCurrentSession] = useState<string>("Fall");
    const [year, setYear] = useState<string>("2022");
    function updateSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentSession(event.target.value);
    }
    function updateYear(event: ChangeEvent) {
        setYear(event.target.value);
    }
    return (
        <div>
            {edit && (
                <Form.Group controlId="sessions">
                    <Form.Label>Session Season</Form.Label>
                    <Form.Select
                        value={currentSession}
                        onChange={updateSemester}
                    >
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                    </Form.Select>
                </Form.Group>
            )}
            {edit && (
                <Form.Group controlId="year">
                    <Form.Label>Session Year</Form.Label>
                    <Form.Control value={year} onChange={updateYear} />
                </Form.Group>
            )}
            {edit && (
                <Button onClick={() => addSemester(currentSession, year)}>
                    Confirm
                </Button>
            )}
            <div>
                <Button onClick={() => setEdit(!edit)}>Add Semester</Button>
            </div>
        </div>
    );
}
export function SessionPicker(): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>(starting_semester);
    const [semesterNum, setNum] = useState<number>(2);
    function addSemester(newSession: string, newYear: string) {
        const newSemesters = [
            ...semesters,
            { id: semesterNum, session: newSession, year: newYear, courses: [] }
        ];
        updateNum();
        setSemesters(newSemesters);
    }
    function updateNum() {
        const newNum = semesterNum + 1;
        setNum(newNum);
    }
    function changeSemester(semesterName: string, semesterYear: string) {
        /*Fix*/
        const newSemesters = semesters.map(
            (semester: semester): semester =>
                semester.session === semesterName &&
                semester.year === semesterYear
                    ? { ...semester }
                    : { ...semester }
        );
        setSemesters(newSemesters);
    }
    function removeSemester(idfind: number) {
        const newSemesters = semesters.filter(
            (Session: semester): boolean => Session.id != idfind
        );
        setSemesters(newSemesters);
    }
    function clearSemesters() {
        const newSemesters: semester[] = [];
        setSemesters(newSemesters);
    }
    return (
        <div className="useSession">
            {semesters.map(
                (semester: semester): JSX.Element => (
                    <p key={semester.session}>
                        {" "}
                        {semester.session} {semester.year}
                        <Button
                            onClick={() =>
                                changeSemester(semester.session, semester.year)
                            }
                        >
                            Edit
                        </Button>
                        <Button onClick={() => removeSemester(semester.id)}>
                            Delete
                        </Button>
                        <ClassPicker></ClassPicker>
                    </p>
                )
            )}{" "}
            <br></br>
            <AddSession addSemester={addSemester}></AddSession>
            <Button onClick={() => clearSemesters()}>Clear Semesters</Button>
        </div>
    );
}
