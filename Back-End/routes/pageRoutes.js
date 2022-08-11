const express = require("express");

const pageControllers = require("../controllers/pageController");

const router = express.Router();

router.get("/", pageControllers.myPage);
router.post("/create", pageControllers.createMyPage);
router.get("/vehicles", pageControllers.vehicles);
router.post("/vehicles/add", pageControllers.addVehicles);


router.get("/hires", pageControllers.allHires);
router.get("/hire/:hId", pageControllers.hire);
router.post("/hire/:hId/accept", pageControllers.accHire);

module.exports = router;