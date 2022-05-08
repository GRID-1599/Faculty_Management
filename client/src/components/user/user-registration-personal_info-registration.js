import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
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

  const imageSrcHandler = (e) => {
    setFileName(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  var datee = {
    curDT: new Date().toLocaleString(),
  };

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

  const addingFacultyToBeApprove = () => {
    const formData = new FormData();

    formData.append("employee_id", empNo);
    formData.append("email", email);
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

    console.log(formData);

    try {
      Axios.post(`http://localhost:3001/createToApproveFaculty`, formData).then(
        (response) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addingFacultyToBeApprove();
    // setVisible(true);
  };

  const handleSubmitForm = (e) => {
    // console.log("submit click");
    // addingFacultyToBeApprove();
  };

  return (
    <div className="personal-infos">
      <p className="text-uppercase  mt-lg-3 ms-4">Adding New Faculty</p>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="px-5 pb-3 registration-wrapper custom-scrollbar"
      >
        <div className="row mb-3">
          <div className="col-md-5">
            <div className="row">
              <div className="col-sm-12 mb-4">
                <ImageUpload
                  imageScrHandler={imageSrcHandler}
                  imageFileName="image"
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
                  className="form-control"
                  required
                  onChange={(e) => {
                    setEmpNo(e.target.value);
                  }}
                />
              </div>

              <div className="col-sm-12 mb-4">
                <label className="form-label"> Email * </label>
                <input
                  type="email"
                  className="form-control"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="col-sm-12 mb-4">
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
            <input
              type="text"
              name=""
              className="form-control"
              onChange={(e) => {
                setSex(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-sm-6 ">
            <label className="form-label">Civil Status * </label>
            <input
              type="text"
              name=""
              className="form-control"
              onChange={(e) => {
                setCivil(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="row mt-5 g-1 ">
          <div className="col-md-3 offset-md-9 ">
            <button className="btn btn-1 w-100" onClick={handleSubmitForm}>
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
