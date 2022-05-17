import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
const ChangePassword = (props) => {
  const navigate = useNavigate();
  const employeeId = props.employeeId;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [same, setSame] = useState(true);
  const [oldPswd, setOldPswd] = useState(true);
  const [toLoad, setToLoad] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    setToLoad(true);
    e.preventDefault();
    console.log(employeeId, oldPassword);

    Axios.post(`http://localhost:3001/facultyLogin/`, {
      employee_id: employeeId,
      email: "",
      thePassword: oldPassword,
    }).then((response) => {
      if (response.data === "INCORRECT") {
        setToLoad(false);
        setOldPswd(false);
      } else {
        if (newPassword === confirmPassword) {
          Axios.post(`http://localhost:3001/updatePassword/${employeeId}`, {
            password: confirmPassword,
          }).then((response) => {
            console.log(response.data);
            Axios.get(
              `http://localhost:3001/facultySetIsNewUser/${employeeId}`
            ).then((response) => {
              if (!response.data) {
                setToLoad(false);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
                handleShow();
              }
            });
          });
        } else {
          setSame(false);
          setToLoad(false);

          console.log(" not same");
        }
      }
    });

    //
  };

  const loader = (
    <div className="wrapper">
      <div
        className="spinner-border spinner-border-sm text-danger me-1"
        role="status"
      >
        <span className="visually-hidden">Checking...</span>
      </div>
      <span className="text-muted text-center  mt-5">Checking...</span>
    </div>
  );

  return (
    <>
      <form className="row gy-2" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-12">
              <div className="form-floating">
                <input
                  type="password"
                  placeholder="Old Password"
                  required
                  className={
                    !oldPswd ? "form-control is-invalid" : "form-control"
                  }
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPswd(true);

                    setOldPassword(e.target.value);
                  }}
                />
                <label htmlFor="txtDateTo">Old Password</label>
                <div className="invalid-feedback">Wrong Password</div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  required
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
                <label htmlFor="txtDateTo">New Password</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating">
                <input
                  type="password"
                  className={!same ? "form-control is-invalid" : "form-control"}
                  placeholder="Confirm New Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                    setSame(true);
                    setConfirmPassword(e.target.value);
                  }}
                />
                <label htmlFor="txtDateTo">Confirm New Password</label>
                <div className="invalid-feedback">Password not match</div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-floating">
                <button className="btn btn-1 float-end px-5">
                  {" "}
                  Save Changes
                </button>
              </div>
              <div className="col-md-6 ms-2"> {toLoad && loader}</div>
            </div>
          </div>
        </div>
      </form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>Password Updated!</Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            className="btn btn-1 w-25"
            onClick={() => {
              handleClose();
              navigate(props.navigateTo);
            }}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChangePassword;
