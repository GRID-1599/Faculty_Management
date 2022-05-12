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

const allFacultyRoutes = require("./routes/allFacultyDataRoute");
app.use("/faculty", allFacultyRoutes);

// const pdfRoutes = require("./routes/pdfPrintingRoute");
// app.use("/pdf", pdfRoutes);
const pdf = require("html-pdf");
const pdfTemplate = require("./templates/sample");
var path = require("path");
// var image = path.join("file://", __dirname, "/2x2.jpg");
var image = "file://" + __dirname + "/2x2.jpg";
image = path.normalize(image);

console.log(image);
// image = path.normalize(image);
const headerStyle = `
<table>
  <tr>
    <td>
      <img src="https://th.bing.com/th/id/R.dd7381ba27cbae048846cdc104a23f2f?rik=opqdGThAJsCraQ&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f01%2f19%2f25%2f45_big.jpg&ehk=fOdbkRvLMvjQ%2fS7Jn%2bZI01%2fIRSG%2bZHSP3TvH7mbxSRI%3d&risl=&pid=ImgRaw&r=0" alt="" srcset=""  style="width:.5in ; height: .5in "/>
    </td>
    <td style="padding-left: 15px; vertical-align: center"><h2 style="">Faculty Management</h2></td>
  </tr>
</table>
`;
const footeerStyle = `
  <table style='width: 100%;'>
    <tr>
      <td>
        <p style="color: #444;">${dateFormatStringSet(new Date())}</p>
      </td>
      <td>
        <p style="color: #444; text-align: end;" >Page {{page}} of {{pages}}</p>
      </td>
    </tr>
  </table>
`;

var options = {
  format: "Legal",
  border: {
    top: "0in", // default is 0, units: mm, cm, in, px
    right: ".5in",
    bottom: ".5in",
    left: ".5in",
  },
  paginationOffset: 1, // Override the initial pagination number
  header: {
    height: "1in",
    contents: `${headerStyle}`,
  },
  footer: {
    height: "1in",
    contents: {
      default: `${footeerStyle}`, // fallback value
    },
  },
};

app.post("/pdf/create", (req, res) => {
  pdf.create(pdfTemplate(req.body), options).toFile("sample.pdf", (err) => {
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

function dateFormatStringSet(dateToBeFormat) {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let theDate = new Date(dateToBeFormat);
  // console.log("x " + theDate.getDate().toString().length);
  let formatted_date =
    month[theDate.getMonth()] +
    ". " +
    (theDate.getDate().toString().length <= 1
      ? "0" + theDate.getDate()
      : theDate.getDate()) +
    ", " +
    theDate.getFullYear() +
    " " +
    theDate.getHours() +
    ":" +
    theDate.getMinutes() +
    ":" +
    theDate.getSeconds();
  return formatted_date;
}
