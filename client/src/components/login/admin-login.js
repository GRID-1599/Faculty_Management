import React from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = (e) => {
    navigate("../admin");
  };

  return (
    <div
      className="user-login-main d-flex align-items-center  grd-bg-maroon"
      style={{ height: "100vh" }}
    >
      <div className="container ">
        <div className=" row justify-content-center ">
          <div className="col-lg-4  bg-red py-5 ">
            <div className="container mt-lg-3">
              <div className="row ">
                <p className="text-white h1 m-0 f-b ltsp-5 login-header">
                  FACULTY
                </p>
              </div>
              <div className="row">
                <p className="text-white h1 m-0 f-b ltsp-5 login-header">
                  MANAGEMENT
                </p>
              </div>
            </div>
            <div className="container mt-5 ms-2">
              <div className="row"></div>
              <div className="row "></div>
            </div>
          </div>

          <div className="col-lg-5 p-5 bg-white login-wrapper">
            <p
              className="h2 text-uppercase fw-bolder mt-lg-3"
              style={{
                letterSpacing: ".25rem",
              }}
            >
              Admin Login
            </p>
            <p className="fw-lighter fs-8 fc-g">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              ratione!
            </p>
            <form onSubmit={handleSubmit} className="px-3 py-3">
              <div className="row mb-4 mt-0">
                <label className="form-label m-0 p-1 fs-5">Username </label>
                <input
                  type="text"
                  name=""
                  className="form-control "
                  id="txtUserName"
                  aria-describedby="invalidusername"
                  required
                />
                <div className="invalid-feedback" id="invalidusername">
                  Wrong username
                </div>
              </div>
              <div className="row my-4">
                <label className="form-label m-0 p-1 fs-5">Password </label>
                <input
                  type="password"
                  name=""
                  className="form-control "
                  id="txtPassword"
                  aria-describedby="invalidpswd"
                  required
                />
                <div className="invalid-feedback" id="invalidpswd">
                  Wrong password
                </div>
              </div>
              <div className="row mt-4">
                <input
                  type="submit"
                  className="btn btn-1 mt-4 w-auto ltsp-5 px-5 fs-5"
                  value="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
