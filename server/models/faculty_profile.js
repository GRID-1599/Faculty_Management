const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const faculty_profile_Schema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
    required: false,
  },
  name_extension: {
    type: String,
    required: false,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  birth_place: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  civil_status: {
    type: String,
    required: true,
  },
  height: String,
  weight: String,
  blood_type: String,
  alternative_email: String,
  telephone_number: String,
  image: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

faculty_profile_Schema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const faculty_profile_Model = mongoose.model(
  "faculty_profiles",
  faculty_profile_Schema
);
module.exports = faculty_profile_Model;
