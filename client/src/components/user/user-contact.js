import React, { useState, useEffect } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

import Axios from "axios";

function UserContact(props) {
  const [email, setEmail] = useState("");
  const [altEmail, setAltEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [telNo, setTelNo] = useState("");

  const [btnAltEmailAddHide, setBtnAltEmailAddHide] = useState(false);
  const [btnAltEmailEditHide, setBtnAltEmailEditHide] = useState(true);
  const [btnAltEmailSaveHide, setBtnAltEmailSaveHide] = useState(false);

  const [btnMobileNoAddHide, setBtnMobileNoAddHide] = useState(false);
  const [btnMobileNoEditHide, setBtnMobileNoEditHide] = useState(true);
  const [btnMobileNoSaveHide, setBtnMobileNoSaveHide] = useState(false);

  const [btnTelNoAddHide, setBtnTelNoAddHide] = useState(false);
  const [btnTelNoEditHide, setBtnTelNoEditHide] = useState(true);
  const [btnTelNoSaveHide, setBtnTelNoSaveHide] = useState(false);

  const [disAltEmail, setDisAltEmail] = useState(true);
  const [disMobileNo, setDisMobileNo] = useState(true);
  const [disTelNo, setDisTelNo] = useState(true);

  const checkHasValue = () => {
    // setBtnTelNoAddHide(mobileNo === "" ? true : false);
    // setBtnTelNoEditHide(mobileNo !== "" ? true : false);
  };

  const employeeId = props.employeeId;

  const [toLoad, setToLoad] = useState(false);

  const loadingMessage = (
    <div className="mb-3">
      <div className="spinner-border  text-danger me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="h4 text-muted text-center  mt-5">Loading...</span>
    </div>
  );

  useEffect(() => {
    setToLoad(true);

    Axios.get(`http://localhost:3001/getFacultyById/${employeeId}`, {}).then(
      (response) => {
        const faculty = response.data;
        setEmail(faculty.email);
        setMobileNo(faculty.mobile_number);
        setTelNo(faculty.telephone_number);
        setAltEmail(faculty.alternative_email);
        setToLoad(false);
      }
    );
  }, []);

  return (
    <main>
      <div className="container-xl px-4 float-start">
        <h1 className="mt-4">Faculty Profile </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Contact Information</li>
        </ol>
        {toLoad ? (
          loadingMessage
        ) : (
          <div className="row gy-2">
            <div className="col-md-8 ">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="txtEmail"
                  placeholder="Email Address"
                  value={email}
                  disabled={true}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="txtEmail">Email Address</label>
              </div>
            </div>
            {/* alt email */}
            <div className="col-md-8  d-flex justify-content-start">
              <div className="form-floating w-100">
                <input
                  type="text"
                  className="form-control"
                  id="txtAltEmail"
                  placeholder="Alternate Email Address"
                  value={altEmail}
                  disabled={disAltEmail}
                  onChange={(e) => {
                    setAltEmail(e.target.value);
                  }}
                />
                <label htmlFor="txtAltEmail">Alternate Email Address</label>
              </div>
              {btnAltEmailAddHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    setBtnAltEmailAddHide(false);
                    setBtnAltEmailSaveHide(true);
                    setDisAltEmail(false);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} color="white" />
                </button>
              ) : null}
              {btnAltEmailEditHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    setBtnAltEmailEditHide(false);
                    setBtnAltEmailSaveHide(true);
                    setDisAltEmail(false);
                  }}
                >
                  <FontAwesomeIcon icon={faPen} color="white" />
                </button>
              ) : null}
              {btnAltEmailSaveHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    const newData = {
                      alternative_email: altEmail,
                    };

                    console.log(newData);
                    Axios.post(
                      `http://localhost:3001/updateFacultyAltEmail/${employeeId}`,
                      newData
                    ).then((response) => {
                      console.log(response.data);
                      const faculty = response.data;
                      setAltEmail(faculty.alternative_email);

                      setBtnAltEmailEditHide(true);
                      setBtnAltEmailSaveHide(false);
                      setDisAltEmail(true);
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faFloppyDisk} color="white" />
                </button>
              ) : null}
            </div>
            {/* mobile */}
            <div className="col-md-8 d-flex justify-content-start">
              <div className="form-floating w-100">
                <input
                  type="text"
                  className="form-control"
                  id="txtMobile"
                  placeholder="Mobile No."
                  value={mobileNo}
                  disabled={disMobileNo}
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                  }}
                />
                <label htmlFor="txtMobile">Mobile No.</label>
              </div>
              {btnMobileNoAddHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    setBtnMobileNoAddHide(false);
                    setBtnMobileNoSaveHide(true);
                    setDisMobileNo(false);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} color="white" />
                </button>
              ) : null}
              {btnMobileNoEditHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    setBtnMobileNoEditHide(false);
                    setBtnMobileNoSaveHide(true);
                    setDisMobileNo(false);
                  }}
                >
                  <FontAwesomeIcon icon={faPen} color="white" />
                </button>
              ) : null}
              {btnMobileNoSaveHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    const newData = {
                      mobile_number: mobileNo,
                    };

                    console.log(newData);
                    Axios.post(
                      `http://localhost:3001/updateFacultyMobileNumber/${employeeId}`,
                      newData
                    ).then((response) => {
                      console.log(response.data);
                      const faculty = response.data;
                      setMobileNo(faculty.mobile_number);

                      setBtnMobileNoEditHide(true);
                      setBtnMobileNoSaveHide(false);
                      setDisMobileNo(true);
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faFloppyDisk} color="white" />
                </button>
              ) : null}
            </div>
            {/* tel no */}
            <div className="col-md-8 d-flex justify-content-start">
              <div className="form-floating w-100">
                <input
                  type="text"
                  className="form-control"
                  id="txtTel"
                  placeholder="Telephone No."
                  value={telNo}
                  disabled={disTelNo}
                  onChange={(e) => {
                    setTelNo(e.target.value);
                  }}
                />
                <label htmlFor="txtTel">Telephone No.</label>
              </div>
              {btnTelNoAddHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    setBtnTelNoAddHide(false);
                    setBtnTelNoSaveHide(true);
                    setDisTelNo(false);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} color="white" />
                </button>
              ) : null}
              {btnTelNoEditHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    setBtnTelNoEditHide(false);
                    setBtnTelNoSaveHide(true);
                    setDisTelNo(false);
                  }}
                >
                  <FontAwesomeIcon icon={faPen} color="white" />
                </button>
              ) : null}
              {btnTelNoSaveHide ? (
                <button
                  className="float-end btn btn-1 ms-2 me-0 h-75 my-2 "
                  onClick={() => {
                    const newData = {
                      telephone_number: telNo,
                    };

                    console.log(newData);
                    Axios.post(
                      `http://localhost:3001/updateFacultyTelNumber/${employeeId}`,
                      newData
                    ).then((response) => {
                      console.log(response.data);
                      const faculty = response.data;
                      setTelNo(faculty.telephone_number);

                      setBtnTelNoEditHide(true);
                      setBtnTelNoSaveHide(false);
                      setDisTelNo(true);
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faFloppyDisk} color="white" />
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default UserContact;
