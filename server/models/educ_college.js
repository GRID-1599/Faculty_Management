const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    ref: "faculty_profiles",
    require: true,
  },
  school_name: String,
  course: String,
  period_from: String,
  period_to: String,
  units_earned: String,
  year_graduate: String,
  honor_recieved: String,
});

const collegeModel = mongoose.model(
  "educ_college_faculty_infos",
  collegeSchema
);

module.exports = collegeModel;
