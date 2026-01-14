const { Auth } = require("../model");
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const register = async (req, res) => {
  const { userName, email, password, role } = req.body;
  try {
    
    const isUserPresent = await Auth.findOne({ email });
    if (isUserPresent) {
      return res.status(400).json({ message: "user already exists" });
    }

    const getRounds = 10;
    const hashedPass = await brcypt.hash(password, getRounds);

    const isUserSaved = await Auth.create({
      userName: userName,
      email: email,
      password: hashedPass,
      role: role
    });

    const token = jwt.sign(
      { email: isUserSaved?.email, id: isUserSaved?._id },
      SECRET_KEY
    );

    if (isUserSaved) {
      return res.status(200).json({
        user: isUserSaved,
        token: token,
        message: "registered successfully",
      });
    }
  } catch (err) {
    res.status(400).json({ message: "Internal sever error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUserPresent = await Auth.findOne({ email });
    if (!isUserPresent) {
      return res.status(400).json({ message: "User not exists" });
    }

    const passMatch = await brcypt.compare(password, isUserPresent?.password);

    if (!passMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: isUserPresent?.email, id: isUserPresent?._id },
      SECRET_KEY
    );
    res.status(200).json({
      user: isUserPresent,
      token,
      message: "Logged in successfully",
    });
  } catch (err) {
    res.status(400).json({ message: "Internal sever error" });
  }
};

module.exports = { register, login };
