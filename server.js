const mongoose = require("mongoose");
const express = require("express");

require("dotenv").config();
const methodOverride = require("method-override");
// new code below this line
const path = require("path");
const app = express();
const PORT = 3700;
const MISSION_END = new Date("2026-09-02");
const session = require("express-session");
// Mongoose connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`connected to the Database ${mongoose.connection.name}`);
});

// Body Parser
app.use(express.urlencoded({ extended: false }));

//Middleware Method Override
app.use(methodOverride("_method"));

// new code below this line
app.use(express.static(path.join(__dirname, "public")));

//password session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);
// new code above this line
app.get("/", async (req, res) => {
  res.render("new.ejs", { endDate: MISSION_END });
});

// Import the mission Model
const missionCtrl = require("./controllers/missions");

//Root Route/ API
app.get("/", (req, res) => {
  res.render("new.ejs");
});

// app.get("/missions/new", missionCtrl.newMission);
// app.post("/missions", missionCtrl.create);
app.get("/missions", missionCtrl.index);
app.get("/instructions", missionCtrl.instructions);

app.post("/missions/unlock", (req, res) => {
  const { password } = req.body;
  if (password === process.env.MAFIA_PASS) {
    req.session.missionsUnlocked = true;
    return res.redirect("/missions");
  }

  return res.render("missions/password.ejs", {
    error: "Wrong password. Access denied.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
