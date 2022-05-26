import React, { useState, useEffect } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";
import ImageUpload from "./image_upload";

import default_user_image from "../../resources/users-profile/user-default-profile.png";

import Axios from "axios";

const UserHome = (props) => {
  const [empNo, setEmpNo] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [sname, setSname] = useState("");
  const [bday, setBday] = useState("");
  const [age, setAge] = useState("");
  const [pBday, setPBday] = useState("");
  const [sex, setSex] = useState("");
  const [civil, setCivil] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");

  const imageSrcHandler = (e) => {
    setFileName(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const employeeId = props.employeeId;

  const [toLoad, setToLoad] = useState(false);

  const loadingMessage = (
    <div className="mb-3">
      <div className="spinner-border  text-danger me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="h4 text-muted text-center  mt-5">Loading...</span>
    </div>
  );

  useEffect(() => {
    setToLoad(true);

    Axios.get(`http://localhost:3001/getFacultyById/${employeeId}`, {}).then(
      (response) => {
        // console.log(response.data);
        const faculty = response.data;
        // console.log(dateFormater(faculty.birth_date));

        setFname(faculty.first_name);
        setMname(faculty.middle_name);
        setLname(faculty.last_name);
        setSname(faculty.name_extension);
        setMname(faculty.middle_name);
        setBday(dateFormater(faculty.birth_date));
        setPBday(faculty.birth_place);
        setSex(faculty.sex);
        setAge(faculty.age);
        setCivil(faculty.civil_status);
        setBloodType(faculty.blood_type);
        setHeight(faculty.height);
        setWeight(faculty.weight);
        setImageSrc(faculty.image);

        setToLoad(false);
      }
    );
  }, []);

  const [btnEditName, setEditName] = useState("Edit Information");

  const [disable, setDisable] = useState(true);

  const [btnEditHide, setBtnEditHide] = useState(true);
  const [btnsaveHide, setBtnSaveHide] = useState(false);

  const onEditInfo = () => {
    setDisable(false);
    setBtnEditHide(false);
    setBtnSaveHide(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData();
  };

  const updateData = () => {
    const newData = {
      first_name: fname,
      middle_name: mname,
      name_extension: sname,
      last_name: lname,
      age: age,
      birth_date: bday,
      birth_place: pBday,
      sex: sex,
      civil_status: civil,
      height: height,
      weight: weight,
      blood_type: bloodType,
    };

    console.log(newData);
    Axios.post(
      `http://localhost:3001/updateFacultyPersonal/${employeeId}`,
      newData
    ).then((response) => {
      console.log(response.data);
      const faculty = response.data;
      // console.log(dateFormater(faculty.birth_date));

      setFname(faculty.first_name);
      setMname(faculty.middle_name);
      setLname(faculty.last_name);
      setSname(faculty.name_extension);
      setBday(dateFormater(faculty.birth_date));
      setPBday(faculty.birth_place);
      setSex(faculty.sex);
      setAge(faculty.age);
      setCivil(faculty.civil_status);
      setBloodType(faculty.blood_type);
      setHeight(faculty.height);
      setWeight(faculty.weight);

      console.log("updated");
      setDisable(true);
      setBtnEditHide(true);
      setBtnSaveHide(false);
    });
  };

  const dateFormater = (dateToBeFormat) => {
    let theDate = new Date(dateToBeFormat);
    // console.log("x " + theDate.getDate().toString().length);
    let formatted_date =
      theDate.getFullYear() +
      "-" +
      ((theDate.getMonth() + 1).toString().length <= 1
        ? "0" + (theDate.getMonth() + 1)
        : theDate.getMonth() + 1) +
      "-" +
      (theDate.getDate().toString().length <= 1
        ? "0" + theDate.getDate()
        : theDate.getDate());
    return formatted_date;
  };

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
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  const [isNoImage, setIsNoImage] = useState(false);

  const setImageFile = () => setIsNoImage(false);

  const imageComp = (
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
  );

  return (
    <main>
      <div className="container-xxl px-4 float-start">
        <h1 className="mt-4">Faculty Profile </h1>
        <ol className="breadcrumb mb-6">
          <li className="breadcrumb-item active">Personal Information</li>
        </ol>
        {toLoad ? (
          loadingMessage
        ) : (
          <div className="row pe-4">
            {/* <div className="col-xl-3 mb-4 order-xl-1 py-4">
            {imageSrc !== "" && imageComp}
          </div> */}
            <div className="col-xl-9 ">
              <div className="row">
                <div className="col-md-3 mb-3 ">
                  {btnEditHide ? (
                    <button
                      className="btn btn-1 btn-sm w-100"
                      onClick={() => {
                        onEditInfo();
                      }}
                    >
                      {btnEditName}
                    </button>
                  ) : null}
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3 gy-2">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="txtFirstName"
                        placeholder="First Name"
                        value={fname}
                        disabled={disable}
                        onChange={(e) => {
                          setFname(e.target.value);
                        }}
                      />
                      <label htmlFor="txtFirstName">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="txtMiddleName"
                        placeholder="Middle Name"
                        value={mname}
                        disabled={disable}
                        onChange={(e) => {
                          setMname(e.target.value);
                        }}
                      />
                      <label htmlFor="txtMiddleName">Middle Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="txtLName"
                        placeholder="Last Name"
                        value={lname}
                        disabled={disable}
                        onChange={(e) => {
                          setLname(e.target.value);
                        }}
                      />
                      <label htmlFor="txtLName">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="txtLName"
                        placeholder="Name Suffix"
                        value={sname}
                        disabled={disable}
                        onChange={(e) => {
                          setSname(e.target.value);
                        }}
                      />
                      <label htmlFor="txtLName">Name Suffix</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-3 gy-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control"
                        id="txtBday"
                        placeholder="Birthday"
                        value={bday}
                        disabled={disable}
                        onChange={(e) => {
                          setBday(e.target.value);
                        }}
                      />
                      <label htmlFor="txtBday">Birthday</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="txtAge"
                        placeholder="Age"
                        value={age}
                        disabled={disable}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                      />
                      <label htmlFor="txtAge">Age</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="txtPBday"
                        placeholder="Place of Birth"
                        value={pBday}
                        disabled={disable}
                        onChange={(e) => {
                          setPBday(e.target.value);
                        }}
                      />
                      <label htmlFor="txtPBday">Place of Birth</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="txtSex"
                        placeholder="sex"
                        value={sex}
                        disabled={disable}
                        onChange={(e) => {
                          setSex(e.target.value);
                        }}
                      />
                      <label htmlFor="txtSex">Sex</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="txtCivil"
                        placeholder="Civil Status"
                        value={civil}
                        disabled={disable}
                        onChange={(e) => {
                          setCivil(e.target.value);
                        }}
                      />
                      <label htmlFor="txtCivil">Civil Status</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="txtHeight"
                        placeholder="Height"
                        value={height}
                        disabled={disable}
                        onChange={(e) => {
                          setHeight(e.target.value);
                        }}
                      />
                      <label htmlFor="txtHeight">Height</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="txtWeight"
                        placeholder="Weight"
                        value={weight}
                        disabled={disable}
                        onChange={(e) => {
                          setWeight(e.target.value);
                        }}
                      />
                      <label htmlFor="txtWeight">Weight</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="txtBloodType"
                        placeholder="Blood Type"
                        value={bloodType}
                        disabled={disable}
                        onChange={(e) => {
                          setBloodType(e.target.value);
                        }}
                      />
                      <label htmlFor="txtBloodType">Blood Type</label>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-3 mb-3 ">
                    {btnsaveHide ? (
                      <button className="btn btn-1 btn-sm w-100">
                        Save Changes
                      </button>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default UserHome;
