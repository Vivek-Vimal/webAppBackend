const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      const extractToken = token.split(" ")[1];

      jwt.verify(extractToken, SECRET_KEY, (err, decoded) => {
        if (err) {
          //console.log("err", err);
          res.status(401).json({ message: "Unauthorize User" });
        } else {
          //console.log("decode", decoded);
          req.userId = decoded.id;
          next();
        }
      });
    } else {
      res.status(401).json({ message: "Unauthorize User" });
      next();
    }
  } catch (err) {
    res.status(401).json({ message: "error in authorization User" });
  }
};

module.exports = { authMiddleware };
