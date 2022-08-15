const express = require("express");

const pageControllers = require("../controllers/pageControllers");
const {pageAuth} = require("../helpers/pageAuth")

const router = express.Router();

router.get("/",pageAuth, pageControllers.getPage);
router.post("/add",pageAuth, pageControllers.addVehicle);
router.patch("/edit/:vId",pageAuth, pageControllers.updateVehicle);
router.patch("/delete/:vId",pageAuth, pageControllers.deleteVehicle);

router.get("/hire", pageAuth, pageControllers.hireRequests)
router.patch("/hire/:hId/accept", pageAuth, pageControllers.acceptHires)
module.exports = router;