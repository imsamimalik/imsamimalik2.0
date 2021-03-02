import styled from "styled-components";

export const MenubarContainer = styled.div`
    position: absolute;
    right: 0;
    width: ${(props) => (props.active ? "150px" : "80px")};
    transition: 0.55s ease-in-out;
    height: calc(100vh - 30px);

    @media (max-width: 1032px) {
        right: -80px;
        transition: 0.55s ease-in-out;
    }
`;
export const Menubar = styled.div`
    background: #20202a;
    height: calc(100vh - 30px);
    z-index: 999;
    right: -150px;
    position: fixed;
    top: auto;
    bottom: auto;
    right: auto;
    width: ${(props) => (props.active ? "230px" : "80px")};
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;
    transform: ${(props) =>
        props.active ? "translateX(-80px)" : "translateX(0px)"};

    a:first-child {
        visibility: visible;
        opacity: 1;
        display: block;
    }

    @media (max-width: 1032px) {
        height: 100vh !important;
        transform: ${(props) =>
            props.active ? "translateX(-150px)" : "translateX(0px)"};
    }
`;

export const MenubarFrame = styled.div`
    position: relative;
`;

export const MenubarHeader = styled.div`
    width: 100%;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    background: linear-gradient(
        159deg,
        rgba(37, 37, 50, 0.98) 0%,
        rgba(35, 35, 45, 0.98) 100%
    );
`;

export const MenubarBtn = styled.span`
    pointer-events: all;
    cursor: pointer;
    margin-top: -10px;
    display: inline-block;
    width: 15px;
    height: 12px;
    padding: 30px;

    @media (max-width: 1032px) {
        -webkit-transform: ${(props) =>
            props.active ? "translateX(0px)" : "translateX(-80px)"};
        transform: ${(props) =>
            props.active ? "translateX(0px)" : "translateX(-80px)"};
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
    }

    span {
        background: #8c8c8e;
        position: relative;
        margin: 5px 0 0;
        content: "";
        display: block;
        width: 15px;
        height: 3px;
        border-radius: 1px;
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;

        :before {
            background: #8c8c8e;
            position: absolute;
            top: -5px;
            content: "";
            display: block;
            width: 15px;
            height: 3px;
            border-radius: 1px;
            -webkit-transition: 0.4s ease-in-out;
            transition: 0.4s ease-in-out;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
        :after {
            background: #8c8c8e;
            position: absolute;
            top: 5px;
            content: "";
            display: block;
            width: 15px;
            height: 3px;
            border-radius: 1px;
            -webkit-transition: 0.4s ease-in-out;
            transition: 0.4s ease-in-out;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
    }
`;

export const MenubarCurrent = styled.span`
    width: 200px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    color: #fafafc;
    position: absolute;
    overflow: hidden;
    top: 200px;
    opacity: 1;
    left: -62px;
    text-transform: uppercase;
    font-size: 13px;
    opacity: 1;
    letter-spacing: 1px;
    font-weight: 500;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    span {
        color: #8c8c8e;
    }
`;

export const Scrollframe = styled.div`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    width: 100%;
    height: calc(100vh - 30px);
`;

export const Nav = styled.nav`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    position: relative;
    overflow: hidden;
`;

export const NavUl = styled.ul`
    pointer-events: auto;
    color: #8c8c8e;
    min-width: 230px;
    width: 100%;
    padding: 0;
    margin: 0 0 60px;
`;

export const NavLi = styled.li`
    width: 100%;
    list-style-type: none;
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;
    opacity: ${(props) => (props.active ? "1" : "0")};
    -webkit-transform: ${(props) =>
        props.active ? "translateX(0px)" : "translateX(60px)"};
    transform: ${(props) =>
        props.active ? "translateX(0px)" : "translateX(60px)"};
    transition: 0.55s ease-in-out;
    transition-delay: ${(props) => props.delay + "s"};
    a {
        padding: 17px 30px;
        display: inline-block;
        width: 100%;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1px;
        font-weight: ${(props) => (props.current ? "600" : "500")};
        color: ${(props) => (props.current ? "#fafafc" : "#8c8c8e")};
        text-shadow: ${(props) =>
            props.current
                ? "0 0 3px rgb(250 250 252 / 40%)"
                : "0 0 0 rgb(250 250 252 / 40%)"};
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
    }
`;