import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
//import { semester } from "../Interfaces/semester";
import { degree } from "../Interfaces/plan";
//import { CourseList } from "./courseListRead";

export function PlanEditor({
    changeEditing,
    plan,
    editPlan,
    deletePlan
}: {
    changeEditing: () => void;
    plan: degree;
    editPlan: (id: number, newPlan: degree) => void;
    deletePlan: (id: string) => void;
}): JSX.Element {
    //const [currentPlan, setCurrentPlan] = useState<string>(plan.name);
    const [name, setName] = useState<string>(plan.name);

    function save() {
        editPlan(plan.id, {
            ...plan,
            name: name
        });
        changeEditing();
    }

    function close() {
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="name">
                        <Form.Label>Plan Name</Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={close} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deletePlan(plan.id.toString())}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
