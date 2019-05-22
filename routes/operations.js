const express = require("express");
const router = express.Router();
const { calculateController } = require("../controllers/operations");

router.post("/calculate", (req, res) => {
	calculateController(req, res);
});

module.exports = router;
