const express = require("express");
const Router = express.Router();

const { guestP } = require("../controller/payment");

Router.post("/guestpayment", guestP);

module.exports = Router;
