import React from "react";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// import Portfolio from "./Pages/Portfolio";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import loadable from "@loadable/component";

const Contact = loadable(() => import("./Pages/Contact"));
const About = loadable(() => import("./Pages/About"));
const Portfolio = loadable(() => import("./Pages/Portfolio"));
const Home = loadable(() => import("./Pages/Home"));
const Login = loadable(() => import("./Pages/Login"));

const Pages = () => {
    let location = useLocation();

    const transitions = useTransition(
        location,
        (location) => location.pathname,
        {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        }
    );

    return (
        <div className="app-content">
            <div className="curtain"></div>
            <div className="top-bg">
                <div className="bg-overlay"></div>
            </div>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route path="/contact" exact>
                            <Contact />
                        </Route>
                        <Route path="/about" exact>
                            <About />
                        </Route>
                        <Route path="/portfolio" exact>
                            <Portfolio />
                        </Route>
                        <Route path="/login" exact>
                            <Login />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </animated.div>
            ))}
        </div>
    );
};
export default Pages;
