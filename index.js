const express = require("express");
const mongoose = require("mongoose");
//const { corsMiddleWare } = require("./middleware/Cors");
const cors = require("cors");
const { authMiddleware } = require("./middleware/Auth");
require("dotenv").config();
const {
  brandRouter,
  productRouter,
  authRouter,
  slideImgRouter,
  categoryRouter,
} = require("./router");

const server = express();

/* mongoose */
const main = async () => {
  await mongoose.connect(process.env.DB);
};
main().catch((err) => {});
/* mongoose */

const PORT = process.env.PORT || 8000;

//middlewares
server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
  })
);

server.use("/product", authMiddleware, productRouter);
server.use("/brand", authMiddleware, brandRouter);
server.use("/auth", authRouter);
server.use("/slideImg", authMiddleware, slideImgRouter);
server.use("/category", authMiddleware, categoryRouter);
server.use("/", (req, res) => {
  res.send("Home Page");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`server started`);
});
