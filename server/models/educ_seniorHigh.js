const mongoose = require("mongoose");

const seniorHighSchema = new mongoose.Schema({
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

const seniorHighModel = mongoose.model(
  "educ_seniorHigh_faculty_infos",
  seniorHighSchema
);

module.exports = seniorHighModel;
