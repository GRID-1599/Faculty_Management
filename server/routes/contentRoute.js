const express = require("express");
const router = express.Router();
const contentModel = require("../models/content");

router.get("", (req, res) => {
  contentModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/:id", async (req, res) => {
  contentModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/update/:id", async (req, res) => {
  const newData = {
    title: req.body.title,
    body: req.body.body,
  };
  contentModel.findByIdAndUpdate(
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
    const content = {
      title: req.body.title,
      body: req.body.body,
    };
    const newContent = new contentModel(content);

    await newContent.save();

    res.json(content);
  } catch (ex) {
    console.log(ex);
  }
});

// delete
router.delete("/delete/:ObjId", (req, res) => {
  contentModel.findByIdAndRemove(req.params.ObjId, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
