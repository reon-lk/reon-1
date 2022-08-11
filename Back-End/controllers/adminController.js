const express = require("express");

const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");

const {hashGenerate} = require("../helpers/hashing");

const mainId = "7777";

// user signup http request
exports.createUser = async (req, res) => {
    try {
        const existingUser = await userSchema.userModel.findOne({email:req.body.email});
        if(existingUser) {
            res.send(`Email address already exists!`);
        } else {
        const hashPassword = await hashGenerate(req.body.password);
        var utcTimestamp = new Date().getTime();
            const user = new userSchema.userModel({
                uId:mainId + utcTimestamp,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:hashPassword,
                role:"0",
                statuses:"1", // statuses=0(blocked), statuses=1(active)
                isPage:"0",
                createDate:utcTimestamp,
                updateDate:utcTimestamp
            });
            user.save();
            res.send(`User Create Successfull!`); // redirect to home page (/)
        }
    } catch (error) {
        res.send(`Something went wrong in user register` + error);
    }
};