const express = require("express");

const userControllers = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userControllers.signup);
router.post("/signin", userControllers.signin);

module.exports = router;