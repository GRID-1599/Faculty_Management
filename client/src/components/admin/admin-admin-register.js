import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
const AdminRegister = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [same, setSame] = useState(false);
  const [toLoad, setToLoad] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [emailFound, setEmailFound] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    if (email !== "") {
      console.log(`/admin/email/find/${email}`);
      setTimeout(() => {
        Axios.get(`http://localhost:3001/admin/email/find/${email}`).then(
          (response) => {
            setEmailFound(response.data);
          }
        );
      }, 500);
    }
  }, [email]);

  useEffect(() => {
    if (username !== "") {
      console.log(`/admin/username/find/${username}`);

      setTimeout(() => {
        Axios.get(`http://localhost:3001/admin/username/find/${username}`).then(
          (response) => {
            setUserFound(response.data);
          }
        );
      }, 500);
    }
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToLoad(true);
    console.log(confirmPassword, password);
    if (confirmPassword === password) {
      if (!userFound && !emailFound) {
        submitForm();
        console.log("toSubmit");
        // setToLoad(false);
      } else {
        setToLoad(false);
      }
    } else {
      setSame(true);
      setToLoad(false);
    }
  };

  const submitForm = () => {
    const admin = {
      username: username,
      email: email,
      name: name,
      password: password,
    };
    Axios.post(`http://localhost:3001/admin/create`, admin).then((response) => {
      console.log(response.data);
      setToLoad(false);
      handleShow();
    });
  };

  return (
    <>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item ">Admin List</li>
        <li className="breadcrumb-item active">Register</li>
      </ol>
      <div className="row justify-content-between ">
        <div className="col-auto">
          <p>Please input the following.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="row gy-3">
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className={
                      userFound ? "form-control is-invalid" : "form-control"
                    }
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <label>Username</label>
                  <div className="invalid-feedback">
                    Existing Username Found
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label>Full Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="email"
                    className={
                      emailFound ? "form-control is-invalid" : "form-control"
                    }
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label>Email</label>
                  <div className="invalid-feedback">Existing Email Found</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label>Password</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="password"
                    className={
                      same ? "form-control is-invalid" : "form-control"
                    }
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                      setSame(false);
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <label htmlFor="txtDateTo">Confirm Password</label>
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
          </form>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Body>New Admin Sucessfully Registered.</Modal.Body>
            <Modal.Footer className="border-0">
              <Button
                className="btn btn-1 w-25"
                onClick={() => {
                  handleClose();
                  navigate("../");
                }}
              >
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
