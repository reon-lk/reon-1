const userSchema = require("../models/userSchema");
const { tokenValidator } = require("./token");

const userVerify1 = async (userEmail, next) => {
    const existingUser = await userSchema.userModel.findOne({email:userEmail});

    if(existingUser.statuses == 0) {
        return("Your account is blocked!"); // redirect to home (/)
    } else {
        return(existingUser)
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
            return(existingUser)
            next();
        }
    }
};

module.exports.userVerify1 = userVerify1;
module.exports.userVerify2 = userVerify2;