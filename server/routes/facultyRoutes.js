const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

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

router.get("/getFacultyById/:employee_id", (req, res) => {
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

router.post("/createFaculty", (req, res) => {
  try {
    const faculty = {
      employee_id: req.body.employee_id,
      email: req.body.email,
      college: req.body.college,
      rank: req.body.rank,
      appointment_status: req.body.appointment_status,
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

    newFaculty.save();

    res.json(faculty);
  } catch (ex) {
    console.log(ex);
  }
});

router.post("/updateFacultyPersonal/:employee_id", (req, res) => {
  const faculty = {
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
  };
  faculty_profile_Model.findOneAndUpdate(
    { employee_id: req.params.employee_id },
    faculty,
    { new: true },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

router.post("/updateFacultyAltEmail/:employee_id", (req, res) => {
  const faculty = {
    alternative_email: req.body.alternative_email,
  };
  faculty_profile_Model.findOneAndUpdate(
    { employee_id: req.params.employee_id },
    faculty,
    { new: true },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

router.post("/updateFacultyMobileNumber/:employee_id", (req, res) => {
  const faculty = {
    mobile_number: req.body.mobile_number,
  };
  faculty_profile_Model.findOneAndUpdate(
    { employee_id: req.params.employee_id },
    faculty,
    { new: true },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

router.post("/updateFacultyTelNumber/:employee_id", (req, res) => {
  const faculty = {
    telephone_number: req.body.telephone_number,
  };
  faculty_profile_Model.findOneAndUpdate(
    { employee_id: req.params.employee_id },
    faculty,
    { new: true },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
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

router.get("/getToApproveFacultyById/:employee_id", (req, res) => {
  faculty_profile_to_approve_Model.findOne(
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

router.post(
  "/updateProfile/:employee_id",
  uploadImage.single("image"),
  (req, res) => {
    const faculty = {
      image: req.file.originalname,
    };
    faculty_profile_Model.findOneAndUpdate(
      { employee_id: req.params.employee_id },
      faculty,
      { new: true },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      }
    );
  }
);

router.post("/updatePassword/:employee_id", (req, res) => {
  bcrypt.genSalt(function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // res.send(hash);

      faculty_profile_Model.findOneAndUpdate(
        { employee_id: req.params.employee_id },
        { password: hash },
        { new: true },
        (err, result) => {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        }
      );
    });
  });
});

router.post(
  "/createToApproveFaculty",
  uploadImage.single("image"),
  (req, res) => {
    try {
      const faculty = {
        employee_id: req.body.employee_id,
        email: req.body.email,
        college: req.body.college,
        rank: req.body.rank,
        appointment_status: req.body.appointment_status,
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

      newFaculty.save();

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

router.post("/facultyLogin", (req, res) => {
  // const salt = bcrypt.genSalt();
  // const inputPassword = bcrypt.hash("jude", salt);
  // console.log(req.body.employee_id, req.body.email, req.body.thePassword);
  faculty_profile_Model.find(
    { $or: [{ employee_id: req.body.employee_id }, { email: req.body.email }] },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        // res.json(result);
        if (result.length === 0) {
          res.json("NOUSER");
        } else {
          bcrypt.compare(
            req.body.thePassword,
            result[0].password,
            function (err, result) {
              if (result) {
                res.json("CORRECT");
              } else {
                res.json("INCORRECT");
              }
            }
          );
        }
      }
    }
  );
});

router.get("/facultyIsNewUser/:xxx", (req, res) => {
  // is_newUser
  faculty_profile_Model.find(
    { $or: [{ employee_id: req.params.xxx }, { email: req.params.xxx }] },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.send(result[0].is_newUser);
      }
    }
  );
});

router.get("/facultyUserToId/:xxx", (req, res) => {
  // is_newUser
  faculty_profile_Model.find(
    { $or: [{ employee_id: req.params.xxx }, { email: req.params.xxx }] },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.send(result[0].employee_id);
      }
    }
  );
});

router.get("/facultySetIsNewUser/:xxx", (req, res) => {
  // is_newUser
  faculty_profile_Model.findOneAndUpdate(
    { employee_id: req.params.xxx },
    { is_newUser: false },
    { new: true },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result.is_newUser);
      }
    }
  );
});

router.get("/facultyFind/:xxx", (req, res) => {
  faculty_profile_Model.find(
    { $or: [{ employee_id: req.params.xxx }, { email: req.params.xxx }] },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        // res.json(result);
        if (result.length === 0) {
          res.send("NOUSER");
        } else {
          res.send(result[0].employee_id);
        }
      }
    }
  );
});

router.get("/setFacultyCooky/:theUserLogin", async (req, res) => {
  // res.setHeader("Set-Cookie", "loginUser = qweqwewq");

  res.cookie("loginUser", req.params.theUserLogin);
  await res.send(
    "userLogin Cookie" + req.cookies.loginUser + req.params.theUserLogin
  );
});

router.get("/getFacultyLoginCooky", (req, res) => {
  const cookieUser = req.cookies.loginUser;
  res.send(cookieUser);
});

module.exports = router;
