const express = require("express");
const router = express.Router();

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

router.get("/getFaculty", (req, res) => {
  faculty_profile_Model.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/getFacultyById/:employee_id", async (req, res) => {
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

const faculty_profile_Model = require("../models/faculty_profile");

router.post("/createFaculty", async (req, res) => {
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
      height: req.body.height,
      weight: req.body.weight,
      blood_type: req.body.blood_type,
      alternative_email: req.body.alternative_email,
      telephone_number: req.body.telephone_number,
      image: req.body.image,
      password: req.body.password,
      is_newUser: 1,
    };
    const newFaculty = new faculty_profile_Model(faculty);

    await newFaculty.save();

    res.json(faculty);
  } catch (ex) {
    console.log(ex);
  }
});

const faculty_profile_to_approve_Model = require("../models/to_approve_faculty");

router.get("/getToApproveFaculties", (req, res) => {
  faculty_profile_to_approve_Model.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.post(
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

// delete

router.delete("/deleteToApproveFaculty/:facultyObjId", (req, res) => {
  faculty_profile_to_approve_Model
    .findByIdAndRemove(req.params.facultyObjId)
    .exec()
    .then((doc) => {
      if (!doc) {
        return res.status.apply(404).end();
      }
      return res.status(204).end();
    })
    .catch((err) => next(err));
});

module.exports = router;
