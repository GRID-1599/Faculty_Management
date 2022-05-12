import React, { useEffect, useState } from "react";

import Axios from "axios";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";
import { dateTimeFormater } from "../functions/dateFunction";

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
import { faPrint } from "@fortawesome/free-solid-svg-icons";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon icon={faCoffee} color="white" />  */
}

function SideNav(props) {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPrintOpt, setShowPrintOpt] = useState(false);
  const handleClosePrintOpt = () => setShowPrintOpt(false);
  const handleShowPrintOpt = () => setShowPrintOpt(true);

  const [isPrintPersonalInfo, setIsPrintPersonalInfo] = useState(false);
  const [isPrintEducBG, setIsPrintEducBG] = useState(false);
  const [isPrintCivil, setIsPrintCivil] = useState(false);
  const [isPrintWorkExp, setIsPrintWorkExp] = useState(false);
  const [isPrintCert, setIsPrintCert] = useState(false);

  const employeeId = props.employeeId;
  const handlePrint = () => {
    handleClosePrintOpt();
    console.log("printing..");
    // console.log("isPrintPersonalInfo", isPrintPersonalInfo);
    // console.log("isPrintEducBG", isPrintEducBG);
    // console.log("isPrintCivil", isPrintCivil);
    // console.log("isPrintWorkExp", isPrintWorkExp);
    // console.log("isPrintCert", isPrintCert);

    setIsPrintPersonalInfo(false);
    setIsPrintEducBG(false);
    setIsPrintCivil(false);
    setIsPrintWorkExp(false);
    setIsPrintCert(false);

    handleShow();
    Axios.get(`http://localhost:3001/faculty/get-all/${employeeId}`, {}).then(
      (response) => {
        const facultyData = response.data;
        // console.log(facultyData);
        facultyData.printData = {
          isToPrintPersonal: isPrintPersonalInfo,
          isToPrintEducBG: isPrintEducBG,
          isToPrintCivil: isPrintCivil,
          isToPrintWorkExp: isPrintWorkExp,
          isToPrintCert: isPrintCert,
        };

        console.log(facultyData);

        Axios.post("http://localhost:3001/pdf/create", facultyData)
          .then(() =>
            Axios.get("http://localhost:3001/pdf/fetch", {
              responseType: "blob",
            })
          )
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(
              pdfBlob,
              `${employeeId} DATA [${dateTimeFormater(new Date())}].pdf`
            );

            console.log("printing done");
            handleClose();
          });
      }
    );
  };

  const loader = (
    <div className="spinner-border text-light mx-3" role="status">
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
              <button className="btn btn-1" onClick={handleShowPrintOpt}>
                <FontAwesomeIcon
                  icon={faPrint}
                  color="white"
                  className="me-3"
                />{" "}
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

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Printing Faculty Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <tbody>
              <tr>
                <td>
                  <div
                    className="spinner-border text-danger mx-3"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </td>
                <td>
                  <span>Fetching Faculty Data. Please Wait....</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={showPrintOpt}
        onHide={handleClosePrintOpt}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Print</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select the following to be print.</p>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-1  w-25 mb-3"
                type="checkbox"
                onClick={() => {
                  setIsPrintPersonalInfo(true);
                  setIsPrintEducBG(true);
                  setIsPrintCivil(true);
                  setIsPrintWorkExp(true);
                  setIsPrintCert(true);
                }}
              >
                Select All
              </button>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="personalInfoPrint"
                  checked={isPrintPersonalInfo}
                  onChange={() => {
                    setIsPrintPersonalInfo(!isPrintPersonalInfo);
                  }}
                />
                <label className="form-check-label" htmlFor="personalInfoPrint">
                  Personal Information
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="educInfoPrint"
                  checked={isPrintEducBG}
                  onChange={() => {
                    setIsPrintEducBG(!isPrintEducBG);
                  }}
                />
                <label className="form-check-label" htmlFor="educInfoPrint">
                  Educational Background
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="civilInfoPrint"
                  checked={isPrintCivil}
                  onChange={() => {
                    setIsPrintCivil(!isPrintCivil);
                  }}
                />
                <label className="form-check-label" htmlFor="civilInfoPrint">
                  Civil Service Eligibility
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="workInfoPrint"
                  checked={isPrintWorkExp}
                  onChange={() => {
                    setIsPrintWorkExp(!isPrintWorkExp);
                  }}
                />
                <label className="form-check-label" htmlFor="workInfoPrint">
                  Work Experience
                </label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="certInfoPrint"
                  checked={isPrintCert}
                  onChange={() => {
                    setIsPrintCert(!isPrintCert);
                  }}
                />
                <label className="form-check-label" htmlFor="certInfoPrint">
                  Certificates
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrintOpt}>
            Cancel
          </Button>
          {(isPrintPersonalInfo ||
            isPrintEducBG ||
            isPrintCivil ||
            isPrintWorkExp ||
            isPrintCert) && (
            <Button className="btn btn-1" onClick={handlePrint}>
              Print
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SideNav;
