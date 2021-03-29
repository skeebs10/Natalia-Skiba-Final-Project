const mongoose = require("mongoose");

const nlcartScheema = new mongoose.Schema({
    user: {
    type: String,
    },
    cartItems: [
    {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        quantity: { type: Number, default: 1 },
        price: { type: Number },
    },
    ],
});

module.exports = mongoose.model("nlcarts", nlcartScheema);
