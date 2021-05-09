import { useState, useEffect } from "react";
import { sunO } from "react-icons-kit/fa/sunO";
import { moonO } from "react-icons-kit/fa/moonO";
import styled from "styled-components";
import { Icon } from "react-icons-kit";

const detectColorScheme = () => {
    let theme = "dark";
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") === "light") {
            theme = "light";
        }
    } else if (!window.matchMedia) {
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        theme = "light";
    }

    theme === "light"
        ? document.querySelector("html").classList.add("dark")
        : document.querySelector("html").classList.remove("dark");
};

const Darkmode = () => {
    const [dark, setDark] = useState(false);
    const handleClick = () => {
        setDark((prev) => !prev);
        localStorage.setItem("theme", dark ? "dark" : "light");
    };

    useEffect(() => {
        detectColorScheme();
        setDark(true ? localStorage.getItem("theme") === "light" : false);
    }, [dark]);

    return (
        <Dark onClick={handleClick}>
            {dark ? <Icon icon={moonO}></Icon> : <Icon icon={sunO}></Icon>}
        </Dark>
    );
};

export default Darkmode;

const Dark = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--main);
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99999;
    display: grid;
    place-items: center;
    cursor: pointer;
    filter: brightness(75%);
    transition: 300ms all ease-in-out;
    :hover {
        filter: brightness(100%);
        transition: 300ms all ease-in-out;
    }
    i {
        color: #fff;
        transform: scale(1.6);
    }
    @media (max-width: 550px) {
        transform: scale(0.8);
        bottom: 10px;
        right: 10px;
    }
`;
