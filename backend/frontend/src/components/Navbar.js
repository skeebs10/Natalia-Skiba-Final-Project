import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import { NavLink, useHistory } from "react-router-dom";

function Navbar() {
    let user1 = localStorage.getItem("nluser");
    const [nav, setnav] = useState(false);
    const [ser, setser] = useState(0);
    const [query, setquery] = useState();
    const history = useHistory();
    const images = [
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617982973/IMG_0446_uawlfj.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617982973/IMG_0449_cdrl2i.png",
    ];
    const setback = () => {
    if (window.scrollY >= 70) {
        setnav(true);
    } else {
        setnav(false);
    }
    };
    const handleClick = () => {
    history.push("/");
    };
    const handlecart = () => {
    if (user1) {
        history.push(`/cart/${user1}`);
    } else {
        alert("no item in the cart");
    }
    };
    const handlesearch = () => {
    if (ser === 0) {
        setser(1);
    } else if (ser === 1) {
        setser(0);
        if (query) {
        setquery("");
        history.push(`/searchproduct?query=${query}`);
        }
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
        {nav === true ? (
        <img src={images[0]} onClick={handleClick}></img>
        ) : (
        <img src={images[1]} onClick={handleClick}></img>
        )}
        <div>
        {ser === 0 ? (
            <div>
            <NavLink to="/shop" className="change lo">
                Shop
            </NavLink>
            <NavLink to="/about" className="change lo">
                Our Mission
            </NavLink>
            <NavLink to="/news" className="change lo">
                News
            </NavLink>
            <NavLink to="/contact" className="change lo">
                Contact
            </NavLink>
            </div>
        ) : (
            <div>
            <input
                type="text"
                className="searxch"
                placeholder="Search the product"
                value={query}
                onChange={(e) => setquery(e.target.value)}
            ></input>
            </div>
        )}

        <div className="icons">
            <p className="search change" onClick={handlesearch}>
            <AiOutlineSearch />
            </p>
            <p className="cart change" onClick={handlecart}>
            <BiCartAlt />
            </p>
        </div>
        </div>
    </div>
    );
}

export default Navbar;
