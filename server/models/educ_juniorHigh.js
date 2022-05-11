const mongoose = require("mongoose");

const juniorHighSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    ref: "faculty_profiles",
    require: true,
  },
  school_name: String,
  basic_education: String,
  period_from: String,
  period_to: String,
  highest_level: String,
  year_graduate: String,
  honor_recieved: String,
});

const juniorHighModel = mongoose.model(
  "educ_juniorHigh_faculty_infos",
  juniorHighSchema
);

module.exports = juniorHighModel;
