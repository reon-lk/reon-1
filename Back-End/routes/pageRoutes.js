const express = require("express");

const pageControllers = require("../controllers/pageControllers");
const {userAuth} = require("../helpers/userAuth")

const router = express.Router();

router.get("/",userAuth, pageControllers.getPage);
router.post("/add",userAuth, pageControllers.addVehicle);
router.patch("/edit/:vId",userAuth, pageControllers.updateVehicle);
router.patch("/delete/:vId",userAuth, pageControllers.deleteVehicle);
module.exports = router;