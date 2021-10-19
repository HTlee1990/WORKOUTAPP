const express = require("express");
const Callback = require("../controllers/Callback");
const router = express.Router();

router.post("/callback", Callback);

module.exports = router;
