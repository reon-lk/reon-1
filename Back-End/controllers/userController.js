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

// check myPage Status http request
exports.mypage = async (req, res) => {
  try {
    const ReonAuthJWT = req.cookies.ReonAuthJWT;
    const checkUserVerify = await userVerify.userVerify2(ReonAuthJWT);

    if (checkUserVerify.isPage == 1) {
      res.send("You already have REON page!"); // redirect to user page for owner page (/user/myPage)
    } else {
      res.send(
        "You don't have REON page! Go to '/myPage/create' for create new Page"
      ); // redirect to create page for owner page (/mypage/create)
      // res.redirect("/user/myPage/create");
    }
  } catch (error) {
    res.send(error);
  }
};

// create myPage http request
exports.createMyPage = async (req, res) => {
  try {
    const ReonAuthJWT = req.cookies.ReonAuthJWT;
    const checkUserVerify = await userVerify.userVerify2(ReonAuthJWT);
    const checkPage = await userSchema.userModel.findOne({
      uId: checkUserVerify.uId,
    });
    if (checkPage.isPage == 1) {
      res.send("You are already have a reon page!");
    } else {
      const existingPage = await pageSchema.pageModel.findOne({
        phone: req.body.phone,
      });
      if (existingPage) {
        res.send("Phone no already exists!");
      } else {
        const uId = checkUserVerify.uId;
        const page = new pageSchema.pageModel({
          pId: mainId + utcTimestamp,
          uId: checkUserVerify.uId,
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
          { uId: checkUserVerify.uId },
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

// hire a vehicle http reques// all vehicles http request
exports.vehicles = async (req, res) => {
  const allVehicles = await vehicleSchema.vehicleModel.find({ statuses: "1" });
  res.send(allVehicles);
};

exports.vehicleByCategory = async (req, res) => {
  let filter = {};

  if (req.query.category) {
    filter = { vehicleType: req.query.vehicleType.split(",") };
  }

  const vehicles = await vehicleSchema.vehicleModel.find({
    category: filter,
    statuses: "1",
  });

  if (!vehicles) {
    res.status(500).json({ sucess: false });
  }
  res.send(vehicles);
};

exports.vehicleByType = async (req, res) => {
  let filter = {};

  if (req.query.vehicleType) {
    filter = { vehicleType: req.query.vehicleType.split(",") };
  }

  const vehicles = await vehicleSchema.vehicleModel.find({
    vehicleType: filter,
    statuses: "1",
  });

  if (!vehicles) {
    res.status(500).json({ sucess: false });
  }
  res.send(vehicles);
};

exports.vehicleByLocation = async (req, res) => {
  let filter = {};

  if (req.query.location) {
    filter = { location: req.query.location.split(",") };
  }

  const vehicles = await vehicleSchema.vehicleModel.find({
    location: filter,
    statuses: "1",
  });

  if (!vehicles) {
    res.status(500).json({ sucess: false });
  }
  res.send(vehicles);
};

// a vehicle http request
exports.vehicle = async (req, res) => {
  const vehicle = await pageSchema.vehicleModel.findOne({
    vId: req.params.vId,
    statuses: "1",
  });
  res.send(vehicle);
};

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

  const confirmHire = await hireSchema.carHireModel.findOne(
    { hId: req.params.hId },
    {
      $set: {
        isConfirm: "1",
        confirmTime: utcTimestamp,
      },
    },
    { new: true }
  );
};
