import React, { useState, useEffect } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";
import { Modal, Button } from "react-bootstrap";

import { dateFormater } from "../functions/dateFunction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import Axios from "axios";

function UserWorkExperience(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loaderShow, setLoaderShow] = useState(true);
  const [nullShow, setNullShow] = useState(false);

  const [workExpList, setWorkExpList] = useState([]);
  const employeeId = props.employeeId;

  useEffect(() => {
    Axios.get(`http://localhost:3001/work-experience/${employeeId}`).then(
      (response) => {
        setWorkExpList(response.data);
        setLoaderShow(false);

        // console.log(response.data);
      }
    );
    console.log("x");
  });

  const nullMessage = (
    <span className="h3 text-muted text-center  mt-5">Nothing to display</span>
  );

  const loadingMessage = (
    <div className="wrapper">
      <div className="spinner-border text-danger me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="h3 text-muted text-center  mt-5">Loading...</span>
    </div>
  );

  return (
    <main>
      <div className="container-xl px-4 float-start">
        <h1 className="mt-4">Work Experiences </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Work Experiences</li>
        </ol>

        <div className="row ">
          <div className="col-md-2 offset-md-8 mb-3 ">
            <button className="btn btn-1 btn-sm w-100" onClick={handleShow}>
              Add New
              <FontAwesomeIcon icon={faPlus} color="white" className="ms-2" />
            </button>
          </div>
        </div>
        <div className="row gy-3">
          {loaderShow && loadingMessage}
          {workExpList &&
            workExpList.map((userWorkExpInfo) => {
              return (
                <WorkExperienceData
                  workExpData={userWorkExpInfo}
                  key={userWorkExpInfo._id}
                />
              );
            })}

          {nullShow && nullMessage}
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
          <WorkExperienceDataAdd
            handleModalClose={handleClose}
            employeeId={employeeId}
          />
        </Modal.Body>
      </Modal>
    </main>
  );
}

const WorkExperienceData = (props) => {
  const [dateFrom, setDateFrom] = useState(
    dateFormater(props.workExpData.period_from)
  );
  const [dateTo, setDateTo] = useState(
    dateFormater(props.workExpData.period_to)
  );
  const [position, setPosition] = useState(props.workExpData.position);
  const [workFrom, setWorkFrom] = useState(props.workExpData.company_name);
  const [monthlySalary, setMonthlySalary] = useState(
    props.workExpData.monthly_salary
  );
  const [salaryGrade, setSalaryGrade] = useState(props.workExpData.pay_grade);
  const [statusOfAppointment, setStatusOfAppointment] = useState(
    props.workExpData.appointment_status
  );
  const [ifGovService, setIfGovService] = useState(
    props.workExpData.isGov_service
  );

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
    console.log("deleting");
    Axios.delete(
      `http://localhost:3001/work-experience/delete/${props.workExpData._id}`
    ).then((response) => {
      console.log("deleted");
      console.log(response);
    });
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
              checked={ifGovService}
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
              checked={!ifGovService}
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
  const [ifGovService, setIfGovService] = useState(false);

  const setGovServiceFalse = () => setIfGovService(false);
  const setGovServiceTrue = () => setIfGovService(true);

  const [disable, setDisable] = useState(false);

  const [btnsaveHide, setBtnSaveHide] = useState(true);

  const handleAdding = () => {
    const vocationalDatas = {
      employee_id: props.employeeId,
      position: position,
      company_name: workFrom,
      monthly_salary: monthlySalary,
      pay_grade: salaryGrade,
      appointment_status: statusOfAppointment,
      period_from: dateFrom,
      period_to: dateTo,
      isGov_service: ifGovService,
    };
    try {
      Axios.post(
        `http://localhost:3001/work-experience/create`,
        vocationalDatas
      ).then((response) => {
        props.handleModalClose();
        console.log("submited");
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting ...");
    handleAdding();
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
              onClick={setGovServiceTrue}
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
              onClick={setGovServiceFalse}
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

export default UserWorkExperience;
