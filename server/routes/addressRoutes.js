const express = require("express");
const router = express.Router();

const addressModel = require("../models/address");

router.get("", (req, res) => {
  addressModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/:employee_id", async (req, res) => {
  addressModel.findOne(
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

router.post("/create", async (req, res) => {
  try {
    const address = {
      employee_id: req.body.employee_id,
      resident_address: {
        lot_number: req.body.resident_address.lot_number,
        street: req.body.resident_address.street,
        subdivision: req.body.resident_address.subdivision,
        barangay: req.body.resident_address.barangay,
        city: req.body.resident_address.city,
        province: req.body.resident_address.province,
        zip_code: req.body.resident_address.zip_code,
      },
      permanent_address: {
        lot_number: req.body.permanent_address.lot_number,
        street: req.body.permanent_address.street,
        subdivision: req.body.permanent_address.subdivision,
        barangay: req.body.permanent_address.barangay,
        city: req.body.permanent_address.city,
        province: req.body.permanent_address.province,
        zip_code: req.body.permanent_address.zip_code,
      },
    };
    // const address = {
    //   employee_id: "2018107987",
    //   resident_address: {
    //     lot_number: "lot_numer",
    //     street: "street",
    //     subdivision: "subdivision",
    //     barangay: "barangay",
    //     city: "city",
    //     province: "province",
    //     zip_code: "zip_code",
    //   },
    //   permanent_address: {
    //     lot_number: "perm_lot_numer",
    //     street: "perm_street",
    //     subdivision: "perm_subdivision",
    //     barangay: "perm_barangay",
    //     city: "perm_city",
    //     province: "perm_province",
    //     zip_code: "perm_zip_code",
    //   },
    // };
    const newAddress = new addressModel(address);

    await newAddress.save();

    res.json(address);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
