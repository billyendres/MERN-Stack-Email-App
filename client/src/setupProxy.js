const proxy = require("http-proxy-middleware");

//Catches any requests made to following relative paths
module.exports = function(app) {
	app.use(proxy(["/api", "/auth/google"], { target: "http://localhost:5500" }));
};
