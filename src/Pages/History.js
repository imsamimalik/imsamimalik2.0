import React from "react";
import { SectionTitle } from "./HomeStyles";
import { Timeline } from "./HistoryStyles";
const History = () => {
    return (
        <>
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
                        <SectionTitle className="section-title">
                            <div className="title-frame">
                                <h4 className="title-h">
                                    <span> Career </span>
                                </h4>
                            </div>
                        </SectionTitle>
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
                                                <span> Freelancer </span>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <span className="date">
                                                <span>May 2020 - </span>
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
                                                <span> Student </span>
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
                                                <span> Student </span>
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
                                                <span> Student </span>
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
                                                <span> Student </span>
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
                                                <span> Student </span>
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
        </>
    );
};

export default History;
