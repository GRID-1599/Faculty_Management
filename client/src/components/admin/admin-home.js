import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import { dateFormatStringSet } from "../functions/dateFunction";

import Axios from "axios";

const AdminHome = () => {
  const [listFaculty, setListFaculty] = useState([]);
  const [objFaculty, setObjFaculty] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/getFaculty").then((response) => {
      setListFaculty(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">Faculty List </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">List of all Faculty</li>
        </ol>
        <div className="row px-5 g-5 justify-content-between">
          {listFaculty.map((faculty) => {
            return <FacultyCard facultyData={faculty} key={faculty._id} />;
          })}
        </div>
      </div>
    </main>
  );
};

const FacultyCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showView, setShowView] = useState(false);
  const handleCloseView = () => setShowView(false);
  const handleShowView = () => setShowView(true);

  const handleDelete = () => {
    console.log("delete");
    setShow(false);
  };

  const imgSrc = props.facultyData.image;

  const handleApprove = () => {
    console.log("Approve");
  };

  return (
    <div className="col-md-10 col-xxl-5   p-4 ">
      <div
        className="card py-3 pe-2 border"
        style={{ width: "40rem", height: "fit-content", minHeight: "15rem" }}
      >
        <div className=" row justify-content-between">
          <div className="col-auto">
            <p className="card-title h5"></p>
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
                  <a className="dropdown-item btn-link">Print</a>
                  <a className="dropdown-item btn-link" onClick={handleShow}>
                    Archive
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-4 px-3">
            <img
              src={`/facultyImages/${imgSrc}`}
              className="  border"
              // src="https://th.bing.com/th/id/OIP.hhqab-_voCR-IcizNa1MKwHaG8?pid=ImgDet&rs=1"
              alt={imgSrc}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <span className="text-muted">Employee No :</span>
                {props.facultyData.employee_id}
              </h5>
              <p className="card-text">
                <span>
                  Name: {props.facultyData.first_name}{" "}
                  {props.facultyData.last_name}{" "}
                </span>
                <br />
                <span>Email: {props.facultyData.email}</span>
                <br />
                <span>Number: {props.facultyData.mobile_number}</span>
                <br />
                <br />
              </p>
              <button className="btn btn-1 float-end " onClick={handleShowView}>
                View Infornations
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Faculty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are your sure to delete the faculty application?</p>
          <span>
            Name : {props.facultyData.first_name} {props.facultyData.last_name}{" "}
          </span>
          <br />
          <span>Employee Number : {props.facultyData.employee_id}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-1" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showView}
        onHide={handleCloseView}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>View Faculty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <img
                // src="{default_user_image}"
                className="  border"
                src="https://th.bing.com/th/id/OIP.hhqab-_voCR-IcizNa1MKwHaG8?pid=ImgDet&rs=1"
                alt="user-profile-image"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <span>Employee Number : {props.facultyData.employee_id}</span>
              <br />
              <span>
                Name: {props.facultyData.first_name}{" "}
                {props.facultyData.last_name}{" "}
              </span>
              <br />
              <span>Email: {props.facultyData.email}</span>
              <br />
              <br />
              <span>Sex: {props.facultyData.sex}</span>
              <br />
              <span>Civil Status: {props.facultyData.civil_status}</span>
              <br />
              <span>
                {" "}
                Birth date: {dateFormatStringSet(props.facultyData.birth_date)}
              </span>
              <br />
              <span>Age: {props.facultyData.age}</span>
              <br />
              <span>Birth place: {props.facultyData.birth_place}</span>
              <br />

              <span>Mobile Number: {props.facultyData.mobile_number}</span>
              <br />
              <br />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseView}>
            Close
          </Button>
          <Button className="btn btn-1" onClick={handleApprove}>
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminHome;
