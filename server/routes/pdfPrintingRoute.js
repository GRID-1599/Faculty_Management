const express = require("express");
const router = express.Router();
const pdf = require("html-pdf");

const pdfTemplate = require("../templates/sample");

router.post("/create", (req, res) => {
  pdf.create(pdfTemplate(), {}).toFile("sample.pdf", (err) => {
    if (err) {
      res.send(
        Promise.reject().catch((error) => {
          // do something if a reject.
        })
      );
    }

    res.send(
      Promise.resolve().catch((error) => {
        // do something if a reject.
      })
    );
  });
});

router.get("/fetch", (req, res) => {
  res.sendFile(`${__dirname}/sample.pdf`);
});

module.exports = router;
