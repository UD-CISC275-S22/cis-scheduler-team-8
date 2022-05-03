import React, { useState } from "react";
import { Button, Modal, Form, Row, Col, Container } from "react-bootstrap";
import { CourseTable } from "../Components/courseTable";
import { course } from "../Interfaces/course";
//import { CourseEditor } from "../Components/courseEditor";
import { SessionPicker } from "../session-picker";
import { ClassPicker } from "../class-picker";

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
        <div className="modal-lg" role="document">
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Semesters
                    <ClassPicker intialClass={data}></ClassPicker>
                </Modal.Body>
            </Modal>
        </div>
    );
}
