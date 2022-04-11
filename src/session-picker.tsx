import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function SessionPicker(): JSX.Element {
    const [session, setSession] = useState<string>("Semester");
    function updateSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        setSession(event.target.value);
    }
    return (
        <div>
            {" "}
            <Form.Group controlId="sessions">
                <Form.Label>Semesters</Form.Label>
                <Form.Select value={session} onChange={updateSemester}>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
