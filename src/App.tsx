import React from "react";
import "./App.css";
import "./interfaces.ts";
/*import { SessionPicker } from "./session-picker";*/

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript<br></br>
                Nick Costley<br></br>
                Marvin Dang<br></br>
                Rohan Yarlagadda<br></br>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            {/*<SessionPicker></SessionPicker>;*/}
        </div>
    );
}

export default App;