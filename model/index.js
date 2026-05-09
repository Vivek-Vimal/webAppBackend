const { Auth } = require("./userAuth/UserAuth");
// here we import as any name (whatever we want): we haven't export by name
const { Metadata } = require("./metadata/MetadataModel");


module.exports = {
  Auth,
  Metadata
};
