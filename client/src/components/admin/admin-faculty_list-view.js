import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
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

const FacultyView = (props) => {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const [faculty, setFaculty] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showApprove, setShowApprove] = useState(false);
  const handleApproveClose = () => setShowApprove(false);
  const handleApproveShow = () => setShowApprove(true);

  const onToFacultyList = () => {
    navigate("../../faculty-list/");
  };
  const onToApproveFaculties = () => {
    navigate("../");
  };
  useEffect(() => {
    Axios.get(`http://localhost:3001/getFacultyById/${employeeId}`).then(
      (response) => {
        setFaculty(response.data);
      }
    );
  }, []);

  const deleteApprovedFaculty = () => {
    Axios.delete(
      `http://localhost:3001/deleteToApproveFaculty/${faculty._id}`
    ).then((response) => {
      onToApproveFaculties();
      setShow(false);
    });
  };

  const handleApprove = () => {
    approveFaculty();
    // handleCloseView();
    console.log("Approve");
  };

  const approveFaculty = () => {
    const generatedPassword = generateRandomNumber(8);

    const facultyDatas = {
      employee_id: faculty.employee_id,
      email: faculty.email,
      college: faculty.college,
      rank: faculty.rank,
      appointment_status: faculty.appointment_status,
      first_name: faculty.first_name,
      middle_name: faculty.middle_name,
      mobile_number: faculty.mobile_number,
      name_extension: faculty.name_extension,
      last_name: faculty.last_name,
      age: faculty.age,
      birth_date: faculty.birth_date,
      birth_place: faculty.birth_place,
      sex: faculty.sex,
      civil_status: faculty.civil_status,
      height: "",
      weight: "",
      blood_type: "",
      alternative_email: "",
      telephone_number: "",
      image: faculty.image,
      password: generatedPassword,
    };

    try {
      Axios.post(`http://localhost:3001/createFaculty`, facultyDatas).then(
        (response) => {
          // setVisible(true); just don't
          mailer();
          deleteApprovedFaculty();
          onToFacultyList();
        }
      );
    } catch (ex) {
      console.log(ex);
    }

    const fullName = faculty.first_name + " " + faculty.last_name;

    const mailer = () => {
      var toSendParams = {
        temporaryPassword: generatedPassword,
        name: fullName,
        emailTo: faculty.email,
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

  return (
    <>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item link">For Approval List</li>
        <li className="breadcrumb-item active">{employeeId}</li>
      </ol>
      <div className="container">
        <div className="card border-0">
          <div className="card-body">
            <span className="h5 f-b">Employee Number : </span>
            <span className="h2">{employeeId}</span>
            <br />
            <span className="f-b">Name : </span>
            <span className="lead">
              {faculty.first_name} {faculty.middle_name} {faculty.last_name}{" "}
              {faculty.name_extension}
            </span>
            <br />
            <span className="f-b">College : </span>
            <span className="lead">{faculty.college} </span>
            <br />
            <span className="f-b">Rank : </span>
            <span className="lead">{faculty.rank} </span>
            <br />
            <span className="f-b">Appoinment Status : </span>
            <span className="lead">{faculty.appointment_status} </span>
            <br />
            <span className="f-b">Email : </span>
            <span className="lead">{faculty.email} </span>
            <br />
          </div>
        </div>
        <div className="card border-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 px-3">
                <img
                  src={`/facultyImages/${faculty.image}`}
                  className="  border"
                  // src="https://th.bing.com/th/id/OIP.hhqab-_voCR-IcizNa1MKwHaG8?pid=ImgDet&rs=1"
                  alt={faculty.image}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6">
                    <span className="f-b">First name : </span>
                    <span className="lead">{faculty.first_name} </span>
                    <br />
                    <span className="f-b">Middle initial : </span>
                    <span className="lead">{faculty.middle_name} </span>
                    <br />
                    <span className="f-b">Last name: </span>
                    <span className="lead">{faculty.last_name} </span>
                    <br />
                    <span className="f-b">Name suffix: </span>
                    <span className="lead">{faculty.name_extension} </span>
                    <br />
                    <span className="f-b">Birthday: </span>
                    <span className="lead">
                      {dateFormatStringSet(faculty.birth_date)}{" "}
                    </span>
                    <br />
                  </div>
                  <div className="col-md-6">
                    <span className="f-b">Age: </span>
                    <span className="lead">{faculty.age} </span>
                    <br />

                    <span className="f-b">Birth place: </span>
                    <span className="lead">{faculty.birth_place} </span>
                    <br />

                    <span className="f-b">Sex: </span>
                    <span className="lead">{faculty.sex} </span>
                    <br />

                    <span className="f-b">Civil Status: </span>
                    <span className="lead">{faculty.civil_status} </span>
                    <br />

                    <span className="f-b">Number: </span>
                    <span className="lead">{faculty.mobile_number} </span>
                    <br />
                  </div>
                </div>

                <br />

                <span className="f-b text-muted">Date Created: </span>
                <span className="lead">
                  {dateFormatStringSet(faculty.date_created)}{" "}
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-end mb-5">
          <div className="col-md-3">
            <button className="btn btn-danger w-100" onClick={handleShow}>
              Delete
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-1 w-100" onClick={handleApproveShow}>
              Approve
            </button>
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
          <Modal.Title>Delete to approve faculty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are your sure to delete the faculty application?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-1" onClick={deleteApprovedFaculty}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showApprove}
        onHide={handleApproveClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Approve faculty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Approve faculty application?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleApproveClose}>
            Close
          </Button>
          <Button className="btn btn-1" onClick={handleApprove}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
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

export default FacultyView;
