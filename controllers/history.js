const history = require("../services/history");

const getHistory = async (req, res) => {
	const result = await history.getUserHistory(req.user._id);
	res.json({ success: true, data: result });
};

module.exports = {
	getHistory,
};
