const express = require("express");

const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");
const vehicleSchema = require("../models/vehicleSchema");
const hireSchema = require("../models/hireSchema");

const { hashGenerate } = require("../helpers/hashing");
const { hashValidator } = require("../helpers/hashing");
const { tokenGenerator } = require("../helpers/token");

const mainId = "7777";
const utcTimestamp = new Date().getTime();

// logout http request
exports.logout = (req, res) => {
  res.clearCookie("ReonAuthJWT", { httpOnly: true });
  res.send("Logout Successfull!"); // redirect to home page (/)
  // res.redirect('/');
};

//Get user

exports.getUser = async (req, res) => {
  const user = await userSchema.userModel.find({ role: 0 });

  res.json(user);
};
// create user

exports.createUser = async (req, res) => {
  try {
    const existingUser = await userSchema.userModel.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      res.send(`Email address already exists!`);
    } else {
      const hashPassword = await hashGenerate(req.body.password);
      const utcTimestamp = new Date().getTime();
      const user = new userSchema.userModel({
        uId: mainId + utcTimestamp,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword,
        role: "0",
        statuses: "1", // statuses=0(blocked), statuses=1(active)
        statusComment: "user is created",
        isPage: "0",
        createDate: utcTimestamp,
        updateDate: utcTimestamp,
      });
      user.save();
      res.send(`User Create Successfull!`); // redirect to home page (/)
    }
  } catch (error) {
    res.send(`Something went wrong in user register` + error);
  }
};

//Block user

exports.blockUser = async (req, res) => {
  try {
    const user = await userSchema.userModel.findOne({ uId: req.params.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else {
      const blockedUser = await userSchema.userModel.findOneAndUpdate(
        { uId: req.params.uId },
        {
          $set: {
            statuses: "2",
            statusComment: "user is blocked",
            updateDate: utcTimestamp,
          },
        },
        { new: true }
      );

      res.json(blockedUser);
    }
  } catch (error) {
    res.send(error);
  }
};

//unblock user

exports.userUnblock = async (req, res) => {
  try {
    const user = await userSchema.userModel.findOne({ uId: req.params.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 1) {
      res.status(401).send("user is active");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else {
      const blockedUser = await userSchema.userModel.findOneAndUpdate(
        { uId: req.params.uId },
        {
          $set: {
            statuses: "1",
            statusComment: "user is actived",
            updateDate: utcTimestamp,
          },
        },
        { new: true }
      );

      res.json(blockedUser);
    }
  } catch (error) {
    res.send(error);
  }
};

// get pages

exports.getPage = async (req, res) => {
  const pages = await pageSchema.pageModel.find();

  res.json(pages);
};
//Create page

exports.createPage = async (req, res) => {
  try {
    const user = await userSchema.userModel.findOne({ uId: req.params.uId });
    const page = await pageSchema.pageModel.findOne({ uId: user.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (page || user.isPage == 1) {
      res.status(401).send("user already have a page");
    } else {
      const createPage = await pageSchema.pageModel.create({
        pId: mainId + utcTimestamp,
        uId: user.uId,
        pageName: req.body.pageName,
        phone: req.body.phone,
        address: req.body.address,
        link: mainId + utcTimestamp,
        statuses: "1",
        statusComment: "Page Create",
        createDate: utcTimestamp,
        updateDate: utcTimestamp,
        tempPageName: req.body.pageName,
        tempPhone: req.body.phone,
        tempAddress: req.body.address,
        tempLink: mainId + utcTimestamp,
      });

      await userSchema.userModel.findOneAndUpdate(
        { uId: user.uId },
        { $set: { isPage: "1", updateDate: utcTimestamp } },
        { new: true }
      );

      res.json(createPage);
    }
  } catch (error) {
    res.send(error);
  }
};

// Block page

exports.blockPage = async (req, res) => {
  try {
    const page = await pageSchema.pageModel.findOne({ pId: req.params.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is not approved");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else {
      const blockedPage = await pageSchema.pageModel.findOneAndUpdate(
        { pId: req.params.pId },
        {
          $set: {
            statuses: "2",
            statusComment: "page is blocked",
            updateDate: utcTimestamp,
          },
        },
        { new: true }
      );

      res.json(blockedPage);
    }
  } catch (error) {
    res.send(error);
  }
};

//Unblock page

exports.pageUnblock = async (req, res) => {
  try {
    const page = await pageSchema.pageModel.findOne({ pId: req.params.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is not approved");
    } else if (page.statuses == 1) {
      res.status(401).send("page is active");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else {
      const blockedPage = await pageSchema.pageModel.findOneAndUpdate(
        { pId: req.params.pId },
        {
          $set: {
            statuses: "1",
            statusComment: "page is actived",
            updateDate: utcTimestamp,
          },
        },
        { new: true }
      );

      res.json(blockedPage);
    }
  } catch (error) {
    res.send(error);
  }
};

// get vehicle

exports.getVehicle = async (req, res) => {
  const vehicles = await vehicleSchema.vehicleModel.find();

  res.json(vehicles);
};

//add vehicle to page

exports.addVehicle = async (req, res) => {
  try {
    const page = await pageSchema.pageModel.findOne({ pId: req.params.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is not approved");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else {
      const vehicle = await vehicleSchema.vehicleModel.create({
        vId: mainId + utcTimestamp,
        pId: page.pId,
        category: req.body.category,
        vehicleType: req.body.vehicleType,
        seats: req.body.seats,
        location: req.body.location,
        vehicleName: req.body.vehicleName,
        statuses: "1",
        statusComment: "vehicle added",
        createDate: utcTimestamp,
        updateDate: utcTimestamp,
        tempCategory: req.body.category,
        tempVehicleType: req.body.vehicleType,
        tempSeats: req.body.seats,
        tempLocation: req.body.location,
        tempVehicleName: req.body.vehicleName,
      });

      res.json(vehicle);
    }
  } catch (error) {
    res.send(error);
  }
};

//update Vehicle details

exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleSchema.vehicleModel.findOne({
      vId: req.params.vId,
    });
    const page = await pageSchema.pageModel.findOne({ pId: vehicle.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is not approved");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else if (!vehicle) {
      res.send("Vehicle not found");
    } else if (!vehicle.pId == page.pId) {
      res.send("id not match");
    } else if (vehicle.statuses == 0) {
      res.send("vehicle is not approved");
    } else if (vehicle.statuses == 4) {
      res.send("vehicle is not found");
    } else if (vehicle.statuses == 2) {
      res.send("vehicle is blocked");
    } else {
      const updatedVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
        { vId: req.params.vId },
        {
          $set: {
            category: req.body.category,
            vehicleType: req.body.vehicleType,
            seats: req.body.seats,
            location: req.body.location,
            vehicleName: req.body.vehicleName,
            tempCategory: req.body.category,
            tempVehicleType: req.body.vehicleType,
            tempSeats: req.body.seats,
            tempLocation: req.body.location,
            tempVehicleName: req.body.vehicleName,
            updateDate: utcTimestamp,
            statusComment: "vehicle updated",
          },
        },

        { new: true }
      );

      res.json(updatedVehicle);
    }
  } catch (error) {
    res.send(error);
  }
};

// delete vehicles

exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleSchema.vehicleModel.findOne({
      vId: req.params.vId,
    });
    const page = await pageSchema.pageModel.findOne({ pId: vehicle.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is not approved");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else if (!vehicle) {
      res.send("Vehicle not found");
    } else if (vehicle.pId !== page.pId) {
      res.send("id not match");
    } else if (vehicle.statuses == 4) {
      res.send("vehicle is not deleted");
    } else if (vehicle.statuses == 0) {
      res.send("vehicle is not approved");
    } else if (vehicle.statuses == 2) {
      res.send("vehicle is blocked");
    } else {
      const deletedVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
        { vId: req.params.vId },
        {
          $set: {
            statuses: "4",
            statusComment: "vehicle deleted",
            updateDate: utcTimestamp,
          },
        },
        { new: true }
      );
      res.json(deletedVehicle);
    }
  } catch (error) {
    res.send(error);
  }
};

//Block Vehicle

exports.blockVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleSchema.vehicleModel.findOne({
      vId: req.params.vId,
    });
    const page = await pageSchema.pageModel.findOne({ pId: vehicle.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is pending");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else if (!vehicle) {
      res.send("Vehicle not found");
    } else if (vehicle.pId !== page.pId) {
      res.send("id not match");
    } else if (vehicle.statuses == 4) {
      res.send("vehicle is not deleted");
    } else if (vehicle.statuses == 0) {
      res.send("vehicle is not approved");
    } else if (vehicle.statuses == 2) {
      res.send("vehicle is blocked");
    } else {
      const blockedVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
        { vId: req.params.vId },
        { $set: { statuses: "2", statusComment: "vehicle is blocked" } },
        { new: true }
      );

      res.json(blockedVehicle);
    }
  } catch (error) {
    res.send(error);
  }
};

// Unblock vehicle

exports.vehicleUnblock = async (req, res) => {
  try {
    const vehicle = await vehicleSchema.vehicleModel.findOne({
      vId: req.params.vId,
    });
    const page = await pageSchema.pageModel.findOne({ pId: vehicle.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is pending");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else if (!vehicle) {
      res.send("Vehicle not found");
    } else if (vehicle.pId !== page.pId) {
      res.send("id not match");
    } else if (vehicle.statuses == 4) {
      res.send("vehicle is deleted");
    } else if (vehicle.statuses == 0) {
      res.send("vehicle is not approved");
    }else if (vehicle.statuses == 1 || vehicle.statuses == 3) {
      res.send("vehicle is active");
    } else {
      const blockedVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
        { vId: req.params.vId },
        { $set: { statuses: "1", statusComment: "vehicle is actived" } },
        { new: true }
      );

      res.json(blockedVehicle);
    }
  } catch (error) {
    res.send(error);
  }
};

//Get admin

exports.getAdmin = async (req, res) => {
  const user = await userSchema.userModel.find({ role: 1 });

  res.json(user);
};

// Create admin

exports.createAdmin = async (req, res) => {
  try {
    const existingUser = await userSchema.userModel.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      res.send(`Email address already exists!`);
    } else {
      const hashPassword = await hashGenerate(req.body.password);
      const utcTimestamp = new Date().getTime();
      const admin = new userSchema.userModel({
        uId: mainId + utcTimestamp,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword,
        role: "1",
        statuses: "1", // statuses=0(blocked), statuses=1(active)
        isPage: "0",
        createDate: utcTimestamp,
        updateDate: utcTimestamp,
      });
      user.save();
      await res.json(admin); // redirect to home page (/)
    }
  } catch (error) {
    res.send(`Something went wrong in admin register` + error);
  }
};

//Dashboard

// get pending pages

exports.getPendingPage = async (req, res) => {
  const pendingPage = await pageSchema.pageModel.find({ statuses: 0 });

  res.json(pendingPage);
};

// approve pending page

exports.approvePendingPage = async (req, res) => {
  try {
    const page = await pageSchema.pageModel.findOne({ pId: req.params.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 1) {
      res.status(401).send("page is approved");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else {
      const approvePage = await pageSchema.pageModel.findOneAndUpdate(
        { pId: req.params.pId },
        {
          $set: {
            statuses: "1",
            statusComment: "page is approved",
            updateDate: utcTimestamp,
          },
        },
        { new: true }
      );

      res.json(approvePage);
    }
  } catch (error) {
    res.send(error);
  }
};

// get pending vehicle

exports.getPendingVehicle = async (req, res) => {
  const pendingVehicle = await vehicleSchema.vehicleModel.find({ statuses: 0 });

  res.json(pendingVehicle);
};

// approve pending vehicle

exports.approvePendingVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleSchema.vehicleModel.findOne({
      vId: req.params.vId,
    });
    const page = await pageSchema.pageModel.findOne({ pId: vehicle.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is not approved");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else if (!vehicle) {
      res.send("Vehicle not found");
    } else if (vehicle.pId !== page.pId) {
      res.send("id not match");
    } else if (vehicle.statuses == 3) {
      res.send("vehicle is approved");
    } else if (vehicle.statuses == 1) {
      res.send("vehicle is  approved");
    } else if (vehicle.statuses == 4) {
      res.send("vehicle is deleted");
    } else if (vehicle.statuses == 2) {
      res.send("vehicle is blocked");
    } else {
      const approveVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
        { vId: req.params.vId },
        {
          $set: {
            statuses: "1",
            statusComment: "vehicle is approved",
            updateDate: utcTimestamp,
          },
        },
        { new: true }
      );

      res.json(approveVehicle);
    }
  } catch (error) {
    res.send(error);
  }
};

//Get all pending update vehicles

exports.getPendingVehicleUpdate = async (req, res) => {
  const getVehicle = await vehicleSchema.vehicleModel.find({ statuses: 3 });
  res.json(getVehicle);
};

//Update user update request

exports.updateUserUpdatedVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleSchema.vehicleModel.findOne({
      vId: req.params.vId,
    });
    const page = await pageSchema.pageModel.findOne({ pId: vehicle.pId });
    const user = await userSchema.userModel.findOne({ uId: page.uId });

    if (!user) {
      res.status(401).send("user not found");
    } else if (user.statuses == 2 || user.statuses == 0) {
      res.status(401).send("user is blocked");
    } else if (user.statuses == 4) {
      res.status(401).send("user is deleted");
    } else if (!page) {
      res.send("page not found");
    } else if (page.statuses == 0) {
      res.status(401).send("page is not approved");
    } else if (page.statuses == 2) {
      res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      res.status(401).send("page is deleted");
    } else if (vehicle.statuses == 0) {
      res.send("vehicle is not approved");
    } else if (vehicle.statuses == 1) {
      res.send("vehicle is  approved");
    } else if (vehicle.statuses == 4) {
      res.send("vehicle is deleted");
    } else if (vehicle.statuses == 2) {
      res.send("vehicle is blocked");
    } else {
      const updatedVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
        { vId: req.params.vId },
        {
          $set: {
            category: vehicle.tempCategory,
            vehicleType: vehicle.tempVehicleType,
            seats: vehicle.tempSeats,
            location: vehicle.tempLocation,
            vehicleName: vehicle.tempVehicleName,
            statuses: "1",
            statusComment: "vehicle updated",
            updateDate: utcTimestamp,
          },
        },
        { new: true }
      );

      res.json(updatedVehicle);
    }
  } catch (error) {
    res.send(error);
  }
};

// get hired details

exports.getHiredDetails = async (req, res) => {
  const hiredDetails = await hireSchema.carHireModel.find({ isConfirm: 1 });

  res.json(hiredDetails);
};
