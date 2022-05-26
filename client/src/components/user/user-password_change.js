import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./change_password";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";

const UserPasswordChange = (props) => {
  const navigate = useNavigate();

  const employeeId = props.employeeId;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dshow, setDShow] = useState(false);
  const handledClose = () => setDShow(false);
  const handledShow = () => setDShow(true);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);

    Axios.delete(`http://localhost:3001/faculty/delete/${employeeId}`).then(
      (response) => {
        handleClose();
        handledShow();
      }
    );
  };

  const navigateTo = () => {
    sessionStorage.removeItem("user");
    navigate("../../faculty/login");
  };

  return (
    <main>
      <div className="container-xl px-4 float-start">
        <h1 className="mt-4">Change Password</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active"></li>
        </ol>
        <div className="row mb-5">
          <div className="col-md-6">
            <ChangePassword employeeId={employeeId} />
          </div>
        </div>
        <div className="row mb-3 mt-5 justify-content-start ">
          <div className="col-md-6">
            <button className="btn btn-link " onClick={handleShow}>
              Delete Faculty Account
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
        <Modal.Header closeButton={!isDeleting}>
          <Modal.Title>Delete Faculty Account</Modal.Title>
        </Modal.Header>
        {!isDeleting ? (
          <Modal.Body>
            Are your sure to delete your account? <br />
          </Modal.Body>
        ) : (
          <Modal.Body>
            <div className="wrapper">
              <div
                className="spinner-border spinner-border-sm text-danger me-3"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <span className="text-center  mt-5">
                Deleting Account Informations. Please wait...
                <br />
                <br />
              </span>
            </div>
          </Modal.Body>
        )}
        {!isDeleting && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="btn btn-1" onClick={handleDelete}>
              Confirm
            </Button>
          </Modal.Footer>
        )}
      </Modal>

      <Modal show={dshow} backdrop="static" keyboard={false} centered size="lg">
        <Modal.Header>
          <Modal.Title>Account Deleted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Faculty account successfully deleted.
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-1" onClick={navigateTo}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default UserPasswordChange;
