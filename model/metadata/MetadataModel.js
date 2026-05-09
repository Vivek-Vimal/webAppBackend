const mongoose = require("mongoose");

const metadataSchema = new mongoose.Schema({
  varName: { type: String, required: true },
  data: [
    {
      title: { type: String, required: true },
      value: mongoose.Schema.Types.Mixed,
      fieldType: { type: String, required: true },
      info: { type: String, required: true }
    }
  ]
});

const Metadata =
  mongoose.models.Metadata || mongoose.model("Metadata", metadataSchema);

module.exports = { Metadata }; // 👈 NAMED EXPORT




// create an instance --> approvers/rejectors --> final status

// role based ( admins ) --> same (status of incident) --> same

// same (draft) --> level-1 (), level-2() --> same

// Approved
// draft (admins) --> pending for approval1 (level1) - pending for approver2 (level2) - pending for admin (final approval) --> approved (final stage)

// Rejected
// draft (admins) --> pending for approval1 (level1) - pending for approver2 (level2) [rejected]
// rejected stage
// either - pending for approval1 || draft
// it will go to the state which is rejected to and after that : if he approves : it goes to the same level : then cycles continues.
// if admin rejected --> rejected (final stage)



