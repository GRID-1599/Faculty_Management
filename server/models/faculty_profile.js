const mongoose = require("mongoose");

const faculty_profile_Schema = new mongoose.Schema({
  employee_number: {
    type: String,
    required: true,
  },
  email: {
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
    type: String,
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
});

const faculty_profile_Model = mongoose.model(
  "faculty_profiles",
  faculty_profile_Schema
);
module.exports = faculty_profile_Model;
