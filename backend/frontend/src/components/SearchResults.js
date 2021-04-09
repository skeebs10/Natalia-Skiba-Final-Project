import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../css/reuslt.scss";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct } from "../actions/allproducts";
import { NavLink, useLocation } from "react-router-dom";
import { Searchs } from "../actions/search";

function SearchResults() {
    function useQuery() {
    return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let query1 = query.get("query");
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(Searchs(query1));
    }, []);
    useEffect(() => {
    dispatch(Searchs(query1));
    }, [query1]);
    const searchit = useSelector((state) => state.searchit);
    return (
    <div className="container-fluid m-0 p-0">
        <Navbar />
        <div className="d-flex justify-content-center">
        <h1 className="result__header">
            Showing results for <span className="query">{query1}</span>
        </h1>
        </div>
        <div className="row__cont">
        <div className="row ">
            {searchit.products.length === 0 ? (
            <div className="d-flex justify-content-center">
                <h1 className="noreuslt">No results found for {query1}</h1>
            </div>
            ) : (
            searchit.products.map((prod) => {
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
            })
            )}
        </div>
        </div>
    </div>
    );
}

export default SearchResults;
