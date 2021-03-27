const express = require("express");
const { registers, logins } = require("../controller/user");
const Router = express.Router();

Router.post("/register", registers);
Router.post("/login", logins);

module.exports = Router;
