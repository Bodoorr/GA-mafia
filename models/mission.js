const mongoose = require("mongoose");

// mission Model Schema
const missionSchema = new mongoose.Schema({
  name: String,
  description: String,
  isComplete: Boolean,
});

//create mission Model
const Mission = mongoose.model("Mission", missionSchema);

//Export mission Model so that we can use it on other files
module.exports = Mission;
