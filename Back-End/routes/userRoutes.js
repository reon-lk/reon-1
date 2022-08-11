const express = require("express");

const userControllers = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userControllers.signup);
router.post("/signin", userControllers.signin);
router.get("/logout", userControllers.logout);

router.get("/vehicles", userControllers.vehicles);
router.get("/vehicle/:vId", userControllers.vehicle);

router.post("/hire/:vId", userControllers.hireVehicles);

module.exports = router;