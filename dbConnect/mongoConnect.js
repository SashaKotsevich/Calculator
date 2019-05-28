const mongoose = require("mongoose");

module.exports = mongoose
	.connect(
		"mongodb+srv://SashaAdmin:123456789poipoi@cluster0-ukspd.mongodb.net/test?retryWrites=true",
		{ useNewUrlParser: true }
	)
	.then(
		() => {
			console.info("Connected");
		},
		err => {
			console.info("Connection fault" + err);
		}
	);
