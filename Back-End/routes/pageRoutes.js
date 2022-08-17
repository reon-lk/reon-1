const express = require("express");

const pageControllers = require("../controllers/pageControllers");
const {pageAuth} = require("../helpers/pageAuth")
const { userAuth } = require("../helpers/userAuth");

const router = express.Router();

router.get("/",pageAuth, pageControllers.getPage);
router.post("/create",userAuth, pageControllers.createMyPage);
router.post("/add",pageAuth, pageControllers.addVehicle);
router.patch("/edit/:vId",pageAuth, pageControllers.updateVehicle);
router.patch("/delete/:vId",pageAuth, pageControllers.deleteVehicle);

router.get("/hire", pageAuth, pageControllers.hireRequests)
router.patch("/hire/accept/:hId", pageAuth, pageControllers.acceptHires)
module.exports = router;