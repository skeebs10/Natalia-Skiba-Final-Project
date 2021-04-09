const express = require("express");
const Router = express.Router();
const multer = require("multer");
const path = require("path");
const {
    createProduct,
    getAllP,
    PbyId,
    searchit,
} = require("../controller/products");

Router.post("/product/create", createProduct);
Router.get("/allproducts", getAllP);
Router.get("/productbyId/:id", PbyId);
Router.get("/searchproducts", searchit);

module.exports = Router;
