const Action = require("../models/action");

const saveAction = async action => {
	const newAction = new Action({
		...action,
	});
	newAction.save();
};
const getUserHistory = async id => {
	const result = await Action.find({ user_id: id });

	return result;
};
module.exports = {
	saveAction,
	getUserHistory,
};
