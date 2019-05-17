var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res) {
	res.send("respond with a resource");
});
router.post("/", (req, res) => {
	res.json(req.body);
});

module.exports = router;
