const express = require("express");
const router = express.Router();
const passport = require("passport");
const autorize = passport.authenticate("jwt", { session: false });
const users = require("../controllers/users");

router.post("/signup", (req, res) => {
	users.signUp(req, res);
});

router.post("/login", (req, res) => {
	users.signIn(req, res);
});

router.post("/me", autorize, (req, res) => {
	users.myData(req, res);
});

module.exports = router;
