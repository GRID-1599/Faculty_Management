import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon icon={faCoffee} color="white" />  */
}

function SideNav(params) {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Personal Info</div>
            <div className="nav-link btn-link">
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
              Profile
            </div>
            <div className="nav-link btn-link">
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
              Address
            </div>
            <div className="nav-link btn-link">
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
              Issued IDs
            </div>
            <div className="sb-sidenav-menu-heading">Education</div>
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              Educational Background
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a className="nav-link" href="#">
                  Elementary
                </a>
                <a className="nav-link" href="#">
                  Secondary
                </a>
                <a className="nav-link" href="#">
                  Vocational / Trade Course
                </a>
                <a className="nav-link" href="#">
                  College
                </a>
                <a className="nav-link" href="#">
                  Graduate Studies
                </a>
              </nav>
            </div>

            <div className="sb-sidenav-menu-heading">Sample Title</div>
            <div className="nav-link btn-link">
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
              Civil Service Eligibility
            </div>
            <div className="nav-link btn-link">
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
              Work Experience
            </div>

            <div className="sb-sidenav-menu-heading">Sample Title</div>
            <div className="nav-link btn-link">
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
              Certificates
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
