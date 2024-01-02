const express = require("express");
const mongoose = require("mongoose");
const { brandRouter, productRouter, authRouter } = require("./router");

const server = express();

const PORT = process.env.BASE_URL || 8000;
const DB = process.env.DB

/* mongoose */
const main = async () => {
  await mongoose.connect(DB);
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

server.listen(PORT, () => {
  console.log(`server started`);
});
