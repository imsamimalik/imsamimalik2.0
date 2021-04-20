import { SectionTitle } from "./HomeStyles";
import { Timeline, Intro } from "./AboutStyles";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About - imsamimalik</title>
            </Helmet>
            <div
                className="container-fluid"
                style={{
                    overflow: "hidden",
                    padding: "30px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                }}
            >
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle className="section-title">
                            <div className="title-frame">
                                <h4 className="title-h">
                                    <span> About me </span>
                                </h4>
                            </div>
                        </SectionTitle>

                        <Intro className="about">
                            <p>
                                Hey Folks, I am Akhtar Nadeem(better known as{" "}
                                <span className="highlight">Sami Malik </span>{" "}
                                ). A simple guy with a productive mindset, its
                                my aim to help those around me. I have been in
                                the web development industry and am surviving in
                                this competitive era since 2013. Developing
                                Robust and pitch perfect solutions for my
                                clients is what I call an achievement. I
                                expertise in modern frameworkds like ReactJS,
                                SvelteJS, and ViewJS and MERN STACK. In addition
                                to it, I have been developing captivating
                                websites on wordpress too. I work with a single
                                thing in my mind, "
                                <span className="highlight">
                                    The aim is to make a Customer, not a sale!
                                </span>
                                ". I currently work as a Freelancer on Fiverr
                                and am doing my BSCS degree from FAST NUCES,
                                Lahore.
                            </p>
                            <ul className="socials">
                                <li>
                                    <a
                                        rel="noreferrer"
                                        target="__blank"
                                        aria-label="fiverr"
                                        href="https://www.fiverr.com/akhtarnadeem"
                                    >
                                        fiverr
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noreferrer"
                                        target="__blank"
                                        aria-label="facebook"
                                        href="https://www.facebook.com/imsamimalik"
                                    >
                                        facebook
                                    </a>
                                </li>

                                <li>
                                    <a
                                        rel="noreferrer"
                                        target="__blank"
                                        aria-label="instagram"
                                        href="https://www.instagram.com/imsamimalik"
                                    >
                                        instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noreferrer"
                                        target="__blank"
                                        aria-label="github"
                                        href="https://www.github.com/imsamimalik"
                                    >
                                        github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noreferrer"
                                        target="__blank"
                                        aria-label="twitter"
                                        href="https://www.twiter.com/imsamimalik"
                                    >
                                        twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noreferrer"
                                        aria-label="codepen"
                                        href="https://codepen.io/imsamimalik"
                                    >
                                        codepen
                                    </a>
                                </li>
                            </ul>
                        </Intro>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid"
                style={{
                    overflow: "hidden",
                    padding: "30px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                }}
            >
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle className="section-title">
                            <div className="title-frame">
                                <h4 className="title-h">
                                    <span> Career </span>
                                </h4>
                            </div>
                        </SectionTitle>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid"
                style={{
                    overflow: "hidden",
                    padding: "30px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="row">
                    <div className="col-lg-12">
                        <Timeline className="timeline gallery">
                            <div className="timeline-item">
                                <div className="timeline-mark-light" />
                                <div className="timeline-mark" />
                                <div className="timeline-content">
                                    <div className="card-header">
                                        <div className="left-side">
                                            <h5>
                                                <span>Fiverr</span>
                                            </h5>
                                            <div className="el-suptitle mb-15">
                                                <span>Freelancer</span>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <span className="date">
                                                <span>May 2020 -</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="el-description">
                                        <div>
                                            <p>Full stack web developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-mark-light" />
                                <div className="timeline-mark" />
                                <div className="timeline-content">
                                    <div className="card-header">
                                        <div className="left-side">
                                            <h5>
                                                <span>Internet</span>
                                            </h5>
                                            <div className="el-suptitle mb-15">
                                                <span>Student</span>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <span className="date">
                                                <span>2018 - 2020</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="el-description">
                                        <div>
                                            <p>
                                                JS libraries and Frameworks
                                                (React, VueJS, Svelte, MERN)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-mark-light" />
                                <div className="timeline-mark" />
                                <div className="timeline-content">
                                    <div className="card-header">
                                        <div className="left-side">
                                            <h5>
                                                <span>Internet</span>
                                            </h5>
                                            <div className="el-suptitle mb-15">
                                                <span>Student</span>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <span className="date">
                                                <span>2017 - 2018</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="el-description">
                                        <div>
                                            <p>WordPress and Other CMS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-mark-light" />
                                <div className="timeline-mark" />
                                <div className="timeline-content">
                                    <div className="card-header">
                                        <div className="left-side">
                                            <h5>
                                                <span>Internet</span>
                                            </h5>
                                            <div className="el-suptitle mb-15">
                                                <span>Student</span>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <span className="date">
                                                <span>2016 - 2017</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="el-description">
                                        <div>
                                            <p>Vanilla JS and JQuery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-mark-light" />
                                <div className="timeline-mark" />
                                <div className="timeline-content">
                                    <div className="card-header">
                                        <div className="left-side">
                                            <h5>
                                                <span>Internet</span>
                                            </h5>
                                            <div className="el-suptitle mb-15">
                                                <span>Student</span>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <span className="date">
                                                <span>2015 - 2016</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="el-description">
                                        <div>
                                            <p>
                                                Graphics Design (Photoshop,
                                                Lightroom, Illustrator)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-mark-light" />
                                <div className="timeline-mark" />
                                <div className="timeline-content">
                                    <div className="card-header">
                                        <div className="left-side">
                                            <h5>
                                                <span>Internet</span>
                                            </h5>
                                            <div className="el-suptitle mb-15">
                                                <span>Student</span>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <span className="date">
                                                <span>jan 2014 - jan 2015</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="el-description">
                                        <div>
                                            <p>Learned HTML and CSS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Timeline>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
