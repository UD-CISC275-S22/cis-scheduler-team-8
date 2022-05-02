import React, { useState } from "react";
import { Button, Modal, Form, Row, Col, Container } from "react-bootstrap";
import { CourseTable } from "../Components/courseTable";
import { course } from "../Interfaces/course";

export function ModalView({
    show,
    handleClose,
    data
}: {
    show: boolean;
    handleClose: () => void;
    data: course[];
}): JSX.Element {
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Semesters
                    <CourseTable course={data}></CourseTable>
                </Modal.Body>
            </Modal>
        </div>
    );
}
