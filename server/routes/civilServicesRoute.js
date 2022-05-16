const express = require("express");
const router = express.Router();

const civilServiceModel = require("../models/civil_service");

router.get("", (req, res) => {
  civilServiceModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// get all by faculty id / employee_id
router.get("/:employee_id", async (req, res) => {
  civilServiceModel.find(
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
  civilServiceModel.findById(req.params.employee_id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// delete
router.delete("/delete/:ObjId", (req, res) => {
  civilServiceModel
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
    license_name: req.body.license_name,
    rating: req.body.rating,
    exam_date: req.body.exam_date,
    exam_place: req.body.exam_place,
    license_number: req.body.license_number,
    license_validity_date: req.body.license_validity_date,
  };
  civilServiceModel.findByIdAndUpdate(
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
    const civilService = {
      employee_id: req.body.employee_id,
      license_name: req.body.license_name,
      rating: req.body.rating,
      exam_date: req.body.exam_date,
      exam_place: req.body.exam_place,
      license_number: req.body.license_number,
      license_validity_date: req.body.license_validity_date,
    };
    const newcivilService = new civilServiceModel(civilService);

    await newcivilService.save();

    res.json(civilService);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
