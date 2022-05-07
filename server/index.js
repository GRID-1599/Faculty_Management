const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
const IRL =
  "mongodb+srv://jude:4563214789@facultymanagement.mqzin.mongodb.net/faculties?retryWrites=true&w=majority";

mongoose.connect(IRL);

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/facultyImages/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploadImage = multer({ storage: storage });

app.get("/getFaculty", (req, res) => {
  faculty_profile_Model.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getFacultyById/:employee_id", async (req, res) => {
  faculty_profile_Model.findOne(
    { employee_id: req.params.employee_id },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

const faculty_profile_Model = require("./models/faculty_profile");

app.post("/createFaculty", uploadImage.single("image"), async (req, res) => {
  const faculty = {
    employee_id: req.body.employee_id,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    name_extension: req.body.name_extension,
    last_name: req.body.last_name,
    age: req.body.age,
    birth_date: req.body.birth_date,
    birth_place: req.body.birth_place,
    sex: req.body.sex,
    civil_status: req.body.civil_status,
    image: req.file.originalname,
    date_created: req.body.date_created,
  };
  const newFaculty = new faculty_profile_Model(faculty);

  await newFaculty.save();

  res.json(faculty);
});

const faculty_profile_to_approve_Model = require("./models/to_approve_faculty");

app.get("/getToApproveFaculties", (req, res) => {
  faculty_profile_to_approve_Model.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post(
  "/createToApproveFaculty",
  uploadImage.single("image"),
  async (req, res) => {
    try {
      const faculty = {
        employee_id: req.body.employee_id,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        name_extension: req.body.name_extension,
        last_name: req.body.last_name,
        age: req.body.age,
        birth_date: req.body.birth_date,
        birth_place: req.body.birth_place,
        sex: req.body.sex,
        civil_status: req.body.civil_status,
        image: req.file.originalname,
        date_created: req.body.date_created,
      };
      const newFaculty = new faculty_profile_to_approve_Model(faculty);

      await newFaculty.save();

      res.json(faculty);
    } catch (ex) {
      console.log(ex);
    }
  }
);

app.listen(3001, () => {
  console.log("SERVER RUNNING");
});
