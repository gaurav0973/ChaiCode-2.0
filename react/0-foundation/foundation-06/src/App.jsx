import { useState } from "react";

import "./App.css";
import HookForm from "./HookForm";
import ManualForm from "./ManualForm";

function App() {
    const [tab, setTab] = useState("manual");

    return (
        <>
            <div>
                <div className="shell">
                    <h1>Form Handling in React</h1>
                </div>
                <div className="tab">
                    <button onClick={() => setTab("manual")}>
                        Controlled - Manual
                    </button>
                    <br />
                    <button onClick={() => setTab("rhf")}>
                        React hook form
                    </button>
                </div>
                <h3>A simple file handling form</h3>
                {tab === "manual" ? <ManualForm /> : <HookForm />}
            </div>
        </>
    );
}

export default App;
