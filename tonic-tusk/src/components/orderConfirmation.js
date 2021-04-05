import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../css/confirmation.scss";

function OrderConfirmation() {
    const { Oid } = useParams();
    return (
    <div>
        <Navbar />
        <div className="d-flex justify-content-center">
        <h1 className="thanks">Thank You!</h1>
        </div>
        <div className="d-flex justify-content-center">
        <p className="thank" style={{ marginTop: "20px" }}>
            Your order is placed. We have send you the confirmation Email.
        </p>
        </div>
        <div className="d-flex justify-content-center">
        <p className="thank" style={{ marginTop: "-20px" }}>
            Please visit your Email. Thanks again for your visit Here
        </p>
        </div>
        <div className="d-flex justify-content-center">
        <a
            href="/"
            style={{ color: "white", textDecoration: "none", background: "none" }}
        >
            <p className="continue">Continue Shopping</p>
        </a>
        </div>
    </div>
    );
}

export default OrderConfirmation;
