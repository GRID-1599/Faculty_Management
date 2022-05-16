const express = require("express");
const router = express.Router();

const juniorHighModel = require("../models/educ_juniorHigh");

router.get("", (req, res) => {
  juniorHighModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/:employee_id", async (req, res) => {
  juniorHighModel.findOne(
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
  const newData = {
    school_name: req.body.school_name,
    basic_education: req.body.basic_education,
    period_from: req.body.period_from,
    period_to: req.body.period_to,
    highest_level: req.body.highest_level,
    year_graduate: req.body.year_graduate,
    honor_recieved: req.body.honor_recieved,
  };
  juniorHighModel.findOneAndUpdate(
    { employee_id: req.params.employee_id },
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
    const juniorHigh = {
      employee_id: req.body.employee_id,
      school_name: req.body.school_name,
      basic_education: req.body.basic_education,
      period_from: req.body.period_from,
      period_to: req.body.period_to,
      highest_level: req.body.highest_level,
      year_graduate: req.body.year_graduate,
      honor_recieved: req.body.honor_recieved,
    };
    const newJuniorHigh = new juniorHighModel(juniorHigh);

    await newJuniorHigh.save();

    res.json(juniorHigh);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
