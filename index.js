const express = require("express");
const mongoose = require("mongoose");
const { brandRouter, productRouter, authRouter } = require("./router");

const server = express();

/* mongoose */
const main = async () => {
  await mongoose.connect("mongodb+srv://vivek:HmHJd7sD2Sls4Uhy@cluster0.15izop1.mongodb.net/");
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

server.listen(3000, () => {
  console.log(`server started`);
});
