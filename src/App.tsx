import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "./interfaces.ts";

//interfaces
import { semester } from "./Interfaces/semester";
import { degree } from "./Interfaces/plan";

//data
import samplePlan from "./Data/samplePlan.json";

//components
//import { DegreePlan } from "./degree-plan";
import { PlanList } from "./Components/PlanList";
import { AddPlan } from "./Components/AddPlan";
import { Pool } from "./Components/poolOfCourses";

const PLAN = samplePlan.map(
    (plan): degree => ({
        ...plan,
        semesters: plan.semesters.map((semester): semester => ({ ...semester }))
    })
);

function App(): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);
    //handlers for opening and closing addCourseModal
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    //Selecting and Adding Plan
    const [plans, setPlans] = useState<degree[]>(PLAN);

    function addPlan(newPlan: degree) {
        setPlans([...plans, newPlan]);
    }

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
            <div className="Classes">
                <header className="Class-header">CISC Reqirements</header>
                <p>
                    Requirements: CISC 108 (3), CISC 181 (3), CISC 210 (3), CISC
                    220 (3), CISC 260 (3), CISC 275 (3),<br></br> CISC 303 (3),
                    CISC 304 CISC 304 (3), CISC 320 (3), CISC 355 (3), CISC 361
                    (3), CISC 372 (3), 372 (3), EGGG 101 (3), ENGL 110 (3), ENGL
                    410 (3), 410 (3), MATH 205 (4), MATH 210 (3), MATH 241 (4),
                    MATH 242
                    <br></br>
                </p>
            </div>
            <div className="Requirements">
                <p>
                    Requirements: <br></br>Mathematics, Natural Sciences and
                    Technology Credits: 3 <br></br>Creative Arts and Humanities
                    Credits: 3 <br></br>Social and Behavioral Sciences Credits:
                    3 <br></br>History and Cultural Change Credits: 3 Technical
                    Elective Credits: 12 <br></br>Multicultural Credits: 3{" "}
                    <br></br>Total Credits Needed: 124
                    <br></br>
                </p>
            </div>
            <br></br>
            <div>
                <PlanList plans={plans}></PlanList>
                <Button onClick={handleShowAddModal}>
                    Create New Degree Plan
                </Button>
                <AddPlan
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addDegree={addPlan}
                ></AddPlan>
                <br></br>
                <Pool plan={plans[0]}></Pool>
            </div>
        </div>
    );
}

export default App;
