const mongoose = require("mongoose");

const civilServiceSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    ref: "faculty_profiles",
    require: true,
  },
  license_name: String,
  rating: String,
  exam_date: Date,
  exam_place: String,
  license_number: String,
  license_validity_date: Date,
});

const civilServiceModel = mongoose.model(
  "civil_service_faculty_infos",
  civilServiceSchema
);

module.exports = civilServiceModel;
