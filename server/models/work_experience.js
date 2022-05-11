const mongoose = require("mongoose");

const workExperienceSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    ref: "faculty_profiles",
    require: true,
  },
  position: String,
  company_name: String,
  monthly_salary: String,
  pay_grade: String,
  appointment_status: String,
  period_from: Date,
  period_to: Date,
  isGov_service: Boolean,
});

const workExperienceModel = mongoose.model(
  "work_experience_faculty_infos",
  workExperienceSchema
);

module.exports = workExperienceModel;
