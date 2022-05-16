const express = require("express");
const router = express.Router();

const issuedIdsModel = require("../models/issued_id");

router.get("", (req, res) => {
  issuedIdsModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/:employee_id", async (req, res) => {
  issuedIdsModel.findOne(
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
    GSIS_num: req.body.GSIS_num,
    PAGIBIG_num: req.body.PAGIBIG_num,
    PHILHEALTH_num: req.body.PHILHEALTH_num,
    SSS_num: req.body.SSS_num,
    TIN_num: req.body.TIN_num,
  };
  issuedIdsModel.findOneAndUpdate(
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
    const issued_id = {
      employee_id: req.body.employee_id,
      GSIS_num: req.body.GSIS_num,
      PAGIBIG_num: req.body.PAGIBIG_num,
      PHILHEALTH_num: req.body.PHILHEALTH_num,
      SSS_num: req.body.SSS_num,
      TIN_num: req.body.TIN_num,
    };
    const newIssuedIds = new issuedIdsModel(issued_id);

    await newIssuedIds.save();

    res.json(issued_id);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
