import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function DegreePlan(): JSX.Element {
    const [name, setName] = useState<string>("test");
    function degreeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="degreeName">
                <Form.Label>Plan Name</Form.Label>
                <Form.Control value={name} onChange={degreeName}></Form.Control>
            </Form.Group>
        </div>
    );
}
