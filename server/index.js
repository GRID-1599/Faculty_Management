const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
const IRL =
  "mongodb+srv://jude:4563214789@facultymanagement.mqzin.mongodb.net/faculties?retryWrites=true&w=majority";

mongoose.connect(IRL);


const facultyRoutes = require('./routes/facultyRoutes')

app.use('',facultyRoutes )


app.listen(3001, () => {
  console.log("SERVER RUNNING");
});
