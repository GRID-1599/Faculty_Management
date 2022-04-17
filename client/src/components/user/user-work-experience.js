import React, { useState } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

function UserCivilServices(params) {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [position, setPosition] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [salaryGrade, setSalaryGrade] = useState("");
  const [statusOfAppointment, setStatusOfAppointment] = useState("");
  const [ifGovService, setIfGovService] = useState("");

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
              <h1 className="mt-4">Work Experiences </h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Work Experiences</li>
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
                  <label>Inclusive Dates</label>
                </div>
                <div className="col-md-5">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      id="txtDateFrom"
                      placeholder="Start From"
                      value={dateFrom}
                      disabled={disable}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                      }}
                    />
                    <label htmlFor="txtDateFrom">Start From</label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      id="txtDateTo"
                      placeholder="End To"
                      value={dateTo}
                      disabled={disable}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                      }}
                    />
                    <label htmlFor="txtDateTo">End To</label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtPosition"
                      placeholder="Position Title"
                      value={position}
                      disabled={disable}
                      onChange={(e) => {
                        setPosition(e.target.value);
                      }}
                    />
                    <label htmlFor="txtPosition">Position Title</label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtWorkFrom"
                      placeholder="Department / Agency / Office / Company Name"
                      value={workFrom}
                      disabled={disable}
                      onChange={(e) => {
                        setWorkFrom(e.target.value);
                      }}
                    />
                    <label htmlFor="txtWorkFrom">
                      Department / Agency / Office / Company Name
                    </label>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="form-floating">
                    <input
                      type="txt"
                      className="form-control"
                      id="txtMonthlySalry"
                      placeholder="Monthly Salary"
                      value={monthlySalary}
                      disabled={disable}
                      onChange={(e) => {
                        setMonthlySalary(e.target.value);
                      }}
                    />
                    <label htmlFor="txtMonthlySalry">Monthly Salary</label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="txt"
                      className="form-control"
                      id="txtSalaryGrade"
                      placeholder="Salary / Job / Pay Grade"
                      value={salaryGrade}
                      disabled={disable}
                      onChange={(e) => {
                        setSalaryGrade(e.target.value);
                      }}
                    />
                    <label htmlFor="txtSalaryGrade">
                      Salary / Job / Pay Grade & STEP / Increment
                    </label>
                  </div>
                </div>

                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtStatusAppoitment"
                      placeholder="Status of Appointment"
                      value={statusOfAppointment}
                      disabled={disable}
                      onChange={(e) => {
                        setStatusOfAppointment(e.target.value);
                      }}
                    />
                    <label htmlFor="txtStatusAppoitment">
                      Status of Appointment
                    </label>
                  </div>
                </div>

                <div className="row g-2 ms-3 w-50">
                  <div className="h6 m-0">Goverment Service</div>

                  <div className=" col-auto ms-3 form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      disabled={disable}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="col-auto form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      disabled={disable}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      No
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
                      Edit Work Experinces Information
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
