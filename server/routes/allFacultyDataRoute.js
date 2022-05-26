const express = require("express");
const router = express.Router();

const faculty_profile_Model = require("../models/faculty_profile");
const addressModel = require("../models/address");
const issuedIdModel = require("../models/issued_id");
const elementaryModel = require("../models/educ_elementary");
const jhighschoolModel = require("../models/educ_juniorHigh");
const shighschoolModel = require("../models/educ_seniorHigh");
const vocationalModel = require("../models/educ_vocational");
const collegeModel = require("../models/educ_college");
const graduateModel = require("../models/educ_graduate_studies");
const civilModel = require("../models/civil_service");
const workExpModel = require("../models/work_experience");
const certificateModel = require("../models/certificate");

router.get("/get-all/:employee_id", (req, res) => {
  //   console.log("getting all");
  var faculty_data = {
    employee_id: req.params.employee_id,
  };

  faculty_profile_Model.find(
    { employee_id: req.params.employee_id },
    (err, result) => {
      faculty_data.personal_info = result[0];

      //   for address
      addressModel.find(
        { employee_id: req.params.employee_id },
        (err, result) => {
          faculty_data.address = result[0];

          // issued ids
          issuedIdModel.find(
            { employee_id: req.params.employee_id },
            (err, result) => {
              faculty_data.issuedIds = result[0];

              // elementary
              elementaryModel.find(
                { employee_id: req.params.employee_id },
                (err, result) => {
                  faculty_data.educ_elementary = result[0];

                  // junior
                  jhighschoolModel.find(
                    { employee_id: req.params.employee_id },
                    (err, result) => {
                      faculty_data.educ_juniorHigh = result[0];

                      // senior
                      shighschoolModel.find(
                        { employee_id: req.params.employee_id },
                        (err, result) => {
                          faculty_data.educ_seniorHigh = result[0];

                          // vocational
                          vocationalModel.find(
                            { employee_id: req.params.employee_id },
                            (err, result) => {
                              faculty_data.educ_vocational = result;

                              // college
                              collegeModel.find(
                                { employee_id: req.params.employee_id },
                                (err, result) => {
                                  faculty_data.educ_college = result;

                                  // graduate studies
                                  graduateModel.find(
                                    { employee_id: req.params.employee_id },
                                    (err, result) => {
                                      faculty_data.educ_graduateStudies =
                                        result;

                                      // civil
                                      civilModel.find(
                                        { employee_id: req.params.employee_id },
                                        (err, result) => {
                                          faculty_data.civil_elegibility =
                                            result;

                                          // work exp
                                          workExpModel.find(
                                            {
                                              employee_id:
                                                req.params.employee_id,
                                            },
                                            (err, result) => {
                                              faculty_data.work_exp = result;

                                              // certificates
                                              certificateModel.find(
                                                {
                                                  employee_id:
                                                    req.params.employee_id,
                                                },
                                                (err, result) => {
                                                  faculty_data.certificates =
                                                    result;

                                                  res.json(faculty_data);
                                                  //   console.log(faculty_data);
                                                }
                                              );
                                            }
                                          );
                                        }
                                      );
                                    }
                                  );
                                }
                              );
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );

      //   console.log(JSON.stringify(faculty_data));
      //   res.json(faculty_data);
    }
  );

  //   console.log(JSON.stringify(faculty_data));
});

router.delete("/delete/:employee_id", (req, res) => {
  //   console.log("getting all");

  faculty_profile_Model.findOneAndDelete(
    { employee_id: req.params.employee_id },
    (err, result) => {
      //   for address
      addressModel.findOneAndDelete(
        { employee_id: req.params.employee_id },
        (err, result) => {
          // issued ids
          issuedIdModel.findOneAndDelete(
            { employee_id: req.params.employee_id },
            (err, result) => {
              // elementary
              elementaryModel.findOneAndDelete(
                { employee_id: req.params.employee_id },
                (err, result) => {
                  // junior
                  jhighschoolModel.findOneAndDelete(
                    { employee_id: req.params.employee_id },
                    (err, result) => {
                      // senior
                      shighschoolModel.deleteMany(
                        { employee_id: req.params.employee_id },
                        (err, result) => {
                          // vocational
                          vocationalModel.deleteMany(
                            { employee_id: req.params.employee_id },
                            (err, result) => {
                              // college
                              collegeModel.deleteMany(
                                { employee_id: req.params.employee_id },
                                (err, result) => {
                                  // graduate studies
                                  graduateModel.deleteMany(
                                    { employee_id: req.params.employee_id },
                                    (err, result) => {
                                      // civil
                                      civilModel.deleteMany(
                                        { employee_id: req.params.employee_id },
                                        (err, result) => {
                                          // work exp
                                          workExpModel.deleteMany(
                                            {
                                              employee_id:
                                                req.params.employee_id,
                                            },
                                            (err, result) => {
                                              // certificates
                                              certificateModel.deleteMany(
                                                {
                                                  employee_id:
                                                    req.params.employee_id,
                                                },
                                                (err, result) => {
                                                  res.json(result);
                                                  //   console.log(faculty_data);
                                                }
                                              );
                                            }
                                          );
                                        }
                                      );
                                    }
                                  );
                                }
                              );
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );

      //   console.log(JSON.stringify(faculty_data));
      //   res.json(faculty_data);
    }
  );

  //   console.log(JSON.stringify(faculty_data));
});

module.exports = router;
