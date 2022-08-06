const express = require("express");

const userControllers = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userControllers.signup);
router.post("/signin", userControllers.signin);
router.get("/mypage", userControllers.mypage);
router.post("/mypage/create", userControllers.createMyPage);

module.exports = router;