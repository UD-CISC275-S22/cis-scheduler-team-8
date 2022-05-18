import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { degree } from "../Interfaces/plan";
//import { semester } from "./Interfaces/semester";

export function AddPlan({
    show,
    handleClose,
    addDegree
}: {
    show: boolean;
    handleClose: () => void;
    addDegree: (newDegree: degree) => void;
}) {
    const [id, setId] = useState<number>(0);
    //const [semesters, setSemesters] = useState<semester[]>([]);

    function savePlan() {
        addDegree({
            id: id,
            name: "",
            semesters: []
        });
        handleClose();
        setId(id + 1);
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title> Add Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>New Semester</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={savePlan}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
