const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");
const { tokenValidator } = require("./token");

const pageAuth = async (req, res, next) => {
  const ReonAuthJWT = req.cookies.ReonAuthJWT;

  if (!ReonAuthJWT) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    const validUser = tokenValidator(ReonAuthJWT);
    const existingUser = await userSchema.userModel.findOne({
      email: validUser.email,
    });
    const page = await pageSchema.pageModel.findOne({ uId: existingUser.uId });

    if (!validUser) {
      return res.status(401).send("Access denied")
    } else if (existingUser.statuses == 2) {
      return res.status(401).send("Your account is blocked!"); // redirect to home (/)
    } else if (existingUser.role == 1) {
      return res.send("You are an admin!"); // redirect to home (/)
    } else if (existingUser.isPage == 0) {
      return res.send(
        "You don't have REON page! Go to '/myPage/create' for create new Page"
      ); // redirect to create page for owner page (/mypage/create)
      // res.redirect("/user/myPage/create");
    } else if (!page) {
     return res.status(404).send("page not found");
    } else if (page.statuses == 0) {
      return res.status(401).send("page is not approved");
    } else if (page.statuses == 2) {
      return res.status(401).send("page is blocked");
    } else if (page.statuses == 4) {
      return res.status(401).send("page is not found");
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

module.exports = { pageAuth };
