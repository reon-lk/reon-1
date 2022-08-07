const express = require("express");

const pageControllers = require("../controllers/pageController");

const router = express.Router();

router.get("/", pageControllers.myPage);
router.post("/create", pageControllers.createMyPage);
router.get("/vehicles", pageControllers.vehicles);
router.post("/vehicles/add", pageControllers.addVehicles);

module.exports = router;