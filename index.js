const express = require("express");
const mongoose = require("mongoose");
const { corsMiddleWare } = require("./middleware/Cors");
var cors = require('cors');
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
server.use(cors());

server.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

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
