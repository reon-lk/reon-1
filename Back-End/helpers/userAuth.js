const userSchema = require("../models/userSchema");
const { tokenValidator } = require("./token");

const userAuth = async (req, res, next) => {
    const ReonAuthJWT = req.cookies.ReonAuthJWT;

    if (!ReonAuthJWT) {
        res.status(401)
        throw new Error('Not authorized, no token')
      }

      try {
        const validUser = await tokenValidator(ReonAuthJWT);
        const existingUser = await userSchema.userModel.findOne({email:validUser.email});

        if (!validUser) {
            res.status(401)
            throw new Error('Access denied') 
        }
        if(existingUser.statuses == 0) {
            return("Your account is blocked!"); // redirect to home (/)
        } 
        if (existingUser.role == 1) {
            res.send ("You are an admin!"); // redirect to home (/)
        
        }

        req.user = existingUser
        next();

      } catch (error) {
        console.log(error)
        res.status(401)
        throw new Error('Not authorized')
      }
}

module.exports = {userAuth}