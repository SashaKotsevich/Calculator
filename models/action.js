const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actionSchema = Schema({
	user_id: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	expression: {
		type: String,
		required: true,
	},
	description: {
		type: [String],
	},
	result: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("action", actionSchema);
