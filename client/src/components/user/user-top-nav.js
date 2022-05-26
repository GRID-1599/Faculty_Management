import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faBars,
  faMagnifyingGlass,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon icon={faCoffee} color="white" />  */
}

function TopNav(params) {
  const navigate = useNavigate();
  const onClickLogout = () => {
    sessionStorage.removeItem("user");
    navigate("../../faculty/login");
  };

  const onClickDashboard = () => {
    navigate("../../faculty/");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-maroon  ps-3  ">
      <div className="col-auto  p-0">
        <button
          className="btn btn-link  btn-sm order-1 order-lg-0 me-4 me-lg-0  btn-hovered"
          id="sidebarToggle"
          onClick={() => {
            document.body.classList.toggle("sb-sidenav-toggled");
          }}
        >
          <FontAwesomeIcon icon={faBars} color="white" />
        </button>
      </div>
      <div className="col-auto ">
        <a className="navbar-brand ps-3" onClick={onClickDashboard}>
          <img
            src={`/resources/logo-dark.png`}
            alt=""
            style={{ width: "1.75rem", height: "1.75rem" }}
          />{" "}
          FMIS
        </a>
      </div>

      <div className="col">
        <div className="row  justify-content-between">
          <div className="col-auto d-flex justify-content-end">
            {/* <button className="btn btn-1 float-end">
              <FontAwesomeIcon icon={faPrint} color="white" /> Print Details
            </button> */}
          </div>
          <div className="col-auto">
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 btn-circle w-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faCaretDown} color="white" />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("./change-password");
                      }}
                    >
                      Change Password
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleShow}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Log out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log-out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-1" onClick={onClickLogout}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

export default TopNav;
