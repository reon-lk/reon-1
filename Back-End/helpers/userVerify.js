const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");

const { tokenValidator } = require("./token");

const userVerify1 = async (userEmail, next) => {
    const existingUser = await userSchema.userModel.findOne({email:userEmail});

    if(existingUser.statuses == 0) {
        return("Your account is blocked!"); // redirect to home (/)
    } else {
        return(existingUser);
        next();
    }
};

const userVerify2 = async (ReonAuthJWT, next) => {
    const validUser = await tokenValidator(ReonAuthJWT);
    const existingUser = await userSchema.userModel.findOne({email:validUser.email});

    if(existingUser.statuses == 0) {
        return("Your account is blocked!"); // redirect to home (/)
    } else {
        if (existingUser.role == 1) {
            return("You are an admin!"); // redirect to home (/)
        } else {
            return(existingUser);
            next();
        }
    }
};

const userVerify3 = async (ReonAuthJWT, next) => {
    const existingUser = await this.userVerify2(ReonAuthJWT);
    if (existingUser.isPage == 0) {
        res.send("You don't have REON page! Go to '/myPage/create' for create new Page"); // redirect to create page for owner page (/mypage/create)
    } else {
        const userPage = await pageSchema.pageModel.findOne({uId:existingUser.uId});
        if (!userPage) {
            res.send("Something went wrong!");
        } else {
            return(userPage);
            next();
        }
    }
};

module.exports.userVerify1 = userVerify1;
module.exports.userVerify2 = userVerify2;
module.exports.userVerify3 = userVerify3;