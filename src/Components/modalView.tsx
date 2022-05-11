import React from "react";
import { Modal } from "react-bootstrap";
import { course } from "../Interfaces/course";
//import { CourseEditor } from "../Components/courseEditor";
//import { ClassPicker } from "../class-picker";

export function ModalView({
    show,
    handleClose
}: {
    show: boolean;
    data: course[];
    handleClose: () => void;
}): JSX.Element {
    return (
        <div className="modal-lg" role="document">
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>Semesters</Modal.Body>
            </Modal>
        </div>
    );
}
