const express = require("express");
const Router = express.Router();
const multer = require("multer");
const path = require("path");
const { createProduct, getAllP, PbyId } = require("../controller/products");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname);
    },
});
const upload = multer({ storage });

Router.post("/product/create", upload.array("productImage"), createProduct);
Router.get("/allproducts", getAllP);
Router.get("/productbyId/:id", PbyId);

module.exports = Router;
