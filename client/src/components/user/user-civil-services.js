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

function UserCivilServices(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loaderShow, setLoaderShow] = useState(true);
  const [nullShow, setNullShow] = useState(false);

  const [civilList, setCivilList] = useState([]);
  const employeeId = props.employeeId;

  useEffect(() => {
    Axios.get(`http://localhost:3001/civil-service/${employeeId}`).then(
      (response) => {
        setCivilList(response.data);
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
        <h1 className="mt-4">Civil Service Eligibility </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Civil Service Eligibility</li>
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
          {civilList &&
            civilList.map((civilInfo) => {
              return <CivilData civilData={civilInfo} key={civilInfo._id} />;
            })}

          {nullShow && nullMessage}
        </div>
      </div>
      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Adding Civil Service Eligibility</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CivilDataAdd
            handleModalClose={handleClose}
            employeeId={employeeId}
          />
        </Modal.Body>
      </Modal>
    </main>
  );
}

const CivilData = (props) => {
  // const [colId, setColId] = useState(props.civilData.);
  const [license, setLicense] = useState(props.civilData.license_name);
  const [rating, setRating] = useState(props.civilData.rating);
  const [examDate, setExamDate] = useState(
    dateFormater(props.civilData.exam_date)
  );
  const [examPlace, setExamPlace] = useState(props.civilData.exam_place);
  const [licenseNumber, setLicenseNumber] = useState(
    props.civilData.license_number
  );
  const [licenseDateValidity, setLicenseDateValidity] = useState(
    dateFormater(props.civilData.license_validity_date)
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
      `http://localhost:3001/civil-service/delete/${props.civilData._id}`
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
    <div className="card col-xxl-11 col-sm-11  mx-2 p-4 ">
      <div className="row justify-content-between">
        <div className="col-auto">
          <p className="card-title h5">Civil Service Eligibility</p>
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
              id="txtLicense"
              placeholder="License Name"
              value={license}
              disabled={disable}
              onChange={(e) => {
                setLicense(e.target.value);
              }}
            />
            <label htmlFor="txtLicense">
              Careers Services/ra 1080 (board bar) under special laws/ ces/csee
              barangay eligibility / drivers license
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
        <div className="col-md-12">
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
        <div className="col-md-6">
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
        <div className="col-md-6">
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
          <Modal.Title>Delete</Modal.Title>
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

const CivilDataAdd = (props) => {
  // const [colId, setColId] = useState(props.colId);
  const [license, setLicense] = useState("");
  const [rating, setRating] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examPlace, setExamPlace] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseDateValidity, setLicenseDateValidity] = useState("");

  const [disable, setDisable] = useState(false);

  const [btnsaveHide, setBtnSaveHide] = useState(true);

  const handleAdding = () => {
    const vocationalDatas = {
      employee_id: props.employeeId,
      license_name: license,
      rating: rating,
      exam_date: examDate,
      exam_place: examPlace,
      license_number: licenseNumber,
      license_validity_date: licenseDateValidity,
    };
    try {
      Axios.post(
        `http://localhost:3001/civil-service/create`,
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
              id="txtLicense"
              placeholder="License Name"
              value={license}
              disabled={disable}
              onChange={(e) => {
                setLicense(e.target.value);
              }}
            />
            <label htmlFor="txtLicense">
              Careers Services/ra 1080 (board bar) under special laws/ ces/csee
              barangay eligibility / drivers license
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
        <div className="col-md-12">
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
        <div className="col-md-6">
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
        <div className="col-md-6">
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
