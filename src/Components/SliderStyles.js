import styled from "styled-components";

export const Testimonial = styled.div`
    transition: 0.55s ease-in-out;
    position: relative;
    background-size: cover;
    padding: 30px;
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);

    .testimonial-body {
        width: 100%;
        height: 100%;
        z-index: 0;
        .testimonial-face {
            position: absolute;
            -o-object-fit: cover;
            object-fit: cover;
            right: 30px;
            top: -15px;
            width: 65px;
            height: 65px;
            border-radius: 50%;
            -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
            box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
        }
        .suptitle {
            margin-top: 5px;
            color: #8c8c8e;
            font-style: italic;
            font-size: 12px;
        }
    }
    .testimonial-footer {
        position: relative;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-line-pack: center;
        align-content: center;
        .star-rate {
            padding: 0;
            margin: 0;
            -webkit-box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
            box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
            padding: 5px 15px;
            font-size: 10px;
            margin-top: 5px;
            background: #20202a;
            border-radius: 30px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            color: var(--yellow);
            li {
                list-style: none;
            }
        }
    }
`;

export const SliderNavigation = styled.div`
    padding: 15px 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 30px;
    .slider-nav-frame {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        .slider-nav {
            margin-left: 15px;
            cursor: pointer;
            -webkit-transition: 0.4s ease-in-out;
            transition: 0.4s ease-in-out;
        }
        .slider-nav.swiper-button-disabled {
            opacity: 0.2;
            cursor: not-allowed;
        }
    }
`;
