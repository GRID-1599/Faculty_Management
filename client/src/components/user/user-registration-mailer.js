import React from "react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

// import default_user_profile from ".././users-profile.png";

function RegistrationMailer(params) {
  const [emailTo, setEmailTo] = useState("");
  const [code, setCode] = useState("123456");
  const [disable, setDisable] = useState(false);

  const handleSubmit = (e) => {
    setDisable(true);
    e.preventDefault();
    console.log(emailTo);

    // var toSendParams = {
    //   temporaryPassword: temporaryPassword,
    //   name: facultyName,
    //   emailTo: emailTo,
    // };
    // // for sending email
    // emailjs
    //   .send(
    //     "service_bgel1lm",
    //     "template_giuf2w5",
    //     toSendParams,
    //     "lg6KWrgGPKArDL9Av"
    //   )
    //   .then(
    //     (res) => {
    //       console.log(res.text);
    //     },
    //     (err) => {
    //       console.log(err.text);
    //     }
    //   );
  };
  return (
    <div className="personal-infos">
      <p className="text-uppercase  mt-lg-3 ms-4">Email Validation</p>
      <form
        onSubmit={handleSubmit}
        className="px-5 pb-3 registration-wrapper custom-scrollbar"
      >
        <div className="">
          <p>First, please enter your email for validation.</p>
        </div>
        <div className="row mb-3">
          <div className="col-sm-9 mb-4">
            <label className="form-label"> Email * </label>
            {/* <input type="text" name="code" value="{setCode}" /> */}
            <input
              type="email"
              className="form-control"
              name="emailTo"
              placeholder="xxxxxxxx@bulsu.edu.ph"
              required
              onChange={(e) => {
                setEmailTo(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row  g-1 ">
          <div className="col-md-3 offset-md-5 ">
            <button className="btn btn-1 w-100" disabled={disable}>
              Submit
            </button>
          </div>
        </div>{" "}
      </form>
    </div>
  );
}

export default RegistrationMailer;
