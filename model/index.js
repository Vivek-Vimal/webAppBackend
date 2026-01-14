const { Auth } = require("./userAuth/UserAuth");
// here we import as any name (whatever we want): we haven't export by name
const { Workflow } = require("./workflow/WorkflowModel");
const { Metadata } = require("./metadata/MetadataModel");


module.exports = {
  Auth,
  Workflow,
  Metadata
};
