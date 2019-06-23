const express = require("express");
const mongoose = require("mongoose");
//Lets express know how to handle cookies from passport.js
const cookieSession = require("cookie-session");
const passport = require("passport");
//Import keys and mongoURI
const keys = require("./config/keys");
//Middleware auto wired up through app.use call
const bodyParser = require("body-parser");

//require passportConfig files - & mongoose schemas
require("./models/User");
require("./services/passport");

//Connect private keys
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

//configuring cookies
app.use(
	cookieSession({
		//30 days before expiry (milliseconds)
		maxAge: 30 * 24 * 60 * 60 * 1000,
		//encrypt cookie (stored in keys.js)
		keys: [keys.cookieKey]
	})
);

//tells passport to make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

//Call authRoutes with app
//Returns function to be invoked with app object
require("./routes/authRoutes")(app);

//Billing Routes
require("./routes/billingRoutes")(app);

//Setup Dynamic PORT
const PORT = process.env.PORT || 5500;

//Heroku Open to start
//Install nodemon add to package.json
//npm run dev to start server
//navigate to PORT/auth/google to login
app.listen(PORT, () => console.log(`server on port ${PORT}`));
