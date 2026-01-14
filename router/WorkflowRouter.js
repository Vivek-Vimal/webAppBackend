const express = require("express");
const {
  getWorkflow,
  saveWorkflow,
  patchWorkflow,
  deleteWorkflow
} = require("../controller/Workflow");

const workflowRouter = express.Router();

workflowRouter.get("/", getWorkflow);
workflowRouter.post("/", saveWorkflow);
workflowRouter.patch("/", patchWorkflow);
workflowRouter.delete("/",deleteWorkflow);

module.exports = workflowRouter;