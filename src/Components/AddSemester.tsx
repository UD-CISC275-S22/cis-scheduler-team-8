import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { semester } from "../Interfaces/semester";
import { course } from "../Interfaces/course";
import { AddCourses } from "./AddCourse";

export function AddSemesterModal({
    show,
    handleClose,
    addSemester
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newSemester: semester) => void;
}) {
    const [id, setId] = useState<number>(0);
    const [courses, setCourses] = useState<course[]>([]);

    function saveSemester() {
        addSemester({
            id: id,
            session: "",
            year: "",
            courses: courses
        });
        handleClose();
        setId(id + 1);
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title> Add Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddCourses
                    courses={courses}
                    setCourses={setCourses}
                ></AddCourses>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveSemester}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
