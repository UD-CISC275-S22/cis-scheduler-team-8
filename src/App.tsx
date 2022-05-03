import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "./interfaces.ts";
import testData from "./Data/courseData1.json";
import testData2 from "./Data/courseData2.json";
import { ModalView } from "./Components/modalView";
import { SemesterView } from "./Components/semesterView";
import { SessionPicker } from "./session-picker";
import { DegreePlan } from "./degree-plan";

//export const DEFAULTS = defaults.map((plan): Plan => ({ ...plan }));
function App(): JSX.Element {
    //const handleCloseAddModal = () => setShowAddModal(false);
    //const handleShowAddModal = () => setShowAddModal(true);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);
    //const[(plans, setPlans)] = useState<Plan[]>(DEFAULTS);

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
            <DegreePlan></DegreePlan>
            <SessionPicker></SessionPicker>
            <div>
                <header>Switching plans</header>
            </div>
            <SemesterView course={testData}></SemesterView>
            <div>
                <Button onClick={handleOpenModal}>edit</Button>
                <ModalView
                    show={showModal}
                    handleClose={handleCloseModal}
                    data={testData}
                ></ModalView>
            </div>
            <SemesterView course={testData2}></SemesterView>
            <div>
                <Button onClick={handleOpenModal}>edit</Button>
                <ModalView
                    show={showModal}
                    handleClose={handleCloseModal}
                    data={testData2}
                ></ModalView>
            </div>
        </div>
    );
}

export default App;
