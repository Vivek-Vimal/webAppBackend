const express = require("express");
const mongoose = require("mongoose");
const { brandRouter, productRouter, authRouter } = require("./router");

const server = express();

/* mongoose */
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
};

main().catch((err) => {
  console.log(`err`, err);
});
/* mongoose */

//middleware for req.body
server.use(express.json());

server.use("/product", productRouter);
server.use("/brand", brandRouter);
server.use("/auth", authRouter);

server.use("/", (req, res) => {
  res.send("Home Page");
});

server.listen("8080", () => {
  console.log(`server started`);
});
