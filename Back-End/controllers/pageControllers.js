const express = require("express");

const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");
const vehicleSchema = require("../models/vehicleSchema");
const hireSchema = require("../models/hireSchema");

const mainId = "7777";


// Get page
exports.getPage = async (req, res) => {
  const page = await pageSchema.pageModel.findOne({ uId: req.user.uId });

  try {
    const vehicles = await vehicleSchema.vehicleModel.find({
      pId: page.pId,
      statuses: {$in:[1,3]},
      
    });
    res.json(vehicles);
  } catch (error) {
    res.send(error);
  }
};

// create myPage http request
exports.createMyPage = async (req, res) => {
  try {
  
    
    const checkPage = await userSchema.userModel.findOne({
      uId: req.user.uId,
    });
    const utcTimestamp = new Date().getTime();
    if (checkPage.isPage == 1) {
      res.send("You are already have a reon page!");
    } else {
      const existingPage = await pageSchema.pageModel.findOne({
        phone: req.body.phone,
      });
      if (existingPage) {
        res.send("Phone no already exists!");
      } else {
      
        const page = new pageSchema.pageModel({
          pId: mainId + utcTimestamp,
          uId: req.user.uId,
          pageName: req.body.pageName,
          phone: req.body.phone,
          address: req.body.address,
          link: mainId + utcTimestamp,
          statuses: "0",
          statusComment: "Page Created",
          createDate: utcTimestamp,
          updateDate: utcTimestamp,
          tempPageName: req.body.pageName,
          tempPhone: req.body.phone,
          tempAddress: req.body.address,
          tempLink: mainId + utcTimestamp,
        });

        page.save();
        userSchema.userModel.findOneAndUpdate(
          { uId: req.user.uId },
          { $set: { isPage: "1", updateDate: utcTimestamp } },
          { new: true },
          (err, doc) => {
            res.send(
              `Your page create successfull! Please wait for admin approval`
            ); // redirect to hire page (/hire)
            // res.send('This is !');
          }
        );
      }
    }
  } catch (error) {
    res.send(error);
  }
};

//Add vehicle in the page

exports.addVehicle = async (req, res) => {
  try {
    const page = await pageSchema.pageModel.findOne({ uId: req.user.uId });
    const utcTimestamp = new Date().getTime();

    const vehicle = await vehicleSchema.vehicleModel.create({
      vId: mainId + utcTimestamp,
      pId: page.pId,
      category: req.body.category,
      vehicleType: req.body.vehicleType,
      seats: req.body.seats,
      location: req.body.location,
      vehicleName: req.body.vehicleName,
      statuses: "0",
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
    const page = await pageSchema.pageModel.findOne({ uId: req.user.uId });
    const utcTimestamp = new Date().getTime();

    if (!vehicle) {
      res.send("Vehicle not found");
    } else if (vehicle.pId !== page.pId) {
      res.send("user not authorized");
    } else if (vehicle.statuses == 4) {
      res.send("vehicle is not found");
    } else if (vehicle.statuses == 0) {
      res.send("vehicle is not approved");
    } else if (vehicle.statuses == 2) {
      res.send("vehicle is blocked");
    } else {
      const updatedVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
        { vId: req.params.vId },
        {
          $set: {
            tempCategory: req.body.category,
            tempVehicleType: req.body.vehicleType,
            tempSeats: req.body.seats,
            tempLocation: req.body.location,
            tempVehicleName: req.body.vehicleName,
            statuses: "3",
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

//delete vehicle

exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleSchema.vehicleModel.findOne({
      vId: req.params.vId,
    });
    const page = await pageSchema.pageModel.findOne({ uId: req.user.uId });
    const utcTimestamp = new Date().getTime();

    if (!vehicle) {
      res.send("Vehicle not found");
    } else if (vehicle.pId !== page.pId) {
      res.send("user not authorized");
    } else if (vehicle.statuses == 4) {
      res.send("vehicle is not found");
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
            statusComment: "vehicle is deleted",
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

exports.hireRequests = async (req, res) => {
  const page = await pageSchema.pageModel.findOne({uId: req.user.uId})
  const allHires = await hireSchema.carHireModel.find({ pId: page.pId });
  if(!allHires) {
    res.send("not found")
  }
  res.send(allHires);
};

// accept hires

exports.acceptHires = async (req, res) => {
  const pageHire = await hireSchema.carHireModel.findOne({
    hId: req.params.hId,
  });
  const vehicle = await vehicleSchema.vehicleModel.findOne({
    vId: pageHire.vId,
  });
  const checkPage = await pageSchema.pageModel.findOne({ pId: vehicle.pId });
  const checkUser = await userSchema.userModel.findOne({ uId: checkPage.uId });
  const checkUserPage = checkUser.uId == req.user.uId;
  const utcTimestamp = new Date().getTime();

  if (!checkUserPage) {
   return res.status(401).send("user not authorized");
  }

  const accept = await hireSchema.carHireModel.findOneAndUpdate(
    { hId: req.params.hId },
    {
      $set: {
        isAccept: "1",
        acceptAmount: req.body.price,
        acceptTime: utcTimestamp,
      },
    },
    {new: true}
  );
  res.json(accept);
};
