import React, { useState } from "react";
///import loadable from "@loadable/component";
import Sidebar from "./Sidebar";
import MenuBar from "./MenuBar";
import Pages from "./Pages";
// const Sidebar = loadable(() => import("./Sidebar"));
// const MenuBar = loadable(() => import("./MenuBar"));
// const Pages = loadable(() => import("./Pages"));

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
        </>
    );
}

export default App;
