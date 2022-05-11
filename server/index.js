const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
const IRL =
  "mongodb+srv://jude:4563214789@facultymanagement.mqzin.mongodb.net/faculties?retryWrites=true&w=majority";

mongoose.connect(IRL);

// routes

const facultyRoutes = require("./routes/facultyRoutes");
app.use("", facultyRoutes);

const adressRoutes = require("./routes/addressRoutes");
app.use("/address", adressRoutes);

const issued_idRoutes = require("./routes/issued_idRoutes");
app.use("/issued-id", issued_idRoutes);

const educ_elementaryRoutes = require("./routes/educ_elementaryRoute");
app.use("/educ-elementary", educ_elementaryRoutes);

const educ_juniorHighRoutes = require("./routes/educ_juniorHighRoute");
app.use("/educ-junior-highschool", educ_juniorHighRoutes);

const educ_seniorHighRoutes = require("./routes/educ_seniorHighRoute");
app.use("/educ-senior-highschool", educ_seniorHighRoutes);

const educ_collegeRoutes = require("./routes/educ_collegeRoute");
app.use("/educ-college", educ_collegeRoutes);

const educ_vocationalRoutes = require("./routes/educ_vocationalRoute");
app.use("/educ-vocational", educ_vocationalRoutes);

const educ_graduateStudiesRoutes = require("./routes/educ_graduateStudiesRoute");
app.use("/educ-graduate-studies", educ_graduateStudiesRoutes);

const civilServiceRoutes = require("./routes/civilServicesRoute");
app.use("/civil-service", civilServiceRoutes);

const workExperienceRoutes = require("./routes/work_experienceRoute");
app.use("/work-experience", workExperienceRoutes);

const certificateRoutes = require("./routes/certificateRoute");
app.use("/certificate", certificateRoutes);

// const pdfRoutes = require("./routes/pdfPrintingRoute");
// app.use("/pdf", pdfRoutes);
const pdf = require("html-pdf");
const pdfTemplate = require("./templates/sample");
var options = {
  format: "Legal",
  border: {
    top: ".5in", // default is 0, units: mm, cm, in, px
    right: ".5in",
    bottom: ".5in",
    left: ".5in",
  },
};
app.post("/pdf/create", (req, res) => {
  pdf.create(pdfTemplate(), options).toFile("sample.pdf", (err) => {
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

app.get("/pdf/fetch", (req, res) => {
  res.sendFile(`${__dirname}/sample.pdf`);
});

const { restart } = require("nodemon");

app.listen(3001, () => {
  console.log("SERVER RUNNING");
});
