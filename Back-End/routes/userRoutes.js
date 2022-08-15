const express = require("express");

const userControllers = require("../controllers/userController");
const { userAuth } = require("../helpers/userAuth");
const { userValidator, validate } = require("../helpers/validator");
const router = express.Router();

router.post("/signup", userValidator, validate, userControllers.signup);
router.post("/signin", userControllers.signin);
// router.get("/mypage", userControllers.mypage);
router.post("/mypage/create", userControllers.createMyPage);
router.get("/logout", userAuth, userControllers.logout);

router.get("/", userControllers.vehicles);
router.get("/", userControllers.vehicleByCategory);
router.get("/", userControllers.vehicleByType);
router.get("/", userControllers.vehicleByLocation);
router.post("/hire/:vId", userAuth, userControllers.hireVehicles);
router.patch("/accept/:hId", userAuth, userControllers.confirmRequest)

module.exports = router;
