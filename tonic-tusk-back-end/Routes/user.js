const express = require("express");
const { registers, logins, OrderLogin } = require("../controller/user");
const Router = express.Router();

Router.post("/register", registers);
Router.post("/login", logins);
Router.post("/guestorderlogin", OrderLogin);

module.exports = Router;
