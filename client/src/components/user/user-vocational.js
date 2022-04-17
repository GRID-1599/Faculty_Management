import React, { useState } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

function UserJuniorHigh(params) {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [periodFrom, setPeriodFrom] = useState("");
  const [periodTo, setPeriodTo] = useState("");
  const [highest, setHighest] = useState("");
  const [yearGraduate, setYearGraduate] = useState("");
  const [honors, setHonors] = useState("");

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
              <h1 className="mt-4">Educational Background </h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Vocational / Trade Course
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
                      id="txtName"
                      placeholder="Name of School"
                      value={name}
                      disabled={disable}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <label htmlFor="txtName">Name of School</label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtEduc"
                      placeholder="Basic Education/Degree/Course"
                      value={education}
                      disabled={disable}
                      onChange={(e) => {
                        setEducation(e.target.value);
                      }}
                    />
                    <label htmlFor="txtEduc">
                      Basic Education/Degree/Course
                    </label>
                  </div>
                </div>
                <div className="col-md-10">
                  <label>Period of Attendance</label>
                </div>
                <div className="col-md-5">
                  <div className="form-floating">
                    <input
                      type="number"
                      min="1900"
                      max="2099"
                      step="1"
                      className="form-control"
                      id="txtPeriodTo"
                      placeholder="From"
                      value={periodFrom}
                      disabled={disable}
                      onChange={(e) => {
                        setPeriodFrom(e.target.value);
                      }}
                    />
                    <label htmlFor="txtPeriodTo">From</label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-floating">
                    <input
                      type="number"
                      min="1900"
                      max="2099"
                      step="1"
                      className="form-control"
                      id="txtTo"
                      placeholder="To"
                      value={periodTo}
                      disabled={disable}
                      onChange={(e) => {
                        setPeriodTo(e.target.value);
                      }}
                    />
                    <label htmlFor="txtTo">To</label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txthighest"
                      placeholder="Highest Level ( if not graduated)"
                      value={highest}
                      disabled={disable}
                      onChange={(e) => {
                        setHighest(e.target.value);
                      }}
                    />
                    <label htmlFor="txthighest">
                      Highest Level ( if not graduated)
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      min="1900"
                      max="2099"
                      step="1"
                      className="form-control"
                      id="txtGraduateYear"
                      placeholder="Year Graduate"
                      value={yearGraduate}
                      disabled={disable}
                      onChange={(e) => {
                        setYearGraduate(e.target.value);
                      }}
                    />
                    <label htmlFor="txtGraduateYear">Year Graduate</label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtHonors"
                      placeholder="Scholarship/Academic Honors Recieved"
                      value={honors}
                      disabled={disable}
                      onChange={(e) => {
                        setHonors(e.target.value);
                      }}
                    />
                    <label htmlFor="txtHonors">
                      Scholarship/Academic Honors Recieved
                    </label>
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
                      Edit Vocational / Trade Course Information
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

export default UserJuniorHigh;
