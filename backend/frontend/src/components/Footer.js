import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
    <div>
        <div className="section8">
        <div className="footer__container">
            <div className="box1">
            <NavLink to="/shop">
                <p className="footer__text">Shop</p>
            </NavLink>
            <NavLink to="/about">
                <p className="footer__text">Our Story</p>
            </NavLink>
            <NavLink to="/contact">
                <p className="footer__text">Wholesale</p>
            </NavLink>
            </div>
            <div className="box2">
            <NavLink to="#">
                <p className="footer__text">Facebook</p>
            </NavLink>
            <NavLink to="#">
                <p className="footer__text">Instagram</p>
            </NavLink>
            <NavLink to="#">
                <p className="footer__text">Twitter</p>
            </NavLink>
            </div>
        </div>
        <div className="right">
            <p className="footer__text">
            Formulated to help promote improving general wellness.
            </p>
        </div>
        </div>
    </div>
    );
}

export default Footer;
