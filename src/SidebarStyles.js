import styled from "styled-components";
import { Icon } from "react-icons-kit";

export const Infobar = styled.div`
    position: fixed !important;
    background: #20202a;
    width: 290px;
    min-width: 290px;
    height: calc(100vh - 30px);
    position: relative;
    z-index: 999;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;
    padding: 0 15px;

    @media (max-width: 1032px) {
        height: 100vh !important;
        position: absolute;
        left: -290px;
        transform: ${(props) =>
            props.open ? "translateX(290px)" : "translateX(0px)"};
        width: 290px;
    }
`;

export const InfobarFrame = styled.div`
    padding: 0 15px;
`;

export const InfobarHeader = styled.div`
    width: 100%;
    height: 70px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999999999999;
    display: none;

    @media (max-width: 1032px) {
        display: flex;
    }
`;

export const InfobarBtn = styled.a`
    margin-left: auto;
    pointer-events: all;
    font-size: 14px;
    padding: 30px;

    @media (max-width: 1032px) {
        transform: ${(props) =>
            props.open ? "translateX(0px)" : "translateX(70px)"};
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
    }
`;

export const Header = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99999;
    width: 100%;
    padding: 30px;
    height: 235px;
    background: linear-gradient(
        159deg,
        rgba(37, 37, 50, 0.98) 0%,
        rgba(35, 35, 45, 0.98) 100%
    );
    text-align: center;
    -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
`;

export const Avatar = styled.div`
    width: 90px;
    height: 90px;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
    margin-bottom: 15px;
`;

export const AvatarCurtain = styled.span`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: inherit;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    z-index: 0;
    user-select: none;
    :hover i {
        opacity: 0.7;
    }
`;

export const AvatarCurtainImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
    z-index: 0;
`;

export const AvatarCurtainExpand = styled(Icon)`
    background: linear-gradient(
        159deg,
        rgba(45, 45, 58, 0.88) 0%,
        rgba(43, 43, 53, 0.88) 100%
    );
    width: 30px;
    height: 30px;
    text-align: center;
    -ms-flex-item-align: center;
    align-self: center;
    font-weight: 700;
    font-size: 13px;
    line-height: 30px;
    color: #fafafc;
    border-radius: 50%;
    opacity: 0;
    z-index: 1;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    cursor: pointer;
`;

export const LampLight = styled.div`
    z-index: 2;

    :before {
        content: "";
        position: absolute;
        bottom: -1px;
        right: 1px;
        background: #fafafc;
        height: 23px;
        width: 23px;
        border-radius: 50%;
        -webkit-animation: puls 1s infinite;
        animation: pulse 1s infinite;
    }
`;

export const AvailableLamp = styled.div`
    background-color: var(--yellow);
    position: absolute;
    bottom: 3px;
    right: 5px;
    height: 15px;
    width: 15px;
    background: var(--yellow);
    border-radius: 50%;
    z-index: 0;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;

    :hover {
        -webkit-transform: scale(1);
        transform: scale(1);
        background: #4caf50;
        cursor: pointer;
    }

    :before {
        content: "";
        position: absolute;
        height: 5px;
        width: 5px;
        right: -15px;
        top: 5px;
        opacity: 0;
        background: #191923;
        pointer-events: none;
        -webkit-transform: translateX(20px) rotate(45deg);
        transform: translateX(20px) rotate(45deg);
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
        z-index: 99;
    }

    :hover:before {
        opacity: 1;
        -webkit-transform: translateX(0) rotate(45deg);
        transform: translateX(0) rotate(45deg);
    }

    :after {
        position: relative;
        content: "I am available for freelance hire";
        width: 115px;
        display: block;
        padding: 5px 10px;
        top: -10px;
        left: 28px;
        font-size: 10px;
        font-weight: 200;
        color: #cacace;
        -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
        box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
        background: #191923;
        opacity: 0;
        pointer-events: none;
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
        text-align: left;
    }

    :hover:after {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
`;

export const Name = styled.h5`
    color: #fafafc;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
`;

export const NameA = styled.a`
    color: #fafafc;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    text-decoration: none;

    :hover {
        color: var(--yellow);
    }
`;

export const SmText = styled.div`
    font-size: 13px;
`;

export const Scrollbar2 = styled.div`
    padding: 240px 0 50px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    width: 100%;
    height: calc(100vh - 30px);

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1032px) {
        height: 100vh;
    }
`;

export const TableUl = styled.ul`
    padding: 0;
    margin: 0;
`;

export const TableLi = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    :last-child {
        margin-bottom: 0;
    }
`;

export const LsDivider = styled.div`
    background: #8c8c8e;
    width: 100%;
    height: 1px;
    opacity: 0.3;
`;

export const LangSkills = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;

export const LangSkillsItem = styled.div`
    width: 33.33333%;
    text-align: center;
    margin-bottom: 15px;
`;

export const CircleProgress = styled.div`
    position: relative;
    width: 65%;
    margin: 0 auto 15px;
`;

export const ProgressbarText = styled.div`
    font-size: 13px;
    color: #cacace !important;
    position: absolute;
    left: 45%;
    top: 50%;
    padding: 0px;
    margin: 0px;
    transform: translate(-50%, -50%);
    color: rgb(85, 85, 85);

    :after {
        content: "%";
        position: absolute;
        right: -7px;
    }
`;

export const SVG = styled.svg`
    width: 100%;
    height: 100%;
    display: block;

    path:first-child {
        stroke: #191923;
    }
    path:last-child {
        stroke: var(--yellow);
    }
`;

export const HardSkillsItem = styled.div`
    margin-bottom: 15px;
    position: relative;
`;

export const SkillHeading = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;

export const LineProgress = styled.div`
    width: 100%;
`;

export const SkillsProgressText = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: right;
    top: 50%;
    font-size: 13px;
    color: #cacace !important;
`;

export const KnowledgeList = styled.ul`
    padding-left: 0;
    margin-bottom: 1rem;
    li {
        list-style-type: none;
        margin-bottom: 5px;
        color: #8c8c8e;
        :before {
            content: "✓";
            font-weight: 900;
            margin-right: 5px;
            font-size: 9px;
            color: var(--yellow);
            margin-right: 10px;
        }
    }
`;

export const LinksFrame = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const Socials = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 35px;
    height: 50px;
    background: linear-gradient(
        159deg,
        rgba(37, 37, 50, 0.98) 0%,
        rgba(35, 35, 45, 0.98) 100%
    );
    position: absolute;
    bottom: 0;
    -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    left: 0;
    width: 100%;
    z-index: 999;
    a {
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
    }
`;
