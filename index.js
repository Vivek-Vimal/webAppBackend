require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors');

const { authMiddleware } = require("./middleware/Auth");
const {
  authRouter,
  metadataRouter,
  workflowRouter
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

server.use(function(_, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, PATCH');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

server.use("/auth", authRouter);
server.use("/metadata", authMiddleware,   metadataRouter);
server.use("/workflow", authMiddleware, workflowRouter);

server.use("/", (_, res) => {
  res.send("Server is successfully running");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`server started`);
});
