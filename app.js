const express = require("express");
const path = require("path");
const dbConnect = require("./dbConnect/mongoConnect");
const passport = require("passport");

const history = require("./routes/history");
const users = require("./routes/users");
const operations = require("./routes/operations");
const app = express();
const cors = require("cors");

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use(cors());
app.use(passport.initialize());
require("./passport/index")(passport);
app.use(express.json());
app.use(express.urlencoded());
app.get("/favicon.ico", (req, res) => {
	console.log("got to server");
	res.send("favicon placeholder");
});
app.use("/operations", operations);
app.use("/history", history);
app.use("/users", users);

app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

if (app.get("env") === "development") {
	app.use(function(err, req, res, next) {
		res.json({ err });
	});
}

app.use(function(err, req, res, next) {
	res.json({ err });
});

module.exports = app;
