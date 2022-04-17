import React, { useState } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

function UserCivilServices(params) {
  const [license, setLicense] = useState("");
  const [rating, setRating] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examPlace, setExamPlace] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseDateValidity, setLicenseDateValidity] = useState("");

  const [disable, setDisable] = useState(true);

  const [btnEditHide, setBtnEditHide] = useState(true);
  const [btnsaveHide, setBtnSaveHide] = useState(false);

  const onEditInfo = () => {
    setDisable(false);
    setBtnEditHide(false);
    setBtnSaveHide(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    setBtnEditHide(true);
    setBtnSaveHide(false);
  };

  return (
    <div className="user-home-main sb-nav-fixed">
      <TopNav />
      <div id="layoutSidenav">
        <SideNav />
        {/* CONTAINer */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-xl px-4 float-start">
              <h1 className="mt-4">Civil Service Eligibility </h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Civil Service Eligibility
                </li>
              </ol>

              <div className="row ">
                <div className="col-md-2 offset-md-8 mb-3 ">
                  <button className="btn btn-1 btn-sm w-100">
                    Add New
                    <FontAwesomeIcon
                      icon={faPlus}
                      color="white"
                      className="ms-2"
                    />
                  </button>
                </div>
              </div>

              <form className="row gy-2" onSubmit={handleSubmit}>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtLicense"
                      placeholder="License Name"
                      value={license}
                      disabled={disable}
                      onChange={(e) => {
                        setLicense(e.target.value);
                      }}
                    />
                    <label htmlFor="txtLicense">
                      Careers Services/ra 1080 (board bar) under special laws/
                      ces/csee barangay eligibility / drivers license
                    </label>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtRating"
                      placeholder="Rating (if applicable)"
                      value={rating}
                      disabled={disable}
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                    />
                    <label htmlFor="txtRating">Rating (if applicable)</label>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      id="txtexamDate"
                      placeholder="Date of Examination"
                      value={examDate}
                      disabled={disable}
                      onChange={(e) => {
                        setExamDate(e.target.value);
                      }}
                    />
                    <label htmlFor="txtexamDate">
                      Date of Examination / Conferment
                    </label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="txt"
                      className="form-control"
                      id="txtExamPlace"
                      placeholder="Place of Examination / Conferment"
                      value={examPlace}
                      disabled={disable}
                      onChange={(e) => {
                        setExamPlace(e.target.value);
                      }}
                    />
                    <label htmlFor="txtExamPlace">
                      Place of Examination / Conferment
                    </label>
                  </div>
                </div>

                <div className="col-md-10">
                  <label>License (if applicable)</label>
                </div>
                <div className="col-md-5">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtLicenseNumber"
                      placeholder="Number"
                      value={licenseNumber}
                      disabled={disable}
                      onChange={(e) => {
                        setLicenseNumber(e.target.value);
                      }}
                    />
                    <label htmlFor="txtLicenseNumber">Number</label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      id="txtLicenseValidity"
                      placeholder="Date of Validity"
                      value={licenseDateValidity}
                      disabled={disable}
                      onChange={(e) => {
                        setLicenseDateValidity(e.target.value);
                      }}
                    />
                    <label htmlFor="txtLicenseValidity">Date of Validity</label>
                  </div>
                </div>

                <div className="row mt-3 ">
                  <div className="col-md-3 mb-3 offset-md-7 ">
                    {btnsaveHide ? (
                      <button className="btn btn-1 btn-sm w-100">
                        Save Changes
                      </button>
                    ) : null}
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-10 mb-3 ">
                  {btnEditHide ? (
                    <button
                      className="btn btn-1 btn-sm w-100"
                      onClick={() => {
                        onEditInfo();
                      }}
                    >
                      Edit Information
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Sample Footer</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default UserCivilServices;
