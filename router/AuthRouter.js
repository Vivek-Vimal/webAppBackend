const express = require("express");
const { register, login, getAllUsers} = require("../controller/UserAuth");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.get("/", getAllUsers);

module.exports = authRouter;
