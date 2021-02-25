import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function App() {
    const [loaded, setLoaded] = useState(false);
    window.onload = () => {
        if (document.readyState == "complete") {
            document.body.classList.add("loaded");
            setLoaded(true);
        }
    };

    return (
        <>
            <div className="mobile-Topbar"></div>
            <Sidebar loaded={loaded} />
        </>
    );
}

export default App;
