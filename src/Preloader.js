import React, { useState, useEffect } from "react";

const Preloader = ({ loaded }) => {
    const [isloaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [stop, setStop] = useState(true);

    useEffect(() => {
        loaded &&
            setTimeout(() => {
                setIsLoaded(true);
                document.body.classList.add("no-loader");
            }, 1000);
        // setInterval(() => {
        //     stop &&
        //         setProgress((prev) => (prev < 101 ? prev + 1 : setStop(false)));
        // }, 100);
        loaded &&
            document.querySelectorAll("path.meter1").forEach((path) => {
                let length = path.getTotalLength();
                let value = parseInt(
                    path.parentNode.getAttribute("data-value")
                );
                let to = length * (value / 100);
                path.getBoundingClientRect();
                path.style.strokeDashoffset = Math.max(0, to);
                document.querySelector(".proNum").innerHTML =
                    Math.max(0, to) + "%";
            });
    }, [loaded]);

    return (
        <>
            {!isloaded && (
                <div class="art-preloader">
                    <div class="art-preloader-content">
                        <h4>Sami Malik</h4>
                        <div
                            id="preloader"
                            class="art-preloader-load"
                            //style="position: relative;"
                        >
                            <div
                                class="art-preloader-load-first"
                                //style="display: none;"
                            >
                                {" "}
                                <svg
                                    viewBox="0 0 100 1.7"
                                    preserveAspectRatio="none"
                                    data-value="100"
                                >
                                    <path
                                        d="M 0,0.85 L 100,0.85"
                                        stroke="#ffc107"
                                        stroke-width="1.7"
                                        fill-opacity="0"
                                    ></path>
                                    <path
                                        d="M 0,0.85 L 100,0.85"
                                        stroke="#555"
                                        stroke-dasharray="100, 100"
                                        strokeDashoffset={200}
                                        stroke-width="1.7"
                                        fill-opacity="0"
                                        className="meter1"
                                    ></path>
                                </svg>
                                <div class="progressbar-text proNum">
                                    {progress} %
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Preloader;
