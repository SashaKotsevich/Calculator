const math = require("../services/parser");
const calculateController = async (req, res) => {
	console.log("calc");
	let result;
	try {
		result = await math.parse(req.body.text);
	} catch (e) {
		res.json(e.message);
	}
	res.json(result);
};
module.exports = { calculateController };
