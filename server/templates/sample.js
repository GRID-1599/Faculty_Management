const personal_info = (facultyData, toShow) => {
  const personalInfo = `
    <div class="personal-info-header header">
            <p class="header-bg">Personal Information</p>

            <table class="custom-wrapper">
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <label>First Name :</label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.first_name
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Middle Initial : </label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.middle_name
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Last Name : </label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.last_name
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name Suffix :</label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.name_extension
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Birthday : </label>
                                </td>
                                <td>
                                    <span>${dateFormatStringSet(
                                      facultyData.personal_info.birth_date
                                    )}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Age :</label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.age
                                    }</span>
                                </td>
                            </tr>

                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <label>Place of Birth :</label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.birth_place
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Sex :</label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.sex
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Civil Status : </label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.civil_status
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Height :</label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.height
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Weight :</label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.weight
                                    }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Blood Type :</label>
                                </td>
                                <td>
                                    <span>${
                                      facultyData.personal_info.blood_type
                                    }</span>
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>

            <table class="custom-wrapper" style="margin-left: 12px; margin-bottom: 5px; margin-top: 18px;">
                <tr>
                    <td>
                        <label>Resident Address :</label>
                    </td>
                    <td>
                        <span>${
                          facultyData.address.resident_address.lot_number
                        } ${facultyData.address.resident_address.street} St. ${
    facultyData.address.resident_address.subdivision
  } , ${facultyData.address.resident_address.barangay} , ${
    facultyData.address.resident_address.city
  } , ${facultyData.address.resident_address.province} ${
    facultyData.address.resident_address.zip_code
  } </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Permanent Address :</label>
                    </td>
                    <td>
                        <span>${
                          facultyData.address.permanent_address.lot_number
                        } ${facultyData.address.permanent_address.street} St. ${
    facultyData.address.permanent_address.subdivision
  } , ${facultyData.address.permanent_address.barangay} , ${
    facultyData.address.permanent_address.city
  } , ${facultyData.address.permanent_address.province} ${
    facultyData.address.permanent_address.zip_code
  } </span>
                    </td>
                </tr>
            </table>

            <!-- <h3 class="label padding-5 txt-bold">Contact</h3> -->
            <table class="custom-wrapper" style="margin-left: 12px;">
                <tr>
                    <td>
                        <label>Email Address :</label>
                    </td>
                    <td>
                        <span>${facultyData.personal_info.email}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Aleternative Email :</label>
                    </td>
                    <td>
                        <span> ${
                          facultyData.personal_info.alternative_email
                        }</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Mobile Number :</label>
                    </td>
                    <td>
                        <span>${facultyData.personal_info.mobile_number}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Tel Number :</label>
                    </td>
                    <td>
                        <span>${
                          facultyData.personal_info.telephone_number
                        }</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>GSIS ID No. :</label>
                    </td>
                    <td>
                        <span>${facultyData.issuedIds.GSIS_num}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>PAGIBIG ID No. :</label>
                    </td>
                    <td>
                        <span>${facultyData.issuedIds.PAGIBIG_num}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>PHILHEALTH No. :</label>
                    </td>
                    <td>
                        <span>${facultyData.issuedIds.PHILHEALTH_num}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>SSS ID No. :</label>
                    </td>
                    <td>
                        <span>${facultyData.issuedIds.SSS_num}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>TIN No. :</label>
                    </td>
                    <td>
                        <span>${facultyData.issuedIds.TIN_num}</span>
                    </td>
                </tr>
            </table>



        </div>
    `;

  if (toShow) {
    return personalInfo;
  }

  return "";
};

const educ_info = (facultyData, toShow) => {
  const elementary = `
    <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Elementary</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_elementary.school_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_elementary.period_from} - ${facultyData.educ_elementary.period_to}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span>${facultyData.educ_elementary.highest_level} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_elementary.year_graduate} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_elementary.honor_recieved} </span>
                        </td>
                    </tr>
                </table>

            </div>
    `;

  const juniorHigh = `
    <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Junior High</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_juniorHigh.school_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Basic Education:</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_juniorHigh.basic_education}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_juniorHigh.period_from} - ${facultyData.educ_juniorHigh.period_to}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span>${facultyData.educ_juniorHigh.highest_level} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_juniorHigh.year_graduate} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_juniorHigh.honor_recieved} </span>
                        </td>
                    </tr>
                </table>
            </div>
    `;

  const seniorHigh = `
    <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Senior High</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_seniorHigh.school_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Basic Education:</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_seniorHigh.basic_education}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_seniorHigh.period_from} - ${facultyData.educ_seniorHigh.period_to}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span>${facultyData.educ_seniorHigh.highest_level} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_seniorHigh.year_graduate} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> ${facultyData.educ_seniorHigh.honor_recieved} </span>
                        </td>
                    </tr>
                </table>
            </div>
    `;

  const college = () => {
    college_html = `
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Collage</h4>
           
      `;
    collegesInfoHtml = "";
    facultyData.educ_college.forEach((college) => {
      collegesInfoHtml += `<table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> ${college.school_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Course:</label>
                        </td>
                        <td>
                            <span>  ${college.course} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span>  ${college.period_from} -  ${college.period_to}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level/ Units Eraned (if not graduated) :</label>
                        </td>
                        <td>
                            <span>  ${college.units_earned}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span>  ${college.year_graduate} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span>  ${college.honor_recieved} </span>
                        </td>
                    </tr>
                </table>`;
    });

    college_html = college_html + collegesInfoHtml + "</div>";
    // console.log(college_html);
    return college_html;
  };

  const vocational = () => {
    vocational_html = `
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Vocational / Trade Course</h4>
           
      `;
    vocationalsInfoHtml = "";
    facultyData.educ_vocational.forEach((vocational) => {
      vocationalsInfoHtml += `<table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> ${vocational.school_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Course:</label>
                        </td>
                        <td>
                            <span>  ${vocational.course} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span>  ${vocational.period_from} -  ${vocational.period_to}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level/ Units Eraned (if not graduated) :</label>
                        </td>
                        <td>
                            <span>  ${vocational.units_earned}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span>  ${vocational.year_graduate} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span>  ${vocational.honor_recieved} </span>
                        </td>
                    </tr>
                </table>`;
    });

    vocational_html = vocational_html + vocationalsInfoHtml + "</div>";
    // console.log(vocational_html);
    return vocational_html;
  };

  const graduateStud = () => {
    graduateStud_html = `
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Graduate Studies</h4>
           
      `;
    graduateStudsInfoHtml = "";
    facultyData.educ_graduateStudies.forEach((graduateStud) => {
      graduateStudsInfoHtml += `<table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> ${graduateStud.school_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Course:</label>
                        </td>
                        <td>
                            <span>  ${graduateStud.course} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span>  ${graduateStud.period_from} -  ${graduateStud.period_to}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level/ Units Eraned (if not graduated) :</label>
                        </td>
                        <td>
                            <span>  ${graduateStud.units_earned}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span>  ${graduateStud.year_graduate} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span>  ${graduateStud.honor_recieved} </span>
                        </td>
                    </tr>
                </table>`;
    });

    graduateStud_html = graduateStud_html + graduateStudsInfoHtml + "</div>";
    // console.log(graduateStud_html);
    return graduateStud_html;
  };

  const educ_html = `
  <div class="personal-info-header header">
            <p class="header-bg">Educational Background</p>
            ${elementary}
            ${juniorHigh}
            ${seniorHigh}
            ${vocational()}
            ${college()}
            ${graduateStud()}
        </div>`;

  if (toShow) {
    return educ_html;
  }

  return "";
};

const civilService_info = (facultyData, toShow) => {
  const civilEligibility = () => {
    civilEligibilitysInfoHtml = "";
    facultyData.civil_elegibility.forEach((civilEligibility) => {
      civilEligibilitysInfoHtml += `
            <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Title / License Name :</label>
                        </td>
                        <td>
                            <span>${civilEligibility.license_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Rating (if applicable) : </label>
                        </td>
                        <td>
                            <span>${civilEligibility.rating}</span>
                        </td>
                    </tr>
                    <tr>
                    <tr>

                        <td>
                            <label>Date of Examination :</label>
                        </td>
                        <td>
                            <span> ${dateFormatStringSet(
                              civilEligibility.exam_date
                            )} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Place of Examination :</label>
                        </td>
                        <td>
                            <span> ${civilEligibility.exam_place} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>License Number:</label>
                        </td>
                        <td>
                            <span> ${civilEligibility.license_number} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>License Validity:</label>
                        </td>
                        <td>
                            <span> ${
                              civilEligibility.license_validity_date
                            } </span>
                        </td>
                    </tr>
                </table>
      `;
    });
    return civilEligibilitysInfoHtml;
  };
  const civil_html = `
  <div class="personal-info-header header">
            <p class="header-bg">Civil Service Eligibilty</p>
            <div class="civil-container">
                ${civilEligibility()}
                
            </div>
        </div>
 `;

  if (toShow) {
    return civil_html;
  }

  return "";
};

const workExp_info = (facultyData, toShow) => {
  const worKExp = () => {
    worKExpsInfoHtml = "";
    facultyData.work_exp.forEach((worKExp) => {
      worKExpsInfoHtml += `
            <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Position Title :</label>
                        </td>
                        <td>
                            <span>${worKExp.position}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Company : </label>
                        </td>
                        <td>
                            <span>${worKExp.company_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Inclusive Dates : </label>
                        </td>
                        <td>
                            <span> ${dateFormatStringSet(
                              worKExp.period_from
                            )} - ${dateFormatStringSet(
        worKExp.period_to
      )}</span>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <label>Montly Salary :</label>
                        </td>
                        <td>
                            <span>${worKExp.monthly_salary}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Pay Grade :</label>
                        </td>
                        <td>
                            <span> ${worKExp.pay_grade}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Status of Appointment:</label>
                        </td>
                        <td>
                            <span> ${worKExp.appointment_status} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Goverment Service:</label>
                        </td>
                        <td>
                            <span> ${
                              worKExp.isGov_service ? "Yes" : "No"
                            } </span>
                        </td>
                    </tr>
                </table>
      `;
    });
    return worKExpsInfoHtml;
  };
  const workExp_html = `
  <div class="personal-info-header header">
            <p class="header-bg">Work Experience</p>
            <div class="work-container">
                
               ${worKExp()}
            </div>
        </div>
 `;
  if (toShow) {
    return workExp_html;
  }

  return "";
};

const certificate_info = (facultyData, toShow) => {
  const certificate = () => {
    certificatesInfoHtml = "";
    facultyData.certificates.forEach((certificate) => {
      certificatesInfoHtml += `
            <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Title :</label>
                        </td>
                        <td>
                            <span>${certificate.certificate_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Type : </label>
                        </td>
                        <td>
                            <span>${certificate.type}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Inclusive Dates : </label>
                        </td>
                        <td>
                            <span> ${dateFormatStringSet(
                              certificate.period_from
                            )} - ${dateFormatStringSet(
        certificate.period_to
      )}</span>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <label>Number of Hours :</label>
                        </td>
                        <td>
                            <span>${certificate.total_hours}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Conducted By :</label>
                        </td>
                        <td>
                            <span>${certificate.conducted_by} </span>
                        </td>
                    </tr>
                </table>
      `;
    });
    return certificatesInfoHtml;
  };
  const cert_html = `
  <div class="personal-info-header header">
            <p class="header-bg">Certificates</p>
            <div class="work-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Graduate Studies</h4>
                
                ${certificate()}
            </div>
        </div>
 `;

  if (toShow) {
    return cert_html;
  }

  return "";
};

module.exports = (facultyData) => {
  const today = new Date();
  //   console.log("sample " + image);
  //   console.log(facultyData);

  const Styles = `
  <style>
        .body {
            margin: 0 auto;
            font-family: 'Helvetica Neue', 'Helvetica';
            padding: 0 auto;
            /* max-width: 800px; */
            width: 216mm;
        }

        .justify-center {
            text-align: center
        }

        ul {
            list-style: none;
            margin: 0;
        }

        .header {
            margin: 0px 12px;
        }

        .size {
            width: 216mm;

        }

        .padding-5 {
            margin: 0;
            margin: 2in;
            padding: 0 .25in;
        }

        .header-bg {
            background-color: maroon;
            padding: 5px 15px;
            color: white;
            font-weight: bolder;
            font-size: large;

        }

        .label {
            margin: 0;
            margin-top: 20px;
            color: gray;
        }

        .txt-bold {
            font-weight: bolder;

        }

        .txt-bold-1 {
            font-size: 25px;
            font-weight: bolder;

        }

        .info-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }



        .custom-wrapper label {
            margin: 0;
            color: gray;
        }

        .custom-wrapper span {
            margin: 0;
            font-weight: 500;
        }

        .custom-wrapper td {
            padding: 0px 10px;
            margin: 10px;
            min-width: 1px;
        }

        .tb td {
            min-width: 1px;
        }

    </style>`;

  const Header = `
    <div class="f-header">
            <table style="margin-left: 12px; margin-bottom: 5px; margin-top: 18px;">
                <tr>
                    <td style="margin: 5px;"> </td>
                    <td style="padding-left: 15px; vertical-align: bottom">
                        <span class="txt-bold">Faculty Number : </span><span class="txt-bold-1">${facultyData.employee_id}</span>
                        <br>
                        <span class="txt-bold"> Faculty Name :</span><span class="txt-bold-1"> ${facultyData.personal_info.first_name} ${facultyData.personal_info.middle_name}.  ${facultyData.personal_info.last_name} ${facultyData.personal_info.name_extension}
                        </span>
                    </td>

                </tr>
            </table>
        </div>
    `;

  return `
    <!DOCTYPE html>
<apex:page renderAs="PDF" applyBodyTag="false"></apex:page>
<head>
    <title>Sample Document</title>
    ${Styles}
    
</head>

<body>

    <div class="size">
        <div class="personal-info-header header">
            <h1 class="" style="font-size: 35px;" id="pageHeader">Faculty Management</h1>
        </div>

        ${Header}

        ${personal_info(facultyData, facultyData.printData.isToPrintPersonal)}

        ${educ_info(facultyData, facultyData.printData.isToPrintEducBG)}

        ${civilService_info(facultyData, facultyData.printData.isToPrintCivil)}

        ${workExp_info(facultyData, facultyData.printData.isToPrintWorkExp)}

        ${certificate_info(facultyData, facultyData.printData.isToPrintCert)}




        

        

        

        
    </div>
</body>

</html>

   `;
};

function dateFormatStringSet(dateToBeFormat) {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let theDate = new Date(dateToBeFormat);
  // console.log("x " + theDate.getDate().toString().length);
  let formatted_date =
    month[theDate.getMonth()] +
    ". " +
    (theDate.getDate().toString().length <= 1
      ? "0" + theDate.getDate()
      : theDate.getDate()) +
    ", " +
    theDate.getFullYear();
  return formatted_date;
}
