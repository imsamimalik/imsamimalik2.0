import { useState } from "react";
import Sidebar from "./Sidebar";
import MenuBar from "./MenuBar";
import Pages from "./Pages";
import Darkmode from "./Components/Darkmode";

function App() {
    const [loaded, setLoaded] = useState(false);
    window.onload = () => {
        if (document.readyState === "complete") {
            document.body.classList.add("loaded");
            setLoaded(true);
        }
    };

    return (
        <>
            <div className="mobile-Topbar"></div>
            <div className="app-wrapper">
                <div className="app-container">
                    <Sidebar loaded={loaded} />
                    <MenuBar />
                    <Pages />
                </div>
            </div>
            <Darkmode></Darkmode>
        </>
    );
}

export default App;
