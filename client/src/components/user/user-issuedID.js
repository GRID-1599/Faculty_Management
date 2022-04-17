import React, { useState } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

function UserIsssuedId(params) {
  const [GSIS, setGSIS] = useState("");
  const [PAGIBIG, setPAGIBIG] = useState("");
  const [PHILHEALTH, setPHILHEALTH] = useState("03-251130423-6");
  const [TIN, setTIN] = useState("");
  const [SSS, setSSS] = useState("");

  const [btnEditName, setEditName] = useState(" Add / Edit IDs No.");

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
              <h1 className="mt-4">Faculty Profile </h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Issued Ids</li>
              </ol>
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
              <form className="row gy-2 " onSubmit={handleSubmit}>
                <div className="col-md-9">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtGSIS"
                      placeholder="GSIS ID No."
                      value={GSIS}
                      disabled={disable}
                      onChange={(e) => {
                        setGSIS(e.target.value);
                      }}
                    />
                    <label htmlFor="txtGSIS">GSIS ID No.</label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtPAGIBIG"
                      placeholder="PAG-IBIG ID No."
                      value={PAGIBIG}
                      disabled={disable}
                      onChange={(e) => {
                        setPAGIBIG(e.target.value);
                      }}
                    />
                    <label htmlFor="txtPAGIBIG">PAG-IBIG ID No.</label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtPHILHEALTH"
                      placeholder="PHILHEALTH No."
                      value={PHILHEALTH}
                      disabled={disable}
                      onChange={(e) => {
                        setPHILHEALTH(e.target.value);
                      }}
                    />
                    <label htmlFor="txtPHILHEALTH">PHILHEALTH No.</label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtSSS"
                      placeholder="SSS No."
                      value={SSS}
                      disabled={disable}
                      onChange={(e) => {
                        setSSS(e.target.value);
                      }}
                    />
                    <label htmlFor="txtSSS">SSS No.</label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="txtTIN"
                      placeholder="TIN No."
                      value={TIN}
                      disabled={disable}
                      onChange={(e) => {
                        setTIN(e.target.value);
                      }}
                    />
                    <label htmlFor="txtTIN">TIN No.</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-3 mb-3 offset-md-6 ">
                    {btnsaveHide ? (
                      <button className="btn btn-1 btn-sm w-100">
                        Save Changes
                      </button>
                    ) : null}
                  </div>
                </div>
              </form>
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

export default UserIsssuedId;
