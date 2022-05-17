import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ImageUpload from "./image_upload";

import Axios from "axios";

// import default_user_profile from ".././users-profile.png";

function RegistrationPersonalInfo(params) {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const [empNo, setEmpNo] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setLname] = useState("");
  const [sname, setSname] = useState("");
  const [bday, setBday] = useState("");
  const [age, setAge] = useState("");
  const [pBday, setPBday] = useState("");
  const [sex, setSex] = useState("");
  const [civil, setCivil] = useState("");
  const [fileName, setFileName] = useState("");
  const [college, setCollege] = useState("");
  const [rank, setRank] = useState("");
  const [appoinmentStatus, setAppoinmentStatus] = useState("");

  const imageSrcHandler = (e) => {
    setFileName(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  var datee = {
    curDT: new Date().toLocaleString(),
  };

  const rankList = [
    "Intructor I",
    "Intructor II",
    "Intructor III",
    "Assistant Professor I",
    "Assistant Professor II",
    "Assistant Professor III",
    "Assistant Professor IV",
    "Assiociate Professor I",
    "Assiociate Professor II",
    "Assiociate Professor III",
    "Assiociate Professor IV",
    "Assiociate Professor V",
    "Professor I",
    "Professor II",
    "Professor III",
    "Professor IV",
    "Professor V",
    "Professor VI",
    "College/University Proffessor",
  ];

  const collegeList = [
    "College of Architecture and Fine Arts (CAFA)",
    "College of Arts and Letters (CAL)",
    "College of Business Administration (CBA)",
    "College of Criminal Justice Education (CCJE)",
    "College of Hospitality and Tourism Management (CHTM)",
    "College of Information and Communications Technology (CICT)",
    "College of Industrial Technology (CIT)",
    "College of Law (CLaw)",
    "College of Nursing (CN)",
    "College of Engineering (COE)",
    "College of Education (COED)",
    "College of Science (CS)",
    "College of Sports, Exercise and Recreation (CSER)",
    "College of Social Sciences and Philosophy (CSSP)",
    "College of School (GS)",
  ];

  const appointmentStatusList = [
    "Permanent",
    "Temporary",
    "Coterminous",
    "Contractual",
    "Substitute",
    "Provisional",
  ];

  const sexList = ["Male", "Female"];

  const civilStatusList = [
    "Single",
    "Married",
    "Engaged",
    "Widowed",
    "Seperated",
    "Divorced",
  ];

  // console.log(datee.curDT);

  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }

    if (age_now > 1 && age_now < 150) {
      setAge(age_now);
    } else {
      setAge("");
    }
  };

  const addingFacultyToBeApprove = (e) => {
    const formData = new FormData();

    formData.append("employee_id", empNo);
    formData.append("email", email);
    formData.append("college", college);
    formData.append("rank", rank);
    formData.append("appointment_status", appoinmentStatus);
    formData.append("mobile_number", mobileNo);
    formData.append("first_name", fname);
    formData.append("middle_name", mname);
    formData.append("name_extension", sname);
    formData.append("last_name", lname);
    formData.append("age", age);
    formData.append("birth_date", bday);
    formData.append("birth_place", pBday);
    formData.append("sex", sex);
    formData.append("civil_status", civil);
    formData.append("date_created", new Date());
    formData.append("image", fileName);

    // console.log(formData);

    try {
      Axios.post(`http://localhost:3001/createToApproveFaculty`, formData).then(
        (response) => {
          console.log(response);
          e.preventDefault();
          setVisible(true);
        }
      );
    } catch (ex) {
      console.log(ex);
    }
  };

  const onClickFinish = () => {
    navigate("/");
  };

  const [isEmpNumberDuplicated, setIsEmpNumberDuplicated] = useState(false);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isNoImage, setIsNoImage] = useState(false);

  const setImageFile = () => setIsNoImage(false);
  // for emp number
  useEffect(() => {
    if (email !== "") {
      setTimeout(() => {
        Axios.get(`http://localhost:3001/faculty/find/email/${email}`).then(
          (response) => {
            setIsEmailDuplicated(response.data.isDuplicated);

            // console.log(response.data);
          }
        );
      }, 500);
    }
  }, [email]);

  // for emp email
  useEffect(() => {
    if (empNo !== "") {
      setTimeout(() => {
        Axios.get(
          `http://localhost:3001/faculty/find/employee-number/${empNo}`
        ).then((response) => {
          setIsEmpNumberDuplicated(response.data.isDuplicated);

          // console.log(response.data);
        });
      }, 500);
    }
  }, [empNo]);

  const imageRef = useRef(null);
  const numberRef = useRef(null);
  const emailRef = useRef(null);

  const validator = () => {
    if (!isEmpNumberDuplicated && !isEmailDuplicated && !isNoImage) {
      return true;
    } else {
      if (isEmpNumberDuplicated) {
        numberRef.current.scrollIntoView();
      } else if (isEmailDuplicated) {
        emailRef.current.scrollIntoView();
      } else if (isNoImage) {
        imageRef.current.scrollIntoView();
      }
      console.log(12);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator()) {
      addingFacultyToBeApprove(e);
      console.log("sending");
    }
  };

  return (
    <div className="personal-infos">
      <p className="text-uppercase  mt-lg-3 ms-4">Adding New Faculty</p>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="px-5 pb-3 registration-wrapper custom-scrollbar"
      >
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-sm-12 mb-4" ref={imageRef}>
                <ImageUpload
                  imageScrHandler={imageSrcHandler}
                  imageFileName="image"
                  isNoImage={isNoImage}
                  setImage={setImageFile}
                />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row pt-5">
              <div className="col-sm-12 mb-3">
                <label className="form-label"> Employee Number * </label>
                <input
                  type="text"
                  className={
                    isEmpNumberDuplicated
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  required
                  onChange={(e) => {
                    setEmpNo(e.target.value);
                  }}
                  ref={numberRef}
                />
                <div className="invalid-feedback">
                  Existing Employee Number found
                </div>
              </div>

              <div className="col-sm-12 mb-4">
                <label className="form-label"> College of * </label>
                <select
                  className="form-select"
                  aria-label="College"
                  defaultValue={""}
                  onChange={(e) => {
                    setCollege(e.target.value);
                  }}
                  required
                >
                  <option value="" disabled></option>
                  {collegeList.map((rank) => {
                    return (
                      <option value={rank} key={rank}>
                        {rank}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-sm-12 mb-4">
                <label className="form-label"> Rank </label>
                <select
                  className="form-select"
                  aria-label="Rank"
                  defaultValue={""}
                  onChange={(e) => {
                    setRank(e.target.value);
                  }}
                  required
                >
                  <option value="" disabled></option>
                  {rankList.map((rank) => {
                    return (
                      <option value={rank} key={rank}>
                        {rank}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-sm-12 mb-4">
                <label className="form-label"> Appointment Status </label>
                <select
                  className="form-select"
                  aria-label="Rank"
                  defaultValue={""}
                  onChange={(e) => {
                    setAppoinmentStatus(e.target.value);
                  }}
                  required
                >
                  <option value="" disabled></option>
                  {appointmentStatusList.map((rank) => {
                    return (
                      <option value={rank} key={rank}>
                        {rank}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-7 mb-4">
            <label className="form-label"> Email * </label>
            <input
              type="email"
              className={
                isEmailDuplicated ? "form-control is-invalid" : "form-control"
              }
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              ref={emailRef}
            />
            <div className="invalid-feedback">Existing Email found</div>
          </div>

          <div className="col-sm-5 mb-4">
            <label className="form-label"> Mobile No. * </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => {
                setMobileNo(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row mb-2 g-3 ">
          <div className="h5">Faculty Name</div>

          <div className="col-sm-7 ">
            <label className="form-label">First Name * </label>
            <input
              type="text"
              name=""
              className="form-control"
              required
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div className="col-sm-5 ">
            <label className="form-label">Middle Initial </label>
            <input
              type="text"
              name=""
              className="form-control"
              onChange={(e) => {
                setmname(e.target.value);
              }}
            />
          </div>
          <div className="col-sm-7 ">
            <label className="form-label">Last Name * </label>
            <input
              type="text"
              name=""
              className="form-control"
              onChange={(e) => {
                setLname(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-sm-5 ">
            <label className="form-label">Name Suffix </label>
            <input
              type="text"
              name=""
              className="form-control"
              onChange={(e) => {
                setSname(e.target.value);
              }}
            />
          </div>

          <legend> </legend>
          <div className="col-sm-6 ">
            <label className="form-label">Date of Birth * </label>
            <input
              type="date"
              name=""
              className="form-control"
              onChange={(e) => {
                setBday(e.target.value);
                calculate_age(e.target.value);
              }}
              required
            />
          </div>

          <div className="col-sm-6 ">
            <label className="form-label">Age *</label>
            <input
              type="number"
              name=""
              className="form-control"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              value={age}
              required
            />
          </div>

          <div className="col-sm-12 ">
            <label className="form-label">Place of Birth *</label>
            <input
              type="text"
              name=""
              className="form-control"
              onChange={(e) => {
                setPBday(e.target.value);
              }}
              required
            />
          </div>

          <div className="col-sm-6 ">
            <label className="form-label">Sex * </label>
            <select
              className="form-select"
              aria-label="Sex"
              defaultValue={""}
              onChange={(e) => {
                setSex(e.target.value);
              }}
              required
            >
              <option value="" disabled></option>
              {sexList.map((rank) => {
                return (
                  <option value={rank} key={rank}>
                    {rank}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-sm-6 ">
            <label className="form-label">Civil Status * </label>
            <select
              className="form-select"
              aria-label="Civil Status"
              defaultValue={""}
              onChange={(e) => {
                setCivil(e.target.value);
                console.log(e.target.value);
              }}
              required
            >
              <option value="" disabled></option>
              {civilStatusList.map((rank) => {
                return (
                  <option value={rank} key={rank}>
                    {rank}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row mt-4 ms-1">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              I hereby certify that the above details are true and accurate to
              the best of my knowledge
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>

        <div className="row mt-5 g-1 ">
          <div className="col-md-3 offset-md-9 ">
            <button
              className="btn btn-1 w-100"
              onClick={() => {
                setIsNoImage(fileName === "");
                if (fileName === "") {
                  imageRef.current.scrollIntoView();
                  // alert("No uploaded Image");
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <Modal show={visible} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for filling out the form. </p> Please wait for the admin
          to verify your given information.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClickFinish}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegistrationPersonalInfo;
