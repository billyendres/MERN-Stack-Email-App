//Checks if user is logged in.
module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ err: "You Must Log In" });
	}
	//Lets user continue to route handler
	next();
};
