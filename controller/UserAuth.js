const { auth } = require("../model");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "1001";

const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const isUserPresent = await auth.findOne({ email });
    if (isUserPresent) {
      return res.status(400).json("user already exists");
    }
    const getRounds = 10;
    const hashedPass = await brcypt.hash(password, getRounds);

    const isUserSaved = await auth.create({
      userName: userName,
      email: email,
      password: hashedPass,
    });

    const token = jwt.sign(
      { email: isUserSaved?.email, id: isUserSaved?._id },
      SECRET_KEY
    );

    if (isUserSaved) {
      return res.status(200).json({ user: isUserSaved, token: token });
    }
  } catch (err) {
    res.status(400).json("Internal sever error");
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUserPresent = await auth.findOne({ email });
    if (!isUserPresent) {
      return res.status(400).json("User not exists");
    }

    const passMatch = await brcypt.compare(password, isUserPresent?.password);

    if (!passMatch) {
      return res.status(400).json("Invalid credentials");
    }
    const token = jwt.sign(
      { email: isUserPresent?.email, id: isUserPresent?._id },
      SECRET_KEY
    );
    res.status(200).json({ user: isUserPresent, token });
  } catch (err) {
    res.status(400).json("Internal Server error");
  }
};

module.exports = { signUp, signIn };
