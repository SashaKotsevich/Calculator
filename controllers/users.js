const auth = require("../services/auth");

const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
	const result = await auth.signUp(req.body);
	if (result.error) res.json({ success: false, message: result.error });
	else res.json({ data: result, success: true, message: "Ok" });
};

const signIn = async (req, res) => {
	const result = await auth.signIn(req.body);
	if (result.error) res.json({ success: false, message: result.error });
	else res.json({ data: result, success: true, message: "Ok" });
};

const myData = async (req, res) => {
	const result = {
		_id: req.user._id,
		name: req.user.name,
		email: req.user.email,
		date: req.user.date,
	};
	res.json({ data: result, success: true, message: "Ok" });
};

module.exports = { signUp, signIn, myData };
