const express = require("express");
const { Gorder, Morder } = require("../controller/order");
const Router = express.Router();

Router.post("/guestorder", Gorder);
Router.post("/memberorder", Morder);

module.exports = Router;
