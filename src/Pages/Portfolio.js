import React, { useState, useEffect } from "react";
import { SectionTitle } from "./HomeStyles";
import { Grid, Item, Link, RightFrame } from "./PortfolioStyles";
import { db } from "../firebase";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

const Portfolio = () => {
    const [web, setWeb] = useState([]);
    const [shown, setShown] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        document.querySelectorAll("a.link").forEach((a) => {
            a.classList.remove("active");
        });
        e.target.classList.add("active");
        // document.querySelectorAll(".grid-item").forEach((item) => {
        //     item.classList.add("hide");
        //     if (e.target.innerText.toLowerCase() === "all categories") {
        //         item.classList.remove("hide");
        //     } else if (
        //         item.classList.contains(e.target.innerText.toLowerCase())
        //     ) {
        //         item.classList.remove("hide");
        //     }
        // });
        setShown(
            web.filter(
                (item) =>
                    item.framework.toLowerCase() ===
                    e.target.innerText.toLowerCase()
            )
        );
    };

    const handleAllClick = (e) => {
        e.preventDefault();
        document.querySelectorAll("a.link").forEach((a) => {
            a.classList.remove("active");
        });
        e.target.classList.add("active");
        setShown(web);
    };

    useEffect(() => {
        const unsubscribe = db
            .collection("all")
            .orderBy("id", "asc")
            .onSnapshot((snapshot) => {
                setWeb(snapshot.docs.map((doc) => doc.data()));
                setShown(snapshot.docs.map((doc) => doc.data()));
            });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Portfolio - imsamimalik</title>
            </Helmet>
            <div
                className="container-fluid"
                style={{
                    overflow: "hidden",
                    padding: "30px",
                    position: "relative",
                }}
            >
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle>
                            <div className="title-frame">
                                <h4 className="title-h">
                                    <span> Portfolio </span>
                                </h4>
                            </div>
                            <RightFrame className="right-frame">
                                <div className="filter">
                                    <Link
                                        onClick={handleAllClick}
                                        href="#"
                                        data-filter="*"
                                        className="link active"
                                    >
                                        All Categories
                                    </Link>
                                    <Link
                                        onClick={handleClick}
                                        href="#"
                                        className="link"
                                    >
                                        WordPress
                                    </Link>
                                    <Link
                                        onClick={handleClick}
                                        href="#"
                                        className="link"
                                    >
                                        React
                                    </Link>
                                    <Link
                                        onClick={handleClick}
                                        href="#"
                                        data-filter=".category-drawings"
                                        className="link"
                                    >
                                        Misc.
                                    </Link>
                                </div>
                            </RightFrame>
                        </SectionTitle>
                    </div>
                    <Grid>
                        {shown.map((item) => (
                            <Item
                                key={item.id}
                                className={`grid-item ${item.framework}`.toLowerCase()}
                            >
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-item-frame"
                                >
                                    <img
                                        loading="lazy"
                                        src={item.imgUrl}
                                        alt={item.title}
                                    />
                                </a>
                                <div className="item-description">
                                    <h5 className="mb-15">{item.title}</h5>
                                    <div className="mb-15">
                                        {item.description}
                                    </div>
                                </div>
                            </Item>
                        ))}
                    </Grid>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Portfolio;
