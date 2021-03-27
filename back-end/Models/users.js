const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const signupScheema = new mongoose.Schema(
    {
    name: {
        type: String,
        trim: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    hash_password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    shippingAdress: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    postalcode: {
        type: Number,
    },
    phoneNumber: {
        type: Number,
    },
    },
    { timestamps: true }
);
signupScheema.virtual("password").set(function (password) {
    return (this.hash_password = bcrypt.hashSync(password, 10));
});

signupScheema.methods = {
    authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
    },
};

module.exports = mongoose.model("users", signupScheema);
