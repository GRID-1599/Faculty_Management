import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
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
          className="btn btn-link  btn-sm order-1 order-lg-0 me-4 me-lg-0 mx-5 btn-hovered"
          id="sidebarToggle"
        >
          <FontAwesomeIcon icon={faBars} color="white" />
        </button>
      </div>

      <div className="col-auto align-self-end  ">
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
