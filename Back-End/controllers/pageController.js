const express = require("express");

const userVerify = require("../helpers/userVerify");
const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");
const hireSchema = require("../models/hireSchema");

const mainId = "7777";

// check myPage Status http request
exports.myPage = async (req, res) => {
    try{
        const ReonAuthJWT = req.cookies.ReonAuthJWT;
        const checkUserVerify = await userVerify.userVerify2(ReonAuthJWT);
        if (checkUserVerify.isPage == 1) {
            res.send("You already have REON page!"); // redirect to user page for owner page (/user/myPage)
        } else {
            res.send("You don't have REON page! Go to '/myPage/create' for create new Page"); // redirect to create page for owner page (/mypage/create)
            // res.redirect("/user/myPage/create");
        }
    }catch(error){
        res.send(error);
    }
};

// create myPage http request
exports.createMyPage = async(req, res) => {
    try{
        const ReonAuthJWT = req.cookies.ReonAuthJWT;
        const checkUserVerify = await userVerify.userVerify2(ReonAuthJWT);
        const checkPage = await userSchema.userModel.findOne({uId:checkUserVerify.uId});
        if (checkPage.isPage == 1) {
            res.send("You are already have a reon page!");
        } else {
            const existingPage = await pageSchema.pageModel.findOne({phone:req.body.phone});
            if (existingPage) {
                res.send("Phone no already exists!");
            } else {
                const utcTimestamp = new Date().getTime();
                const page = new pageSchema.pageModel({
                    pId : mainId + utcTimestamp,
                    uId : checkUserVerify.uId,
                    name : req.body.name,
                    description : req.body.description,
                    phone : req.body.phone,
                    link : mainId + utcTimestamp,
                    statuses: "0",
                    statusComment : "User Create",
                    tempName : req.body.name,
                    tempDescription : req.body.description,
                    tempPhone : req.body.phone,
                    tempLink : mainId + utcTimestamp,
                    createDate : utcTimestamp,
                    updateDate : utcTimestamp
                });
                        
                page.save();
                userSchema.userModel.findOneAndUpdate({uId: checkUserVerify.uId}, {$set:{"isPage":"1", "updateDate":utcTimestamp}}, {new: true}, (err, doc) => {
                    res.send(`Your page create successfull! Please wait for admin approval`); // redirect to hire page (/hire)
                    // res.send('This is !');
                })
            }
        }
    }catch(error){
        res.send(error);
    }
};

// check my vehicles Status http request
exports.vehicles = async (req, res) => {
    try{
        const ReonAuthJWT = req.cookies.ReonAuthJWT;
        const checkUserVerify = await userVerify.userVerify3(ReonAuthJWT);
        const pageVehicles = await pageSchema.vehicleModel.find({pId:checkUserVerify.pId});
        // if (!pageVehicles) {
        //     res.send("You don't have any vehicle!");
        // } else {
            res.send(pageVehicles);
        // }
    }catch(error){
        res.send(error);
    }
};

// create vehicles http request
exports.addVehicles = async (req, res) => {
    try{
        const ReonAuthJWT = req.cookies.ReonAuthJWT;
        const checkUserVerify = await userVerify.userVerify3(ReonAuthJWT);
        const utcTimestamp = new Date().getTime();
        const vehicle = new pageSchema.vehicleModel({
            vId : mainId + utcTimestamp,
            pId : checkUserVerify.pId,
            type : req.body.type,
            vehicleNo : req.body.vehicleNo,
            name : req.body.name,
            description : req.body.description,
            fuelType : req.body.fuelType,
            acType : req.body.acType,
            statuses: "0",
            statusComment : "User Create",
            tempName : req.body.name,
            tempDescription : req.body.description,
            tempFuelType : req.body.fuelType,
            temptempAcType : req.body.acType,
            createDate : utcTimestamp,
            updateDate : utcTimestamp
        });
                        
        vehicle.save();
        res.send(`Your vehicle added successfull! Please wait for admin approval`); // redirect to my page (/mypage)

    }catch(error){
        res.send(error);
    }
};

// all hire
exports.allHires = async (req, res) => {
    try {
        const ReonAuthJWT = req.cookies.ReonAuthJWT;
        const checkUserVerify = await userVerify.userVerify3(ReonAuthJWT);
        const allHires = await hireSchema.carHireModel.find({pId:checkUserVerify.pId})
        res.send(allHires);
    } catch (error) {
        res.send(error);
    }
};

// hire
exports.hire = async (req, res) => {
    try {
        const ReonAuthJWT = req.cookies.ReonAuthJWT;
        const hireId = req.params.hId;
        const checkUserVerify = await userVerify.userVerify4(ReonAuthJWT, hireId);
        res.send(checkUserVerify);
    } catch (error) {
        res.send(error);
    }
};


// hire
exports.accHire = async (req, res) => {
    try {
        const ReonAuthJWT = req.cookies.ReonAuthJWT;
        const hireId = req.params.hId;
        const checkUserVerify = await userVerify.userVerify5(ReonAuthJWT, hireId);
        const utcTimestamp = new Date().getTime();
        const update = {
            isAccept:"1",
            acceptAmount:req.body.price,
            acceptTime:utcTimestamp
        }
        const accept = await hireSchema.carHireModel.findOneAndUpdate({hId:checkUserVerify.hId}, update)
        res.send('Hire accepted successful!');
    } catch (error) {
        res.send(error);
    }
};