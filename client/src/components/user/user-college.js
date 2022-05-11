import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import Axios from "axios";

function UserCollege(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loaderShow, setLoaderShow] = useState(true);
  const [nullShow, setNullShow] = useState(false);

  const [collegeList, setCollegeList] = useState([]);
  const employeeId = props.employeeId;

  useEffect(() => {
    Axios.get(`http://localhost:3001/educ-college/${employeeId}`).then(
      (response) => {
        setCollegeList(response.data);
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
        <h1 className="mt-4">Educational Background </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">College</li>
        </ol>
        <div className="row  ">
          <div className="col-md-2 offset-md-8 mb-3 ">
            <button className="btn btn-1 btn-sm w-100" onClick={handleShow}>
              Add New
              <FontAwesomeIcon icon={faPlus} color="white" className="ms-2" />
            </button>
          </div>
        </div>
        <div className="row gy-3">
          {loaderShow && loadingMessage}
          {collegeList &&
            collegeList.map((collegeInfo) => {
              return (
                <CollegeData collegeData={collegeInfo} key={collegeInfo._id} />
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
          <Modal.Title>Adding College</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CollegeDataAdd
            handleModalClose={handleClose}
            employeeId={employeeId}
          />
        </Modal.Body>
      </Modal>
    </main>
  );
}

const CollegeData = (props) => {
  // const [colId, setColId] = useState(props.collegeData.);
  const [name, setName] = useState(props.collegeData.school_name);
  const [education, setEducation] = useState(props.collegeData.course);
  const [periodFrom, setPeriodFrom] = useState(props.collegeData.period_from);
  const [periodTo, setPeriodTo] = useState(props.collegeData.period_to);
  const [units, setUnits] = useState(props.collegeData.units_earned);
  const [yearGraduate, setYearGraduate] = useState(
    props.collegeData.year_graduate
  );
  const [honors, setHonors] = useState(props.collegeData.honor_recieved);

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
      `http://localhost:3001/educ-college/delete/${props.collegeData._id}`
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
          <p className="card-title h5">College Course</p>
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
              id="txtunits"
              placeholder="Highest Level ( if not graduated)"
              value={units}
              disabled={disable}
              onChange={(e) => {
                setUnits(e.target.value);
              }}
            />
            <label htmlFor="txtunits">Highest Level ( if not graduated)</label>
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
          <Modal.Title>College Course Delete</Modal.Title>
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
  const [units, setUnits] = useState("");
  const [yearGraduate, setYearGraduate] = useState("");
  const [honors, setHonors] = useState("");

  const [disable, setDisable] = useState(false);

  const [btnsaveHide, setBtnSaveHide] = useState(true);

  const handleAdding = () => {
    const vocationalDatas = {
      employee_id: props.employeeId,
      school_name: name,
      course: education,
      period_from: periodFrom,
      period_to: periodTo,
      units_earned: units,
      year_graduate: yearGraduate,
      honor_recieved: honors,
    };
    try {
      Axios.post(
        `http://localhost:3001/educ-college/create`,
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
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtName"
              placeholder="Name of College (write in full)"
              value={name}
              disabled={disable}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="txtName">Name of College (write in full)</label>
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
              id="txtunits"
              placeholder="Highest Level ( if not graduated)"
              value={units}
              disabled={disable}
              onChange={(e) => {
                setUnits(e.target.value);
              }}
            />
            <label htmlFor="txtunits">Highest Level ( if not graduated)</label>
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

export default UserCollege;
