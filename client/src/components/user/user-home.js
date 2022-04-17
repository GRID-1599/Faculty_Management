import React, { useState } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import default_user_image from "../../resources/users-profile/user-default-profile.png";

function UserHome(params) {
  const [empNo, setEmpNo] = useState("2018107987");
  const [email, setEmail] = useState("catudiochristianjude@gmail.com");
  const [mobileNo, setMobileNo] = useState("09973356903");
  const [fname, setFname] = useState("Christian Jude");
  const [mname, setMname] = useState("J");
  const [lname, setLname] = useState("Catudio");
  const [sname, setSname] = useState("");
  const [bday, setBday] = useState("1999-10-15");
  const [age, setAge] = useState("22");
  const [pBday, setPBday] = useState("Parada, Sta Maria");
  const [sex, setSex] = useState("Male");
  const [civil, setCivil] = useState("Single");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodType, setBloodType] = useState("");

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
    setDisable(true);
    setBtnEditHide(true);
    setBtnSaveHide(false);
  };

  return (
    <div className="user-home-main sb-nav-fixed">
      <TopNav />
      <div id="layoutSidenav">
        <SideNav />
        {/* CONTAINer */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-xxl px-4 float-start">
              <h1 className="mt-4">Faculty Profile </h1>
              <ol className="breadcrumb mb-6">
                <li className="breadcrumb-item active">Personal Information</li>
              </ol>
              <div className="row pe-4">
                <div className="col-xl-3 mb-4 order-xl-1 border-styled py-4">
                  <div className="row mb-4">
                    <div className="image-wrapper d-flex justify-content-center  ">
                      <div className="image border">
                        <img
                          // src="{default_user_image}"
                          src="https://th.bing.com/th/id/OIP.hhqab-_voCR-IcizNa1MKwHaG8?pid=ImgDet&rs=1"
                          alt="user-profile-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <button className="btn btn-1" style={{ maxWidth: "15rem" }}>
                      Upload Image
                    </button>
                  </div>
                </div>
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
                            placeholder="Middle Initial"
                            value={mname}
                            disabled={disable}
                            onChange={(e) => {
                              setMname(e.target.value);
                            }}
                          />
                          <label htmlFor="txtMiddleName">Middle Initial</label>
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
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Sample Footer</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
