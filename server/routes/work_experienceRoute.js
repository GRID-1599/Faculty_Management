const express = require("express");
const router = express.Router();

const workExperienceModel = require("../models/work_experience");

router.get("", (req, res) => {
  workExperienceModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// get all by faculty id / employee_id
router.get("/:employee_id", async (req, res) => {
  workExperienceModel.find(
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
  workExperienceModel.findById(req.params.employee_id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.delete("/delete/:ObjId", (req, res) => {
  workExperienceModel
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
    const workExperience = {
      employee_id: req.body.employee_id,
      position: req.body.position,
      company_name: req.body.company_name,
      monthly_salary: req.body.monthly_salary,
      pay_grade: req.body.pay_grade,
      appointment_status: req.body.appointment_status,
      period_from: req.body.period_from,
      period_to: req.body.period_to,
      isGov_service: req.body.isGov_service,
    };
    const newworkExperience = new workExperienceModel(workExperience);

    await newworkExperience.save();

    res.json(workExperience);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
