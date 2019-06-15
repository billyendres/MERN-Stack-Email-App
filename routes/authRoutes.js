//Passport tells express how to handle Authntication
const passport = require("passport");

//GoogleStrategy has internal code indentifier that tells passport to use google
module.exports = app => {
	//Export for use in index.js
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	//Pushes into oAuth flow
	app.get("/auth/google/callback", passport.authenticate("google"));

	//logout user - takes cookie and deletes user id
	app.get("/api/logout", (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
