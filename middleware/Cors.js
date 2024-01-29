const cors = require("cors");

module.exports.corsMiddleWare = () => cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE"],
});
