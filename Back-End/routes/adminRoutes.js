const express = require("express");

const adminControllers = require("../controllers/adminControllers");

const { adminAuth } = require("../helpers/adminAuth");
const { userValidator, validate } = require("../helpers/validator");

const router = express.Router();
router.get("/logout", adminAuth, adminControllers.logout);

router.get(
  "/dashboard/pendingPages",
  adminAuth,
  adminControllers.getPendingPage
);
router.patch(
  "/dashboard/pendingPages/approve/:pId",
  adminAuth,
  adminControllers.approvePendingPage
);

router.get(
  "/dashboard/pendingVehicles",
  adminAuth,
  adminControllers.getPendingVehicle
);
router.patch(
  "/dashboard/pendingVehicles/approve/:vId",
  adminAuth,
  adminControllers.approvePendingVehicle
);

router.get(
  "/dashboard/updatePendingVehicles",
  adminAuth,
  adminControllers.getPendingVehicleUpdate
);
router.patch(
  "/dashboard/updatePendingVehicles/update/:vId",
  adminAuth,
  adminControllers.updateUserUpdatedVehicle
);

router.get(
  "/dashboard/hireDetails",
  adminAuth,
  adminControllers.getHiredDetails
);

router.get("/user", adminAuth, adminControllers.getUser);
router.post(
  "/user/create",
  adminAuth,
  userValidator,
  validate,
  adminControllers.createUser
);
router.patch("/user/block/:uId", adminAuth, adminControllers.blockUser);
router.patch("/user/unblock/:uId", adminAuth, adminControllers.userUnblock);

router.get("/admin", adminAuth, adminControllers.getAdmin);
router.post(
  "/admin/create",
  adminAuth,
  userValidator,
  validate,
  adminControllers.createAdmin
);

router.get("/pages", adminAuth, adminControllers.getPage);
router.post("/pages/create/:uId", adminAuth, adminControllers.createPage);
router.patch("/pages/block/:pId", adminAuth, adminControllers.blockPage);
router.patch("/pages/unblock/:pId", adminAuth, adminControllers.pageUnblock);

router.get("/vehicles", adminAuth, adminControllers.getVehicle);
router.post("/vehicles/add/:pId", adminAuth, adminControllers.addVehicle);
router.patch("/vehicles/edit/:vId", adminAuth, adminControllers.updateVehicle);
router.patch(
  "/vehicles/delete/:vId",
  adminAuth,
  adminControllers.deleteVehicle
);
router.patch("/vehicles/block/:vId", adminAuth, adminControllers.blockVehicle);
router.patch(
  "/vehicles/unblock/:vId",
  adminAuth,
  adminControllers.vehicleUnblock
);

module.exports = router;
