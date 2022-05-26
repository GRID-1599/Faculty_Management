import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
function UserLogin() {
  const navigate = useNavigate();
  const onClickUserRegister = () => {
    navigate("../../faculty/registration");
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [userError, setUserError] = useState(false);
  const [pswdError, setPswdError] = useState(false);
  const [toLoad, setToLoad] = useState(false);
  const [trialShow, setTrialShow] = useState(false);

  var [tries, setTries] = useState(3);

  const pswdRef = useRef(null);
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }

    if (seconds <= 0) {
      setIsActive(false);
      clearInterval(interval);
      setSeconds(60);
      setTries(3);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleLogin = (e) => {
    if (tries > 1) {
      loginCheck();
    } else {
      setTrialShow(false);
      setUserError(false);
      setPswdError(false);
      setUser("");
      setPassword("");
      setIsActive(true);
    }
  };

  const loginCheck = () => {
    setToLoad(true);
    const thedata = {
      employee_id: user,
      email: user,
      thePassword: password,
    };
    console.log(thedata);
    try {
      Axios.post("http://localhost:3001/facultyLogin", thedata).then(
        (response) => {
          setToLoad(false);
          console.log(response.data);

          if (response.data === "CORRECT") {
            Axios.get(`http://localhost:3001/facultyUserToId/${user}`).then(
              (response) => {
                const userID = response.data;
                sessionStorage.setItem("user", userID);
                console.log(response.data);
                navigate("../faculty");
              }
            );
          } else if (response.data === "INCORRECT") {
            setPswdError(true);
            setTrialShow(true);
            setTries(tries - 1);
          } else if (response.data === "NOUSER") {
            setPassword("");
            setUserError(true);
            setPswdError(false);
            setTrialShow(true);
            setTries(tries - 1);
          }
        }
      );
    } catch (ex) {
      console.log(ex);
    }
  };

  const loader = (
    <div className="wrapper">
      <div
        className="spinner-border spinner-border-sm text-danger me-1"
        role="status"
      >
        <span className="visually-hidden">Checking...</span>
      </div>
      <span className="text-muted text-center  mt-5">Checking...</span>
    </div>
  );

  let click = 0;

  const handleAdmin = () => {
    click++;
    console.log("To admin login : ", click);

    if (click === 5) {
      navigate("../admin/login");
    }
  };

  return (
    <div
      className="user-login-main d-flex align-items-center  grd-bg-maroon "
      style={{ height: "100vh" }}
    >
      <div className="container  ">
        <div className=" row justify-content-center ">
          <div className="col-lg-4  bg-red py-5 bg_image-sm">
            <div className="container mt-lg-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="row ">
                    <p className="text-white h1 m-0 f-b ltsp-5 login-header">
                      Faculty Information
                    </p>
                  </div>
                  <div className="row">
                    <p className="text-white h1 m-0 f-b ltsp-5 login-header">
                      Management System
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-5 ms-2">
              <div className="row">
                <p className="text-white fs-7 ms-0 ps-0">
                  Wants to be part of the faculties?
                </p>
              </div>
              <div className="row ">
                <button
                  type="button"
                  className="btn btn-light w-auto px-5 ltsp-2"
                  onClick={onClickUserRegister}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-5 p-5 bg-white login-wrapper">
            <p
              className="h2 text-uppercase fw-bolder mt-lg-3"
              style={{
                letterSpacing: ".25rem",
              }}
              onClick={handleAdmin}
            >
              Login
            </p>
            <p className="fw-lighter fs-8 fc-g">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              ratione!
            </p>
            <form onSubmit={handleSubmit} className="px-3 py-3">
              <div className="row mb-4 mt-0">
                <label className="form-label m-0 p-1 fs-5">
                  Employee ID or Email{" "}
                </label>
                <input
                  type="text"
                  name=""
                  value={user}
                  className={
                    userError ? "form-control is-invalid" : "form-control"
                  }
                  id="txtUserName"
                  aria-describedby="invalidusername"
                  required
                  ref={userRef}
                  onChange={(e) => {
                    setUserError(false);
                    setUser(e.target.value);
                  }}
                />
                <div className="invalid-feedback" id="invalidusername">
                  Wrong Employee Id or Email
                </div>
              </div>
              <div className="row my-4">
                <label className="form-label m-0 p-1 fs-5">Password </label>
                <input
                  type="password"
                  name=""
                  value={password}
                  className={
                    pswdError ? "form-control is-invalid" : "form-control"
                  }
                  id="txtPassword"
                  aria-describedby="invalidpswd"
                  required
                  ref={pswdRef}
                  onChange={(e) => {
                    setPswdError(false);
                    setPassword(e.target.value);
                  }}
                />
                <div className="invalid-feedback" id="invalidpswd">
                  Wrong password
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  {!isActive && (
                    <input
                      type="submit"
                      className="btn btn-1 w-100"
                      value="Log in"
                    />
                  )}
                </div>
                <div className="col-md-6"> {toLoad && loader}</div>
              </div>

              {trialShow && (
                <div className="row mt-2">
                  <div className="col-md-12">
                    <span className="text-muted">
                      Remaining trials: {tries}
                    </span>
                  </div>
                </div>
              )}

              {isActive && (
                <div className="row mt-2">
                  <div className="col-md-12">
                    <span className="text-muted">Log in disabled</span>
                    <br />
                    <span className="text-muted">
                      Please wait for {seconds} seconds.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
