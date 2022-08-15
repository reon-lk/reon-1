const userSchema = require("../models/userSchema");
const { tokenValidator } = require("./token");

const userAuth = async (req, res, next) => {
  const ReonAuthJWT = req.cookies.ReonAuthJWT;

  if (!ReonAuthJWT) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    const validUser = await tokenValidator(ReonAuthJWT);
    const existingUser = await userSchema.userModel.findOne({
      email: validUser.email,
    });

    if (!validUser) {
      res.status(401);
      throw new Error("Access denied");
    } else if (existingUser.statuses == 2) {
      res.status(401).send("Your account is blocked!"); // redirect to home (/)
    } else if (existingUser.role == 1) {
      res.send("You are an admin!"); // redirect to home (/)
    } else {
      req.user = existingUser;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error("Not authorized");
  }
};

module.exports = { userAuth };
