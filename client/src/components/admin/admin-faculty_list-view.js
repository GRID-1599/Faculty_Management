import React, { useState, useEffect } from "react";
import { Modal, Button, ProgressBar } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import {
  dateTimeFormater,
  dateTimeFormater2,
  dateFormatStringSet,
} from "../functions/dateFunction";

import Axios from "axios";

const FacultyView = (props) => {
  const navigate = useNavigate();

  // const employeeId = props.employeeId;
  // const employeeId = 2018100703;
  const { employeeId } = useParams();
  const [faculty, setFaculty] = useState({});
  const [facultyAll, setFacultyAll] = useState({});

  var [updatedPointer, setUpdatedPointer] = useState(true);

  const [hasAddress, setHasAddress] = useState(false);
  const [hasIds, setHasIds] = useState(false);
  const [hasElem, setHasElem] = useState(false);
  const [hasJunior, setHasJunior] = useState(false);
  const [hasSenior, setHasSenior] = useState(false);
  const [hasVocational, setHasVocational] = useState(false);
  const [totalVoc, setTotalVoc] = useState(0);
  const [hasCollege, setHasCollege] = useState(false);
  const [totalCol, setTotalCol] = useState(0);
  const [hasGraduate, setHasGraduate] = useState(false);
  const [totalGrad, setTotalGrad] = useState(0);
  const [hasCivil, setHasCivil] = useState(false);
  const [totalCivil, setTotalCivil] = useState(0);
  const [hasWork, setHasWork] = useState(false);
  const [totalWork, setTotalWork] = useState(0);
  const [hasCertificates, setHasCertificates] = useState(false);
  const [totalCerti, settotalCerti] = useState(0);

  const [toLoad, setToLoad] = useState(true);

  const loadingMessage = (
    <div className="mb-3">
      <div className="spinner-border  text-danger me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="h4 text-muted text-center  mt-5">Loading...</span>
    </div>
  );

  const makeUpdate = () => {
    setUpdatedPointer(!updatedPointer);
    console.log(updatedPointer);
  };

  const [percent, setPercent] = useState(100);
  const [progressLoad, setProgressLoad] = useState(false);

  const label = progressLoad ? "Loading..." : percent + "% ";

  useEffect(() => {
    setProgressLoad(true);
    setToLoad(true);

    Axios.get(`http://localhost:3001/getFacultyById/${employeeId}`, {}).then(
      (response) => {
        // console.log(response.data);
        const faculty = response.data;
        setFaculty(faculty);
        setImageSrc(faculty.image);
      }
    );

    Axios.get(`http://localhost:3001/faculty/get-all/${employeeId}`, {}).then(
      (response) => {
        setProgressLoad(false);
        setPercent(20);

        console.log(JSON.stringify(response.data));
        const allFaculty = response.data;

        setFacultyAll(response.data);

        setToLoad(false);
        console.log(allFaculty.address);
        console.log(allFaculty.hasOwnProperty("address"));
        if (allFaculty.hasOwnProperty("address")) {
          setHasAddress(true);
          setPercent((percent) => percent + 8);
        }

        if (allFaculty.hasOwnProperty("issuedIds")) {
          setHasIds(true);
          setPercent((percent) => percent + 3);
        }
        // ------------------------

        if (allFaculty.hasOwnProperty("educ_elementary")) {
          setHasElem(true);
          setPercent((percent) => percent + 5);
        }

        if (allFaculty.hasOwnProperty("educ_juniorHigh")) {
          setHasJunior(true);
          setPercent((percent) => percent + 5);
        }

        if (allFaculty.hasOwnProperty("educ_seniorHigh")) {
          setHasSenior(true);
          setPercent((percent) => percent + 5);
        }

        if (allFaculty.educ_vocational.length !== 0) {
          setHasVocational(true);
          setTotalVoc(allFaculty.educ_vocational.length);
          setPercent((percent) => percent + 5);
        }

        if (allFaculty.educ_college.length !== 0) {
          setHasCollege(true);
          setTotalCol(allFaculty.educ_college.length);

          setPercent((percent) => percent + 5);
        }

        if (allFaculty.educ_graduateStudies.length !== 0) {
          setHasGraduate(true);
          setTotalGrad(allFaculty.educ_graduateStudies.length);

          setPercent((percent) => percent + 5);
        }

        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        if (allFaculty.civil_elegibility.length !== 0) {
          setHasCivil(true);
          setTotalCivil(allFaculty.civil_elegibility.length);

          setPercent((percent) => percent + 13);
        }

        if (allFaculty.work_exp.length !== 0) {
          setHasWork(true);
          setTotalWork(allFaculty.work_exp.length);

          setPercent((percent) => percent + 13);
        }

        if (allFaculty.certificates.length !== 0) {
          setHasCertificates(true);
          settotalCerti(allFaculty.certificates.length);

          setPercent((percent) => percent + 13);
        }
      }
    );
  }, []);

  //   const setHas = ( flag , function1 , ) =>{
  //       if (allFaculty.issuedIds !== null) {
  //           setHasIds(true);
  //           setPercent((percent) => percent + 5);
  //         }
  //   }

  const [imageSrc, setImageSrc] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fileName, setFileName] = useState("");

  const imageSrcHandler = (e) => {
    setFileName(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const [isNoImage, setIsNoImage] = useState(false);

  const setImageFile = () => setIsNoImage(false);

  const handleSubmitImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", fileName);

    try {
      Axios.post(
        `http://localhost:3001/updateProfile/${employeeId}`,
        formData
      ).then((response) => {
        console.log(response);
        // handleClose();
        // makeUpdate();
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <main>
      <div className="container-xxl px-4 float-start mb-5">
        <ol className="breadcrumb mb-6">
          <li className="breadcrumb-item ">Faculty List</li>
          <li className="breadcrumb-item active">Faculty View</li>
        </ol>
        {toLoad ? (
          loadingMessage
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-3 ">
                <div
                  className="container p-0  "
                  style={{ position: "sticky", top: "100px" }}
                >
                  <div className="row  justify-content-center  ">
                    <div className="col align-self-center">
                      <img
                        src={`/facultyImages/${imageSrc}`}
                        className=" mx-auto ms-3  border"
                        style={{
                          width: "auto",
                          maxWidth: "2in",
                          height: "2in",
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mt-3 px-2">
                    <button
                      className="btn btn-1"
                      onClick={() => {
                        navigate(`../export-data/${employeeId}`);
                      }}
                    >
                      {" "}
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <dl className="row border-top pt-2 gy-2">
                  <dt className="col-sm-4">Employee Number</dt>
                  <dd className="col-sm-8 lead">{faculty.employee_id}</dd>
                  <dt className="col-sm-4">Name</dt>
                  <dd className="col-sm-8 lead">
                    {faculty.last_name}, {faculty.first_name}
                    {faculty.middle_name}
                    {faculty.name_extension}
                  </dd>
                  <dt className="col-sm-4">College</dt>
                  <dd className="col-sm-8 lead">{faculty.college}</dd>
                  <dt className="col-sm-4">Rank</dt>
                  <dd className="col-sm-8 lead">{faculty.rank}</dd>
                  <dt className="col-sm-4">Appointment Status</dt>
                  <dd className="col-sm-8 lead">
                    {faculty.appointment_status}
                  </dd>
                </dl>

                <div
                  className="row border-top pt-2 mb-5"
                  style={{ height: "2.5rem" }}
                >
                  <p className="m-2 h5">Faculty Informations</p>
                  <ProgressBar
                    className="p-0 bg-white border border-danger h-100"
                    variant="danger"
                    animated={progressLoad}
                    now={percent}
                    label={label}
                  />
                </div>

                {/* ACCORDION */}

                <div className="accordion m-0 p-0" id="">
                  {/* personal */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#PersonalInfo"
                        aria-expanded="false"
                        aria-controls="PersonalInfo"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          size="1x"
                          color="maroon"
                          className="me-3"
                        />
                        Personal Info
                      </button>
                    </h2>
                    <div
                      id="PersonalInfo"
                      className="accordion-collapse collapse "
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <div className="row ">
                          <div className="col">
                            <span>First Name : </span>
                            <span>{facultyAll.personal_info.first_name}</span>
                            <br />
                            <span>Middle Initial : </span>
                            <span>{facultyAll.personal_info.middle_name}</span>
                            <br />
                            <span>Last Name : </span>
                            <span>{facultyAll.personal_info.last_name}</span>
                            <br />
                            <span>Name Suffix : </span>
                            <span>
                              {facultyAll.personal_info.name_extension}
                            </span>
                            <br />
                            <span>Birthday : </span>
                            <span>
                              {dateFormatStringSet(
                                facultyAll.personal_info.birth_date
                              )}
                            </span>
                            <br />
                            <span>Age : </span>
                            <span>{facultyAll.personal_info.age}</span> <br />
                          </div>
                          <div className="col">
                            <span>Birth place : </span>
                            <span>{facultyAll.personal_info.birth_place}</span>
                            <br />
                            <span>Sex : </span>
                            <span>{facultyAll.personal_info.sex}</span> <br />
                            <span>Civil Status : </span>
                            <span>{facultyAll.personal_info.civil_status}</span>
                            <br />
                            <span>Height : </span>
                            <span>{facultyAll.personal_info.height}</span>
                            <br />
                            <span>Weight : </span>
                            <span>{facultyAll.personal_info.weight}</span>
                            <br />
                            <span>Blood Type : </span>
                            <span>{facultyAll.personal_info.blood_type}</span>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* contact */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#ContactSet"
                        aria-expanded="false"
                        aria-controls="ContactSet"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          size="1x"
                          color="maroon"
                          className="me-3"
                        />
                        Contact
                      </button>
                    </h2>
                    <div
                      id="ContactSet"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body">
                        <div className="mt-3 ">
                          <span>Mobile number : </span>
                          <span>{facultyAll.personal_info.mobile_number}</span>
                          <br />
                          <span>Telephone number : </span>
                          <span>
                            {facultyAll.personal_info.telephone_number}
                          </span>
                          <br />
                          <span>Email Address: </span>
                          <span>{facultyAll.personal_info.email}</span>
                          <br />
                          <span>Aternative Email Address : </span>
                          <span>
                            {facultyAll.personal_info.alternative_email}
                          </span>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* address */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#AddressSet"
                        aria-expanded="false"
                        aria-controls="AddressSet"
                      >
                        {hasAddress ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faXmark}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        )}
                        Address
                      </button>
                    </h2>
                    <div
                      id="AddressSet"
                      className="accordion-collapse collapse "
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <AddressSet facultyAll={facultyAll} />
                      </div>
                    </div>
                  </div>
                  {/* ids */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#IssuedIDSet"
                        aria-expanded="false"
                        aria-controls="IssuedIDSet"
                      >
                        {hasIds ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faXmark}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        )}
                        Issued Id's
                      </button>
                    </h2>
                    <div
                      id="IssuedIDSet"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <ContactSet facultyAll={facultyAll} />
                      </div>
                    </div>
                  </div>
                  {/* educ */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#EducSet"
                        aria-expanded="true"
                        aria-controls="EducSet"
                      >
                        Educational Background
                      </button>
                    </h2>
                    <div
                      id="EducSet"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        {/* education accordion */}
                        <div
                          className="accordion"
                          id="accordionPanelsStayOpenExample"
                        >
                          {/* elem */}
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#ElemSet"
                                aria-expanded="false"
                                aria-controls="ElemSet"
                              >
                                {hasElem ? (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                )}
                                Elementary
                              </button>
                            </h2>
                            <div
                              id="ElemSet"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingThree"
                            >
                              <div className="accordion-body">
                                <EducationalBackgroundElementary
                                  facultyAll={facultyAll}
                                />
                              </div>
                            </div>
                          </div>

                          {/* junior */}
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#JuniorSet"
                                aria-expanded="false"
                                aria-controls="JuniorSet"
                              >
                                {hasJunior ? (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                )}
                                Junior High School
                              </button>
                            </h2>
                            <div
                              id="JuniorSet"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingThree"
                            >
                              <div className="accordion-body">
                                <EducationalBackgroundJuniorHigh
                                  facultyAll={facultyAll}
                                />
                              </div>
                            </div>
                          </div>

                          {/* senior */}
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#SeniorSet"
                                aria-expanded="false"
                                aria-controls="SeniorSet"
                              >
                                {hasSenior ? (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                )}
                                Senior High School
                              </button>
                            </h2>
                            <div
                              id="SeniorSet"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingThree"
                            >
                              <div className="accordion-body">
                                <EducationalBackgroundSeniorHigh
                                  facultyAll={facultyAll}
                                />
                              </div>
                            </div>
                          </div>

                          {/* vocational */}
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#VocationalSet"
                                aria-expanded="false"
                                aria-controls="VocationalSet"
                              >
                                {hasVocational ? (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                )}
                                Vocational / Trade Course
                                <span className="badge bg-secondary ms-2 p-2 ps-3 rounded-pill">
                                  {totalVoc}
                                </span>
                              </button>
                            </h2>
                            <div
                              id="VocationalSet"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingThree"
                            >
                              <div className="accordion-body">
                                <VocationalEduc facultyAll={facultyAll} />
                              </div>
                            </div>
                          </div>
                          {/* college */}
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#CollegeSet"
                                aria-expanded="false"
                                aria-controls="CollegeSet"
                              >
                                {hasCollege ? (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                )}
                                College
                                <span className="badge bg-secondary ms-2 p-2 ps-3 rounded-pill">
                                  {totalCol}
                                </span>
                              </button>
                            </h2>
                            <div
                              id="CollegeSet"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingThree"
                            >
                              <div className="accordion-body">
                                <CollegeEduc facultyAll={facultyAll} />
                              </div>
                            </div>
                          </div>

                          {/* graStud */}
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#GradStudSet"
                                aria-expanded="false"
                                aria-controls="GradStudSet"
                              >
                                {hasGraduate ? (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    size="1x"
                                    color="maroon"
                                    className="me-3"
                                  />
                                )}
                                Graduate Studies
                                <span className="badge bg-secondary ms-2 p-2 ps-3 rounded-pill">
                                  {totalGrad}
                                </span>
                              </button>
                            </h2>
                            <div
                              id="GradStudSet"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingThree"
                            >
                              <div className="accordion-body">
                                <GraduateStudiesEduc facultyAll={facultyAll} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* civil */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#CivilSet"
                        aria-expanded="false"
                        aria-controls="CivilSet"
                      >
                        {hasCivil ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faXmark}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        )}
                        Civil Service Eligibility
                        <span className="badge bg-secondary ms-2 p-2 ps-3 rounded-pill">
                          {totalCivil}
                        </span>
                      </button>
                    </h2>
                    <div
                      id="CivilSet"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <CivilStatus facultyAll={facultyAll} />
                      </div>
                    </div>
                  </div>
                  {/* work */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#WorkSet"
                        aria-expanded="false"
                        aria-controls="WorkSet"
                      >
                        {hasWork ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faXmark}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        )}
                        Work Experience
                        <span className="badge bg-secondary ms-2 p-2 ps-3 rounded-pill">
                          {totalWork}
                        </span>
                      </button>
                    </h2>
                    <div
                      id="WorkSet"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <WorkExp facultyAll={facultyAll} />
                      </div>
                    </div>
                  </div>
                  {/* certi */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#CertiSet"
                        aria-expanded="false"
                        aria-controls="CertiSet"
                      >
                        {hasCertificates ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faXmark}
                            size="1x"
                            color="maroon"
                            className="me-3"
                          />
                        )}
                        Trainings, Seminars and Programs
                        <span className="badge bg-secondary ms-2 p-2 ps-3 rounded-pill">
                          {totalCerti}
                        </span>
                      </button>
                    </h2>
                    <div
                      id="CertiSet"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <Certificates facultyAll={facultyAll} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

const EducationalBackgroundElementary = (props) => {
  const [name, setName] = useState("N/A");
  const [education, seteducation] = useState("N/A");
  const [from, setfrom] = useState("N/A");
  const [to, setto] = useState("N/A");
  const [level, setlevel] = useState("N/A");
  const [graduate, setgraduate] = useState("N/A");
  const [honor, sethonor] = useState("N/A");

  const facultyAll = props.facultyAll;

  const [hasNoData, setHasNoData] = useState(true);

  useEffect(() => {
    if (facultyAll.hasOwnProperty("educ_elementary")) {
      setName(facultyAll.educ_elementary.school_name);
      seteducation(facultyAll.educ_elementary.basic_education);
      setfrom(facultyAll.educ_elementary.period_from);
      setto(facultyAll.educ_elementary.period_to);
      setlevel(facultyAll.educ_elementary.highest_level);
      setgraduate(facultyAll.educ_elementary.year_graduate);
      sethonor(facultyAll.educ_elementary.honor_recieved);
      setHasNoData(false);
    }
  }, []);

  return (
    <>
      {hasNoData ? (
        <p className="text-muted ps-4 mb-0">No entry</p>
      ) : (
        <div
          className="card p-0 ms-3 mt-1 border-left"
          style={{ width: "100%" }}
        >
          <div className="card-body py-1">
            <label>School Name : </label>
            <span> {name}</span>
            <br />
            <label>Basic Education : </label>
            <span> {education}</span>
            <br />
            <label>Period of Attendance : </label>
            <span>
              {from} -{to}
            </span>
            <br />
            <label>Highest Level (if not graduated) : </label>
            <span>{level} </span>
            <br />
            <label>Year Graduated : </label>
            <span> {graduate} </span>
            <br />
            <label>Honors Recieved: </label>
            <span> {honor} </span>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

const EducationalBackgroundJuniorHigh = (props) => {
  const [name, setName] = useState("N/A");
  const [education, seteducation] = useState("N/A");
  const [from, setfrom] = useState("N/A");
  const [to, setto] = useState("N/A");
  const [level, setlevel] = useState("N/A");
  const [graduate, setgraduate] = useState("N/A");
  const [honor, sethonor] = useState("N/A");

  const facultyAll = props.facultyAll;

  const [hasNoData, setHasNoData] = useState(true);

  useEffect(() => {
    if (facultyAll.hasOwnProperty("educ_juniorHigh")) {
      setName(facultyAll.educ_juniorHigh.school_name);
      seteducation(facultyAll.educ_juniorHigh.basic_education);
      setfrom(facultyAll.educ_juniorHigh.period_from);
      setto(facultyAll.educ_juniorHigh.period_to);
      setlevel(facultyAll.educ_juniorHigh.highest_level);
      setgraduate(facultyAll.educ_juniorHigh.year_graduate);
      sethonor(facultyAll.educ_juniorHigh.honor_recieved);
      setHasNoData(false);
    }
  }, []);

  return (
    <>
      {hasNoData ? (
        <p className="text-muted ps-4 mb-0">No entry</p>
      ) : (
        <div
          className="card p-0 ms-3 mt-1 border-left"
          style={{ width: "100%" }}
        >
          <div className="card-body py-1">
            <label>School Name : </label>
            <span> {name}</span>
            <br />
            <label>Basic Education : </label>
            <span> {education}</span>
            <br />
            <label>Period of Attendance : </label>
            <span>
              {from} -{to}
            </span>
            <br />
            <label>Highest Level (if not graduated) : </label>
            <span>{level} </span>
            <br />
            <label>Year Graduated : </label>
            <span> {graduate} </span>
            <br />
            <label>Honors Recieved: </label>
            <span> {honor} </span>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

const EducationalBackgroundSeniorHigh = (props) => {
  const [name, setName] = useState("N/A");
  const [education, seteducation] = useState("N/A");
  const [from, setfrom] = useState("N/A");
  const [to, setto] = useState("N/A");
  const [level, setlevel] = useState("N/A");
  const [graduate, setgraduate] = useState("N/A");
  const [honor, sethonor] = useState("N/A");

  const facultyAll = props.facultyAll;
  const [hasNoData, setHasNoData] = useState(true);

  useEffect(() => {
    if (facultyAll.hasOwnProperty("educ_seniorHigh")) {
      setName(facultyAll.educ_seniorHigh.school_name);
      seteducation(facultyAll.educ_seniorHigh.basic_education);
      setfrom(facultyAll.educ_seniorHigh.period_from);
      setto(facultyAll.educ_seniorHigh.period_to);
      setlevel(facultyAll.educ_seniorHigh.highest_level);
      setgraduate(facultyAll.educ_seniorHigh.year_graduate);
      sethonor(facultyAll.educ_seniorHigh.honor_recieved);
      setHasNoData(false);
    }
  }, []);

  return (
    <>
      {hasNoData ? (
        <p className="text-muted ps-4 mb-0">No entry</p>
      ) : (
        <div
          className="card p-0 ms-3 mt-1 border-left"
          style={{ width: "100%" }}
        >
          <div className="card-body py-1">
            <label>School Name : </label>
            <span> {name}</span>
            <br />
            <label>Basic Education : </label>
            <span> {education}</span>
            <br />
            <label>Period of Attendance : </label>
            <span>
              {from} -{to}
            </span>
            <br />
            <label>Highest Level (if not graduated) : </label>
            <span>{level} </span>
            <br />
            <label>Year Graduated : </label>
            <span> {graduate} </span>
            <br />
            <label>Honors Recieved: </label>
            <span> {honor} </span>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

const VocationalEduc = (props) => {
  const facultyAll = props.facultyAll;
  let counter = 0;

  const [arr, setArr] = useState([]);

  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyAll.educ_vocational.length !== 0) {
      setArr(facultyAll.educ_vocational);
      setHasNoData(false);
    }
  }, []);

  const vocational = arr.map((vocational) => {
    counter++;
    return (
      <div
        key={vocational._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "100%" }}
      >
        <div className="card-body py-1">
          <label>School Name : </label>
          <span> {vocational.school_name}</span>
          <br />
          <label>Basic Education : </label>
          <span> {vocational.course}</span>
          <br />
          <label>Period of Attendance : </label>
          <span>
            {vocational.period_from} -{vocational.period_to}
          </span>
          <br />
          <label>Highest Level (if not graduated) : </label>
          <span>{vocational.units_earned} </span>
          <br />
          <label>Year Graduated : </label>
          <span> {vocational.year_graduate} </span>
          <br />
          <label>Honors Recieved: </label>
          <span> {vocational.honor_recieved} </span>
          <br />
        </div>
      </div>
    );
  });

  return (
    <>
      {vocational} {hasNoData && noData}
    </>
  );
};

const CollegeEduc = (props) => {
  const facultyAll = props.facultyAll;
  let counter = 0;

  const [arr, setArr] = useState([]);

  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyAll.educ_college.length !== 0) {
      setArr(facultyAll.educ_college);
      setHasNoData(false);
    }
  }, []);

  const collegeSet = arr.map((element) => {
    counter++;
    return (
      <div
        key={element._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "100%" }}
      >
        <div className="card-body py-1">
          <label>School Name : </label>
          <span> {element.school_name}</span>
          <br />
          <label>Basic Education : </label>
          <span> {element.course}</span>
          <br />
          <label>Period of Attendance : </label>
          <span>
            {element.period_from} -{element.period_to}
          </span>
          <br />
          <label>Highest Level (if not graduated) : </label>
          <span>{element.units_earned} </span>
          <br />
          <label>Year Graduated : </label>
          <span> {element.year_graduate} </span>
          <br />
          <label>Honors Recieved: </label>
          <span> {element.honor_recieved} </span>
          <br />
        </div>
      </div>
    );
  });

  return (
    <>
      {collegeSet} {hasNoData && noData}
    </>
  );
};

const GraduateStudiesEduc = (props) => {
  const facultyAll = props.facultyAll;
  let counter = 0;

  const [arr, setArr] = useState([]);

  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyAll.educ_graduateStudies.length !== 0) {
      setArr(facultyAll.educ_graduateStudies);
      setHasNoData(false);
    }
  }, []);

  const collegeSet = arr.map((element) => {
    counter++;
    return (
      <div
        key={element._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "100%" }}
      >
        <div className="card-body py-1">
          <label>School Name : </label>
          <span> {element.school_name}</span>
          <br />
          <label>Basic Education : </label>
          <span> {element.course}</span>
          <br />
          <label>Period of Attendance : </label>
          <span>
            {element.period_from} -{element.period_to}
          </span>
          <br />
          <label>Highest Level (if not graduated) : </label>
          <span>{element.units_earned} </span>
          <br />
          <label>Year Graduated : </label>
          <span> {element.year_graduate} </span>
          <br />
          <label>Honors Recieved: </label>
          <span> {element.honor_recieved} </span>
          <br />
        </div>
      </div>
    );
  });

  return (
    <>
      {collegeSet} {hasNoData && noData}
    </>
  );
};

const AddressSet = (props) => {
  const facultyAll = props.facultyAll;

  const [no, setNo] = useState("N/A");
  const [street, setStreet] = useState("N/A");
  const [subdivision, setSubdivision] = useState("N/A");
  const [barangay, setBarangay] = useState("N/A");
  const [city, setCity] = useState("N/A");
  const [province, setProvince] = useState("N/A");
  const [zipCode, setZipCode] = useState("N/A");

  const [perm_no, setPerm_No] = useState("N/A");
  const [perm_street, setPerm_Street] = useState("N/A");
  const [perm_subdivision, setPerm_Subdivision] = useState("N/A");
  const [perm_barangay, setPerm_Barangay] = useState("N/A");
  const [perm_city, setPerm_City] = useState("N/A");
  const [perm_province, setPerm_Province] = useState("N/A");
  const [perm_zipCode, setPerm_ZipCode] = useState("N/A");

  useEffect(() => {
    if (facultyAll.hasOwnProperty("address")) {
      setNo(facultyAll.address.resident_address.lot_number);
      setStreet(facultyAll.address.resident_address.street);
      setSubdivision(facultyAll.address.resident_address.subdivision);
      setBarangay(facultyAll.address.resident_address.barangay);
      setCity(facultyAll.address.resident_address.city);
      setProvince(facultyAll.address.resident_address.province);
      setZipCode(facultyAll.address.resident_address.zip_code);

      setPerm_No(facultyAll.address.permanent_address.lot_number);
      setPerm_Street(facultyAll.address.permanent_address.street);
      setPerm_Subdivision(facultyAll.address.permanent_address.subdivision);
      setPerm_Barangay(facultyAll.address.permanent_address.barangay);
      setPerm_City(facultyAll.address.permanent_address.city);
      setPerm_Province(facultyAll.address.permanent_address.province);
      setPerm_ZipCode(facultyAll.address.permanent_address.zip_code);
    }
  }, []);

  return (
    <div className="mt-3 ">
      <span>Resident Address : </span>
      <span>
        {no} {street} St. {subdivision} ,{barangay} ,{city} ,{province}{" "}
        {zipCode}
      </span>
      <br />
      <span>Permanent Address : </span>
      <span>
        {perm_no} {perm_street} St. {perm_subdivision} ,{perm_barangay} ,
        {perm_city} ,{perm_province}
        {perm_zipCode}
      </span>
    </div>
  );
};

const ContactSet = (props) => {
  const facultyAll = props.facultyAll;
  const [GSIS, setGSIS] = useState("N/A");
  const [PAGIBIG, setPAGIBIG] = useState("N/A");
  const [PHILHEALTH, setPHILHEALTH] = useState("N/A");
  const [TIN, setTIN] = useState("N/A");
  const [SSS, setSSS] = useState("N/A");

  const [citezenship, setCitezenship] = useState("FILIPINO");

  useEffect(() => {
    if (facultyAll.hasOwnProperty("issuedIds")) {
      setGSIS(facultyAll.issuedIds.GSIS_num);
      setPAGIBIG(facultyAll.issuedIds.PAGIBIG_num);
      setPHILHEALTH(facultyAll.issuedIds.PHILHEALTH_num);
      setSSS(facultyAll.issuedIds.SSS_num);
      setTIN(facultyAll.issuedIds.TIN_num);
    }
  }, []);

  return (
    <div className="mt-3 ">
      <span>GSIS ID No. : </span>
      <span>{GSIS}</span>
      <br />
      <span>PAGIBIG ID No. : </span>
      <span>{PAGIBIG}</span>
      <br />
      <span>PHILHEALTH ID No. : </span>
      <span>{PHILHEALTH}</span>
      <br />
      <span>SSS ID No. : </span>
      <span>{SSS}</span>
      <br />
      <span>TIN ID No. : </span>
      <span>{TIN}</span>
      <br />
    </div>
  );
};

const CivilStatus = (props) => {
  const facultyAll = props.facultyAll;
  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;
  useEffect(() => {
    if (facultyAll.civil_elegibility.length !== 0) {
      setHasNoData(false);
    }
  }, []);
  const civil = facultyAll.civil_elegibility.map((college) => {
    return (
      <div
        key={college._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "100%" }}
      >
        <div className="card-body py-1">
          <label>Title / License Name : </label>
          <span> {college.license_name}</span>
          <br />
          <label>Rating : </label>
          <span> {college.rating}</span>
          <br />
          <label>Date of Examination : </label>
          <span>{college.exam_date}</span>
          <br />
          <label>Place of Examination : </label>
          <span>{college.exam_place} </span>
          <br />
          <label>License Number : </label>
          <span> {college.license_number} </span>
          <br />
          <label>License Validity: </label>
          <span> {dateFormatStringSet(college.license_validity_date)} </span>
          <br />
        </div>
      </div>
    );
  });
  return (
    <div className="row  mb-3 align-items-center">
      {hasNoData && noData}
      <div className="row mb-3 ">{civil} </div>
    </div>
  );
};

const WorkExp = (props) => {
  const facultyAll = props.facultyAll;
  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyAll.work_exp.length !== 0) {
      setHasNoData(false);
    }
  }, []);

  const work = facultyAll.work_exp.map((worKExp) => {
    return (
      <div
        key={worKExp._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "100%" }}
      >
        <div className="card-body py-1">
          <label>Position Title : </label>
          <span> {worKExp.position}</span>
          <br />
          <label>Company : </label>
          <span> {worKExp.company_name}</span>
          <br />
          <label>Inclusive Dates : </label>
          <span>
            {" "}
            {dateFormatStringSet(worKExp.period_from)} -{" "}
            {dateFormatStringSet(worKExp.period_to)}
          </span>
          <br />
          <label>Montly Salary : </label>
          <span>{worKExp.monthly_salary} </span>
          <br />
          <label>Pay Grade : </label>
          <span> {worKExp.pay_grade} </span>
          <br />
          <label>Status of Appointment: </label>
          <span> {worKExp.appointment_status} </span>
          <br />
          <label>Goverment Service: </label>
          <span> {worKExp.isGov_service ? "Yes" : "No"} </span>
          <br />
        </div>
      </div>
    );
  });
  return (
    <div className="row  mb-3 align-items-center">
      {hasNoData && noData}
      <div className="row mb-3 ">{work}</div>
    </div>
  );
};

const Certificates = (props) => {
  const facultyAll = props.facultyAll;

  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyAll.certificates.length !== 0) {
      setHasNoData(false);
    }
  }, []);

  const certificates = facultyAll.certificates.map((certi) => {
    const certificateShower = () => {
      if (certi.certificate_src.substr(-3) === "pdf") {
        return (
          <iframe
            src={`/certificates/${certi.certificate_src}`}
            id="pdfFrame"
            width="100%"
            scrolling="no"
            frameBorder="0"
            style={{
              maxWidth: 640,
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
          />
        );
      } else {
        return (
          <img
            src={`/certificates/${certi.certificate_src}`}
            alt=""
            style={{ width: "3in", height: "3in" }}
          />
        );
      }
    };
    return (
      <div
        key={certi._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "100%" }}
      >
        <div className="card-body row py-1">
          <div className="col">
            <label>Title : </label>
            <span> {certi.certificate_name}</span>
            <br />
            <label>Type : </label>
            <span> {certi.type}</span>
            <br />
            <label>Inclusive Dates : </label>
            <span>
              {" "}
              {dateFormatStringSet(certi.period_from)} -{" "}
              {dateFormatStringSet(certi.period_to)}
            </span>
            <br />
            <label>Number of Hours : </label>
            <span>{certi.total_hours} </span>
            <br />
            <label>Conducted By : </label>
            <span> {certi.conducted_by} </span>
            <br />
            <label>File Name : </label>
            <span> {certi.certificate_src} </span>
          </div>
          <div className="col p-3">{certificateShower()}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="row  mb-3 align-items-center">
      {hasNoData && noData}
      <div className="row mb-3 ">{certificates}</div>
    </div>
  );
};

export default FacultyView;
