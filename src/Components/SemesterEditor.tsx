import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { semester } from "../Interfaces/semester";
//import { CourseList } from "./courseListRead";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester,
    deleteSemester
}: {
    changeEditing: () => void;
    semester: semester;
    editSemester: (id: number, newSemester: semester) => void;
    deleteSemester: (id: string) => void;
}): JSX.Element {
    const [currentSession, setCurrentSession] = useState<string>(
        semester.session
    );
    const [year, setYear] = useState<string>(semester.year);

    function save() {
        editSemester(semester.id, {
            ...semester,
            session: currentSession,
            year: year
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
                    <Form.Group controlId="sessions">
                        <Form.Label>Session</Form.Label>
                        <Col>
                            <Form.Select
                                value={currentSession}
                                onChange={() => setCurrentSession}
                            >
                                <option value="Fall">Fall</option>
                                <option value="Winter">Winter</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="year">
                        <Form.Label>Session Year</Form.Label>
                        <Col>
                            <Form.Control
                                value={year}
                                onChange={() => setYear}
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
                        onClick={() => deleteSemester(semester.id.toString())}
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
