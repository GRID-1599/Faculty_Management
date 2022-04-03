import React from "react";
import RegistrationPersonalInfo from "./user-registration-personal_information";
import RegistrationEducationalBackground from "./user-registration-educational_background";
import RegistrationCivilService from "./user-registration-civil_service_eligibity";
import RegistrationWorkExperience from "./user-registration-work_experience";
import RegistrationTrainingSeminars from "./user-registration-training_seminars";

function UserRegister() {
  return (
    <div className="user-register-main ">
      <div className="container-xxl ">
        <div className="row  ">
          <div className="col-lg-4 bg-red   "></div>
          <div className="col-lg-8  pb-3">
            <div className="h3 p-3">Faculty Registration Form</div>
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
