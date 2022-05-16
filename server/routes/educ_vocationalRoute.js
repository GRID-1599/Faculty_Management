const express = require("express");
const router = express.Router();

const vocationalModel = require("../models/educ_vocational");

router.get("", (req, res) => {
  vocationalModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
// get all by faculty id / employee_id
router.get("/:employee_id", async (req, res) => {
  vocationalModel.find(
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
  vocationalModel.findById(req.params.employee_id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
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
  vocationalModel.findByIdAndUpdate(
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

// delete
router.delete("/delete/:ObjId", (req, res) => {
  vocationalModel
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
    const vocational = {
      employee_id: req.body.employee_id,
      school_name: req.body.school_name,
      course: req.body.course,
      period_from: req.body.period_from,
      period_to: req.body.period_to,
      units_earned: req.body.units_earned,
      year_graduate: req.body.year_graduate,
      honor_recieved: req.body.honor_recieved,
    };
    const newvocational = new vocationalModel(vocational);

    await newvocational.save();

    res.json(vocational);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
