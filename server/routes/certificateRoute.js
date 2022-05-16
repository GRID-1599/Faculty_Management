const express = require("express");
const router = express.Router();
const multer = require("multer");

const certificateModel = require("../models/certificate");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/certificates/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploadCertificate = multer({ storage: storage });

router.get("", (req, res) => {
  certificateModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// get all by faculty id / employee_id
router.get("/:employee_id", async (req, res) => {
  certificateModel.find(
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
  certificateModel.findById(req.params.employee_id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// delete
router.delete("/delete/:ObjId", (req, res) => {
  certificateModel
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
router.post(
  "/update/:id",
  uploadCertificate.single("certificate_src"),
  (req, res) => {
    const newData = {
      certificate_name: req.body.certificate_name,
      type: req.body.type,
      period_from: req.body.period_from,
      period_to: req.body.period_to,
      total_hours: req.body.total_hours,
      conducted_by: req.body.conducted_by,
      certificate_src: req.file.originalname,
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
  }
);

router.post(
  "/create",

  uploadCertificate.single("certificate_src"),
  (req, res) => {
    try {
      const certificate = {
        employee_id: req.body.employee_id,
        certificate_name: req.body.certificate_name,
        type: req.body.type,
        period_from: req.body.period_from,
        period_to: req.body.period_to,
        total_hours: req.body.total_hours,
        conducted_by: req.body.conducted_by,
        certificate_src: req.file.originalname,
      };
      const newcertificate = new certificateModel(certificate);

      newcertificate.save();

      res.json(certificate);
    } catch (ex) {
      console.log(ex);
    }
  }
);

module.exports = router;
