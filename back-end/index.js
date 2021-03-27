const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("../backend/Routes/user");
const productRoute = require("./Routes/products");
const cartRoute = require("./Routes/cart");
const path = require("path");

app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://localhost:27017/tonic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    })
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

app.listen("8080", console.log("listening to port 8080"));
