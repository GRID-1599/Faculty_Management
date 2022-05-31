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

router.get("/summary", (req, res) => {
  let facultyJSON = [
    {
      college: "College of Architecture and Fine Arts (CAFA)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Arts and Letters (CAL)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Business Administration (CBA)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Criminal Justice Education (CCJE)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Hospitality and Tourism Management (CHTM)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Information and Communications Technology (CICT)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Industrial Technology (CIT)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Law (CLaw)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Nursing (CN)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Engineering (COE)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Education (COED)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Science (CS)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Sports, Exercise and Recreation (CSER)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of Social Sciences and Philosophy (CSSP)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
    {
      college: "College of School (GS)",
      total: 0,
      rankSummary: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appointmentStatusSummary: [0, 0, 0, 0, 0, 0],
    },
  ];

  const collegeList = [
    "College of Architecture and Fine Arts (CAFA)",
    "College of Arts and Letters (CAL)",
    "College of Business Administration (CBA)",
    "College of Criminal Justice Education (CCJE)",
    "College of Hospitality and Tourism Management (CHTM)",
    "College of Information and Communications Technology (CICT)",
    "College of Industrial Technology (CIT)",
    "College of Law (CLaw)",
    "College of Nursing (CN)",
    "College of Engineering (COE)",
    "College of Education (COED)",
    "College of Science (CS)",
    "College of Sports, Exercise and Recreation (CSER)",
    "College of Social Sciences and Philosophy (CSSP)",
    "College of School (GS)",
  ];

  const rankList = [
    "Intructor I",
    "Intructor II",
    "Intructor III",
    "Assistant Professor I",
    "Assistant Professor II",
    "Assistant Professor III",
    "Assistant Professor IV",
    "Assiociate Professor I",
    "Assiociate Professor II",
    "Assiociate Professor III",
    "Assiociate Professor IV",
    "Assiociate Professor V",
    "Professor I",
    "Professor II",
    "Professor III",
    "Professor IV",
    "Professor V",
    "Professor VI",
    "College/University Proffessor",
  ];

  const appointmentStatusList = [
    "Permanent",
    "Temporary",
    "Coterminous",
    "Contractual",
    "Substitute",
    "Provisional",
  ];

  const setRank = (college, rank) => {
    switch (rank) {
      case rankList[0]:
        facultyJSON[college].rankSummary[0]++;
        break;
      case rankList[1]:
        facultyJSON[college].rankSummary[1]++;
        break;
      case rankList[2]:
        facultyJSON[college].rankSummary[2]++;
        break;
      case rankList[3]:
        facultyJSON[college].rankSummary[3]++;
        break;
      case rankList[4]:
        facultyJSON[college].rankSummary[4]++;
        break;
      case rankList[5]:
        facultyJSON[college].rankSummary[5]++;
        break;
      case rankList[6]:
        facultyJSON[college].rankSummary[6]++;
        break;
      case rankList[7]:
        facultyJSON[college].rankSummary[7]++;
        break;
      case rankList[8]:
        facultyJSON[college].rankSummary[8]++;
        break;
      case rankList[9]:
        facultyJSON[college].rankSummary[9]++;
        break;
      case rankList[10]:
        facultyJSON[college].rankSummary[10]++;
        break;
      case rankList[11]:
        facultyJSON[college].rankSummary[11]++;
        break;
      case rankList[12]:
        facultyJSON[college].rankSummary[12]++;
        break;
      case rankList[13]:
        facultyJSON[college].rankSummary[13]++;
        break;
      case rankList[14]:
        facultyJSON[college].rankSummary[14]++;
        break;
      case rankList[15]:
        facultyJSON[college].rankSummary[15]++;
        break;
      case rankList[16]:
        facultyJSON[college].rankSummary[16]++;
        break;
      case rankList[17]:
        facultyJSON[college].rankSummary[17]++;
        break;
      case rankList[18]:
        facultyJSON[college].rankSummary[18]++;
        break;
      default:
    }
  };

  const setStatus = (college, status) => {
    switch (status) {
      case appointmentStatusList[0]:
        facultyJSON[college].appointmentStatusSummary[0]++;
        break;
      case appointmentStatusList[1]:
        facultyJSON[college].appointmentStatusSummary[1]++;
        break;
      case appointmentStatusList[2]:
        facultyJSON[college].appointmentStatusSummary[2]++;
        break;
      case appointmentStatusList[3]:
        facultyJSON[college].appointmentStatusSummary[3]++;
        break;
      case appointmentStatusList[4]:
        facultyJSON[college].appointmentStatusSummary[4]++;
        break;
      case appointmentStatusList[5]:
        facultyJSON[college].appointmentStatusSummary[5]++;
        break;
      default:
    }
  };

  faculty_profile_Model.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      result.forEach((obj) => {
        // console.log(obj.college);
        switch (obj.college) {
          case collegeList[0]:
            facultyJSON[0].total++;
            setRank(0, obj.rank);
            setStatus(0, obj.appointment_status);
            break;
          case collegeList[1]:
            facultyJSON[1].total++;
            setRank(1, obj.rank);
            setStatus(1, obj.appointment_status);
            break;
          case collegeList[2]:
            facultyJSON[2].total++;
            setRank(2, obj.rank);
            setStatus(2, obj.appointment_status);

            break;
          case collegeList[3]:
            facultyJSON[3].total++;
            setRank(3, obj.rank);
            setStatus(3, obj.appointment_status);

            break;
          case collegeList[4]:
            facultyJSON[4].total++;
            setRank(4, obj.rank);
            setStatus(4, obj.appointment_status);

            break;
          case collegeList[5]:
            facultyJSON[5].total++;
            setRank(5, obj.rank);
            setStatus(5, obj.appointment_status);

            break;
          case collegeList[6]:
            facultyJSON[6].total++;
            setRank(6, obj.rank);
            setStatus(6, obj.appointment_status);

            break;
          case collegeList[7]:
            facultyJSON[7].total++;
            setRank(7, obj.rank);
            setStatus(7, obj.appointment_status);

            break;
          case collegeList[8]:
            facultyJSON[8].total++;
            setRank(8, obj.rank);
            setStatus(8, obj.appointment_status);

            break;
          case collegeList[9]:
            facultyJSON[9].total++;
            setRank(9, obj.rank);
            setStatus(9, obj.appointment_status);

            break;
          case collegeList[10]:
            facultyJSON[10].total++;
            setRank(10, obj.rank);
            setStatus(10, obj.appointment_status);

            break;
          case collegeList[11]:
            facultyJSON[11].total++;
            setRank(11, obj.rank);
            setStatus(11, obj.appointment_status);
            break;
          case collegeList[12]:
            facultyJSON[12].total++;
            setRank(12, obj.rank);
            setStatus(12, obj.appointment_status);
            break;
          case collegeList[13]:
            facultyJSON[13].total++;
            setRank(13, obj.rank);
            setStatus(13, obj.appointment_status);
            break;
          case collegeList[14]:
            facultyJSON[14].total++;
            setRank(14, obj.rank);
            setStatus(14, obj.appointment_status);
            break;
          default:
        }
      });

      res.json(facultyJSON);
    }
  });
});

module.exports = router;
