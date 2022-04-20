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

function UserGraduateStudies(params) {
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
              <h1 className="mt-4">Educational Background </h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Gradute Studies</li>
              </ol>
              <div className="row  ">
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
                <CollegeData
                  colId="123"
                  name="Bulacan State University"
                  course="Bachelor of Science in Information Technology"
                  periodFrom="2018"
                  periodTo=""
                  highest=""
                  yearGraduate=""
                  honors=""
                />

                <CollegeData
                  colId="123"
                  name="Bulacan State University"
                  course="Bachelor of Science in Information Technology"
                  periodFrom="2018"
                  periodTo=""
                  highest=""
                  yearGraduate=""
                  honors=""
                />
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
                <Modal.Title>Adding Graduate Studies</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CollegeDataAdd />
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

const CollegeData = (props) => {
  const [colId, setColId] = useState(props.colId);
  const [name, setName] = useState(props.name);
  const [education, setEducation] = useState(props.course);
  const [periodFrom, setPeriodFrom] = useState(props.periodFrom);
  const [periodTo, setPeriodTo] = useState(props.periodTo);
  const [highest, setHighest] = useState(props.highest);
  const [yearGraduate, setYearGraduate] = useState(props.yearGraduate);
  const [honors, setHonors] = useState(props.honors);

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
          <p className="card-title h5">Graduate Studies Course</p>
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
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtEduc"
              placeholder="Basic Education/Degree/Course "
              value={education}
              disabled={disable}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            />
            <label htmlFor="txtEduc">Basic Education/Degree/Course </label>
          </div>
        </div>
        <div className="col-md-10">
          <label>Period of Attendance</label>
        </div>
        <div className="col-md-6">
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
        <div className="col-md-6">
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
        <div className="col-md-12">
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
        <div className="col-md-8">
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
        <div className="col-md-12">
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
          <div className="col-md-5 mb-3 offset-md-7 ">
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
          <Modal.Title>Graduate Studies Course Delete</Modal.Title>
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

const CollegeDataAdd = (props) => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [periodFrom, setPeriodFrom] = useState("");
  const [periodTo, setPeriodTo] = useState("");
  const [highest, setHighest] = useState("");
  const [yearGraduate, setYearGraduate] = useState("");
  const [honors, setHonors] = useState("");

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
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtName"
              placeholder="Name of Graduate Studies (write in full)"
              value={name}
              disabled={disable}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="txtName">
              Name of Graduate Studies (write in full)
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtEduc"
              placeholder="Basic Education/Degree/Course (write in full)"
              value={education}
              disabled={disable}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            />
            <label htmlFor="txtEduc">
              Basic Education/Degree/Course (write in full)
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <label>Period of Attendance</label>
        </div>
        <div className="col-md-6">
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
        <div className="col-md-6">
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
        <div className="col-md-12">
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
        <div className="col-md-8">
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
        <div className="col-md-12">
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
        <div className="row mt-3 pe-0 ">
          <div className="col-md-3 pe-0 mb-3 offset-md-9 ">
            {btnsaveHide ? (
              <button className="btn btn-1 btn-sm w-100">Submit</button>
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default UserGraduateStudies;
