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
        background: #fafafc;
        position: absolute;
        top: 4px;
        right: -4px;
        width: 23px;
        height: 23px;
        opacity: 0;
        border-radius: 50%;
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
    }
    .timeline-mark {
        position: absolute;
        top: 8px;
        right: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: solid 3px var(--yellow);
        background: #1e1e28;
        -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
        box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    }

    .timeline-content {
        position: relative;
        margin-right: 45px;
        background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
        padding: 30px;
        margin-bottom: 30px;
        -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
        box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);

        .card-header {
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            .el-suptitle {
                margin-top: 5px;
                color: #8c8c8e;
                font-style: italic;
                font-size: 12px;
            }
            .date {
                margin-left: auto;
                background: #20202a;
                padding: 5px 15px;
                border-radius: 15px;
                -webkit-box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
                box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
                font-size: 12px;
            }
        }
        .el-description {
            margin-bottom: 1rem;
        }
    }
`;
