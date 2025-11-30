const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  if (!username || !email || !password) {
    res.status(400).json("Please enter all the fields");
  } else {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json("User already exist");
    } else {
      const user = await User.create({
        username,
        email,
        password,
      });
      if (user) {
        console.log("register");
        res.status(201).json({
          username: user.username,
        });
      } else {
        res.status(400), json("Failed to create new user");
      }
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    console.log("login");
    res.json({
      username: user.username,
    });
  } else {
    res.status(401).json("Invalid Email or Password");
    throw new Error("Invalid Email or Password");
  }
});

module.exports = router;
