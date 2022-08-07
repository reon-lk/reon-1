const express = require("express");

const userVerify = require("../helpers/userVerify");
const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");

const {hashGenerate} = require("../helpers/hashing");
const {hashValidator} = require("../helpers/hashing");
const {tokenGenerator} = require("../helpers/token");

const mainId = "7777";

// user signup http request
exports.signup = async (req, res) => {
    try {
        const existingUser = await userSchema.userModel.findOne({email:req.body.email});
        if(existingUser) {
            res.send(`Email address already exists!`);
        } else {
        const hashPassword = await hashGenerate(req.body.password);
        var utcTimestamp = new Date().getTime();
            const user = new userSchema.userModel({
                uId : mainId + utcTimestamp,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : hashPassword,
                role : "0",
                statuses : "1", // statuses=0(blocked), statuses=1(active)
                isPage : "0",
                createDate : utcTimestamp,
                updateDate : utcTimestamp
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
        const existingUser = await userSchema.userModel.findOne({email:req.body.email});
        if(!existingUser) {
            res.send("Email is invalid!");
        } else {
            const checkUser = await hashValidator(req.body.password, existingUser.password);
            if(!checkUser) {
                res.send("Password is invalid");
            } else {
                if(existingUser.statuses == 0) { 
                    res.send("Your Account is blocked! Contact us if you want to recover your account"); // redirect to home page (/)
                } else {
                    const userName = existingUser.firstName;
                    const userEmail = existingUser.email;
                    const checkUserVerify = await userVerify.userVerify1(userEmail);
                    const token = await tokenGenerator(checkUserVerify.email, );
                    res.cookie("ReonAuthJWT", token, {httpOnly:true});
                    if(existingUser.role == 0) {
                        res.send(userName + ` Login successful! Your Token is ` + token); // redirect to hire page (/hire)
                    } else {
                        res.send(userName + ` Login successful! You are a admin. Your Token is ` + token); // redirect to admin portal (/)
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
    res.clearCookie('ReonAuthJWT', {httpOnly: true});
    res.send('Logout Successfull!'); // redirect to home page (/)
    // res.redirect('/');
};