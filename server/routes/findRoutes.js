const express = require("express");
const router = express.Router();

const facultyModel = require("../models/faculty_profile");

router.get("/employee-number/:employee_id", async (req, res) => {
  facultyModel.find({ employee_id: req.params.employee_id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      isDuplicated = result.length === 0 ? false : true;

      res.json({ isDuplicated: isDuplicated });
    }
  });
});

router.get("/email/:email", async (req, res) => {
  facultyModel.find({ email: req.params.email }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      isDuplicated = result.length === 0 ? false : true;

      res.json({ isDuplicated: isDuplicated });
    }
  });
});

module.exports = router;
