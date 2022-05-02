import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SessionPicker } from "./session-picker";
import { degree } from "./interfaces";

export function DegreePlan(): JSX.Element {
    // ask how to use interfaces!
    const [name, setName] = useState<string>("Plan");
    const [visible, setVisible] = useState<boolean>(false);
    const [semVisible, setSemVisible] = useState<boolean>(false);
    const plans = ["Degree Plan"];
    return (
        <div>
            <Button onClick={() => <SessionPicker></SessionPicker>}>
                Add Plan
            </Button>
            <Form.Group controlId="degreeName">
                <Form.Label>Plan Name</Form.Label>
                <Form.Control
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    ) => setName(event.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button onClick={() => setSemVisible(true)}>Add Semester</Button>
        </div>
    );
}