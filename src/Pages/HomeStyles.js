import styled from "styled-components";
import { Link } from "react-router-dom";

export const Banner = styled.div`
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;
    background-size: cover;
    background-position: center;
    position: relative;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    z-index: 99;
    margin-bottom: 30px;
    background-image: url("./images/bg1.jpg");
`;

export const BannerBack = styled.div`
    content: "";
    position: absolute;
    z-index: 0;
    top: -30px;
    width: 90%;
    height: 30px;
    margin-left: 5%;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: rgba(30, 30, 40, 0.88);

    @media (max-width: 1400px) {
        display: none;
    }
`;

export const BannerOverlay = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 60px;
    width: 100%;
    background-image: linear-gradient(
        90deg,
        rgba(45, 45, 58, 0.9) 15%,
        rgba(45, 45, 58, 0.7) 50%,
        rgba(43, 43, 53, 0.7) 100%
    );

    @media (max-width: 1032px) {
        padding: 60px 30px;
    }
`;

export const BannerTitle = styled.div`
    width: 100%;
    -ms-flex-item-align: center;
    align-self: center;
    h1 {
        color: #fff;
    }
    @media (max-width: 1032px) {
        text-align: center;
    }
`;
export const BannerPhoto = styled.img`
    width: 390px;
    position: absolute;
    right: 30px;
    bottom: 0;
    @media (max-width: 1600px) {
        width: 360px;
    }
    @media (max-width: 1400px) {
        width: 320px;
    }
    @media (max-width: 990px) {
        display: none;
    }
`;

export const CounterFrame = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 30px;
    position: relative;

    .counter-box {
        padding: 0 10px;
        @media (max-width: 990px) {
            min-width: 50px;
            padding: 0;
        }
        span {
            color: var(--yellow);
            font-weight: 600;
            font-family: "Poppins", sans-serif;
            font-size: 22px;
        }
    }
`;

export const SectionTitle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .title-frame {
        -ms-flex-item-align: center;
        align-self: center;
        position: relative;
        margin-bottom: 30px;
    }
    @media (max-width: 500px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    @media (max-width: 768px) {
        .art-title-frame {
            margin-bottom: 20px;
            max-width: 100%;
        }
    }
`;

export const ServiceBox = styled.div`
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    .service-ib-content {
        padding: 30px;
    }
`;

export const OrderNow = styled(Link)`
    color: var(--yellow) !important;
    padding-right: 10px;
    position: relative;
    text-transform: uppercase;
    font-size: 12px;
    display: inline-block;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-right: 15px;
    margin-bottom: 10px;
    color: #cacace;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    i {
        font-weight: 900;
        -webkit-transform: scale(0.8) translateY(-1px);
        transform: scale(0.8) translateY(-1px);
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
    }
    :hover i {
        -webkit-transform: scale(0.8) translateX(5px) translateY(-1px);
        transform: scale(0.8) translateX(5px) translateY(-1px);
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
    }
`;
