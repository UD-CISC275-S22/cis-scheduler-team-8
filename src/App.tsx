import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "./interfaces.ts";
import { SessionPicker } from "./session-picker";
import testData from "./Data/courseData.json";
import { CourseTable } from "./Components/courseTable";
import { ModalView } from "./Components/modalView";
//import { editSemesterWindow } from "./Components/editSemesterModal";
//import { SemesterTable } from "./Components/semesterTable";

function App(): JSX.Element {
    //const handleCloseAddModal = () => setShowAddModal(false);
    //const handleShowAddModal = () => setShowAddModal(true);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler<br></br>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Nick Costley, Marvin Dang, Rohan
                Yarlagadda
            </p>
            <SessionPicker></SessionPicker>;
            <CourseTable course={testData}></CourseTable>;
            <div>
                <Button onClick={handleOpenModal}>edit</Button>
                <ModalView
                    show={showModal}
                    handleClose={handleCloseModal}
                    data={testData}
                ></ModalView>
            </div>
        </div>
    );
}

export default App;
