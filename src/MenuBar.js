import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
    MenubarContainer,
    Menubar,
    MenubarFrame,
    MenubarHeader,
    MenubarBtn,
    MenubarCurrent,
    Scrollframe,
    Nav,
    NavUl,
    NavLi,
} from "./MenuBarStyles";

const MenuBar = () => {
    let location = useLocation();

    const [active, setActive] = useState(false);
    const [current, setCurrent] = useState("Home");

    useEffect(() => {
        if (active) {
            document.querySelector(".curtain").classList.add("active");
            document.querySelector(".app-content").classList.add("active");
        } else {
            document.querySelector(".curtain").classList.remove("active");
            document.querySelector(".app-content").classList.remove("active");
        }
    }, [active]);

    const handleBtnClick = () => {
        setActive((prev) => !prev);
    };
    useEffect(() => {
        if (location.pathname.split("/")[1]) {
            setCurrent(location.pathname.split("/")[1]);
        } else {
            setCurrent("Home");
        }
    }, [location]);
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (e.target.matches(".curtain")) {
                setActive((prev) => !prev);
            }
        });
    }, [active]);

    return (
        <MenubarContainer active={active} className="menubar-container">
            <Menubar
                active={active}
                className={`menubar ${active ? "active" : ""}`}
            >
                <MenubarFrame className="menubar-frame">
                    <MenubarHeader className="menubar-header">
                        <MenubarBtn
                            active={active}
                            className={`menubar-btn ${active ? "active" : ""}`}
                            onClick={handleBtnClick}
                        >
                            <span></span>
                        </MenubarBtn>
                    </MenubarHeader>
                    <MenubarCurrent className="current-page">
                        <span>{current}</span>
                    </MenubarCurrent>
                    <Scrollframe className="scrollframe">
                        <Nav className="nav">
                            <NavUl className="main-menu">
                                <NavLi delay={0.05} active={active}>
                                    <NavLink
                                        exact
                                        activeClassName="selected"
                                        to="/"
                                        onClick={() =>
                                            setActive((prev) => !prev)
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </NavLi>
                                <NavLi
                                    delay={0.1}
                                    active={active}
                                    onClick={() => setActive((prev) => !prev)}
                                >
                                    <NavLink
                                        exact
                                        activeClassName="selected"
                                        to="/portfolio"
                                    >
                                        Portfolio
                                    </NavLink>
                                </NavLi>
                                <NavLi
                                    delay={0.15}
                                    active={active}
                                    onClick={() => setActive((prev) => !prev)}
                                >
                                    <NavLink
                                        exact
                                        activeClassName="selected"
                                        to="/history"
                                    >
                                        History
                                    </NavLink>
                                </NavLi>
                                <NavLi
                                    delay={0.2}
                                    active={active}
                                    onClick={() => setActive((prev) => !prev)}
                                >
                                    <NavLink
                                        exact
                                        activeClassName="selected"
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </NavLi>
                            </NavUl>
                        </Nav>
                    </Scrollframe>
                </MenubarFrame>
            </Menubar>
        </MenubarContainer>
    );
};
export default MenuBar;