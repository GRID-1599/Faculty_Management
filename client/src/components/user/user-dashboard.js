import React, { useState, useEffect } from "react";
import { Modal, Button, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./image_upload";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Axios from "axios";

const UserDashboard = (props) => {
  const navigate = useNavigate();

  const employeeId = props.employeeId;
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

  const [toLoad, setToLoad] = useState(false);

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
        setToLoad(false);

        console.log(JSON.stringify(response.data));
        const allFaculty = response.data;

        setFacultyAll(response.data);
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
      <div className="container-xxl px-4 float-start">
        <h1 className="mt-4">Faculty Dashboard </h1>
        <ol className="breadcrumb mb-6">
          {/* <li className="breadcrumb-item active">Personal Information</li> */}
        </ol>
        {toLoad ? (
          loadingMessage
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-3 ">
                <div
                  className="container p-0 px-2 "
                  style={{ position: "sticky", top: "100px" }}
                >
                  <div className="row">
                    <div className="col-12 align-self-center">
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
                    <button
                      className="btn btn-1 btn-sm w-100 px-2 my-2"
                      onClick={handleShow}
                    >
                      Edit Profile Photo
                    </button>
                  </div>
                  <div className="row mt-3 px-2">
                    <button
                      className="btn btn-1"
                      onClick={() => {
                        navigate("./user-pdf");
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

                <div className="row gy-2  pt-2 mt-5">
                  {/* profile */}
                  <div className="card col-md-12">
                    <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                      <div className="col-10">
                        <button
                          className="btn btn-link w-100 text-start f-b txt-wide"
                          onClick={() => {
                            navigate("./profile");
                          }}
                        >
                          Personal Information
                        </button>
                      </div>
                      <div className="col-2">
                        <FontAwesomeIcon
                          icon={faCheck}
                          size="2x"
                          color="yellowgreen"
                          className="ms-2 float-end"
                        />
                      </div>
                    </div>
                  </div>
                  {/* contact */}
                  <div className="card col-md-12">
                    <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                      <div className="col-10">
                        <button
                          className="btn btn-link w-100 text-start f-b txt-wide"
                          onClick={() => {
                            navigate("./contact");
                          }}
                        >
                          Contact
                        </button>
                      </div>
                      <div className="col-2">
                        <FontAwesomeIcon
                          icon={faCheck}
                          size="2x"
                          color="yellowgreen"
                          className="ms-2 float-end"
                        />
                      </div>
                    </div>
                  </div>
                  {/* address */}
                  <div className="card col-md-12">
                    <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                      <div className="col-10">
                        <button
                          className="btn btn-link w-100 text-start f-b txt-wide"
                          onClick={() => {
                            navigate("./address");
                          }}
                        >
                          Address
                        </button>
                      </div>
                      <div className="col-2">
                        {hasAddress ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="2x"
                            color="yellowgreen"
                            className="ms-2 float-end"
                          />
                        ) : (
                          <button
                            className="btn btn-1 btn-sm w-100"
                            onClick={() => {
                              navigate("./address");
                            }}
                          >
                            No data
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* ids */}
                  <div className="card col-md-12">
                    <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                      <div className="col-10">
                        <button
                          className="btn btn-link w-100 text-start f-b txt-wide"
                          onClick={() => {
                            navigate("./issued-id");
                          }}
                        >
                          Issued IDs
                        </button>
                      </div>
                      <div className="col-2">
                        {hasIds ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="2x"
                            color="yellowgreen"
                            className="ms-2 float-end"
                          />
                        ) : (
                          <button
                            className="btn btn-1 btn-sm w-100"
                            onClick={() => {
                              navigate("./issued-id");
                            }}
                          >
                            No data
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* civil */}
                  <div className="card col-md-12 border-0">
                    <p className="f-b m-3 mb-0">Educational Background</p>
                    <div className="card-body row  ps-5 pe-0 gy-2 ">
                      {/* elem */}
                      <div className="card col-md-12">
                        <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                          <div className="col-10">
                            <button
                              className="btn btn-link w-100 text-start f-b txt-wide"
                              onClick={() => {
                                navigate("./elementary");
                              }}
                            >
                              Elementary
                            </button>
                          </div>
                          <div className="col-2">
                            {hasElem ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                size="2x"
                                color="yellowgreen"
                                className="ms-2 float-end"
                              />
                            ) : (
                              <button
                                className="btn btn-1 btn-sm w-100"
                                onClick={() => {
                                  navigate("./elementary");
                                }}
                              >
                                No data
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Junior HighSchool */}
                      <div className="card col-md-12">
                        <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                          <div className="col-10">
                            <button
                              className="btn btn-link w-100 text-start f-b txt-wide"
                              onClick={() => {
                                navigate("./junior-high/");
                              }}
                            >
                              Junior HighSchool
                            </button>
                          </div>
                          <div className="col-2">
                            {hasJunior ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                size="2x"
                                color="yellowgreen"
                                className="ms-2 float-end"
                              />
                            ) : (
                              <button
                                className="btn btn-1 btn-sm w-100"
                                onClick={() => {
                                  navigate("./junior-high/");
                                }}
                              >
                                No data
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Senior HighSchool */}
                      <div className="card col-md-12">
                        <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                          <div className="col-10">
                            <button
                              className="btn btn-link w-100 text-start f-b txt-wide"
                              onClick={() => {
                                navigate("./senior-high");
                              }}
                            >
                              Senior HighSchool
                            </button>
                          </div>
                          <div className="col-2">
                            {hasSenior ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                size="2x"
                                color="yellowgreen"
                                className="ms-2 float-end"
                              />
                            ) : (
                              <button
                                className="btn btn-1 btn-sm w-100"
                                onClick={() => {
                                  navigate("./senior-high");
                                }}
                              >
                                No data
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Vocational / Trade Course */}
                      <div className="card col-md-12">
                        <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                          <div className="col-10">
                            <button
                              className="btn btn-link w-100 text-start f-b txt-wide"
                              onClick={() => {
                                navigate("./vocational");
                              }}
                            >
                              Vocational / Trade Course{" "}
                              <span className="badge bg-secondary ms-2 p-2 ps-3 rounded-pill">
                                {totalVoc}
                              </span>
                            </button>
                          </div>
                          <div className="col-2">
                            {hasVocational ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                size="2x"
                                color="yellowgreen"
                                className="ms-2 float-end"
                              />
                            ) : (
                              <button
                                className="btn btn-1 btn-sm w-100"
                                onClick={() => {
                                  navigate("./vocational");
                                }}
                              >
                                No data
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* College */}
                      <div className="card col-md-12">
                        <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                          <div className="col-10">
                            <button
                              className="btn btn-link w-100 text-start f-b txt-wide"
                              onClick={() => {
                                navigate("./college");
                              }}
                            >
                              College
                              <span className="badge bg-secondary  ms-2 p-2 ps-3 rounded-pill">
                                {totalCol}
                              </span>
                            </button>
                          </div>
                          <div className="col-2">
                            {hasCollege ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                size="2x"
                                color="yellowgreen"
                                className="ms-2 float-end"
                              />
                            ) : (
                              <button
                                className="btn btn-1 btn-sm w-100"
                                onClick={() => {
                                  navigate("./college");
                                }}
                              >
                                No data
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Graduate Studies */}
                      <div className="card col-md-12">
                        <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                          <div className="col-10">
                            <button
                              className="btn btn-link w-100 text-start f-b txt-wide"
                              onClick={() => {
                                navigate("./graduate-studies");
                              }}
                            >
                              Graduate Studies
                              <span className="badge bg-secondary  ms-2 p-2 ps-3 rounded-pill">
                                {totalGrad}
                              </span>
                            </button>
                          </div>
                          <div className="col-2">
                            {hasGraduate ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                size="2x"
                                color="yellowgreen"
                                className="ms-2 float-end"
                              />
                            ) : (
                              <button
                                className="btn btn-1 btn-sm w-100"
                                onClick={() => {
                                  navigate("./graduate-studies");
                                }}
                              >
                                No data
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* civil */}
                  <div className="card col-md-12">
                    <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                      <div className="col-10">
                        <button
                          className="btn btn-link w-100 text-start f-b txt-wide"
                          onClick={() => {
                            navigate("./civil-services");
                          }}
                        >
                          Civil Service Eligibility
                          <span className="badge bg-secondary  ms-2 p-2 ps-3 rounded-pill">
                            {totalCivil}
                          </span>
                        </button>
                      </div>
                      <div className="col-2">
                        {hasCivil ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="2x"
                            color="yellowgreen"
                            className="ms-2 float-end"
                          />
                        ) : (
                          <button
                            className="btn btn-1 btn-sm w-100"
                            onClick={() => {
                              navigate("./civil-services");
                            }}
                          >
                            No data
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* work */}
                  <div className="card col-md-12">
                    <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                      <div className="col-10">
                        <button
                          className="btn btn-link w-100 text-start f-b txt-wide"
                          onClick={() => {
                            navigate("./work-experiences");
                          }}
                        >
                          Work Experience
                          <span className="badge bg-secondary  ms-2 p-2 ps-3 rounded-pill">
                            {totalWork}
                          </span>
                        </button>
                      </div>
                      <div className="col-2">
                        {hasWork ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="2x"
                            color="yellowgreen"
                            className="ms-2 float-end"
                          />
                        ) : (
                          <button
                            className="btn btn-1 btn-sm w-100"
                            onClick={() => {
                              navigate("./work-experiences");
                            }}
                          >
                            No data
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* certificates */}
                  <div className="card col-md-12">
                    <div className="card-body mt-2 row justify-content-between border-bottom border-danger">
                      <div className="col-10">
                        <button
                          className="btn btn-link w-100 text-start f-b txt-wide"
                          onClick={() => {
                            navigate("./certificates");
                          }}
                        >
                          Certificates{" "}
                          <span className="badge bg-secondary  ms-2 p-2 ps-3 rounded-pill">
                            {totalCerti}
                          </span>
                        </button>
                      </div>
                      <div className="col-2">
                        {hasCertificates ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="2x"
                            color="yellowgreen"
                            className="ms-2 float-end"
                          />
                        ) : (
                          <button
                            className="btn btn-1 btn-sm w-100"
                            onClick={() => {
                              navigate("./certificates");
                            }}
                          >
                            No data
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      .
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <form onSubmit={handleSubmitImage} encType="multipart/form-data">
                <ImageUpload
                  imageScrHandler={imageSrcHandler}
                  imageFileName="image"
                  isSetSrc="true"
                  setImgSrc={imageSrc}
                  isNoImage={isNoImage}
                  setImage={setImageFile}
                />
                <button className="btn btn-1 w-100"> Save</button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default UserDashboard;
