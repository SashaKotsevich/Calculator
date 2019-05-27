const express = require("express");
const router = express.Router();
const {
	calculateController,
	convertController,
} = require("../controllers/operations");

router.post("/calculate", (req, res) => {
	calculateController(req, res);
});

router.post("/convert", (req, res) => {
	convertController(req, res);
});

module.exports = router;
