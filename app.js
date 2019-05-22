const express = require("express");
const path = require("path");
const dbConnect = require("./dbConnect/mongoConnect");
const passport = require("passport");

const routes = require("./routes/index");
const users = require("./routes/users");
const operations = require("./routes/operations");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(passport.initialize());
require("./passport/index")(passport);
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);
app.use("/users", users);
app.use("/operations", operations);

app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

if (app.get("env") === "development") {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render("error", {
			message: err.message,
			error: err,
		});
	});
}

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render("error", {
		message: err.message,
		error: {},
	});
});

module.exports = app;
