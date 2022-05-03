const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
const IRL =
  "mongodb+srv://jude:4563214789@facultymanagement.mqzin.mongodb.net/faculties?retryWrites=true&w=majority";

mongoose.connect(IRL);

const faculty_profile_Model = require("./models/faculty_profile");

app.get("/getFaculty", (req, res) => {
  faculty_profile_Model.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createFaculty", async (req, res) => {
  const faculty = req.body;
  const newFaculty = new faculty_profile_Model(faculty);
  await newFaculty.save();

  res.json(faculty);
});

app.listen(3001, () => {
  console.log("SERVER RUNNING");
});
