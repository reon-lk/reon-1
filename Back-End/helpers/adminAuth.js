const userSchema = require("../models/userSchema");
const { tokenValidator } = require("./token");

const adminAuth = async (req, res, next) => {
  const ReonAuthJWT = req.cookies.ReonAuthJWT;

  if (!ReonAuthJWT) {
    res.status(401).send("Not authorized, no token");
    // throw new Error('Not authorized, no token')
  }

  try {
    const validUser = tokenValidator(ReonAuthJWT);
    const existingAdmin = await userSchema.userModel.findOne({
      email: validUser.email,
    });

    if (!validUser) {
      res.status(401).send("Access denied");
    } else if (existingAdmin.statuses == 2) {
      res.status(401).send("Your account is blocked!");
      // return("Your account is blocked!"); // redirect to home (/)
    } else if (existingAdmin.role == 0) {
      res.status(401).send("Access denied"); // redirect to home (/)
    } else {
      req.admin = existingAdmin;
    }

    req.admin = existingAdmin;
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error("Not authorized");
  }
};

module.exports = { adminAuth };
