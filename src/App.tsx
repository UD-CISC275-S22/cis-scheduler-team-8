import React from "react";
import "./App.css";
import "./interfaces.ts";
import { SessionPicker } from "./session-picker";
import testData from "./Data/courseData.json";
import { CourseTable } from "./Components/courseTable";
import { editSemesterWindow } from "./Components/editSemesterWindow";
//import { SemesterTable } from "./Components/semesterTable";

function App(): JSX.Element {
    const handleCloseEditSem = () => setShowAddDegree(false);
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
            <Button onClick={handleAddPlan}>Create New Degree Plan</Button>
            <editSemesterWindow course={testData}></editSemesterWindow>;
        </div>
    );
}

export default App;
