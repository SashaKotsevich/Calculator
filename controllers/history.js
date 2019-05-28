const history = require("../services/history");

const getHistory = async (req, res) => {
	if (req.user) {
		const result = await history.getUserHistory(req.user._id);
		res.json({ success: true, data: result });
	} else {
		res.status = 401;
		res.send();
	}
};

module.exports = {
	getHistory,
};
