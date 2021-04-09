import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/landing.scss";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct } from "../actions/allproducts";

function Landing() {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(AllProduct());
    }, []);
    setTimeout(() => {
    if (count === 2) {
        setCount(0);
    } else {
        setCount(count + 1);
    }
    }, 5000);
    const allP = useSelector((state) => state.allP);

    const images = [
    {
        img:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617997177/tonic-tusk_put_in_banner_k9tuhv.jpg",
        text: "#Good Health, Good Cause",
    },
    {
        img:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617993730/pawan-sharma-J33o16cP0SA-unsplash_uke9k2.jpg",
        text: "#Save Elephants",
    },
    {
        img:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617997180/Banner_pic_4_clmicw.jpg",
        text: "#Good Health, Good Cause",
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

    return (
    <div className="container-fluid m-0 p-0">
        <Navbar />
        <div className="section1">
        <img src={images[count].img}></img>
        <h1>{images[count].text}</h1>
        <NavLink to="/shop" className="shop__button">
            Shop Now
        </NavLink>
        </div>
        <div className="section2">
        {icons.map((icon) => {
            return (
            <div className="icon__container">
                <div>
                <img src={icon.img}></img>
                <p>{icon.text}</p>
                </div>
            </div>
            );
        })}
        </div>
        <div className="cont">
        <div className="product__section">
            <div className="title">
            <h1>#Trendy Products</h1>
            </div>
            <div className="cont">
            <Slider {...setting}>
                {allP.products.map((prod) => {
                return (
                    <div>
                    <div className="slide__container">
                        <img src={prod.productImage[0].img}></img>
                        <div className="content__container">
                        <h3 className="slide__title">{prod.name}</h3>
                        <p className="price">${prod.price}</p>
                        <div className="d-flex">
                            <h6 className="quantity">Quantity</h6>
                            <p className="product__quantity">1</p>
                        </div>
                        <div className="d-flex">
                            <h6 className="quantity">Flavours</h6>
                            <p className="pepper">{prod.flavours}</p>
                        </div>
                        <NavLink
                            to={`/product/${prod._id}`}
                            className="order__button"
                        >
                            ORDER NOW
                        </NavLink>
                        <div className="d-flex justify-content-center">
                            <p className="payment">More Payment Options</p>
                        </div>
                        <p className="desc1">{prod.description}</p>
                        <h6 className="desc__title">Benefits</h6>
                        <pre className="points">{prod.benefits}</pre>
                        </div>
                    </div>
                    </div>
                );
                })}
            </Slider>
            </div>
        </div>
        </div>
        <div className="section4">
        <div className="d-flex justify-content-center">
            <img
            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616553573/commas_lvog09.png"
            className="section4__image"
            ></img>
        </div>
        <div className="d-flex justify-content-center">
            <h1 className="section4__title">SAVE THE ELEPHANTS</h1>
        </div>
        <div className="d-flex justify-content-center">
            <h1 className="section4__title">
            Every 15 minutes an elephant is killed for its ivory tusks
            </h1>
        </div>
        </div>
        <div className="section5">
        <div className="sub_section1">
            <div className="d-flex justify-content-center">
            <h1 className="title">OUR GOAL: MAKE A DiFFERENCE</h1>
            </div>
            <p className="description1">
            10% of every purchase is donated to the
            </p>
            <p className="description2">
            ELEPHANT Crises fund | The Leonardo DiCaprio Foundation
            </p>
        </div>
        <div className="sub_section2">
            <img
            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616554973/elephant_jt3mbi.png"
            className="ele"
            ></img>
        </div>
        </div>
        <div className="section6">
        <div className="sub__section1">
            <img
            src={
                "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616565552/aa-removebg-preview_l63nrx.png"
            }
            className="logo"
            ></img>
            <div className="text-section">
            <p className="text">
                High quality CBD for the on-the-go lifestyle! Love these products!
                <p className="text2">-Alexa. A</p>
            </p>
            </div>
        </div>
        <div className="sub__section2">
            <img
            src={
                "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616565552/aa-removebg-preview_l63nrx.png"
            }
            className="logo"
            ></img>
            <div className="text-section">
            <p className="text">
                A great way to keep hygene stress free while supporting the fight
                to end ivory tusk poaching.
                <p className="text2">-Sebastian S.</p>
            </p>
            </div>
        </div>
        </div>
        <div className="section7">
        <div className="con">
            <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616565274/circle-cropped__5_-removebg-preview_ms35vy.png"></img>
        </div>
        <div className="con2">
            <h1 className="logo-text">Elephant Crisis Fund</h1>
        </div>
        </div>

        <Footer />
    </div>
    );
}

export default Landing;
