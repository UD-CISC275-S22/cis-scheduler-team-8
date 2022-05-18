import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { SemesterList } from "./SemesterList";
import { AddSemesterModal } from "./AddSemester";

import { degree } from "../Interfaces/plan";
import { semester } from "../Interfaces/semester";

export function PlanView({
    plan,
    editPlan,
    deletePlan
}: {
    plan: degree;
    editPlan: (id: number, newDegree: degree) => void;
    deletePlan: (id: string) => void;
    /*
    deleteDegree: (id: string) => void;
    editDegree: (id: number, newDegree: degree) => void;
    */
}): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);
    const [semesters, setSemesters] = useState<semester[]>(plan.semesters);

    function editSemester(id: number, newSemester: semester) {
        setSemesters(
            semesters.map(
                (semester: semester): semester =>
                    semester.id === id ? newSemester : semester
            )
        );
    }

    function deleteSemester(id: string) {
        setSemesters(
            semesters.filter(
                (semester: semester): boolean => semester.id.toString() !== id
            )
        );
    }
    function addSemester(newSemester: semester) {
        setSemesters([...semesters, newSemester]);
    }
    //handlers for opening and closing addCourseModal
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div className="App">
            <br></br>
            <div>
                <SemesterList
                    semesters={semesters}
                    deleteSemester={deleteSemester}
                    editSemester={editSemester}
                ></SemesterList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    +
                </Button>
                <AddSemesterModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addSemester={addSemester}
                ></AddSemesterModal>
            </div>
            <br></br>
        </div>
    );
}
