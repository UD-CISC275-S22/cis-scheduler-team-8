import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SessionPicker } from "./session-picker";

export function DegreePlan(): JSX.Element {
    const [name, setName] = useState<string>("Plan");
    const [visible, setVisible] = useState<boolean>(false);
    const [semVisible, setSemVisible] = useState<boolean>(false);
    if (visible && semVisible) {
        return (
            <div>
                <Button onClick={() => setVisible(true)}>Add Plan</Button>
                <Form.Group controlId="degreeName">
                    <Form.Label>Plan Name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button onClick={() => setSemVisible(true)}>
                    Add Semester
                </Button>
                <SessionPicker></SessionPicker>
                {/* <Button onClick={() =>}>Save</Button> */}
            </div>
        );
    } else if (visible) {
        return (
            <div>
                <Button onClick={() => setVisible(true)}>Add Plan</Button>
                <Form.Group controlId="degreeName">
                    <Form.Label>Plan Name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button onClick={() => setSemVisible(true)}>
                    Add Semester
                </Button>
                {/* <Button onClick={() =>}>Save</Button> */}
            </div>
        );
    } else {
        return (
            <div>
                <Button onClick={() => setVisible(true)}>Add Plan</Button>
            </div>
        );
    }
}
