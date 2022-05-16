const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const adminModel = require("../models/admin");

router.get("/", (req, res) => {
  adminModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/:username", (req, res) => {
  adminModel.findOne({ username: req.params.username }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/create", (req, res) => {
  try {
    const admin = {
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    };
    const newAdmin = new adminModel(admin);

    newAdmin.save();

    res.json(admin);
  } catch (ex) {
    console.log(ex);
  }
});

router.post("/updatePassword/:username", (req, res) => {
  bcrypt.genSalt(function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // res.send(hash);

      adminModel.findOneAndUpdate(
        { username: req.params.username },
        { password: hash },
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
  });
});

router.post("/login", (req, res) => {
  adminModel.find(
    { $or: [{ username: req.body.username }, { email: req.body.email }] },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        // res.json(result);
        if (result.length === 0) {
          res.json("NOUSER");
        } else {
          bcrypt.compare(
            req.body.password,
            result[0].password,
            function (err, result) {
              if (result) {
                res.json("CORRECT");
              } else {
                res.json("INCORRECT");
              }
            }
          );
        }
      }
    }
  );
});

router.get("/find/:xxx", (req, res) => {
  adminModel.find(
    { $or: [{ username: req.params.xxx }, { email: req.params.xxx }] },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        if (result.length === 0) {
          res.send("NOUSER");
        } else {
          res.send(result[0].username);
        }
      }
    }
  );
});

module.exports = router;
