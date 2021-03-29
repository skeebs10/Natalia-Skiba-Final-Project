const Product = require("../Models/products");

exports.createProduct = (req, res) => {
    const { name, price, description, benefits, specs } = req.body;
    let productImage = [];
    if (req.files.length > 0) {
    productImage = req.files.map((file) => {
        return { img: "http://localhost:8000/public/" + file.filename };
    });
    }
    if (!name || !productImage || !price || !description) {
    return res.status(200).json({
        message: "all fileds are required",
    });
    } else {
    const product = new Product({
        name,
        productImage,
        price,
        description,
        benefits,
        specs,
    });
    product.save((err, prod) => {
        if (err) {
        res.status(200).json({
            message: err,
        });
        } else if (prod) {
        res.status(201).json({
            message: "product created successfuly",
        });
        }
    });
    }
};
exports.getAllP = (req, res) => {
    Product.find()
    .populate("category")
    .exec((err, products) => {
        if (err) {
        res.status(200).json({
            message: "spmething went wrong",
        });
        } else if (products) {
        res.status(201).json({
            products,
        });
        }
    });
};
exports.PbyId = (req, res) => {
    Product.findOne({ _id: req.params.id })
    .populate("category")
    .exec((err, product) => {
        if (err) {
        res.status(200).json({
            message: "something went wrong",
        });
        } else if (product) {
        res.status(201).json({
            product,
        });
        }
    });
};
