import React from "react";
import "../css/contact.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
    return (
    <div className="container-fluid m-0 p-0">
        <Navbar />
        <div className="d-flex justify-content-center">
        <div className="contact__container">
            <div className="d-flex justify-content-center">
            <h1 className="contact__title">Contact us</h1>
            </div>
            <div>
            <p className="contact__subtitle">
                We’re here to answer any questions. Please fill out the form below
                <br></br>
                <span className="sp">
                and our team will get back to you shortly!
                </span>
            </p>
            <form>
                <div class="form-group">
                <label for="exampleInputEmail1" className="lable-loo">
                    Your name
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                />
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1" className="lable-loo">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1" className="lable-loo">
                    Message
                </label>
                <textarea
                    type="text"
                    class="form-control message__loo"
                    id="exampleInputPassword1"
                    placeholder=""
                />
                </div>
                <button type="submit" className="contact__button">
                Submit
                </button>
            </form>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    );
}

export default Contact;
