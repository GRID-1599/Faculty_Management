const mongoose = require("mongoose");

const issuedIdSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    ref: "faculty_profiles",
    require: true,
  },
  GSIS_num: {
    type: String,
    require: true,
  },
  PAGIBIG_num: {
    type: String,
    require: true,
  },
  PHILHEALTH_num: {
    type: String,
    require: true,
  },
  SSS_num: {
    type: String,
    require: true,
  },
  TIN_num: {
    type: String,
    require: true,
  },
});

const issuedIdModel = mongoose.model("issued_ids", issuedIdSchema);

module.exports = issuedIdModel;
