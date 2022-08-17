const express = require("express");

const userControllers = require("../controllers/userController");
const { userAuth } = require("../helpers/userAuth");
const { userValidator, validate } = require("../helpers/validator");
const router = express.Router();

router.post("/signup", userValidator, validate, userControllers.signup);
router.post("/signin", userControllers.signin);
router.get("/logout", userAuth, userControllers.logout);

// router.get("/", userControllers.vehicles);
// router.get("/", userControllers.vehicleByCategory);
// router.get("/", userControllers.vehicleByType);
// router.get("/", userControllers.vehicleByLocation);
router.get("/", userControllers.filter)
router.post("/hire/:vId", userAuth, userControllers.hireVehicles);
router.get("/hired/:hId", userAuth, userControllers.acceptedRequest)
router.patch("/accept/:hId", userAuth, userControllers.confirmRequest)

module.exports = router;
