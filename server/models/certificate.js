const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    ref: "faculty_profiles",
    require: true,
  },
  certificate_name: String,
  type: String,
  period_from: Date,
  period_to: Date,
  total_hours: Number,
  conducted_by: String,
  certificate_src: String,
});

const certificateModel = mongoose.model(
  "faculty_certificates",
  certificateSchema
);

module.exports = certificateModel;
