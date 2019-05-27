const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");

const generateToken = ({ id, name }) => {
	const token = jwt.sign({ id, name }, "ItIsSomeSecretKey", {
		expiresIn: 3600,
	});
	return { token: "Bearer " + token };
};

const signIn = async ({ email, password }) => {
	const user = await User.findOne({ email });
	if (!user) return { error: "User not found" };
	if (!bcrypt.compare(password, user.password)) {
		return { error: "Wrong password." };
	}
	let token = await generateToken(user).token;

	return {
		_id: user._id,
		name: user.name,
		email: user.email,
		date: user.date,
		token,
	};
};

const signUp = async ({ name, email, password }) => {
	const user = await User.findOne({ email });
	if (user) {
		return { error: "This email already taken." };
	}
	let newUser = new User({
		name,
		email,
		password,
		date: Date(),
	});

	await bcrypt.genSaltSync(10, salt => {
		bcrypt.hash(newUser.password, salt, async hash => {
			newUser.password = hash;
		});
	});
	await newUser.save();
	let token = await generateToken(newUser).token;

	return {
		_id: newUser._id,
		name: newUser.name,
		email: newUser.email,
		date: newUser.date,
		token,
	};
};

module.exports = {
	signUp,
	signIn,
};
