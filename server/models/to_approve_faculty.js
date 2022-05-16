const mongoose = require("mongoose");

const faculty_profile_to_approve_Schema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  appointment_status: {
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
  image: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    required: true,
  },
});

const faculty_profile_to_approve_Model = mongoose.model(
  "to_approve_faculties",
  faculty_profile_to_approve_Schema
);
module.exports = faculty_profile_to_approve_Model;
