import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { FaCcAmex } from "react-icons/fa";
import Select from "react-select";
import "../css/payment.scss";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Paypal from "../components/Paypal.";
import { Getnlcart } from "../actions/nlcartbyid";
import { Getlcart } from "../actions/lcartbyid";
import { Guestorder } from "../actions/guestorder";
import { orderLogin } from "../actions/orderlogin";
import Navbar from "./Navbar";

function GuestPayment() {
    const tok = localStorage.getItem("token");
    const [checked, setchecked] = useState(false);
    const [name, setname] = useState();
    const [city, setcity] = useState();
    const [shippingAdress, setshippingAdress] = useState();
    const [appartment, setappartment] = useState();
    const [country, setcountry] = useState();
    const [postalcode, setpostalcode] = useState();
    const [number, setnumber] = useState();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const { Cid } = useParams();
    const { price } = useParams();
    const dispatch = useDispatch();
    console.log(checked);
    function checkAddress(e) {
    if (e.target.checked == true) {
        setchecked(true);
    } else {
        setchecked(false);
    }
    }
    useEffect(() => {
    if (!tok) {
        dispatch(Getnlcart(Cid));
    } else if (tok) {
        dispatch(Getlcart(Cid));
    }
    }, []);
    let online = navigator.onLine;
    const nlCart = useSelector((state) => state.nlCart);
    const nlcart = nlCart.item._id;
    const lCart = useSelector((state) => state.lCart);
    const lcart = lCart.item._id;
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
    const makepayment = (token) => {
    const token1 = JSON.stringify(token);
    const price1 = JSON.stringify(price);
    const body = {
        token: token1,
        price: price1,
    };
    axios
        .post("http://localhost:8000/guestpayment", {
        ...body,
        })
        .then((res) => {
        if (res.status == 201) {
            if (!tok) {
            const email1 = res.data.responce.billing_details.name;
            const items = {
                email: email1,
                name,
                city,
                shippingAdress,
                country: `${country.value}`,
                postalcode,
                phoneNumber: number,
                amountpayed: price,
                carttype: "nlcart",
                nlcart,
                products,
            };
            console.log(res);
            dispatch(Guestorder(items));
            if (checked === true) {
                if (email !== null && country !== null) {
                const user = {
                    email,
                    name,
                    password,
                    Cpassword: confirmpassword,
                    shippingAdress,
                    country: `${country.value}`,
                    postalcode,
                    phoneNumber: number,
                };
                dispatch(orderLogin(user));
                }
            }
            } else if (tok) {
            const email1 = res.data.responce.billing_details.name;
            const items = {
                email: email1,
                name,
                city,
                shippingAdress,
                country: `${country.value}`,
                postalcode,
                phoneNumber: number,
                amountpayed: price,
                carttype: "lcart",
                lcart,
                products,
            };
            dispatch(Guestorder(items));
            }
        } else if (res.status === 200) {
            console.log(res);
        }
        })
        .catch((err) => {});
    };

    const coutries = [
    { value: "Pakistan", label: "Pakistan" },
    { value: "India", label: "India" },
    { value: "United Kingdom", label: "United Kingdom" },
    ];

    const customStyles = {
    control: (base) => ({
        ...base,
        height: 50,
        minHeight: 35,
    }),
    };
    const history = useHistory();
    const GuestO = useSelector((state) => state.GuestO);
    if (GuestO.message === "order placed successfuly") {
    history.push("/confirmation");
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
        phoneNumber: number,
        amountpayed: price,
        carttype: "lcart",
        lcart,
        products,
        };
        dispatch(Guestorder(items));
        if (checked === true) {
        if (email !== null && country !== null) {
            const user = {
            email,
            name,
            password,
            Cpassword: confirmpassword,
            shippingAdress,
            country: `${country.value}`,
            postalcode,
            phoneNumber: number,
            };
            dispatch(orderLogin(user));
        }
        }
    } else if (!tok) {
        const items = {
        email: payment.email,
        name: payment.address.recipient_name,
        city: payment.address.city,
        country: payment.address.country_code,
        shippingAdress: `${payment.address.line1},${payment.address.city},${payment.address.country_code}`,
        postalcode: payment.address.postal_code,
        phoneNumber: number,
        amountpayed: price,
        carttype: "nlcart",
        nlcart,
        products,
        };
        dispatch(Guestorder(items));
    }
    console.log(payment);
    };

    return (
    <div className="container-fluid m-0 p-0">
        <Navbar />
        <div className="d-flex">
        <div
            style={{
            marginLeft: "80px",
            marginTop: "30px",
            marginRight: "100px",
            marginBottom: "100px",
            width: "700px",
            }}
        >
            <div className="d-flex">
            <div className="d-block">
                <h1 className="olppo">TonicTusk.com</h1>
            </div>
            </div>
            <div
            style={{
                marginTop: "10px",
                width: "600px",
                marginLeft: "20px",
            }}
            >
            <p className="shipping">Shipping Details</p>
            <div>
                <form>
                <div className="d-flex" style={{ width: "700px" }}>
                    <div class="form-group" style={{ width: "300px" }}>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                    </div>
                    <div class="form-group">
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Your City"
                        vlaue={city}
                        onChange={(e) => setcity(e.target.value)}
                        style={{ marginLeft: "20px" }}
                    />
                    </div>
                </div>
                <div>
                    <div class="form-group" style={{ width: "559px" }}>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Your Shipping Address"
                        value={shippingAdress}
                        onChange={(e) => setshippingAdress(e.target.value)}
                    />
                    </div>
                </div>
                <div>
                    <div class="form-group" style={{ width: "559px" }}>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Your Appartment,suit (Optional)"
                        value={appartment}
                        onChange={(e) => setappartment(e.target.value)}
                    />
                    </div>
                </div>
                <div className="d-flex">
                    <div
                    style={{
                        width: "300px",
                        marginTop: "10px",
                        height: "40px",
                    }}
                    >
                    <Select
                        options={coutries}
                        placeholder="Country/Region"
                        styles={customStyles}
                        onChange={setcountry}
                    />
                    </div>
                    <div>
                    <div
                        class="form-group"
                        style={{ marginLeft: "20px", width: "236px" }}
                    >
                        <input
                        type="number"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Postal Code"
                        value={postalcode}
                        onChange={(e) => setpostalcode(e.target.value)}
                        />
                    </div>
                    </div>
                </div>
                <div>
                    <div>
                    <div class="form-group" style={{ marginRight: "42px" }}>
                        <input
                        type="number"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Your Phone Number"
                        value={number}
                        onChange={(e) => setnumber(e.target.value)}
                        />
                    </div>
                    </div>
                </div>
                <div class="form-check klop">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    value={checked}
                    onClick={checkAddress}
                    id="flexCheckDefault"
                    style={{ marginTop: "10px" }}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                    Become a member for faster checkout Next time
                    </label>
                </div>
                <div style={{ width: "560px" }}>
                    {checked === true ? (
                    <div>
                        <div class="form-group">
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        </div>
                        <div class="form-group">
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Your Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        </div>
                        <div class="form-group">
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Re-Enter Your Password"
                            value={confirmpassword}
                            onChange={(e) => setconfirmpassword(e.target.value)}
                        />
                        </div>
                    </div>
                    ) : null}
                </div>
                </form>
                {online ? (
                <div style={{ width: "560px" }}>
                    <div
                    style={{
                        borderBottom: "1px solid #cecece",
                        width: "560px",
                        marginRight: "30px",
                    }}
                    ></div>
                    <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "40px" }}
                    >
                    <StripeCheckout
                        stripeKey="pk_test_51IOInoJdyddb75kGTxPJTz8BrrN8Wcr5CLKd8HiDZ8el0f32Tu6j6ieRWZEeseDxJf1xHBE6PWXF4FkVIsAITaXW00D69rmWFF"
                        token={makepayment}
                        name="buy"
                        amount={price * 100}
                    >
                        <div style={{ marginTop: "20px" }}>
                        <button className="loop">buy with card</button>
                        </div>
                    </StripeCheckout>

                    <div className="d-flex">
                        <p style={{ fontSize: "60px", marginLeft: "10px" }}>
                        <FaCcVisa />
                        </p>
                        <p
                        style={{
                            fontSize: "60px",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                        >
                        <FaCcAmex />
                        </p>
                        <p
                        style={{
                            fontSize: "60px",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                        >
                        <FaCcMastercard />
                        </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center nom">
                    --------------------------------------OR-----------------------------------------
                    </div>
                    <div className="d-flex justify-content-between">
                    <div
                        style={{
                        marginTop: "40px",
                        height: "50px",
                        marginLeft: "100px",
                        }}
                    >
                        <Paypal toPay={price} paymentsuccess={paypalsuccess} />
                    </div>
                    </div>
                </div>
                ) : (
                "you are offline please check network connection"
                )}
            </div>
            </div>
        </div>
        <div
            style={{
            borderLeft: "1px solid #cecece",
            width: "100%",
            }}
            className="qol"
        >
            <h1 className="side">Products that are Yours</h1>
            {tok
            ? lCart.item.cartItems.map((it) => {
                return (
                    <div className="d-flex">
                    <img
                        src={it.product.productImage[0].img}
                        style={{
                        width: "120px",
                        marginLeft: "30px",
                        marginTop: "20px",
                        }}
                    ></img>
                    <div>
                        <h3 className="lmera">{it.product.name}</h3>
                        <p className="lLo">{it.product.description}</p>
                        <div className="d-flex">
                        <p className="sharam">Price : {it.product.price}$ </p>
                        <p style={{ marginTop: "20px" }}>
                            Quantity : {it.quantity}
                        </p>
                        </div>
                    </div>
                    </div>
                );
                })
            : nlCart.item.cartItems.map((it) => {
                return (
                    <div className="d-flex">
                    <img
                        src={it.product.productImage[0].img}
                        style={{
                        width: "120px",
                        marginLeft: "30px",
                        marginTop: "20px",
                        }}
                    ></img>
                    <div>
                        <h3 className="lmera">{it.product.name}</h3>
                        <p className="lLo">{it.product.description}</p>
                        <div className="d-flex">
                        <p className="sharam">Price : {it.product.price}$ </p>
                        <p style={{ marginTop: "20px" }}>
                            Quantity : {it.quantity}
                        </p>
                        </div>
                    </div>
                    </div>
                );
                })}
        </div>
        </div>
    </div>
    );
}

export default GuestPayment;
