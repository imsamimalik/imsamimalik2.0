import styled from "styled-components";

export const Timeline = styled.div`
    position: relative;
    :before {
        content: "";
        position: absolute;
        top: 10px;
        right: 5px;
        height: calc(100% - 10px);
        width: 5px;
        background: #191923;
    }
    .timeline-item {
        position: relative;
    }
    .timeline-mark-light {
        background: var(--dark-white);
        position: absolute;
        top: 4px;
        right: -4px;
        width: 23px;
        height: 23px;
        opacity: 0;
        border-radius: 50%;
        transition: 0.4s ease-in-out;
    }
    .timeline-mark {
        position: absolute;
        top: 8px;
        right: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: solid 3px var(--main);
        background: var(--dark-black);
        box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    }

    .timeline-content {
        position: relative;
        margin-right: 45px;
        background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
        padding: 30px;
        margin-bottom: 30px;
        box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);

        .card-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .el-suptitle {
                margin-top: 5px;
                color: var(--dark-global-text);
                font-style: italic;
                font-size: 12px;
            }
            .date {
                margin-left: auto;
                background: var(--dark-black-background);
                padding: 5px 15px;
                border-radius: 15px;
                box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
                font-size: 12px;
            }
        }
        .el-description {
            margin-bottom: 1rem;
        }
    }
`;
export const Intro = styled.div`
    p {
        font-size: 16px;
        line-height: 1.6;
        padding: 0 25px;
        @media (max-width: 550px) {
            padding: 0;
        }
        .highlight {
            color: var(--main);
        }
    }
    ul.socials {
        list-style: none;
        margin-left: 10px;
        margin-top: 15px;
        padding: 0 25px;
        font-size: 16px;
        line-height: 1.6;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        @media (max-width: 990px) {
            flex-direction: column;
        }

        li {
            line-height: 1.6;
            a:hover {
                color: var(--main);
            }
        }
    }
`;
