import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css/landing.scss";
import { NavLink } from "react-router-dom";
import Slider from "react-slic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Landing() {
    const [count, setCount] = useState(0);
    setTimeout(() => {
      if (count === 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 5000);
  


const images = [
    {
      img:
        "https://i0.wp.com/bowlofgoodness.com/wp-content/uploads/2016/09/happy-fit-people.jpg?resize=770%2C369",
      text: "#Good Health, Good Cause",
    },
    {
      img:
        "https://s3-ap-south-1.amazonaws.com/soulveda-media-prod/wp-content/uploads/2018/05/22171103/1523019875.banner.Good-health-beyond-the-body-776x620.jpg",
      text: "#Save Elephants",
    },
  ];
  const icons = [
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0VsgtqiWi_C1BGM4bhp-UFM6T0XBw6sDSA&usqp=CAU",
      text: "THIRD PARTY TESTED",
    },
    {
      img:
        "https://cdn0.iconfinder.com/data/icons/tidee-health/24/015_005_heart_health_good_healthy-512.png",
      text: "ZERO HIGH",
    },
    {
      img: "https://static.thenounproject.com/png/2405330-200.png",
      text: "TRAVEL FRIENDLY",
    },
    {
      img:
        "https://cdn2.iconfinder.com/data/icons/medical-bundle-1/64/Heart_-512.png",
      text: "STRESS LESS",
    },
  ];

  const setting = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    centerMode: false,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
};
const Slide = () => {
  return (
    <div className="slide__container">
      <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616548015/bottle_gdcgl0.png"></img>
      <div className="content__container">
        <h3 className="slide__title">Tonic Tusk CBD Gum</h3>
        <p className="price">$350</p>
        <div className="d-flex">
          <h6 className="quantity">Quantity</h6>
          <p className="product__quantity">1</p>
        </div>
        <NavLink to="#" className="order__button">
          ORDER NOW
        </NavLink>
        <div className="d-flex justify-content-center">
          <p className="payment">More Payment Options</p>
        </div>
        <p className="desc1">
          Our functional yet sustainable water bottle acts as a visual
          reminder to stay hydrated. Drinking more water gets rid of fatigue,
          boosts your metabolism, clears your skin, and helps with better
          concentration.
        </p>
        <h6 className="desc__title">Benefits</h6>
        <pre className="points">
          {" "}
          1. Time stamps to help you track your progress of daily water
          intake.<br></br> 2. BFA-free and lightweight for easy carry.
          <br></br> 3. 1L of water per fill for plenty of hydration.
          <br></br> 4. Beautiful and thoughtful design.
        </pre>
      </div>
    </div>
  );
};





export default Landing;