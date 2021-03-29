import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/cart.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { Getnlcart } from "../actions/nlcartbyid";
import { Getlcart } from "../actions/lcartbyid";

function Cart() {
    const nlCart = useSelector((state) => state.nlCart);
    const lCart = useSelector((state) => state.lCart);
    const nl = nlCart._id;
    const l = lCart._id;
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const { Cid } = useParams();
    useEffect(() => {
    if (!token) {
        dispatch(Getnlcart(Cid));
    } else if (token) {
        dispatch(Getlcart(Cid));
    }
    }, []);

    const [quantity, setquantity] = useState();

    const Increasequantity = (index) => {
    let quan = quantity[index];
    let arr = [...quantity];
    arr[index] = quan + 1;
    setquantity(arr);
    };

    const decreasequantity = (index) => {
    let quan = quantity[index];
    let arr = [...quantity];
    if (arr[index] > 1) {
        arr[index] = quan - 1;
    }
    setquantity(arr);
    };

    const handlequantity = (e, index) => {
    if (e.target.value > 0) {
        let arr = [...quantity];
        arr[index] = e.target.value;
        setquantity(arr);
    }
    };

    return (
    <div className="container-fluid m-0 p-0">
        <Navbar />
        <div className="d-flex justify-content-center">
        <div className="henj">
            <div className="d-flex justify-content-center">
            <h2 className="cart-title">Products you are getting</h2>
            </div>
            <div className="cart-table">
            <table class="table ">
                <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {token
                    ? lCart.item.cartItems.map((pr, index) => {
                        return (
                        <tr>
                            <th className="Roww__1">
                            <div className="d-flex">
                                <img
                                src={pr.product.productImage[0].img}
                                className="cart__image"
                                ></img>
                                <p className="basal">{pr.product.name}</p>
                            </div>
                            </th>
                            <td className="Roww__2">
                            <p className="pp">{pr.price}$</p>
                            </td>
                            <td className="Roww__2">
                            <div className="d-flex">
                                <p
                                className="increment"
                                onClick={() => Increasequantity(index)}
                                >
                                <AiOutlinePlus />
                                </p>
                                <input
                                className="cart__input"
                                type="text"
                                placeholder={
                                    pr.quantity === 1
                                    ? pr.quantity
                                    : quantity[index]
                                }
                                onChange={(e) => handlequantity(e, index)}
                                ></input>
                                <p
                                className="decrement"
                                onClick={() => decreasequantity(index)}
                                >
                                <BiMinus />
                                </p>
                            </div>
                            </td>
                            <td className="Roww__3">
                            <p className="pp">
                                {pr.quantity === 1
                                ? pr.quantity
                                : pr.price * quantity[index]}
                                $
                            </p>
                            </td>
                            <td>
                            <p className="pp">
                                <AiFillDelete />
                            </p>
                            </td>
                        </tr>
                        );
                    })
                    : nlCart.item.cartItems.map((pr, index) => {
                        return (
                        <tr>
                            <th className="Roww__1">
                            <div className="d-flex">
                                <img
                                src={pr.product.productImage[0].img}
                                className="cart__image"
                                ></img>
                                <p className="basal">{pr.product.name}</p>
                            </div>
                            </th>
                            <td className="Roww__2">
                            <p className="pp">{pr.price}$</p>
                            </td>
                            <td className="Roww__2">
                            <div className="d-flex">
                                <p
                                className="increment"
                                onClick={() => Increasequantity(pr._id, nl)}
                                >
                                <AiOutlinePlus />
                                </p>
                                <input
                                className="cart__input"
                                type="text"
                                placeholder={quantity[index]}
                                onChange={(e) => handlequantity(e, index)}
                                ></input>
                                <p
                                className="decrement"
                                onClick={() => decreasequantity(index)}
                                >
                                <BiMinus />
                                </p>
                            </div>
                            </td>
                            <td className="Roww__3">
                            <p className="pp">{pr.price * quantity[index]}$</p>
                            </td>
                            <td>
                            <p className="pp">
                                <AiFillDelete />
                            </p>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="checkout">
                <p className="subtotal">300$</p>
                <p className="subtotal2">EXCLUDING SHIPPING AND TAXES</p>
                <NavLink to="#" className="check">
                Checkout
                </NavLink>
                <p className="subtotal23">Try Express checkout</p>
                <NavLink to="#" className="check2">
                Buy with Paypal
                </NavLink>
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    );
}

export default Cart;
