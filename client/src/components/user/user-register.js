import React from "react";
import RegistrationPersonalInfo from "./user-registration-personal_info-registration";
// import RegistrationPersonalInfo from "./user-registration-personal_information";
import RegistrationEducationalBackground from "./user-registration-educational_background";
import RegistrationCivilService from "./user-registration-civil_service_eligibity";
import RegistrationWorkExperience from "./user-registration-work_experience";
import RegistrationTrainingSeminars from "./user-registration-training_seminars";
import RegistrationMailer from "./user-registration-mailer";

function UserRegister() {
  return (
    <div className="user-register-main bg_image ">
      <div className="container-xxl  ">
        <div className="row bg-white ">
          <div className="col-lg-3 bg-red   ">
            {/* <p className="text-white" style={{ writingMode: "vertical-lr" }}>
              sample
            </p> */}
          </div>
          <div className="col-lg-9  pb-3">
            <div className="h3 p-3">Faculty Registration</div>
            {/* <RegistrationMailer /> */}
            <RegistrationPersonalInfo />
            {/* <RegistrationEducationalBackground /> */}
            {/* <RegistrationCivilService /> */}
            {/* <RegistrationWorkExperience /> */}
            {/* <RegistrationTrainingSeminars /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
