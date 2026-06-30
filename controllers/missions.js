const Mission = require("../models/mission");

const newMission = (req, res) => {
  res.render("missions/new.ejs");
};

// POST /missions/new
const create = async (req, res) => {
  console.log(req.body);
  if (req.body.isComplete === "on") {
    req.body.isComplete = true;
  } else {
    req.body.isComplete = false;
  }
  await Mission.create(req.body);
  res.redirect("/missions");
};

//GET /missions (READ)
const index = async (req, res) => {
  if (!req.session.missionsUnlocked) {
    return res.render("missions/password.ejs", {
      error: null,
    });
  }
  const allMissions = await Mission.find().sort({ isComplete: 1 });
  res.render("missions/index.ejs", { missions: allMissions });
};

const instructions = async (req, res) => {
  res.render("missions/instructions.ejs");
};

module.exports = {
  index,
  instructions,
};
