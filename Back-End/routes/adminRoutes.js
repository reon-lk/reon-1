const express = require("express");

const adminControllers = require("../controllers/adminControllers")

const {adminAuth} = require("../helpers/adminAuth")

const router = express.Router();
router.get("/logout", adminAuth, adminControllers.logout)

router.get("/dashboard/pendingPages", adminAuth, adminControllers.getPendingPage)
router.patch("/dashboard/pendingPages/approve/:pId", adminAuth, adminControllers.approvePendingPage)

router.get("/dashboard/pendingVehicles", adminAuth, adminControllers.getPendingVehicle)
router.patch("/dashboard/pendingVehicles/approve/:vId", adminAuth, adminControllers.approvePendingVehicle)

router.get("/user", adminAuth, adminControllers.getUser)
router.post("/user/create", adminAuth, adminControllers.createUser)
router.patch("/user/block/:uId", adminAuth, adminControllers.blockUser)

router.get("/admin", adminAuth, adminControllers.getAdmin)
router.post("/admin/create", adminAuth, adminControllers.createAdmin)

router.get("/pages", adminAuth, adminControllers.getPage)
router.post("/pages/create/:uId", adminAuth, adminControllers.createPage)
router.patch("/pages/block/:pId", adminAuth, adminControllers.blockPage)

router.get("/vehicles", adminAuth, adminControllers.getVehicle)
router.post("/vehicles/add/:pId", adminAuth, adminControllers.addVehicle)
router.patch("/vehicles/edit/:vId", adminAuth, adminControllers.updateVehicle)
router.patch("/vehicles/delete/:vId", adminAuth, adminControllers.deleteVehicle)
router.patch("/vehicles/block/:vId", adminAuth, adminControllers.blockVehicle)

module.exports = router;