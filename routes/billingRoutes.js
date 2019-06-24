//Passport tells express how to handle Authntication
const passport = require("passport");
const keys = require("../config/keys");
//npm i stripe
const stripe = require("stripe")(keys.stripeSecretKey);
//Checks if user is logged in
const requireLogin = require("../middlewares/requireLogin");

//GoogleStrategy has internal code indentifier that tells passport to use google
module.exports = app => {
	//Export for use in index.js
	app.post("/api/stripe", requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "$5 for 5 credits",
			source: req.body.id
		});
		req.user.credits += 5;
		const user = await req.user.save();

		res.send(user);
	});
};
