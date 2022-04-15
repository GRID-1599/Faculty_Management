import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon icon={faCoffee} color="white" />  */
}

function SideNav(params) {
  const navigate = useNavigate();
  const onClickProfile = () => {
    navigate("../faculty/");
  };

  const onClickAddress = () => {
    navigate("../faculty/address");
  };

  const onClickIssuedId = () => {
    navigate("../faculty/issued-id");
  };
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu custom-scrollbar1">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Personal Info</div>
            <div className="nav-link btn-link" onClick={onClickProfile}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
              Profile
            </div>
            <div className="nav-link btn-link" onClick={onClickAddress}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faAddressBook} color="white" />
              </div>
              Address
            </div>
            <div className="nav-link btn-link" onClick={onClickIssuedId}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faIdCard} color="white" />
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
                <FontAwesomeIcon icon={faGraduationCap} color="white" />
              </div>
              Educational Background
              {/* <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faAngleDown} color="white" />
              </div> */}
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
                <FontAwesomeIcon icon={faPeopleCarryBox} color="white" />
              </div>
              Civil Service Eligibility
            </div>
            <div className="nav-link btn-link">
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faBriefcase} color="white" />
              </div>
              Work Experience
            </div>

            <div className="sb-sidenav-menu-heading">Sample Title</div>
            <div className="nav-link btn-link">
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faCertificate} color="white" />
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
