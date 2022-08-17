const express = require("express");

const userVerify = require("../helpers/userVerify");
const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");
const vehicleSchema = require("../models/vehicleSchema");
const hireSchema = require("../models/hireSchema");

const { hashGenerate } = require("../helpers/hashing");
const { hashValidator } = require("../helpers/hashing");
const { tokenGenerator } = require("../helpers/token");

const mainId = "7777";
const utcTimestamp = new Date().getTime();

// user signup http request
exports.signup = async (req, res) => {
  try {
    const existingUser = await userSchema.userModel.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      res.send(`Email address already exists!`);
    } else {
      const hashPassword = await hashGenerate(req.body.password);
      var utcTimestamp = new Date().getTime();
      const user = new userSchema.userModel({
        uId: mainId + utcTimestamp,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword,
        role: "0",
        statuses: "1", // statuses=0(blocked), statuses=1(active)
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

// user, admin signin http request
exports.signin = async (req, res) => {
  try {
    const existingUser = await userSchema.userModel.findOne({
      email: req.body.email,
    });
    if (!existingUser) {
      res.send("Email is invalid!");
    } else {
      const checkUser = await hashValidator(
        req.body.password,
        existingUser.password
      );
      if (!checkUser) {
        res.send("Password is invalid");
      } else {
        if (existingUser.statuses == 0) {
          res.send(
            "Your Account is blocked! Contact us if you want to recover your account"
          ); // redirect to home page (/)
        } else {
          const userName = existingUser.firstName;
          const userEmail = existingUser.email;
          const checkUserVerify = await userVerify.userVerify1(userEmail);
          const token = await tokenGenerator(checkUserVerify.email);
          res.cookie("ReonAuthJWT", token, { httpOnly: true });
          if (existingUser.role == 0) {
            res.send(userName + ` Login successful! Your Token is ` + token); // redirect to hire page (/hire)
          } else {
            res.send(
              userName +
                ` Login successful! You are a admin. Your Token is ` +
                token
            ); // redirect to admin portal (/)
          }
        }
      }
    }
  } catch (error) {
    res.send(`Something went wrong in user signin` + error);
  }
};

// logout http request
exports.logout = (req, res) => {
  res.clearCookie("ReonAuthJWT", { httpOnly: true });
  res.send("Logout Successfull!"); // redirect to home page (/)
  // res.redirect('/');
};



// hire a vehicle http reques// all vehicles http request
exports.vehicles = async (req, res) => {
  const allVehicles = await vehicleSchema.vehicleModel.find({ statuses: "1" });
  res.send(allVehicles);
};

// exports.vehicleByCategory = async (req, res) => {
//   let filter = {};

//   if (req.query.category) {
//     filter = { category: req.query.category.split(",") };
//   }

//   const vehicles = await vehicleSchema.vehicleModel.find({
//     filter,
//     statuses: "1",
//   });

//   if (!vehicles) {
//     res.status(500).json({ sucess: false });
//   }
//   res.send(vehicles);
// };

exports.vehicleByType = async (req, res) => {
  let filter = {};

  try {
    if (req.query.vehicleTypes) {
      filter = req.query.vehicleTypes.split(",") ;
    }
  
    const vehicles = await vehicleSchema.vehicleModel.find({
      vehicleType:{$in:filter},
      statuses: {$in:[1,3]},
    });
  
    if (!vehicles) {
      res.status(500).json({ sucess: false });
    }
    res.json(vehicles);
  } catch (error) {
    res.send(error)
  }

  
};

exports.vehicleByLocation = async (req, res) => {
  let filter = {};

  if (req.query.location) {
    filter = req.query.location.split(",") 
  }

  const vehicles = await vehicleSchema.vehicleModel.find({
    location: {$in:filter},
    statuses: {$in:[1,3]},
  });

  if (!vehicles) {
    res.status(500).json({ sucess: false });
  }
  res.send(vehicles);
};

// filter

exports.filter = async (req, res) => {
  const filter = {}
  const {category,vehicleType,location} = req.query;
  

  if (category) {
    filter.category = category
  }

  if (vehicleType) {
    filter.vehicleType = vehicleType
  }

  if (location) {
    filter.location = location
  }

filter.statuses = {$in:[1,3]}

  const vehicles = await vehicleSchema.vehicleModel.find(filter);

  if(!vehicles){
  res.status(500).send({sucess:false})
  }
  
  res.json(vehicles)
}

// vehicle hire request
exports.hireVehicles = async (req, res) => {
  const vehicle = await vehicleSchema.vehicleModel.findOne({
    vId: req.params.vId,
    statuses: "1",
  });

  const carHire = new hireSchema.carHireModel({
    hId: mainId + utcTimestamp,
    vId: vehicle.vId,
    uId: req.user.uId,
    pId: vehicle.pId,
    to: req.body.to,
    from: req.body.from,
    time: req.body.time,
    isAccept: "0",
    acceptAmount: 0,
    acceptTime: "0",
    isConform: "0",
    conformTime: "0",
    createDate: utcTimestamp,
  });
  carHire.save();
  res.send(`Hired successfull! Please wait for driver accept`); // redirect to home page (/)
};

// Get accepted hire requests

exports.acceptedRequest = async (req, res) => {
  const requests = await hireSchema.carHireModel.find({
    uId: req.user.uId,
    isAccept: "1",
  });

  if (!requests) {
    res.status(500).json({ sucess: false });
  }

  res.json(requests);
};

//confirm the hire request

exports.confirmRequest = async (req, res) => {
  const pageHire = await hireSchema.carHireModel.findOne({
    hId: req.params.hId,
  });

  const user = await userSchema.userModel.findOne({ uId: pageHire.uId });

  const checkUser = user.uId == req.user.uId;

  if (!checkUser) {
    return res.status(401).send("user not authorized");
  }

  const confirmHire = await hireSchema.carHireModel.findOneAndUpdate(
    { hId: req.params.hId },
    {
      $set: {
        isConfirm: "1",
        confirmTime: utcTimestamp,
      },
    },
    { new: true }
  );

  res.json(confirmHire)
};
