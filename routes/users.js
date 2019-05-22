const express = require("express");
const router = express.Router();
const auth = require("../services/auth");
const passport = require("passport");
const autorize = passport.authenticate("jwt", { session: false });

router.post("/signup", (req, res) => {
	auth.register(req.body).then(data => {
		res.send(data);
	});
});

router.post("/login", (req, res) => {
	auth.login(req.body).then(data => {
		res.send(data);
	});
});

router.get("/me", autorize, (req, res) => {
	res.send(req.user);
});

module.exports = router;
