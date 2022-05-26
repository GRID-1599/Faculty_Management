import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Homepage() {
  const navigate = useNavigate();

  const onClickUser = () => {
    navigate("./faculty/login");
  };

  const onClickUserRegister = () => {
    navigate("./faculty/registration");
  };

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

  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/content/").then((response) => {
      setContentList(response.data);
    });
  }, []);
  return (
    <>
      <div className="container-fluid landing-wrapper bg_image pt-5 ">
        <div className="container"></div>
        <div className="container mt-5  ">
          <div className="row  align-items-bottom">
            <div className="col-md-7 display-4 txt-header-bold pe-5 ">
              <p className="m-0">Faculty Management</p>
              <p className="m-0">Information System</p>
              <p className="m-0"></p>
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
          <div className="row gy-3 text-white">
            {contentList.length !== 0 &&
              contentList.map((content) => {
                return (
                  <div className="col-md-6" key={content._id}>
                    <p className="display-4 ">{content.title}</p>
                    <p className="lead ">{content.body}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="container mb-5"></div>
      </div>
    </>
  );
}

export default Homepage;
