const express = require("express");

const userControllers = require("../controllers/userController");
const {userAuth} = require("../helpers/userAuth")

const router = express.Router();

router.post("/signup", userControllers.signup);
router.post("/signin", userControllers.signin);
// router.get("/mypage", userControllers.mypage);
router.post("/mypage/create", userControllers.createMyPage);
router.get("/logout", userControllers.logout);


module.exports = router;