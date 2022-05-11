const express = require("express");
const router = express.Router();

const collegeModel = require("../models/educ_college");

router.get("", (req, res) => {
  collegeModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// get all by faculty id / employee_id
router.get("/:employee_id", async (req, res) => {
  collegeModel.find({ employee_id: req.params.employee_id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
// get by obj Id
router.get("/find/:employee_id", async (req, res) => {
  collegeModel.findById(req.params.employee_id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.delete("/delete/:ObjId", (req, res) => {
  collegeModel
    .findByIdAndRemove(req.params.ObjId)
    .exec()
    .then((doc) => {
      if (!doc) {
        return res.status.apply(404).end();
      }
      return res.status(204).end();
    })
    .catch((err) => next(err));
});

router.post("/create", async (req, res) => {
  try {
    const college = {
      employee_id: req.body.employee_id,
      school_name: req.body.school_name,
      course: req.body.course,
      period_from: req.body.period_from,
      period_to: req.body.period_to,
      units_earned: req.body.units_earned,
      year_graduate: req.body.year_graduate,
      honor_recieved: req.body.honor_recieved,
    };
    const newcollege = new collegeModel(college);

    await newcollege.save();

    res.json(college);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
