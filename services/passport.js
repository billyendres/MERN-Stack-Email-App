//Passport tells express how to handle Authntication
const passport = require("passport");
// GoogleStrategy instructs passport how to authenticate users
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
//ClientID & ClientSecret
const keys = require("../config/keys");
//mongoose.model from User.js
const User = mongoose.model("users");

//user is whatever was just taken from the db
passport.serializeUser((user, done) => {
	done(null, user.id);
});

//npm i cookie-session
//lets express know how to handle these requests
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

//Creates new instance of GoogleStrategy
//Add unique keys and devKeys.js to .gitignore
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			//Tells app to trust heroku proxy
			proxy: true
		},
		//Use model class to create new instance of User
		//.save() persists to db
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleID: profile.id });

			if (existingUser) {
				//already have a record with given profile.id
				done(null, existingUser);
			} else {
				//don't have a user record with profile.id so create one
				const user = await new User({ googleID: profile.id }).save();
				done(null, user);
				//profile.id comes from users google profile
			}
		}
	)
);
