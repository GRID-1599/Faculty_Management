const mongoose = require("mongoose");

const graduateStudiesSchema = new mongoose.Schema({
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

const graduateStudiesModel = mongoose.model(
  "educ_graduateStudies_faculty_infos",
  graduateStudiesSchema
);

module.exports = graduateStudiesModel;
