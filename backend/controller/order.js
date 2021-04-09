const Order = require("../Models/order");
const Nlcart = require("../Models/nlcart");
const Lcart = require("../Models/lcart");
const User = require("../Models/users");
const jwt = require("jsonwebtoken");
exports.Gorder = (req, res) => {
    const {
    email,
    name,
    city,
    shippingAdress,
    country,
    postalcode,
    phoneNumber,
    amountpayed,
    carttype,
    nlcart,
    lcart,
    products,
    } = req.body;

    if (
    !email ||
    !name ||
    !city ||
    !shippingAdress ||
    !country ||
    !postalcode ||
    !amountpayed ||
    !carttype
    ) {
    return res.status(200).json({
        message: "all fields are required",
    });
    } else {
    if (carttype === "nlcart") {
        const order = new Order({
        email,
        name,
        city,
        shippingAdress,
        country,
        postalcode,
        phoneNumber,
        amountpayed,
        nlcart,
        products,
        });
        order.save((err, ord) => {
        if (err) {
            return res.status(200).json({
            messgae: "something went wrong",
            });
        } else if (ord) {
            res.status(201).json({
            message: "order placed successfuly",
            });
        }
        });
        Nlcart.findOneAndDelete({ _id: nlcart }).exec();
    } else if (carttype === "lcart") {
        const order = new Order({
        email,
        name,
        city,
        shippingAdress,
        country,
        postalcode,
        phoneNumber,
        amountpayed,
        lcart,
        products,
        });
        order.save((err, ord) => {
        if (err) {
            return res.status(200).json({
            messgae: "something went wrong",
            });
        } else if (ord) {
            res.status(201).json({
            message: "order placed successfuly",
            });
        }
        });
        Lcart.findOneAndDelete({ _id: lcart }).exec();
    }
    }
};
exports.Morder = (req, res) => {
    const {
    email,
    name,
    city,
    shippingAdress,
    country,
    postalcode,
    phoneNumber,
    amountpayed,
    carttype,
    nlcart,
    products,
    } = req.body;
    console.log(products);
    if (
    !email ||
    !name ||
    !city ||
    !shippingAdress ||
    !country ||
    !postalcode ||
    !amountpayed ||
    !carttype
    ) {
    return res.status(200).json({
        message: "all fields are required",
    });
    } else {
    if (carttype === "nlcart") {
        const order = new Order({
        email,
        name,
        city,
        shippingAdress,
        country,
        postalcode,
        phoneNumber,
        amountpayed,
        nlcart,
        products,
        });
        order.save((err, ord) => {
        if (err) {
            return res.status(200).json({
            messgae: "something went wrong",
            });
        } else if (ord) {
            User.findOneAndUpdate(
            { email: email },
            {
                name: name,
                city: city,
                shippingAdress: shippingAdress,
                country: country,
                postalcode: postalcode,
                phoneNumber: phoneNumber,
            }
            ).exec((err, user) => {
            console.log(user);
            if (err) {
                res.status(200).json({
                message: "something went wrong",
                });
            } else {
                const token = jwt.sign({ _id: user._id }, "MERNSECRET");
                const { email, _id } = user;
                return res.status(201).json({
                token,
                user: {
                    name,
                    email,
                    _id,
                    city,
                    shippingAdress,
                    country,
                    postalcode,
                    phoneNumber,
                },
                message: "order placed successfuly",
                });
            }
            });
        }
        });
        Nlcart.findOneAndDelete({ _id: nlcart }).exec();
    }
    }
};
