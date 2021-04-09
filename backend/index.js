const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("../backend/Routes/user");
const productRoute = require("./Routes/products");
const cartRoute = require("./Routes/cart");
const paymentRoute = require("./Routes/payment");
const orderroutes = require("./Routes/order");

app.use(express.json());
app.use(cors());

mongoose
    .connect(
    "mongodb+srv://natalia:L4jAjfgEGkt0mAYO@cluster0.9yvku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        seCreateIndex: true,
        useFindAndModify: false,
    }
    )
    .then((res) => {
    console.log("conected");
    })
    .catch((err) => {
    console.log(err);
    });

app.use(userRoute);
app.use(productRoute);
app.use(cartRoute);
app.use(paymentRoute);
app.use(orderroutes);
const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV == "production") {
    app.use(express.static("frontend/build"));
    const path = require("path");
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
}

app.listen(PORT);
