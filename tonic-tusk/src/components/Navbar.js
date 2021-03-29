import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [nav, setnav] = useState(false);
    const setback = () => {
    if (window.scrollY >= 70) {
        setnav(true);
    } else {
        setnav(false);
    }
    };
    window.addEventListener("scroll", setback);
    return (
    <div
        className={
        nav === true
            ? "navbar active container-fluid m-0 p-0"
            : "navbar container-fluid m-0 p-0"
        }
        style={{ position: "sticky", zIndex: "3" }}
        fixed="top"
    >
        <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616531620/tonic_mdakf5.png"></img>
        <div>
        <div>
            <NavLink to="/shop" className="change lo">
            Shop
            </NavLink>
            <NavLink to="/shop" className="change lo">
            Our mission
            </NavLink>
            <NavLink to="/shop" className="change lo">
            News
            </NavLink>
            <NavLink to="/shop" className="change lo">
            Contact
            </NavLink>
        </div>
        <div className="icons">
            <p className="search change">
            <AiOutlineSearch />
            </p>
            <p className="cart change">
            <BiCartAlt />
            </p>
        </div>
        </div>
    </div>
    );
}

export default Navbar;
