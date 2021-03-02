import React from "react";
import { Link } from "react-router-dom";
import {
    Banner,
    BannerBack,
    BannerOverlay,
    BannerPhoto,
    BannerTitle,
    CounterFrame,
    OrderNow,
    ServiceBox,
    SectionTitle,
} from "./HomeStyles";
import TypeWriterEffect from "react-typewriter-effect";
import CountUp from "react-countup";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { Icon } from "react-icons-kit";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
            <div
                className="container-fluid"
                style={{
                    overflow: "hidden",
                    padding: "0 30px",
                    position: "relative",
                }}
            >
                <div className="row p-30-0 p-lg-30-0 p-md-15-0">
                    <div className="col-lg-12">
                        <Banner className="banner">
                            <BannerBack className="banner-back" />
                            <BannerOverlay className="banner-overlay">
                                <BannerTitle className="banner-title">
                                    <h1 className="mb-15">
                                        <span>
                                            Discover my Amazing <br />
                                            Art Space!
                                        </span>
                                    </h1>
                                    <div className="lg-text code mb-25">
                                        <span>
                                            &lt;<i>code</i>&gt;
                                        </span>
                                        <span>
                                            I build{" "}
                                            <TypeWriterEffect
                                                textStyle={{
                                                    fontFamily: "Courier Prime",
                                                    color: "#fff",
                                                    fontWeight: 500,
                                                    fontSize: "1em",
                                                    display: "inline-block",
                                                }}
                                                startDelay={1000}
                                                cursorColor="#fafafc"
                                                multiText={[
                                                    "web apps.",
                                                    "mobile apps.",
                                                    "desktop apps.",
                                                    "automation tools.",
                                                    "full stack websites.",
                                                    "CMS websites.",
                                                    "web apps.",
                                                    "mobile apps.",
                                                    "desktop apps.",
                                                    "automation tools.",
                                                    "full stack websites.",
                                                    "CMS websites.",
                                                    "web apps.",
                                                    "mobile apps.",
                                                    "desktop apps.",
                                                    "automation tools.",
                                                    "full stack websites.",
                                                    "CMS websites.",
                                                    "web apps.",
                                                    "mobile apps.",
                                                    "desktop apps.",
                                                    "automation tools.",
                                                    "full stack websites.",
                                                    "CMS websites.",
                                                    "web apps.",
                                                    "mobile apps.",
                                                    "desktop apps.",
                                                    "automation tools.",
                                                    "full stack websites.",
                                                    "CMS websites.",
                                                ]}
                                                multiTextDelay={1000}
                                                typeSpeed={100}
                                            />
                                        </span>
                                        <span>
                                            &lt;/<i>code</i>&gt;
                                        </span>
                                    </div>
                                    <div className="buttons-frame">
                                        <Link
                                            to="/portfolio"
                                            className="btn btn-md"
                                        >
                                            <span
                                                style={{
                                                    alignSelf: "center",
                                                    transition:
                                                        ".2s ease-in-out",
                                                }}
                                            >
                                                Explore now
                                            </span>
                                        </Link>
                                    </div>
                                </BannerTitle>
                                <BannerPhoto
                                    src="./images/me.png"
                                    className="banner-photo"
                                    alt="Profile Pic"
                                />
                            </BannerOverlay>
                        </Banner>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-6">
                        <CounterFrame className="counter-frame">
                            <div className="counter-box">
                                <CountUp
                                    redraw
                                    duration={1}
                                    delay={2}
                                    end={5}
                                    suffix="+"
                                ></CountUp>
                            </div>
                            <h6>
                                <span> Years Experience </span>
                            </h6>
                        </CounterFrame>
                    </div>
                    <div className="col-md-3 col-6">
                        <CounterFrame className="counter-frame">
                            <div className="counter-box">
                                <CountUp
                                    redraw
                                    duration={1}
                                    delay={2}
                                    end={30}
                                    suffix="+"
                                ></CountUp>
                            </div>
                            <h6>
                                <span> Completed Projects </span>
                            </h6>
                        </CounterFrame>
                    </div>
                    <div className="col-md-3 col-6">
                        <CounterFrame className="counter-frame">
                            <div className="counter-box">
                                <CountUp
                                    redraw
                                    duration={1}
                                    delay={2}
                                    end={20}
                                    suffix="+"
                                ></CountUp>
                            </div>
                            <h6>
                                <span> Happy Customers </span>
                            </h6>
                        </CounterFrame>
                    </div>
                    <div className="col-md-3 col-6">
                        <CounterFrame className="counter-frame">
                            <div className="counter-box">
                                <CountUp
                                    redraw
                                    duration={1}
                                    delay={2}
                                    end={1}
                                ></CountUp>
                            </div>
                            <h6>
                                <span> Level Seller </span>
                            </h6>
                        </CounterFrame>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid"
                style={{
                    overflow: "hidden",
                    padding: "0 30px",
                    position: "relative",
                }}
            >
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle className="section-title">
                            <div className="title-frame">
                                <h4 className="title-h">
                                    <span> My Services </span>
                                </h4>
                            </div>
                        </SectionTitle>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServiceBox className="service-icon-box">
                            <div className="service-ib-content">
                                <h5 className="mb-15">
                                    <span> WordPress Websites </span>
                                </h5>
                                <div className="mb-15">
                                    <div>
                                        <p>
                                            On demand websites built using
                                            popular themes, custom theming with
                                            page builders like Elementor,
                                            WPBakery
                                        </p>
                                    </div>
                                </div>
                                <div className="buttons-frame">
                                    <OrderNow
                                        to="/contact"
                                        className="color-link w-chevron"
                                    >
                                        <span> Order now </span>
                                        <Icon icon={chevronRight} />
                                    </OrderNow>
                                </div>
                            </div>
                        </ServiceBox>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServiceBox className="service-icon-box">
                            <div className="service-ib-content">
                                <h5 className="mb-15">
                                    <span> Custom Web apps </span>
                                </h5>
                                <div className="mb-15">
                                    <div>
                                        <p>
                                            Web apps built using frontend
                                            frameworks like ReactJs, VueJs,
                                            Gatsby with full on content
                                            management systems
                                        </p>
                                    </div>
                                </div>
                                <div className="buttons-frame">
                                    <OrderNow
                                        to="/contact"
                                        className="color-link w-chevron"
                                    >
                                        <span> Order now </span>
                                        <Icon icon={chevronRight} />
                                    </OrderNow>
                                </div>
                            </div>
                        </ServiceBox>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServiceBox className="service-icon-box">
                            <div className="service-ib-content">
                                <h5 className="mb-15">
                                    <span> Mobile Apps </span>
                                </h5>
                                <div className="mb-15">
                                    <div>
                                        <p>
                                            Android and iOS mobile apps
                                            development with Flutter, React
                                            Native, Swift and PWA apps with
                                            adpative design
                                        </p>
                                    </div>
                                </div>
                                <div className="buttons-frame">
                                    <OrderNow
                                        to="/contact"
                                        className="link color-link w-chevron"
                                    >
                                        <span> Order now </span>
                                        <Icon icon={chevronRight} />
                                    </OrderNow>
                                </div>
                            </div>
                        </ServiceBox>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServiceBox className="service-icon-box">
                            <div className="service-ib-content">
                                <h5 className="mb-15">
                                    <span> CMS Websites </span>
                                </h5>
                                <div className="mb-15">
                                    <div>
                                        <p>
                                            Fully resposive and adaptive
                                            websites built using well known CMS
                                            like WordPress, Weebly, Webflow,
                                            Squarspace etc.
                                        </p>
                                    </div>
                                </div>
                                <div className="buttons-frame">
                                    <OrderNow
                                        to="/contact"
                                        className="link color-link w-chevron"
                                    >
                                        <span> Order now </span>
                                        <Icon icon={chevronRight} />
                                    </OrderNow>
                                </div>
                            </div>
                        </ServiceBox>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServiceBox className="service-icon-box">
                            <div className="service-ib-content">
                                <h5 className="mb-15">
                                    <span>Graphics Customization</span>
                                </h5>
                                <div className="mb-15">
                                    <div>
                                        <p>
                                            Photo editing, Video editing, logo
                                            design, Photoshop, Illustrator,
                                            Indesign, Lightroom etc
                                        </p>
                                    </div>
                                </div>
                                <div className="buttons-frame">
                                    <OrderNow
                                        to="/contact"
                                        className="link color-link w-chevron"
                                    >
                                        <span> Order now </span>
                                        <Icon icon={chevronRight} />
                                    </OrderNow>
                                </div>
                            </div>
                        </ServiceBox>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServiceBox className="service-icon-box">
                            <div className="service-ib-content">
                                <h5 className="mb-15">
                                    <span>Social media Marketing</span>
                                </h5>
                                <div className="mb-15">
                                    <div>
                                        <p>
                                            Advertisements, audience engagement,
                                            Online Business Growth, Products
                                            promotion, brand engagement
                                        </p>
                                    </div>
                                </div>
                                <div className="buttons-frame">
                                    <OrderNow
                                        to="/contact"
                                        className="link color-link w-chevron"
                                    >
                                        <span> Order now </span>
                                        <Icon icon={chevronRight} />
                                    </OrderNow>
                                </div>
                            </div>
                        </ServiceBox>
                    </div>
                </div>
            </div>
            <Slider />
            <Footer />
        </>
    );
};

export default Home;