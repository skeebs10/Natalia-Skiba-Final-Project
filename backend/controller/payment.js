const stripe = require("stripe")(
    "sk_test_51IeVluIqkRLCNWCwh5aVRqBgI9ZvarQGeBc7ahqcgOlv4hjHCplBDDKjYY3khRlDB21zjWgzd9Nmu2uoMpY2UWCc00vNIiXZBV"
    );
    exports.guestP = (req, res) => {
    const { token, price } = req.body;
    const token1 = JSON.parse(token);
    const price1 = JSON.parse(price);
    stripe.charges
        .create({
        amount: price1 * 100,
        source: token1.id,
        currency: "usd",
        })
        .then((responce) => {
        return res.status(201).json({
            message: "payment succeeded",
            responce,
        });
        })
        .catch((err) => {
        return res.status(200).json({
            message: "payment declined",
        });
        });
    };
