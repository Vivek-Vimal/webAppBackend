const express = require("express");
const {
  getMetadata,
  saveMetadata,
  deleteMetadata,
  patchMetadata
} = require("../controller/Metadata");

const metadataRouter = express.Router();

metadataRouter.get("/", getMetadata);
metadataRouter.post("/", saveMetadata);
metadataRouter.patch("/", patchMetadata);
metadataRouter.delete("/", deleteMetadata);

module.exports = metadataRouter;
