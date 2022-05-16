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

function UserVocational(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loaderShow, setLoaderShow] = useState(false);
  const [nullShow, setNullShow] = useState(false);

  const [vocationaList, setVocationaList] = useState([]);
  const employeeId = props.employeeId;
  var [updatedPointer, setUpdatedPointer] = useState(true);

  const makeUpdate = () => {
    setUpdatedPointer(!updatedPointer);
    console.log(updatedPointer);
  };

  useEffect(() => {
    setLoaderShow(true);
    Axios.get(`http://localhost:3001/educ-vocational/${employeeId}`).then(
      (response) => {
        // console.log(response.data.length);
        if (response.data.length !== 0) {
          setVocationaList(response.data);
          setLoaderShow(false);
          setNullShow(false);
        } else {
          setVocationaList([]);
          setNullShow(true);
          setLoaderShow(false);
        }

        // console.log(response.data);
      }
    );
  }, [updatedPointer]);

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
      <div className="container-xxl px-4 float-start">
        <h1 className="mt-4">Educational Background </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Vocational / Trade Course</li>
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
          {nullShow && nullMessage}
          {vocationaList.map((vocationalIfo) => {
            return (
              <VocationalData
                vocationalData={vocationalIfo}
                key={vocationalIfo._id}
                makeUpdate={makeUpdate}
              />
            );
          })}
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
            <Modal.Title>Adding Vocational / Trade Course </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <VocationalDataAdd
              handleModalClose={handleClose}
              employeeId={employeeId}
              makeUpdate={makeUpdate}
            />
          </Modal.Body>
        </Modal>
      </div>
    </main>
  );
}

const VocationalData = (props) => {
  const [name, setName] = useState(props.vocationalData.school_name);
  const [education, setEducation] = useState(props.vocationalData.course);
  const [periodFrom, setPeriodFrom] = useState(
    props.vocationalData.period_from
  );
  const [periodTo, setPeriodTo] = useState(props.vocationalData.period_to);
  const [units, setUnits] = useState(props.vocationalData.units_earned);
  const [yearGraduate, setYearGraduate] = useState(
    props.vocationalData.year_graduate
  );
  const [honors, setHonors] = useState(props.vocationalData.honor_recieved);

  const [disable, setDisable] = useState(true);

  const [btnEditHide, setBtnEditHide] = useState(true);
  const [btnsaveHide, setBtnSaveHide] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const onEditInfo = () => {
    setDisable(false);
    setBtnEditHide(false);
    setBtnSaveHide(true);
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    const newData = {
      school_name: name,
      course: education,
      period_from: periodFrom,
      period_to: periodTo,
      units_earned: units,
      year_graduate: yearGraduate,
      honor_recieved: honors,
    };
    e.preventDefault();
    Axios.post(
      `http://localhost:3001/educ-vocational/update/${props.vocationalData._id}`,
      newData
    ).then((response) => {
      setDisable(true);
      setBtnEditHide(true);
      setBtnSaveHide(false);
      setIsEditing(false);
      props.makeUpdate();
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    console.log("deleting");
    Axios.delete(
      `http://localhost:3001/educ-vocational/delete/${props.vocationalData._id}`
    ).then((response) => {
      console.log("deleted");
      console.log(response);
      props.makeUpdate();
    });
    setShow(false);
  };

  return (
    <div className="card col-xxl-5 col-lg-11 col-sm-11 mx-2 p-4 ">
      <div className="row justify-content-between">
        <div className="col-auto">
          <p className="card-title h5">Vocational / Trade Course</p>
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
                <a className="dropdown-item btn-link" onClick={handleShow}>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isEditing && <small>Write "none" or "n/a" if none</small>}
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
              required
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
              required
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
              required
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
              required
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
              value={units}
              disabled={disable}
              required
              onChange={(e) => {
                setUnits(e.target.value);
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
              required
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
              required
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
          <Modal.Title>Vocational / Trade Course Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-1" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const VocationalDataAdd = (props) => {
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
        `http://localhost:3001/educ-vocational/create`,
        vocationalDatas
      ).then((response) => {
        props.handleModalClose();
        console.log("submited");
        props.makeUpdate();
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
      <small>Write "none" or "n/a" if none</small>
      <form className="row gy-2" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtName"
              placeholder="Name of Vocational / Trade Course (write in full)"
              value={name}
              disabled={disable}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="txtName">
              Name of Vocational / Trade Course (write in full)
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtEduc"
              placeholder="Degree/Course (write in full)"
              value={education}
              disabled={disable}
              required
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            />
            <label htmlFor="txtEduc">Degree/Course (write in full)</label>
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
              required
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
              required
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
              value={units}
              disabled={disable}
              required
              onChange={(e) => {
                setUnits(e.target.value);
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
              required
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
              required
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

export default UserVocational;
