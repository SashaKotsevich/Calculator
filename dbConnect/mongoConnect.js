const mongoose = require("mongoose");

module.exports = mongoose
	.connect("mongodb://localhost:27017/calculator", { useNewUrlParser: true })
	.then(
		() => {
			console.info("Connected");
		},
		err => {
			console.info("Connection fault" + err);
		}
	);
