const User = require("../Models/users");
const jwt = require("jsonwebtoken");
exports.registers = (req, res) => {
    const { name, email, password, Cpassword } = req.body;
    if (!name || !email || !password) {
    return res.status(200).json({
        message: "all fields are required",
    });
    } else if (Cpassword !== password) {
    return res.status(200).json({
        message: "both passwords must be same",
    });
    } else {
    User.findOne({ email: email }).exec((err, user) => {
        if (err) {
        return res.status(200).json({
            message: "something went wrong",
        });
        } else if (user) {
        const token = jwt.sign({ _id: user._id }, "MERNSECRET");
        const {
            name,
            email,
            _id,
            city,
            shippingAdress,
            country,
            postalcode,
            phoneNumber,
        } = user;
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
            message: "successfully login",
        });
        } else {
        const user = new User({
            name,
            email,
            password,
        });
        user.save((err, user1) => {
            if (err) {
            return res.status(200).json({
                message: "something went wrong",
            });
            } else if (user1) {
            return res.status(201).json({
                message: "user registered successfully",
            });
            }
        });
        }
    });
    }
};
exports.logins = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
    res.status(200).json({
        message: "all fields are required",
    });
    } else {
    User.findOne({ email: email }).exec((err, user) => {
        if (err) {
        res.status(200).json({
            message: "something went wrong",
        });
        } else if (!user) {
        res.status(200).json({
            message: "email or password is incorrect",
        });
        } else if (user) {
        if (user.authenticate(password)) {
            const token = jwt.sign({ _id: user._id }, "MERNSECRET");
            const {
            name,
            email,
            _id,
            city,
            shippingAdress,
            country,
            postalcode,
            phoneNumber,
            } = user;
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
            message: "successfully login",
            });
        } else {
            return res.status(200).json({
            message: "email or password is incorrect",
            });
        }
        }
    });
    }
};
