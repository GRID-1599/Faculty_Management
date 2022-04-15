import React, { useState } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

function UserHome(params) {
  const [empNo, setEmpNo] = useState("2018107987");
  const [email, setEmail] = useState("catudiochristianjude@gmail.com");
  const [mobileNo, setMobileNo] = useState("09973356903");
  const [fname, setFname] = useState("Christian Jude");
  const [mname, setMname] = useState("J");
  const [lname, setLname] = useState("Catudio");
  const [sname, setSname] = useState("");
  const [bday, setBday] = useState("");
  const [age, setAge] = useState("");
  const [pBday, setPBday] = useState("");
  const [sex, setSex] = useState("");
  const [civil, setCivil] = useState("");

  const [disable, setDisable] = useState(false);
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
              <div className="row">
                <div className="col-xl-3 mb-4 order-xl-1 ">
                  <div className="row mb-4">
                    <div className="image-wrapper d-flex justify-content-center  ">
                      <div className="image border"></div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <button className="btn btn-1" style={{ maxWidth: "15rem" }}>
                      Upload Image
                    </button>
                  </div>
                </div>
                <div className="col-xl-9">
                  <form action="">
                    <div className="row mb-3 gy-2">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="txtEmail"
                            placeholder="Email Address"
                            value={email}
                            disabled={disable}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          <label htmlFor="txtEmail">Email Address</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="txtEmail"
                            placeholder="Mobile No."
                            value={mobileNo}
                            disabled={disable}
                            onChange={(e) => {
                              setMobileNo(e.target.value);
                            }}
                          />
                          <label htmlFor="txtEmail">Mobile No.</label>
                        </div>
                      </div>
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
                            type="text"
                            className="form-control"
                            id="txtEmail"
                            placeholder="Email Address"
                            value={email}
                            disabled={disable}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          <label htmlFor="txtEmail">Email Address</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="txtEmail"
                            placeholder="Mobile No."
                            value={mobileNo}
                            disabled={disable}
                            onChange={(e) => {
                              setMobileNo(e.target.value);
                            }}
                          />
                          <label htmlFor="txtEmail">Mobile No.</label>
                        </div>
                      </div>

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
