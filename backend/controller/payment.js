const stripe = require("stripe")(
    "sk_test_51IOInoJdyddb75kGO6iM2T5glxhKo5XDMB23LZjFqAcwrEjaOE12ACKcI5gqxFK8OUPXFZ074lfykPSthyWTB41T001xUP84vJ"
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
