const moongose = require("mongoose");

const { Schema } = moongose;

const typeCast = { type: String, required: true };

const workflowSchema = new Schema({
  varName: { required: true, type: String },
  data: [{ 
    title : typeCast,
    type : typeCast,
    status : typeCast
  }]
});

const Workflow =
  moongose.models.Workflow || moongose.model("Workflow", workflowSchema);


module.exports = { Workflow }; // 👈 NAMED EXPORT