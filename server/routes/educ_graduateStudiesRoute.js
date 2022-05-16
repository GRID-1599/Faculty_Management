const express = require("express");
const router = express.Router();

const graduateStudiesModel = require("../models/educ_graduate_studies");

router.get("", (req, res) => {
  graduateStudiesModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// get all by faculty id / employee_id
router.get("/:employee_id", async (req, res) => {
  graduateStudiesModel.find(
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
// get by obj Id
router.get("/find/:employee_id", async (req, res) => {
  graduateStudiesModel.findById(req.params.employee_id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.delete("/delete/:ObjId", (req, res) => {
  graduateStudiesModel
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

// updated
router.post("/update/:id", async (req, res) => {
  const newData = {
    school_name: req.body.school_name,
    course: req.body.course,
    period_from: req.body.period_from,
    period_to: req.body.period_to,
    units_earned: req.body.units_earned,
    year_graduate: req.body.year_graduate,
    honor_recieved: req.body.honor_recieved,
  };
  graduateStudiesModel.findByIdAndUpdate(
    req.params.id,
    newData,
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

router.post("/create", async (req, res) => {
  try {
    const graduateStudies = {
      employee_id: req.body.employee_id,
      school_name: req.body.school_name,
      course: req.body.course,
      period_from: req.body.period_from,
      period_to: req.body.period_to,
      units_earned: req.body.units_earned,
      year_graduate: req.body.year_graduate,
      honor_recieved: req.body.honor_recieved,
    };
    const newgraduateStudies = new graduateStudiesModel(graduateStudies);

    await newgraduateStudies.save();

    res.json(graduateStudies);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
