import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import { dateFormater } from "../functions/dateFunction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import Axios from "axios";

import PDFViewer from "../pdfViewer";

function UserCertificates(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loaderShow, setLoaderShow] = useState(true);
  const [nullShow, setNullShow] = useState(false);

  const [certificateList, setCertificateList] = useState([]);
  const employeeId = props.employeeId;

  var [updatedPointer, setUpdatedPointer] = useState(true);

  const makeUpdate = () => {
    setUpdatedPointer(!updatedPointer);
    console.log(updatedPointer);
  };

  useEffect(() => {
    setLoaderShow(true);
    Axios.get(`http://localhost:3001/certificate/${employeeId}`).then(
      (response) => {
        // console.log(response.data.length);
        if (response.data.length !== 0) {
          setCertificateList(response.data);
          setLoaderShow(false);
          setNullShow(false);
        } else {
          setCertificateList([]);
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
      <div className="container-xl px-4 float-start">
        <h1 className="mt-4">Certificates </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">
            Learning and Development (LD) Intervention / Training Programs
            Attended Certificates{" "}
          </li>
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
          {certificateList.map((certificateInfo) => {
            return (
              <CertificateData
                certificateData={certificateInfo}
                key={certificateInfo._id}
                makeUpdate={makeUpdate}
              />
            );
          })}
          {/* <PDFViewer /> */}
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
          <Modal.Title>Adding Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CertificateDataAdd
            handleModalClose={handleClose}
            employeeId={employeeId}
            makeUpdate={makeUpdate}
          />
        </Modal.Body>
      </Modal>
    </main>
  );
}

const CertificateData = (props) => {
  // const [colId, setColId] = useState(props.colId);
  const [dateFrom, setDateFrom] = useState(
    dateFormater(props.certificateData.period_from)
  );
  const [dateTo, setDateTo] = useState(
    dateFormater(props.certificateData.period_to)
  );
  const [title, setTitle] = useState(props.certificateData.certificate_name);
  const [type, setType] = useState(props.certificateData.type);
  const [hoursNo, setHoursNo] = useState(props.certificateData.total_hours);
  const [LD_type, setLD_type] = useState(props.certificateData.type);
  const [conductedBy, setConductedBy] = useState(
    props.certificateData.conducted_by
  );
  const [certificateSrc, setCertificateSrc] = useState(
    props.certificateData.certificate_src
  );

  const [fileName, setFileName] = useState();

  const certificateSrcHandler = (e) => {
    setFileName(e.target.files[0]);
    console.log(e.target.files[0]);
  };

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
    const formData = new FormData();

    formData.append("certificate_name", title);
    formData.append("type", type);
    formData.append("period_from", dateFrom);
    formData.append("period_to", dateTo);
    formData.append("total_hours", hoursNo);
    formData.append("conducted_by", conductedBy);
    formData.append("certificate_src", fileName);

    console.log(formData);
    e.preventDefault();
    Axios.post(
      `http://localhost:3001/certificate/update/${props.certificateData._id}`,
      formData
    ).then((response) => {
      setDisable(true);
      setBtnEditHide(true);
      setBtnSaveHide(false);
      setIsEditing(false);
      props.makeUpdate();
    });
  };

  const forUploading = (
    <div className="col-md-12">
      <div className="">
        <input
          type="file"
          className="form-control visually-hidden"
          id="inputFile"
          filename="certificate_src"
          placeholder="Certificate"
          accept="image/jpeg, image/png, application/pdf "
          disabled={disable}
          required
          onChange={certificateSrcHandler}
        />
        <label htmlFor="inputFile" className="btn btn-1">
          Upload Certificate
        </label>
        {/* <span className="text-muted ms-5">File name : {fileName.name} </span> */}
      </div>
    </div>
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    console.log("deleting");
    Axios.delete(
      `http://localhost:3001/certificate/delete/${props.certificateData._id}`
    ).then((response) => {
      console.log("deleted");
      console.log(response);
      props.makeUpdate();
    });
    setShow(false);
  };

  const handlePrint = () => {
    console.log("print");
  };

  return (
    <div className="card col-lg-11 col-sm-11 mx-2 p-4 ">
      <div className="row justify-content-between">
        <div className="col-auto">
          <p className="card-title h5">Certificate</p>
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
              id="txtTitle"
              placeholder="Certificate Title"
              value={title}
              disabled={disable}
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="txtTitle">
              Title of Learning and Development Interventions / Training
              Programs
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtType"
              placeholder="Type"
              value={type}
              disabled={disable}
              required
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            <label htmlFor="txtType">Type</label>
          </div>
        </div>

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
              required
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
              required
              onChange={(e) => {
                setDateTo(e.target.value);
              }}
            />
            <label htmlFor="txtDateTo">End To</label>
          </div>
        </div>

        <div className="col-md-7">
          <div className="form-floating">
            <input
              type="txt"
              className="form-control"
              id="txtHoursNum"
              placeholder="Number of Hours"
              value={hoursNo}
              disabled={disable}
              required
              onChange={(e) => {
                setHoursNo(e.target.value);
              }}
            />
            <label htmlFor="txtHoursNum">Number of Hours</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="txt"
              className="form-control"
              id="txtldtype"
              placeholder="Type of Learning and Development"
              value={LD_type}
              disabled={disable}
              required
              onChange={(e) => {
                setLD_type(e.target.value);
              }}
            />
            <label htmlFor="txtldtype">
              Type of Learning and Development
              (Managerial/Supervisory/Technical)
            </label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtsponsor"
              placeholder="Conducted / Sponsored by"
              value={conductedBy}
              disabled={disable}
              required
              onChange={(e) => {
                setConductedBy(e.target.value);
              }}
            />
            <label htmlFor="txtsponsor">Conducted / Sponsored by</label>
          </div>
        </div>

        {isEditing && forUploading}

        {!isEditing && (
          <div className="col-md-12">
            <span>Filename : {certificateSrc}</span>
          </div>
        )}

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
          <Modal.Title>Certificate Delete</Modal.Title>
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

const CertificateDataAdd = (props) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [hoursNo, setHoursNo] = useState("");
  const [LD_type, setLD_type] = useState("");
  const [conductedBy, setConductedBy] = useState("");
  const [certificateSrc, setCertificateSrc] = useState("");

  const [fileName, setFileName] = useState("");

  const certificateSrcHandler = (e) => {
    setFileName(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const [disable, setDisable] = useState(false);

  const [btnsaveHide, setBtnSaveHide] = useState(true);

  const handleAdding = () => {
    const formData = new FormData();

    formData.append("employee_id", props.employeeId);
    formData.append("certificate_name", title);
    formData.append("type", type);
    formData.append("period_from", dateFrom);
    formData.append("period_to", dateTo);
    formData.append("total_hours", hoursNo);
    formData.append("conducted_by", conductedBy);
    formData.append("certificate_src", fileName);

    console.log(formData);

    try {
      Axios.post(`http://localhost:3001/certificate/create`, formData).then(
        (response) => {
          props.handleModalClose();
          console.log("submited");
          props.makeUpdate();
        }
      );
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
      <form
        className="row gy-2"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtTitle"
              placeholder="Certificate Title"
              value={title}
              disabled={disable}
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="txtTitle">
              Title of Learning and Development Interventions / Training
              Programs
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtType"
              placeholder="Type"
              value={type}
              disabled={disable}
              required
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            <label htmlFor="txtType">Type</label>
          </div>
        </div>

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
              required
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
              required
              onChange={(e) => {
                setDateTo(e.target.value);
              }}
            />
            <label htmlFor="txtDateTo">End To</label>
          </div>
        </div>

        <div className="col-md-7">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="txtHoursNum"
              placeholder="Number of Hours"
              value={hoursNo}
              disabled={disable}
              required
              onChange={(e) => {
                setHoursNo(e.target.value);
              }}
            />
            <label htmlFor="txtHoursNum">Number of Hours</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="txt"
              className="form-control"
              id="txtldtype"
              placeholder="Type of Learning and Development"
              value={LD_type}
              disabled={disable}
              required
              onChange={(e) => {
                setLD_type(e.target.value);
              }}
            />
            <label htmlFor="txtldtype">
              Type of Learning and Development
              (Managerial/Supervisory/Technical)
            </label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="txtsponsor"
              placeholder="Conducted / Sponsored by"
              value={conductedBy}
              disabled={disable}
              required
              onChange={(e) => {
                setConductedBy(e.target.value);
              }}
            />
            <label htmlFor="txtsponsor">Conducted / Sponsored by</label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="">
            <input
              type="file"
              className="form-control visually-hidden"
              id="inputFile"
              filename="certificate_src"
              placeholder="Certificate"
              accept="image/jpeg, image/png, application/pdf "
              disabled={disable}
              required
              onChange={certificateSrcHandler}
            />
            <label htmlFor="inputFile" className="btn btn-1">
              Upload Certificate
            </label>
            <span className="text-muted ms-5">
              File name : {fileName.name}{" "}
            </span>
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
    </>
  );
};

export default UserCertificates;
