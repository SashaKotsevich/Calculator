const math = require("../services/math");
const history = require("../services/history");
const jwt = require("jsonwebtoken");

const calculateController = async (req, res) => {
	let result;
	let user = jwt.decode(req.headers.authorization.split(" ")[1]);

	result = await math.evaluate(req.body.expression);
	if (result.error) {
		res.json({ success: false, message: result.error });
	} else {
		console.log(result);
		if (user) {
			history.saveAction({
				user_id: user.id,
				type: "Calculate",
				date: new Date().toLocaleString(),
				expression: req.body.expression,
				description: result.description,
				result: result.value,
			});
		}

		res.json({ success: true, data: result, message: "Ok" });
	}
};

const convertController = async (req, res) => {
	const result = await math.convert(req.body);
	let user = jwt.decode(req.headers.authorization.split(" ")[1]);
	if (user) {
		history.saveAction({
			user_id: user.id,
			type: "Convert",
			date: new Date().toLocaleString(),
			expression: req.body.value,
			description: result.description,
			result: result.value,
		});
	}
	res.json({ success: true, data: result, message: "Ok" });
};
module.exports = { calculateController, convertController };
