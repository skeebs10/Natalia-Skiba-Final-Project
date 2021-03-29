const mongoose = require("mongoose");

const lcartScheema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    },
    cartItems: [
    {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        quantity: { type: Number, default: 1 },
        price: { type: Number },
    },
    ],
});

module.exports = mongoose.model("lcarts", lcartScheema);
