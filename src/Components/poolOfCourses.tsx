import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { degree } from "../Interfaces/plan";
import { semester } from "../Interfaces/semester";
import catalog from "../Data/catalog.json";
import "../App.css";

const defaultkeys = Object.keys(catalog.CISC);
const allkeys = Object.keys(catalog);

export function Pool({ plan }: { plan: degree }): JSX.Element {
    const [keys, setKeys] = useState<string[]>(defaultkeys);
    const [semester, setSemester] = useState<semester>(plan.semesters[0]);
    const [edit, setEdit] = useState<boolean>(false);
    function updateKeys() {
        setKeys(defaultkeys);
    }
    function addClass() {
        const newClasses = [...plan.semesters[0].courses];
        plan.semesters[0].courses = newClasses;
    }
    function updateSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        for (let i = 0; i < plan.semesters.length; i++) {
            if (plan.semesters[i].session == event.target.value) {
                setSemester(plan.semesters[i]);
            }
        }
    }
    return (
        <div>
            <Button onClick={() => setEdit(!edit)}>
                Show/Hide Pool of Courses
            </Button>
            {edit && (
                <div>
                    Pick a course code (Ex. CISC, ACCT)
                    <Form.Select value={keys} onChange={updateKeys}>
                        {allkeys.map((item) => {
                            return (
                                <option key={item} value={item}>
                                    {" "}
                                    {item}{" "}
                                </option>
                            );
                        })}
                    </Form.Select>
                    Semester to Add to:
                    <br></br>
                    Current Semester: {semester.session} {semester.year}
                    {plan.semesters.map(
                        (semester: semester): JSX.Element => (
                            <p key={semester.session}>
                                <Button onClick={() => updateSemester}>
                                    {semester.session} {semester.year}
                                </Button>
                            </p>
                        )
                    )}
                    <div className="poolOfCourses">
                        {keys.map(
                            (classKey: string): JSX.Element => (
                                <p key={classKey}>
                                    {classKey}
                                    <br></br>
                                    <Button onClick={() => addClass()}>
                                        Add Course
                                    </Button>
                                </p>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
