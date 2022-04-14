import React from "react";
import "./App.css";
import "./interfaces.ts";
import { SessionPicker } from "./session-picker";

function App(): JSX.Element {
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
        </div>
    );
}

export default App;
