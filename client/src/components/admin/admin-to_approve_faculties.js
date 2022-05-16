import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import emailjs from "emailjs-com";

import { dateFormatStringSet } from "../functions/dateFunction";

import Axios from "axios";

const ToApproveFaculties = () => {
  const [listFaculty, setListFaculty] = useState([]);
  const [objFaculty, setObjFaculty] = useState();
  const [facultyCompList, setFacultyCompList] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/getToApproveFaculties").then(
      (response) => {
        setListFaculty(response.data);
        // console.log(response.data);
      }
    );
  });

  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">To be Approve Faculties </h1>
        <ol className="breadcrumb mb-4">
          {/* <li className="breadcrumb-item active">Address</li> */}
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

function generateRandomNumber(numberOfCharacters) {
  var randomValues = "";
  var stringValues = "ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ";
  var sizeOfCharacter = stringValues.length;
  for (var i = 0; i < numberOfCharacters; i++) {
    randomValues =
      randomValues +
      stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
  }
  return randomValues;
}

const FacultyCard = (props) => {
  // console.log(props.facultyData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showView, setShowView] = useState(false);
  const handleCloseView = () => setShowView(false);
  const handleShowView = () => setShowView(true);

  const imgSrc = props.facultyData.image;

  const handleDelete = () => {
    deleteApprovedFaculty(props.facultyData._id);
    setShow(false);
  };

  const handleApprove = () => {
    approveFaculty();
    handleCloseView();
    console.log("Approve");
  };

  const approveFaculty = () => {
    const generatedPassword = generateRandomNumber(8);

    const facultyDatas = {
      employee_id: props.facultyData.employee_id,
      email: props.facultyData.email,
      first_name: props.facultyData.first_name,
      middle_name: props.facultyData.middle_name,
      mobile_number: props.facultyData.mobile_number,
      name_extension: props.facultyData.name_extension,
      last_name: props.facultyData.last_name,
      age: props.facultyData.age,
      birth_date: props.facultyData.birth_date,
      birth_place: props.facultyData.birth_place,
      sex: props.facultyData.sex,
      civil_status: props.facultyData.civil_status,
      height: "",
      weight: "",
      blood_type: "",
      alternative_email: "",
      telephone_number: "",
      image: imgSrc,
      password: generatedPassword,
    };

    try {
      Axios.post(`http://localhost:3001/createFaculty`, facultyDatas).then(
        (response) => {
          // setVisible(true); just don't
          mailer();
          deleteApprovedFaculty(props.facultyData._id);
        }
      );
    } catch (ex) {
      console.log(ex);
    }

    const fullName =
      props.facultyData.first_name + " " + props.facultyData.last_name;

    const mailer = () => {
      var toSendParams = {
        temporaryPassword: generatedPassword,
        name: fullName,
        emailTo: props.facultyData.email,
      };
      // for sending email
      emailjs
        .send(
          "service_bgel1lm",
          "template_giuf2w5",
          toSendParams,
          "lg6KWrgGPKArDL9Av"
        )
        .then(
          (res) => {
            console.log(res.text);
          },
          (err) => {
            console.log(err.text);
          }
        );
    };
  };

  const deleteApprovedFaculty = (facultyId) => {
    Axios.delete(
      `http://localhost:3001/deleteToApproveFaculty/${facultyId}`
    ).then((response) => {});
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
                  <a className="dropdown-item btn-link" onClick={handleShow}>
                    Delete
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
                <small className="text-muted">
                  Date created -{" "}
                  {dateFormatStringSet(props.facultyData.date_created)}
                </small>
              </p>
              <button className="btn btn-1 float-end " onClick={handleShowView}>
                View More
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
                src={`/facultyImages/${imgSrc}`}
                className="  border"
                // src="https://th.bing.com/th/id/OIP.hhqab-_voCR-IcizNa1MKwHaG8?pid=ImgDet&rs=1"
                alt={imgSrc}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-8">
              <span>Employee Number : {props.facultyData.employee_id}</span>
              <br />

              <span>Email: {props.facultyData.email}</span>
              <br />

              <span>Mobile Number: {props.facultyData.mobile_number}</span>
              <br />
              <br />
              <span>First name: {props.facultyData.first_name}</span>
              <br />
              <span>Middle name: {props.facultyData.middle_name}</span>
              <br />
              <span>Last name: {props.facultyData.last_name}</span>
              <br />
              <span>Name suffix: {props.facultyData.name_extension}</span>
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
              <br />
              <small className="text-muted">
                Date created -{" "}
                {dateFormatStringSet(props.facultyData.date_created)}
              </small>
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

export default ToApproveFaculties;
