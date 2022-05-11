const mongoose = require("mongoose");

const vocationalSchema = new mongoose.Schema({
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

const vocationalModel = mongoose.model(
  "educ_vocational_faculty_infos",
  vocationalSchema
);

module.exports = vocationalModel;
