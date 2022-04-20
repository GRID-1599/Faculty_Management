import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function UserCivilServices(params) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                  <button
                    className="btn btn-1 btn-sm w-100"
                    onClick={handleShow}
                  >
                    Add New
                    <FontAwesomeIcon
                      icon={faPlus}
                      color="white"
                      className="ms-2"
                    />
                  </button>
                </div>
              </div>
              <div className="row gy-3">
                <WorkExperienceData />

                <WorkExperienceData />
              </div>
            </div>
            <Modal
              size="lg"
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Adding Work Experience</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <WorkExperienceDataAdd />
              </Modal.Body>
            </Modal>
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

const WorkExperienceData = (props) => {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    console.log("delete");
    setShow(false);
  };

  const handlePrint = () => {
    console.log("print");
  };

  return (
    <div className="card col-xxl-5 col-lg-11 col-sm-11 mx-2 p-4 ">
      <div className="row justify-content-between">
        <div className="col-auto">
          <p className="card-title h5">Work Experience</p>
        </div>
        <div className="col-auto">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-light dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a
                  className="dropdown-item btn-link"
                  onClick={() => {
                    onEditInfo();
                  }}
                >
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item btn-link">Print</a>
              </li>
              <li>
                <a className="dropdown-item btn-link" onClick={handleShow}>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form className="row gy-2" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label>Inclusive Dates</label>
        </div>
        <div className="col-md-6">
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
        <div className="col-md-6">
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
        <div className="col-md-12">
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
        <div className="col-md-12">
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
        <div className="col-md-12">
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

        <div className="col-md-12">
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
            <label htmlFor="txtStatusAppoitment">Status of Appointment</label>
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
            <label className="form-check-label" htmlFor="flexRadioDefault1">
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
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              No
            </label>
          </div>
        </div>

        <div className="row mt-3 ">
          <div className="col-md-4 mb-3 offset-md-8 ">
            {btnsaveHide ? (
              <button className="btn btn-1 btn-sm w-100">Save Changes</button>
            ) : null}
          </div>
        </div>
      </form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Work Experience Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-1" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const WorkExperienceDataAdd = (props) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [position, setPosition] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [salaryGrade, setSalaryGrade] = useState("");
  const [statusOfAppointment, setStatusOfAppointment] = useState("");
  const [ifGovService, setIfGovService] = useState("");

  const [disable, setDisable] = useState(false);

  const [btnsaveHide, setBtnSaveHide] = useState(true);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setDisable(true);
    // setBtnEditHide(true);
    // setBtnSaveHide(false);
  };
  return (
    <>
      <form className="row gy-2" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label>Inclusive Dates</label>
        </div>
        <div className="col-md-6">
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
        <div className="col-md-6">
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
        <div className="col-md-12">
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
        <div className="col-md-12">
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
        <div className="col-md-12">
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

        <div className="col-md-12">
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
            <label htmlFor="txtStatusAppoitment">Status of Appointment</label>
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
            <label className="form-check-label" htmlFor="flexRadioDefault1">
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
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              No
            </label>
          </div>
        </div>

        <div className="row mt-3 ">
          <div className="col-md-4 mb-3 offset-md-8 ">
            {btnsaveHide ? (
              <button className="btn btn-1 btn-sm w-100">Submit</button>
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default UserCivilServices;
