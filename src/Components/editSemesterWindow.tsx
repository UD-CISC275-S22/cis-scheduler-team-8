import React, { useState } from "react";
import { Button, Modal, Form, Row, Col, Container } from "react-bootstrap";
import { course } from "../Interfaces/course";
import { semester } from "../Interfaces/semester";

export function editSemesterWindow({
    show,
    handleClose,
    changeEditing,
    currentSemester,
    editSemester,
    //saveSemester,
    deleteSemester
}: {
    show: boolean;
    handleClose: () => void;
    changeEditing: () => void;
    currentSemester: semester;
    editSemester: (id: number, newSemester: semester) => void;
    deleteSemester: (id: number) => void;
}): JSX.Element {
    const [session, setSession] = useState<string>(currentSemester.session);
    const [year, setYear] = useState<string>(currentSemester.year);
    const [courses] = useState<course[]>(currentSemester.courses);

    function save() {
        editSemester(currentSemester.id, {
            id: currentSemester.id,
            session: session,
            year: year || "",
            courses: courses || []
        });
        changeEditing();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Form.Group controlID="formSession" as={Row}>
                                <Col>
                                    <Form.Label>Session:</Form.Label>
                                    <Form.Select
                                        value={session}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLSelectElement>
                                        ) => {
                                            setSession(event.target.value);
                                            console.log("Session edited");
                                        }}
                                    >
                                        <option value="Fall">Fall</option>
                                        <option value="Winter">Winter</option>
                                        <option value="Spring">Spring</option>
                                        <option value="Summer">Summer</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Label>Year:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={year}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            setYear(event.target.value);
                                            console.log("Year edited");
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Button
                            onClick={save}
                            variant="success"
                            className="me-4"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={() => deleteSemester(currentSemester.id)}
                            variant="danger"
                            className="me-8"
                        >
                            Delete
                        </Button>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}
