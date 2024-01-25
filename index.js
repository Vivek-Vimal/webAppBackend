const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
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
  await mongoose.connect(
    "mongodb+srv://vivek:HmHJd7sD2Sls4Uhy@cluster0.15izop1.mongodb.net/?retryWrites=true&w=majority"
  );
};

main().catch((err) => {
  console.log(`err`, err);
});
/* mongoose */

//middleware for req.body
server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

server.use("/product", productRouter);
server.use("/brand", brandRouter);
server.use("/auth", authRouter);
server.use("/slideImg", slideImgRouter);
server.use("/category", categoryRouter);

server.use("/", (req, res) => {
  res.send("Home Page");
});

server.listen(8000, "0.0.0.0", () => {
  console.log(`server started`);
});
