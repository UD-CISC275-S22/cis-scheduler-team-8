import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "./interfaces.ts";

//interfaces
import { semester } from "./Interfaces/semester";

//data
import sampleSemester from "./Data/sampleSemester.json";

//components
//import { DegreePlan } from "./degree-plan";
import { SemesterList } from "./Components/SemesterList";
import { AddSemesterModal } from "./Components/AddSemester";

const SEMESTER = sampleSemester.map((semester: semester) => ({ ...semester }));

function App(): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>(SEMESTER);

    const [showAddModal, setShowAddModal] = useState(false);

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
            <header className="App-header">
                UD CIS Scheduler<br></br>
            </header>
            <div className="Welcome-message">
                <p>
                    Welcome to our CISC Course Planner! On this website, you can
                    create plans for your degree. <br></br>
                    Customize your plan with a list of semesters, and each
                    semester consists of a list of courses. <br></br>
                </p>
            </div>
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

export default App;
