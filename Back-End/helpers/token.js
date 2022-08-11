const jwt = require("jsonwebtoken");

const tokenGenerator = (email) => {
    const token = jwt.sign({email}, process.env.JWT_KEY, {expiresIn:"168hours"})
    return token;
}

const tokenValidator = (jwtToken) => {
    try{
        const data = jwt.verify(jwtToken, process.env.JWT_KEY);
        if (!data) {
            res.send(data);
        } else {
            return data;
        }
    } catch (error) {
        return false;
    }
}

module.exports.tokenGenerator = tokenGenerator;
module.exports.tokenValidator = tokenValidator;