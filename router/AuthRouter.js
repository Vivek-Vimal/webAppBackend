const express = require("express");
const { signUp,signIn } = require("../controller/UserAuth");

const authRouter = express.Router();

authRouter.post("/signIn", signIn);

authRouter.post("/signUp", signUp);

module.exports = authRouter;
