import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { semester } from "./Interfaces/semester";
import { ClassPicker } from "./class-picker";
import { degree } from "./Interfaces/plan";

interface PassNewSemester {
    addSemester: (n: string, r: string) => void;
}
interface editSemester {
    editSession: (idfind: number, season: string, year: string) => void;
    previousSession: semester;
}
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
export function EditSession({
    editSession,
    previousSession
}: editSemester): JSX.Element {
    const [season, setSeason] = useState<string>(previousSession.session);
    const [year, setYear] = useState<string>(previousSession.year);
    const [edit, setEdit] = useState<boolean>(false);
    function updateSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        setSeason(event.target.value);
    }
    function updateYear(event: ChangeEvent) {
        setYear(event.target.value);
    }
    return (
        <div>
            <Button onClick={() => setEdit(!edit)}>Edit</Button>
            {edit && (
                <Form.Group controlId="sessions">
                    <Form.Label>Session Season</Form.Label>
                    <Form.Select value={season} onChange={updateSemester}>
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
                <Button
                    onClick={() =>
                        editSession(previousSession.id, season, year)
                    }
                >
                    Confirm
                </Button>
            )}
        </div>
    );
}
export function SessionPicker({ plan }: { plan: degree }): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>(plan.semester);
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
    function changeSemester(idfind: number, a: string, b: string) {
        /*I had to make these variable names small because prettier wouldn't let me
        Newseason = a, NewYear = b
        x = semester */
        const modifiedSemesters = semesters.map(
            (x: semester): semester =>
                idfind === x.id ? { ...x, session: a, year: b } : { ...x }
        );
        setSemesters(modifiedSemesters);
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
                        <EditSession
                            editSession={changeSemester}
                            previousSession={semester}
                        ></EditSession>
                        <Button onClick={() => removeSemester(semester.id)}>
                            Delete
                        </Button>
                        <ClassPicker
                            semester={semester}
                            semesters={semesters}
                        ></ClassPicker>
                    </p>
                )
            )}{" "}
            <br></br>
            <AddSession addSemester={addSemester}></AddSession>
            <Button onClick={() => clearSemesters()}>Clear Semesters</Button>
            <br></br>
        </div>
    );
}
