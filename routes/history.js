const express = require("express");
const router = express.Router();
const passport = require("passport");
const autorize = passport.authenticate("jwt", { session: false });
const history = require("../controllers/history");

router.post("/", autorize, (req, res) => {
	history.getHistory(req, res);
});

module.exports = router;
