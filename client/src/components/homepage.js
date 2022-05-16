import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const onClickUser = () => {
    navigate("./faculty/login");
  };

  const onClickUserRegister = () => {
    navigate("./faculty/registration");
  };

  const mt =
    "Bulacan State University is a progressive knowledge-generating globally recognized for excellent instruction, pioneering research, and responsive community engagements";

  const vt =
    "Bulacan State University exists to produce highly competent, ethical and service-oriented professionals that contribute to the sustainable socio-economic growth and development of the nation";

  const [missionTxt, setMissionTxt] = useState(mt);
  const [vissionTxt, setVissionTxt] = useState(vt);

  const registerBtn = (
    <button
      type="button"
      className="btn btn-danger btn-homepage mb-4"
      onClick={onClickUserRegister}
    >
      Register
    </button>
  );

  const loginBtn = (
    <button
      type="button"
      className="btn btn-danger btn-homepage mb-4"
      onClick={onClickUser}
    >
      Log in
    </button>
  );
  return (
    <>
      <div className="container-fluid landing-wrapper bg_image pt-5 ">
        <div className="container"></div>
        <div className="container mt-5  ">
          <div className="row  align-items-bottom">
            <div className="col-md-7 display-4 txt-header-bold pe-5 ">
              <p className="m-0">Faculty Information</p>
              <p className="m-0">Management</p>
              <p className="m-0">System</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              {loginBtn}
              {registerBtn}
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="row align-items-center">
                <div className="col-auto d-flex p-0">
                  <img
                    src={`/resources/BULSU_LOGO.png`}
                    alt="logo"
                    style={{ width: "175px", height: "175px" }}
                    className="m-0"
                  />
                </div>
                <div className="col-8 text-white display-4 txt-header-bold pe-5 ">
                  <p className="m-0">Bulacan State</p>
                  <p className="m-0">University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row text-white">
            <div className="col-md-6">
              <p className="display-4 ">Vission</p>
              <p className="lead ">{vissionTxt}</p>
            </div>
            <div className="col-md-6">
              <p className="display-4 ">Mission</p>
              <p className="lead ">{missionTxt}</p>
            </div>
          </div>
        </div>

        <div className="container mb-5"></div>
      </div>
    </>
  );
}

export default Homepage;
