import React, { useState } from "react";

import Axios from "axios";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
    navigate("../faculty/address/");
  };

  const onClickIssuedId = () => {
    navigate("../faculty/issued-id/");
  };

  const onClickContact = () => {
    navigate("../faculty/contact/");
  };

  const onClickElementary = () => {
    navigate("../faculty/elementary/");
  };

  const onClickJuniorHigh = () => {
    navigate("../faculty/junior-high/");
  };

  const onClickSeniorHigh = () => {
    navigate("../faculty/senior-high");
  };

  const onClickVocational = () => {
    navigate("../faculty/vocational");
  };

  const onClickCollege = () => {
    navigate("../faculty/college");
  };

  const onClickGraduate = () => {
    navigate("../faculty/graduate-studies");
  };

  const onClickCivilServices = () => {
    navigate("../faculty/civil-services");
  };

  const onClickWork = () => {
    navigate("../faculty/work-experiences");
  };

  const onClickCertificates = () => {
    navigate("../faculty/certificates");
  };

  const [loadingPrinting, setLoadingPrinting] = useState(false);

  const handlePrint = () => {
    console.log("printing..");
    setLoadingPrinting(true);
    Axios.post("http://localhost:3001/pdf/create")
      .then(() =>
        Axios.get("http://localhost:3001/pdf/fetch", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `${new Date()}.pdf`);

        console.log("printing done");
        setLoadingPrinting(false);
      });
  };

  const loader = (
    <div className="spinner-border text-info mx-3" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu custom-scrollbar1">
          <div className="nav">
            <div className="nav-link btn-link ">
              <button className="btn btn-1" onClick={handlePrint}>
                Print Data
              </button>
              {loadingPrinting && loader}
            </div>
            <div className="sb-sidenav-menu-heading">Personal Info</div>
            <div className="nav-link btn-link" onClick={onClickProfile}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
              Profile
            </div>
            <div className="nav-link btn-link" onClick={onClickContact}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faAddressBook} color="white" />
              </div>
              Contact
            </div>
            <div className="nav-link btn-link" onClick={onClickAddress}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faMapLocationDot} color="white" />
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
              data-bs-target="#collapseEduc"
              aria-expanded="false"
              aria-controls="collapseEduc"
            >
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faGraduationCap} color="white" />
              </div>
              Educational Background
              <div className="sb-sidenav-collapse-arrow">
                <FontAwesomeIcon icon={faAngleDown} color="white" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseEduc"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <div className="nav-link btn-link" onClick={onClickElementary}>
                  Elementary
                </div>
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#educCollapseSecondary"
                  aria-expanded="false"
                  aria-controls="educCollapseSecondary"
                >
                  Secondary
                  <div className="sb-sidenav-collapse-arrow">
                    <FontAwesomeIcon icon={faAngleDown} color="white" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="educCollapseSecondary"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <div
                      className="nav-link btn-link"
                      onClick={onClickJuniorHigh}
                    >
                      Junior HighSchool
                    </div>
                    <div
                      className="nav-link btn-link"
                      onClick={onClickSeniorHigh}
                    >
                      Senior HighSchool
                    </div>
                  </nav>
                </div>
                <div className="nav-link btn-link " onClick={onClickVocational}>
                  Vocational / Trade Course
                </div>
                <div className="nav-link btn-link " onClick={onClickCollege}>
                  College
                </div>
                <div className="nav-link btn-link " onClick={onClickGraduate}>
                  Graduate Studies
                </div>
              </nav>
            </div>

            <div className="sb-sidenav-menu-heading">Sample Title</div>
            <div className="nav-link btn-link" onClick={onClickCivilServices}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faPeopleCarryBox} color="white" />
              </div>
              Civil Service Eligibility
            </div>
            <div className="nav-link btn-link" onClick={onClickWork}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faBriefcase} color="white" />
              </div>
              Work Experience
            </div>

            <div className="sb-sidenav-menu-heading">Sample Title</div>
            <div className="nav-link btn-link" onClick={onClickCertificates}>
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
