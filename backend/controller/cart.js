const Product = require("../Models/products");
const Lcart = require("../Models/lcart");
const Nlcart = require("../Models/nlcart");
exports.addtonl = (req, res) => {
    const { user, prod, price, quantity } = req.body;
    Nlcart.findOne({ user: user }).exec((err, cart) => {
    if (err) {
        res.status(200).json({
        message: "something went wrong",
        });
    } else if (!cart) {
        Product.findOne({ _id: prod }).exec((err, product) => {
        if (err) {
            res.status(200).json({
            message: "something went wrong",
            });
        } else if (product) {
            const nlcart = new Nlcart({
            user,
            cartItems: [
                {
                product,
                price,
                quantity,
                },
            ],
            });
            nlcart.save((err, newcart) => {
            if (err) {
                res.status(200).json({
                message: "something went wrong",
                });
            } else if (newcart) {
                res.status(201).json({
                message: "item added to cart",
                });
            }
            });
        }
        });
    } else if (cart) {
        let existproduct = prod;
        let item = cart.cartItems.find((c) => c.product == existproduct);
        if (item) {
        Nlcart.findOneAndUpdate(
            {
            user: user,
            "cartItems.product": existproduct,
            },
            {
            $set: {
                "cartItems.$": {
                product: prod,
                quantity: JSON.parse(item.quantity) + JSON.parse(quantity),
                price: price,
                },
            },
            }
        ).exec((err, _cart) => {
            if (err) {
            res.status(200).json({
                message: "something went wrong",
            });
            } else if (_cart) {
            res.status(201).json({
                message: "item added to cart",
            });
            }
        });
        } else {
        Product.findOne({ _id: prod }).exec((err, product) => {
            if (err) {
            res.status(200).json({
                message: "something went wrong",
            });
            } else if (product) {
            Nlcart.findOneAndUpdate(
                { user: user },
                {
                $push: {
                    cartItems: {
                    product,
                    price,
                    quantity,
                    },
                },
                }
            ).exec((err, cart) => {
                if (err) {
                res.status(200).json({
                    message: "something went wrong",
                });
                } else if (cart) {
                res.status(201).json({
                    message: "item added to cart",
                });
                }
            });
            }
        });
        }
    }
    });
};
exports.addtol = (req, res) => {
    const { user, prod, price, quantity } = req.body;
    Lcart.findOne({ user: user }).exec((err, cart) => {
    if (err) {
        res.status(200).json({
        message: "something went wrong",
        });
    } else if (!cart) {
        Product.findOne({ _id: prod }).exec((err, product) => {
        if (err) {
            res.status(200).json({
            message: "something went wrong",
            });
        } else if (product) {
            const lcart = new Lcart({
            user,
            cartItems: [
                {
                product,
                price,
                quantity,
                },
            ],
            });
            lcart.save((err, newcart) => {
            if (err) {
                res.status(200).json({
                message: "something went wrong",
                });
            } else if (newcart) {
                res.status(201).json({
                message: "item added to cart",
                });
            }
            });
        }
        });
    } else if (cart) {
        let existproduct = prod;
        let item = cart.cartItems.find((c) => c.product == existproduct);
        if (item) {
        Lcart.findOneAndUpdate(
            {
            user: user,
            "cartItems.product": existproduct,
            },
            {
            $set: {
                "cartItems.$": {
                product: prod,
                quantity: JSON.parse(item.quantity) + JSON.parse(quantity),
                price: price,
                },
            },
            }
        ).exec((err, _cart) => {
            if (err) {
            res.status(200).json({
                message: "something went wrong",
            });
            } else if (_cart) {
            res.status(201).json({
                message: "item added to cart",
            });
            }
        });
        } else {
        Product.findOne({ _id: prod }).exec((err, product) => {
            if (err) {
            res.status(200).json({
                message: "something went wrong",
            });
            } else if (product) {
            Lcart.findOneAndUpdate(
                { user: user },
                {
                $push: {
                    cartItems: {
                    product,
                    price,
                    quantity,
                    },
                },
                }
            ).exec((err, cart) => {
                if (err) {
                res.status(200).json({
                    message: "something went wrong",
                });
                } else if (cart) {
                res.status(201).json({
                    message: "item added to cart",
                });
                }
            });
            }
        });
        }
    }
    });
};
exports.nlbyid = (req, res) => {
    Nlcart.findOne({ user: req.params.Cid })
    .populate("cartItems.product")
    .exec((err, item) => {
        if (err) {
        res.status(200).json({
            message: "something went wrong",
        });
        } else if (item) {
        res.status(201).json({ item });
        } else if (!item) {
        const cart = new Nlcart({
            user: req.params.Cid,
        });
        cart.save((err, item) => {
            if (err) {
            res.status(200).json({
                message: "something wwnt wrong",
            });
            } else if (item) {
            res.status(201).json({ item });
            }
        });
        }
    });
};
exports.lbyid = (req, res) => {
    Lcart.findOne({ user: req.params.Cid })
    .populate("cartItems.product")
    .exec((err, item) => {
        if (err) {
        res.status(200).json({
            message: "something went wrong",
        });
        } else if (item) {
        res.status(201).json({ item });
        } else if (!item) {
        const cart = new Lcart({
            user: req.params.Cid,
        });
        cart.save((err, item) => {
            if (err) {
            res.status(200).json({
                message: "something wwnt wrong",
            });
            } else if (item) {
            res.status(201).json({ item });
            }
        });
        }
    });
};
exports.removeitem = (req, res) => {
    const { cartid, id } = req.body;
    Nlcart.findOneAndUpdate(
    { _id: cartid },
    { $pull: { cartItems: { _id: id } } },
    { safe: true, upsert: true }
    ).exec((err, cart) => {
    if (err) {
        res.status(200).json({
        message: "something went wrong",
        });
    } else if (cart) {
      res.status(201).json({
        message: "item deleted",
        });
    }
    });
};
exports.removeLitem = (req, res) => {
    const { cartid, id } = req.body;
    Lcart.findOneAndUpdate(
    { _id: cartid },
    { $pull: { cartItems: { _id: id } } },
    { safe: true, upsert: true }
    ).exec((err, cart) => {
    if (err) {
        res.status(200).json({
        message: "something went wrong",
        });
    } else if (cart) {
        res.status(201).json({
        message: "item deleted",
        });
    }
    });
};
exports.changenlquantity = (req, res) => {
    const { id } = req.body;
    Nlcart.findByIdAndUpdate({ "cartItems._id": "id" }, { quantity: "100" }).exec(
    (err, newQuan) => {
        if (err) {
        res.status(200).json({
            message: "something went wrong",
        });
        } else if (newQuan) {
        res.status(201).json({ newQuan });
        }
    }
    );
};
