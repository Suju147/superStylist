const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../UserSchema");
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");
router.post("/signup", (req, res, next) => {
  User.find({ username: req.body.email })
    .exec()
    .then((userCheck) => {
      if (userCheck.length >= 1) {
        res.send({
          error: "user already exists",
        });
      } else {
        bcrypt.hash(req.body.password, 14, (err, encrypted_password) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: mongoose.Types.ObjectId(),
              username: req.body.username,
              email: req.body.email,
              password: encrypted_password,
            });
            user
              .save()
              .then((result) => {
                console.log("result", result);
                const token = jwtToken.sign(
                  {
                    username: result.email,
                    userId: result._id,
                  },
                  "secret",
                  {
                    expiresIn: "5d",
                  }
                );
                res.status(201).send({
                  username: result.username,
                  token: token,
                });
              })
              .catch((err) => {
                res.send({ error: "Mongo error" });
              });
          }
        });
      }
    });
});
router.post("/login", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((users) => {
      if (users.length === 0) {
        res.status(401).send({
          message: "Invalid username/password ",
        });
      } else {
        bcrypt.compare(req.body.password, users[0].password, (err, success) => {
          if (err) {
            res.status(401).send({
              message: "Invalid username/password",
            });
          }

          if (success) {
            const token = jwtToken.sign(
              {
                username: users[0].username,
                userId: users[0]._id,
              },
              "secret",
              {
                expiresIn: "5d",
              }
            );
            return res.status(200).send({
              message: "login successful",
              token: token,
            });
          } else {
            res.status(401).send({
              message: "Invalid username/password",
            });
          }
        });
      }
    });
});

router.delete("/:user_id", async (req, res, next) => {
  User.find({ _id: req.params.user_id })
    .exec()
    .then((user) => {
      if (user.length === 0) {
        res.status(404).send({
          messge: "user not found",
        });
      } else {
        User.remove({ _id: req.params.user_id });
        res.status(200).send({
          message: `${user.username} deleted`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        error: err,
      });
    });
});
module.exports = router;
