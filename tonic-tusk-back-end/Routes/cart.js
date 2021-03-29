const express = require("express");
const {
    addtonl,
    addtol,
    nlbyid,
    lbyid,
    removeitem,
    removeLitem,
    changenlquantity,
} = require("../controller/cart");
const Router = express.Router();

Router.post("/addtonlcart", addtonl);
Router.post("/addtolcart", addtol);
Router.get("/nlcartbyid/:Cid", nlbyid);
Router.get("/lcartbyid/:Cid", lbyid);
Router.post("/deletenlItem", removeitem);
Router.post("/deletelItem", removeLitem);
Router.post("/change", changenlquantity);

module.exports = Router;
