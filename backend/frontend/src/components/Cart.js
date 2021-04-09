import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/cart.scss";
import { AiFillDelete } from "react-icons/ai";
import { NavLink, useHistory, useParams } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { Getnlcart } from "../actions/nlcartbyid";
import { Getlcart } from "../actions/lcartbyid";
import Paypal from "./Paypal.";
import { Guestorder } from "../actions/guestorder";
import { removenlitem } from "../actions/removenlitem";

function Cart() {
    const tok = localStorage.getItem("token");
    const [removed, setremoved] = useState(false);
    const [total, settotal] = useState();
    const nlCart = useSelector((state) => state.nlCart);
    const nlcart = nlCart.item._id;
    const lCart = useSelector((state) => state.lCart);
    const lcart = lCart.item._id;
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const { Cid } = useParams();
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
    if (!token) {
        dispatch(Getnlcart(Cid));
    } else if (token) {
        dispatch(Getlcart(Cid));
    }
    }, []);
    let q;
    if (!token) {
    if (nlCart.item.cartItems.length > 0) {
        let p = nlCart.item.cartItems.map((it) => {
        return it.price * it.quantity;
        });
        q = p.reduce((tot, item) => {
        return tot + item;
        });
    }
    } else if (token) {
    if (lCart.item.cartItems.length > 0) {
        let p = lCart.item.cartItems.map((it) => {
        return it.price * it.quantity;
        });
        q = p.reduce((tot, item) => {
        return tot + item;
        });
    }
    }
    const cartids = nlCart.item._id;
    useEffect(() => {
    settotal(q);
    }, [q]);
    let products;
    if (!tok) {
    products = nlCart.item.cartItems.map((it) => {
        return {
        name: it.product.name,
        price: it.product.price,
        quantity: it.quantity,
        };
    });
    } else if (tok) {
    products = lCart.item.cartItems.map((it) => {
        return {
        name: it.product.name,
        price: it.product.price,
        quantity: it.quantity,
        };
    });
    }
    const paypalsuccess = (payment) => {
    if (tok) {
        const items = {
        email: payment.email,
        name: payment.address.recipient_name,
        city: payment.address.city,
        country: payment.address.country_code,
        shippingAdress: `${payment.address.line1},${payment.address.city},${payment.address.country_code}`,
        postalcode: payment.address.postal_code,
        amountpayed: total,
        carttype: "lcart",
        lcart,
        products,
        };
        dispatch(Guestorder(items));
    } else if (!tok) {
        const items = {
        email: payment.email,
        name: payment.address.recipient_name,
        city: payment.address.city,
        country: payment.address.country_code,
        shippingAdress: `${payment.address.line1},${payment.address.city},${payment.address.country_code}`,
        postalcode: payment.address.postal_code,
        amountpayed: total,
        carttype: "nlcart",
        nlcart,
        products,
        };
        dispatch(Guestorder(items));
    }
    };
    const history = useHistory();
    const GuestO = useSelector((state) => state.GuestO);
    if (GuestO.message === "order placed successfuly") {
    history.push("/confirmation");
    }
    const removeitem = (id) => {
    const item = {
        cartid: cartids,
        id,
    };
    dispatch(removenlitem(item));
    setremoved(true);
    };
    useEffect(() => {
    dispatch(Getnlcart(Cid));
    setremoved(false);
    }, [removed]);

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
                    <th scope="row"></th>
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
                            <td className="pp2">X</td>
                            <td className="Roww__2">
                            <p className="pp3">{pr.quantity} </p>
                            </td>
                            <td className="Roww__3">
                            <p className="pp">{pr.price * pr.quantity}$</p>
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
                            <td className="pp2">X</td>
                            <td className="Roww__2">
                            <p className="pp3">{pr.quantity} </p>
                            </td>
                            <td className="Roww__3">
                            <p className="pp">{pr.price * pr.quantity}$</p>
                            </td>
                            <td>
                            <p
                                className="pp"
                                onClick={() => removeitem(pr._id)}
                            >
                                <AiFillDelete />
                            </p>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="checkout">
                <p className="subtotal">{total}$</p>
                <p className="subtotal2">EXCLUDING SHIPPING AND TAXES</p>
                <NavLink to={`/guestpayment/${Cid}/${total}`} className="check">
                Checkout
                </NavLink>
                <p className="subtotal23">Try Express checkout</p>
                <Paypal toPay={total} paymentsuccess={paypalsuccess} />
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    );
}

export default Cart;
