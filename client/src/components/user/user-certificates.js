import React, { useState } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

function UserCertificates(params) {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [hoursNo, setHoursNo] = useState("");
  const [LD_type, setLD_type] = useState("");
  const [conductedBy, setConductedBy] = useState("");
  const [certificateSrc, setCertificateSrc] = useState("");

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
            <div className="container-xl px-4 float-start">
              <h1 className="mt-4">Certificates </h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Learning and Development (LD) Intervention / Training Programs
                  Attended Certificates{" "}
                </li>
              </ol>

              <div className="row ">
                <div className="col-md-2 offset-md-8 mb-3 ">
                  <button className="btn btn-1 btn-sm w-100">
                    Add New
                    <FontAwesomeIcon
                      icon={faPlus}
                      color="white"
                      className="ms-2"
                    />
                  </button>
                </div>
              </div>

              <form className="row gy-2" onSubmit={handleSubmit}>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtTitle"
                      placeholder="Certificate Title"
                      value={title}
                      disabled={disable}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <label htmlFor="txtTitle">
                      Title of Learning and Development Interventions / Training
                      Programs
                    </label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtType"
                      placeholder="Type"
                      value={type}
                      disabled={disable}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    />
                    <label htmlFor="txtType">Type</label>
                  </div>
                </div>

                <div className="col-md-10">
                  <label>Inclusive Dates</label>
                </div>
                <div className="col-md-5">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      id="txtDateFrom"
                      placeholder="Start From"
                      value={dateFrom}
                      disabled={disable}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                      }}
                    />
                    <label htmlFor="txtDateFrom">Start From</label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      id="txtDateTo"
                      placeholder="End To"
                      value={dateTo}
                      disabled={disable}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                      }}
                    />
                    <label htmlFor="txtDateTo">End To</label>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="form-floating">
                    <input
                      type="txt"
                      className="form-control"
                      id="txtHoursNum"
                      placeholder="Number of Hours"
                      value={hoursNo}
                      disabled={disable}
                      onChange={(e) => {
                        setHoursNo(e.target.value);
                      }}
                    />
                    <label htmlFor="txtHoursNum">Number of Hours</label>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="txt"
                      className="form-control"
                      id="txtldtype"
                      placeholder="Type of Learning and Development"
                      value={LD_type}
                      disabled={disable}
                      onChange={(e) => {
                        setLD_type(e.target.value);
                      }}
                    />
                    <label htmlFor="txtldtype">
                      Type of Learning and Development
                      (Managerial/Supervisory/Technical)
                    </label>
                  </div>
                </div>

                <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtsponsor"
                      placeholder="Conducted / Sponsored by"
                      value={conductedBy}
                      disabled={disable}
                      onChange={(e) => {
                        setConductedBy(e.target.value);
                      }}
                    />
                    <label htmlFor="txtsponsor">Conducted / Sponsored by</label>
                  </div>
                </div>

                {/* <div className="col-md-10">
                  <div className="form-floating">
                    <input
                      type="file"
                      className="form-control"
                      id="txtsponsor"
                      placeholder="Certificate"
                      value={conductedBy}
                      disabled={disable}
                      onChange={(e) => {
                        setConductedBy(e.target.value);
                      }}
                    />
                    <label htmlFor="txtsponsor">
                      Certificate
                    </label>
                  </div> 
                </div>*/}

                <div className="row mt-3 ">
                  <div className="col-md-3 mb-3 offset-md-7 ">
                    {btnsaveHide ? (
                      <button className="btn btn-1 btn-sm w-100">
                        Save Changes
                      </button>
                    ) : null}
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-10 mb-3 ">
                  {btnEditHide ? (
                    <button
                      className="btn btn-1 btn-sm w-100"
                      onClick={() => {
                        onEditInfo();
                      }}
                    >
                      Edit Certificate Information
                    </button>
                  ) : null}
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

export default UserCertificates;
