const express = require("express");
const router = express.Router();

const elementaryModel = require("../models/educ_elementary");

router.get("", (req, res) => {
  elementaryModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/:employee_id", async (req, res) => {
  elementaryModel.findOne(
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

router.post("/update/:employee_id", async (req, res) => {
  const elementary = {
    school_name: req.body.school_name,
    basic_education: req.body.basic_education,
    period_from: req.body.period_from,
    period_to: req.body.period_to,
    highest_level: req.body.highest_level,
    year_graduate: req.body.year_graduate,
    honor_recieved: req.body.honor_recieved,
  };
  elementaryModel.findOneAndUpdate(
    { employee_id: req.params.employee_id },
    elementary,
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
    const elementary = {
      employee_id: req.body.employee_id,
      school_name: req.body.school_name,
      basic_education: req.body.basic_education,
      period_from: req.body.period_from,
      period_to: req.body.period_to,
      highest_level: req.body.highest_level,
      year_graduate: req.body.year_graduate,
      honor_recieved: req.body.honor_recieved,
    };
    const newElementary = new elementaryModel(elementary);

    await newElementary.save();

    res.json(elementary);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
