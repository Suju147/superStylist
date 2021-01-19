const jwt = require("jsonwebtoken");
const User = require("../userSchema");

const verifyToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, "MY_SECRET");
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      res.send({error:err})  
    }
  } else {
    res.send("401");
    console.log("Not authorized");
    res.send({error:"Not authorized"})
  }
};

module.exports = verifyToken;
