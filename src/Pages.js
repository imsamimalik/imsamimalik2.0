import React from "react";
import Contact from "./Pages/Contact";
import History from "./Pages/History";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import { Route, Switch } from "react-router-dom";

const Pages = () => {
    return (
        <div className="app-content">
            <div className="curtain"></div>
            <div className="top-bg">
                <div className="bg-overlay"></div>
            </div>
            <Switch>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
                <Route path="/history" exact>
                    <History />
                </Route>
                <Route path="/portfolio" exact>
                    <Portfolio />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};
export default Pages;
