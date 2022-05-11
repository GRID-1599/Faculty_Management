const mongoose = require("mongoose");

const residentAddressSchema = new mongoose.Schema(
  {
    lot_number: String,
    street: String,
    subdivision: String,
    barangay: String,
    city: String,
    province: String,
    zip_code: String,
  },
  { _id: false }
);

const permanentAddressSchema = new mongoose.Schema(
  {
    lot_number: String,
    street: String,
    subdivision: String,
    barangay: String,
    city: String,
    province: String,
    zip_code: String,
  },
  { _id: false }
);

const addressSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    ref: "faculty_profiles",
    require: true,
  },
  resident_address: residentAddressSchema,
  permanent_address: permanentAddressSchema,
});

const addressModel = mongoose.model("adresses", addressSchema);

module.exports = addressModel;
