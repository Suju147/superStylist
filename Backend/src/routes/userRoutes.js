const expres = require("express");
const { route } = require("./product");
const router = expres.Router();
const User = require("../userSchema");
const bcrypt = require("bcrypt");
const genToken = require("../genToken");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.send({ error: "User Not Found" });
    } else {
      if (await bcrypt.compare(password, user.password)) {
        res.send({
          id: user._id,
          username: user.username,
          token: genToken(user._id),
        });
      } else {
        res.send({
          error: "Invalid Creds",
        });
      }
    } 
  } catch (err) {
    res.send({error:err})
  }
});

router.post("/register", async (req, res) => {
  var { email, password, username } = req.body;
  try {
    const nuser = await User.findOne({ email });
    if (nuser) {
      res.send({
        error: "User Already Exists",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
  
      const user = new User({
        email,
        password,
        username,
      });
  
      const createdUser = await user.save();
      if (createdUser) {
        res.send({
          id: createdUser._id,
          username: createdUser.username,
          token: genToken(user._id),
        });
      } else {
        res.send({
          error: "Error Creating User",
        });
      }
    }
  } catch (err) {
    res.send({error:err})
  }
});

module.exports = router;
