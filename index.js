const express = require("express");

//all route handlers associated with app
const app = express();

app.get("/", (req, res) => {
	res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5005;
app.listen(PORT);
