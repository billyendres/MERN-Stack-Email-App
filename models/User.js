const mongoose = require("mongoose");
const { Schema } = mongoose;

//Creating schemas
const userSchema = new Schema({
	googleID: String
});

//Tells mongoose to create a new db collection called users
mongoose.model("users", userSchema);

//IMPORT TO INDEX.JS
