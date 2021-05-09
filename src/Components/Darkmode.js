import { useState, useEffect } from "react";
import { sunO } from "react-icons-kit/fa/sunO";
import { moonO } from "react-icons-kit/fa/moonO";
import styled from "styled-components";
import { Icon } from "react-icons-kit";

const defaultDark = window.matchMedia("(prefers-color-scheme: light)").matches;

const Darkmode = () => {
    const [dark, setDark] = useState(defaultDark);
    const handleClick = () => {
        setDark((prev) => !prev);
    };

    useEffect(() => {
        dark
            ? document.querySelector("html").classList.add("dark")
            : document.querySelector("html").classList.remove("dark");
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
    bottom: 30px;
    right: 30px;
    z-index: 99999999999;
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
`;
