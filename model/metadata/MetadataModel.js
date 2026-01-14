const mongoose = require("mongoose");

const metadataSchema = new mongoose.Schema({
  varName: { type: String, required: true },
  data: [
    {
      title: { type: String, required: true },
      value: mongoose.Schema.Types.Mixed,
      fieldType: { type: String }
    }
  ]
});

const Metadata =
  mongoose.models.Metadata || mongoose.model("Metadata", metadataSchema);

module.exports = { Metadata }; // 👈 NAMED EXPORT
