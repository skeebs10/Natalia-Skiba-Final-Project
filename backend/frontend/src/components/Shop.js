import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/shop.scss";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct } from "../actions/allproducts";

function Shop() {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(AllProduct());
    }, []);
    const allP = useSelector((state) => state.allP);

    return (
    <div className="container-fluid m-0 p-0">
        <Navbar />
        <div className="d-flex justify-content-center">
        <div className="shop__container">
            <div className="d-flex justify-content-center">
            <h2 className="shop__title">All</h2>
            </div>
            <div className="row ">
            {allP.products.map((prod) => {
                return (
                <div className="col-3 contain">
                    <NavLink
                    to={`/product/${prod._id}`}
                    style={{ textDecoration: "none" }}
                    >
                    <img
                        src={prod.productImage[0].img}
                        className="shop_image"
                    ></img>
                    <div className="d-flex justify-content-center">
                        <p className="shop__name">{prod.name}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="shop__price">{prod.price}$</p>
                    </div>
                    </NavLink>
                </div>
                );
            })}
            </div>
        </div>
        </div>
        <Footer />
    </div>
    );
}

export default Shop;
