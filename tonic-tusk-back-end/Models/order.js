const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    shippingAdress: {
        type: String,
        required: true,
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
    amountpayed: {
        type: Number,
    },
    carttype: {
        type: String,
    },
    nlcart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "nlcarts",
    },
    lcart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lcarts",
    },
    paymentmethod: {
        type: String,
    },
    products: [
        {
        name: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        },
    ],
    },
    { timestamps: true }
);
module.exports = mongoose.model("orders", orderSchema);
