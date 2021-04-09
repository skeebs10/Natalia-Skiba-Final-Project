const mongoose = require("mongoose");

const productScheema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true,
    },
    productImage: [{ img: { type: String } }],
    price: {
    type: Number,
    },
    description: {
    type: "string",
    },
    benefits: {
    type: String,
    },
    specs: {
    type: String,
    },
    flavours: {
    type: String,
    },
});

module.exports = mongoose.model("products", productScheema);
