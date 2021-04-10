import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/product.scss";
import StarRatings from "react-star-ratings";
import { NavLink, useHistory, useParams } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { ProductById } from "../actions/productbyid";
import { nanoid } from "nanoid";
import { AddtonlCart } from "../actions/addtocart";
import { AddtolCart } from "../actions/addtologincart";
import { Guestorder } from "../actions/guestorder";
import Paypal from "./Paypal.";

function Product() {
    const tok = localStorage.getItem("token");
    const history = useHistory();
    const [clas, setclas] = useState("benefits");
  //for setting which picture is to show on large div
    const [pic, setpic] = useState(1);
    const token = localStorage.getItem("token");
  //if user is not login
    let user1 = localStorage.getItem("nluser");
  //if user is login
    let loginuser = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const { id } = useParams();
    const PbyID = useSelector((state) => state.PbyID);
    let prod = PbyID.product._id;
    let price = PbyID.product.price;
    const [quantity, setquantity] = useState(1);

  //scroll to top
    useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(ProductById(id));
    }, []);
  // function to add items in the cart
    const AddtoCart = () => {
    if (!token) {
        if (!user1) {
        let user = nanoid();
        localStorage.setItem("nluser", user);
        const item = {
            user,
            prod,
            price,
            quantity,
        };
        dispatch(AddtonlCart(item)).then((res) => {
            history.push(`/cart/${user}`);
        });
        } else if (user1) {
        const item = {
            user: user1,
            prod,
            price,
            quantity,
        };
        dispatch(AddtonlCart(item)).then((res) => {
            history.push(`/cart/${user1}`);
        });
        }
    } else if (token) {
        let userid = loginuser._id;
        const item = {
        user: userid,
        prod,
        price,
        quantity,
        };
        dispatch(AddtolCart(item)).then((res) => {
        history.push(`/cart/${loginuser}`);
        });
    }
    };
    let name = PbyID.product.name;
    let quanity = quantity;
  let total = quantity * price;
    let products = {
    name,
    price,
    quantity,
    };
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
        products,
        };
        dispatch(Guestorder(items));
    }
    };
    const GuestO = useSelector((state) => state.GuestO);
    if (GuestO.message === "order placed successfuly") {
    history.push("/confirmation");
    }
  //main retrun function
    return (
    <div className="container-fluid m-0 p-0">
        <Navbar />
        <div className="d-flex justify-content-center">
        <div className="upper__box">
            <div className="product__container">
            <div className="image__container">
                {PbyID.product.productImage.map((img, index) => {
                if (index === pic) {
                    return <img src={img.img} className="lk toggleIn"></img>;
                }
                })}
                <div className="above_images">
                {PbyID.product.productImage.map((img, index) => {
                    return (
                    <div className="below_images">
                        <img
                        src={img.img}
                        className="below_img"
                        onClick={() => setpic(index)}
                        ></img>
                    </div>
                    );
                })}
                </div>
            </div>
            <div className="content_container">
                <h2 className="title">{PbyID.product.name}</h2>
                <div className="d-flex">
                <StarRatings
                    rating={5}
                    starDimension="15px"
                    starSpacing="2px"
                    starRatedColor="blue"
                />
                <p className="reviews">4 reviews</p>
                </div>
                <p className="price">{PbyID.product.price}$</p>
                <div className="d-flex">
                <p className="quantity">Quantity</p>
                <input
                    type="text"
                    placeholder="1"
                    className="inputs"
                    onChange={(e) => setquantity(e.target.value)}
                ></input>
                </div>
                <div className="d-flex">
                <p className="quantity">Flavours</p>
                <p className="flav">{PbyID.product.flavours}</p>
                </div>
                <p className="cart" onClick={AddtoCart}>
                Add to Cart
                </p>
                <div style={{ marginTop: "100px" }}>
                <Paypal toPay={total} paymentsuccess={paypalsuccess} />
                </div>
                <p className="description1">{PbyID.product.description}</p>
                {clas === "benefits" ? (
                <div className="d-flex container">
                    <p
                    className="benefits active1"
                    onClick={() => setclas("benefits")}
                    >
                    Benefits
                    </p>
                    <p className="specs" onClick={() => setclas("specs")}>
                    Specs
                    </p>
                </div>
                ) : (
                <div className="d-flex container">
                    <p className="benefits" onClick={() => setclas("benefits")}>
                    Benefits
                    </p>
                    <p className="specs active1" onClick={() => setclas("specs")}>
                    Specs
                    </p>
                </div>
                )}

                <div className="xs"></div>
                {clas === "benefits" ? (
                <div>
                    <div className="benefit__box show">
                    <pre className="pre-b">{PbyID.product.benefits}</pre>
                    </div>
                    <div className="benefit__box">
                    <pre className="pre-b">{PbyID.product.specs}</pre>
                    </div>
                </div>
                ) : (
                <div>
                    <div className="benefit__box">
                    <pre className="pre-b">{PbyID.product.benefits}</pre>
                    </div>
                    <div className="benefit__box show">
                    <pre className="pre-b">{PbyID.product.specs}</pre>
                    </div>
                </div>
                )}
            </div>
            </div>
            <div className="section__2">
            <div className="section__2box">
                <div className="smallbox__1">
                <div className="d-flex ml-3">
                    <h1>5.0</h1>
                    <p className="rating">
                    <StarRatings
                        rating={5}
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor="blue"
                    />
                    </p>
                </div>
                <p className="reviews">based on 4 reviews</p>
                </div>
                <div className="smallbox__2">
                <div className="mt-1">
                    <div className="d-flex">
                    <StarRatings
                        rating={5}
                        starDimension="14px"
                        starSpacing="2px"
                        starRatedColor="black"
                    />
                    <div className="raing__bar"></div>
                    <p className="rating">(4)</p>
                    </div>
                    <div className="d-flex laylo">
                    <StarRatings
                        rating={5}
                        starDimension="14px"
                        starSpacing="2px"
                        starRatedColor="black"
                    />
                    <div className="raing__bar"></div>
                    <p className="rating">(4)</p>
                    </div>
                    <div className="d-flex laylo">
                    <StarRatings
                        rating={5}
                        starDimension="14px"
                        starSpacing="2px"
                        starRatedColor="black"
                    />
                    <div className="raing__bar"></div>
                    <p className="rating">(4)</p>
                    </div>
                    <div className="d-flex laylo">
                    <StarRatings
                        rating={5}
                        starDimension="14px"
                        starSpacing="2px"
                        starRatedColor="black"
                    />
                    <div className="raing__bar"></div>
                    <p className="rating">(4)</p>
                    </div>
                </div>
                </div>
                <div className="smallbox__3">
                <div className="d-flex mt-2">
                    <img
                    src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616723223/smallimage_rjps9b.png"
                    className="mr-2"
                    ></img>
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616723223/smallimage_rjps9b.png"></img>
                </div>
                </div>
                <div className="smallbox__4">
                <p className="write">Write a review</p>
                </div>
            </div>
            <p className="waqa">reviews (4)</p>
            </div>
            <div className="sectiom__3">
            <div className="review__1">
                <img
                src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617997418/Add_this_in_product_section_jwsheu.jpg"
                className="review__image"
                ></img>
                <div className="d-flex mt-2 p-2">
                <StarRatings
                    rating={5}
                    starDimension="20px"
                    starSpacing="2px"
                    starRatedColor="yellowgreen"
                />
                <p className="ml-auto mt-1 mr-2">3/5/21</p>
                </div>
                <p className="font-weight-bold coo">Love it!</p>
                <p className="comment p-2">
                Such a cute and sleek water bottle! My only complaint is that I
                wish it was a little more transparent so that you can see the
                water better. But overall very happy with it and definitely
                recommend!
                <br /> Basal Bottle
                </p>
                <p className="font-weight-bold kus">Justine</p>
                <p className="country">United States</p>
            </div>
            <div className="review__1">
                <img
                src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617997418/Add_this_in_product_section_jwsheu.jpg"
                className="review__image"
                ></img>
                <div className="d-flex mt-2 p-2">
                <StarRatings
                    rating={5}
                    starDimension="20px"
                    starSpacing="2px"
                    starRatedColor="yellowgreen"
                />
                <p className="ml-auto mt-1 mr-2">3/5/21</p>
                </div>
                <p className="font-weight-bold coo">
                Perfect while working from home!
                </p>
                <p className="comment p-2">
                I’ve been working from home for the past 7 months and never
                really noticed how little water I drink on a daily basis. The
                time stamps on the bottle are really subtle but they do their
                job and I always drink the allotted amount of water each hour.
                Sometimes I’ll have to chug 3 hours worth of water because I
                wasn’t paying attention but I love that it keeps me accountable.
                A few more bathroom breaks but well worth it for my overall
                health! Basal Bottle
                <br /> Basal Bottle
                </p>
                <p className="font-weight-bold kus">Justine</p>
                <p className="country ">United States</p>
            </div>
            <div className="review__1">
                <div className="d-flex mt-2 p-2">
                <StarRatings
                    rating={5}
                    starDimension="20px"
                    starSpacing="2px"
                    starRatedColor="yellowgreen"
                />
                <p className="ml-auto mt-1 mr-2">3/5/21</p>
                </div>
                <p className="font-weight-bold coo">Minimal</p>
                <p className="comment p-2">
                I use this bottle every day now and honestly, it's amazing!
                Thank you! Basal Bottle
                <br /> Basal Bottle
                </p>
                <p className="font-weight-bold kus">Justine</p>
                <p className="country ">United States</p>
            </div>
            <div className="review__1">
                <div className="d-flex mt-2 p-2">
                <StarRatings
                    rating={5}
                    starDimension="20px"
                    starSpacing="2px"
                    starRatedColor="yellowgreen"
                />
                <p className="ml-auto mt-1 mr-2">3/5/21</p>
                </div>
                <p className="font-weight-bold coo">Such a cool bottle!</p>
                <p className="comment p-2">
                Love this idea! Super helpful and simple. Definitely will get
                some as gifts for friends and family.
                <br /> Basal Bottle
                </p>
                <p className="font-weight-bold kus">Justine</p>
                <p className="country ">United States</p>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    );
}

export default Product;
