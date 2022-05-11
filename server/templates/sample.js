module.exports = () => {
  const today = new Date();

  return `
    <!DOCTYPE html>

<head>
    <title>Sample Document</title>

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

    </style>
</head>

<body>
    <div class="size">
        <div class="personal-info-header header">
            <h1 class="" style="font-size: 35px;">Faculty Management</h1>
        </div>

        <div class="f-header">
            <table style="margin-left: 12px; margin-bottom: 5px; margin-top: 18px;">
                <tr>
                    <td style="margin: 5px;"> <img src="../../client/public/facultyImages/2x2 formal.jpg" alt=""
                            srcset="" style="width:2in ; height: 2in "></td>
                    <td style="padding-left: 15px; vertical-align: bottom">
                        <span class="txt-bold">Faculty Number : </span><span class="txt-bold-1">2018107987</span>
                        <br>
                        <span class="txt-bold"> Faculty Name :</span><span class="txt-bold-1"> Christian Jude Catudio
                        </span>
                    </td>

                </tr>
            </table>
        </div>

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
                                    <span>Christian Jude</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Middle Initial : </label>
                                </td>
                                <td>
                                    <span>J</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Last Name : </label>
                                </td>
                                <td>
                                    <span>Catudio</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name Suffix :</label>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Birthday : </label>
                                </td>
                                <td>
                                    <span>Oct, 15 1999</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Age :</label>
                                </td>
                                <td>
                                    <span>22</span>
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
                                    <span>Parada</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Sex :</label>
                                </td>
                                <td>
                                    <span>Male</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Civil Status : </label>
                                </td>
                                <td>
                                    <span>Single</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Height :</label>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Weight :</label>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Blood Type :</label>
                                </td>
                                <td>
                                    <span></span>
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
                        <span> 624 Kaypalong St. San Vicente Sta Maria Bulacan</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Permanent Address :</label>
                    </td>
                    <td>
                        <span> 624 Kaypalong St. San Vicente Sta Maria Bulacan</span>
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
                        <span> catudiochristianjude@gmail.com</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Aleternative Email :</label>
                    </td>
                    <td>
                        <span> catudiochristianjude@gmail.com</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Mobile Number :</label>
                    </td>
                    <td>
                        <span> 09973356903</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Tel Number :</label>
                    </td>
                    <td>
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>GSIS ID No. :</label>
                    </td>
                    <td>
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>PAGIBIG ID No. :</label>
                    </td>
                    <td>
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>PHILHEALTH No. :</label>
                    </td>
                    <td>
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>SSS ID No. :</label>
                    </td>
                    <td>
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>TIN No. :</label>
                    </td>
                    <td>
                        <span></span>
                    </td>
                </tr>
            </table>



        </div>

        <div class="personal-info-header header">
            <p class="header-bg">Educational Background</p>
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Elementary</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> Sample</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>

            </div>
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Junior High</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> Sample</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Senior High</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> Sample</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Vocational / Trade Course</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> Sample</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Collage</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> Sample</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> Sample</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="educ-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Graduate Studies</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>School Name :</label>
                        </td>
                        <td>
                            <span> Sample</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Period of Attendance :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Highest Level (if not graduated) :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Year Graduated :</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Honors Recieved:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="personal-info-header header">
            <p class="header-bg">Civil Service Eligibilty</p>
            <div class="civil-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Graduate Studies</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Title :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Rating (if applicable) : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                    <tr>

                        <td>
                            <label>Date of Examination :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Place of Examination :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>License Number:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>License Validity:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Title :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Rating (if applicable) : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                    <tr>

                        <td>
                            <label>Date of Examination :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Place of Examination :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>License Number:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>License Validity:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="personal-info-header header">
            <p class="header-bg">Work Experience</p>
            <div class="work-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Graduate Studies</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Position Title :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Company : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Inclusive Dates : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <label>Montly Salary :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Pay Grade :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Status of Appointment:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Goverment Service:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Title :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Rating (if applicable) : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                    <tr>

                        <td>
                            <label>Date of Examination :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Place of Examination :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>License Number:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>License Validity:</label>
                        </td>
                        <td>
                            <span> 2012 </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="personal-info-header header">
            <p class="header-bg">Certificates</p>
            <div class="work-container">
                <h4 style="padding-left: 12px; margin-bottom: 0;">Graduate Studies</h4>
                <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Title :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Type : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Inclusive Dates : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <label>Number of Hours :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Conducted By :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                </table>
                 <table class="custom-wrapper"
                    style="margin-left: 12px; margin-bottom: 10px; border-left: 1px solid maroon;">
                    <tr>
                        <td>
                            <label>Title :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Type : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Inclusive Dates : </label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <label>Number of Hours :</label>
                        </td>
                        <td>
                            <span> 2001 - 2001</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Conducted By :</label>
                        </td>
                        <td>
                            <span> </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>

</html>

  `;
};
