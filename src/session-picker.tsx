import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { session } from "./interfaces";

export function SessionPicker(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [session, setSession] = useState<string>("Fall");
    const [year, setYear] = useState<string>("2022");
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    function updateSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        setSession(event.target.value);
    }
    function updateYear(event: ChangeEvent) {
        setYear(event.target.value);
    }
    return (
        <div>
            {edit && (
                <Form.Group controlId="sessions">
                    <Form.Label>Session Season</Form.Label>
                    <Form.Select value={session} onChange={updateSemester}>
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
            <br></br>
            {session} {year}
            <div>
                <Form.Check
                    type="switch"
                    id="is-switch-on"
                    label="Edit"
                    checked={edit}
                    onChange={() => setEdit(!edit)}
                />
            </div>
        </div>
    );
}
