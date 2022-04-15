import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon icon={faCoffee} color="white" />  */
}

function TopNav(params) {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-maroon row">
      <div className="col-auto">
        <a className="navbar-brand ps-3" href="index.html">
          Faculty Management
        </a>
      </div>
      <div className="col-auto">
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 mx-5"
          id="sidebarToggle"
        >
          <FontAwesomeIcon icon={faBars} color="white" />
        </button>
      </div>

      <div className="col-auto align-self-end offset-md-7">
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 ">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;
