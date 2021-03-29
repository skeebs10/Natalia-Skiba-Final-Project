import React from "react";
import Navbar from "./Navbar";
import "../css/about.scss";
import Footer from "./Footer";

function About() {
    return (
    <div className="container-fluid m-0 p-0">
        <Navbar />
        <div className="d-flex justify-content-center">
        <div className="about__container">
            <div className="d-flex justify-content-center">
            <h1>About US</h1>
            </div>
            <div>
            <img
                src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616750546/aboutimage_tv5xwv.png"
                className="about__image"
            ></img>
            <p className="about__text">
                We live in a fast-paced world where anything and everything holds
                our attention. Sometimes in the midst of busyness, we forget to do
                the basics—like drink enough water. We believe that small habits
                can lead to greater lifestyles. We value simple solutions that
                make our daily lives healthier and a bit happier.
                <br />
                <br /> 3 out of 4 people struggle with chronic dehydration,
                causing fatigue, foggy memory, irritability, and even anxiety. We
                create solutions that are designed to elevate your body, mind, and
                soul with functionality at the core of what we do.
                <br />
                <br /> Start the day by drinking a little more water each hour.
                More water, better days — it’s really that simple.
            </p>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    );
}

export default About;
