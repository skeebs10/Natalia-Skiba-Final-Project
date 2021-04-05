const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("../backend/Routes/user");
const productRoute = require("./Routes/products");
const cartRoute = require("./Routes/cart");
const paymentRoute = require("./Routes/payment");
const orderroutes = require("./Routes/order");
const path = require("path");

app.use(express.json());
app.use(cors());

mongoose
    .connect(
    "mongodb+srv://natalia:L4jAjfgEGkt0mAYO@cluster0.9yvku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
    )
    .then((res) => {
    console.log("conected");
    })
    .catch((err) => {
    console.log(err);
    });
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(userRoute);
app.use(productRoute);
app.use(cartRoute);
app.use(paymentRoute);
app.use(orderroutes);

app.listen("8000", console.log("listening to port 8080"));
