//Importing User model
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendOtpEmail = require("./otpMailer")

const createUser = async (req, res, next) => {
  let hashed_pass = await bcrypt.hash(req.body.password, 10);
  try {
    let user = User.create({ ...req.body, password: hashed_pass });
    if (user) {
      res.send(user);
    }
  } catch (e) {
    res.send(e);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    let user = await User.find();
    if (user) {
      res.send(user);
    }
  } catch (e) {
    res.status(401).send(e);
  }
};

const loginUser = async (req, res, next) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      let matched = await bcrypt.compare(req.body.password, user.password);
      if (matched) {
        user = user.toObject();
        user.password = undefined;
        const token = jwt.sign(user, "Nischal", { expiresIn: "7d" });
        res.send({ user, token });
      } else {
        res.status(402).send("Invalid Credentials");
      }
    }else{
      res.status(402).send("Invalid Credential");
    }
  } catch (e) {
    res.status(402).send("Invalid Credential");
  }
};

const deleteUser = async (req, res) => {
  try {
    let user = await User.findByIdAndDelete({ _id: req.params.id });
    res.send(user);
  } catch (e) {
    res.status(500).send("Deleted");
  }
};

const updateUser = async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate({ _id: req.params.id });
    res.send(user);
  } catch (e) {
    res.status(500).send("Updated Successfully");
  }
};

const verifyOtp = async (req, res) => {
  const { email,otp } = req.body; 
  try {
    await sendOtpEmail(email, otp); // Send OTP email
    res.status(200).send({ message: "OTP sent successfully" });
  } catch (e) {
    await sendOtpEmail(email, otp); // Send OTP email
    res.status(200).send({ message: "OTP sent successfully" });
  }
};

module.exports = { createUser, getAllUser, loginUser, deleteUser, updateUser,verifyOtp };
