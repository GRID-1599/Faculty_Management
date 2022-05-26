import React, { useState, useEffect } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import Axios from "axios";

function UserIsssuedId(props) {
  const [GSIS, setGSIS] = useState("");
  const [PAGIBIG, setPAGIBIG] = useState("");
  const [PHILHEALTH, setPHILHEALTH] = useState("");
  const [TIN, setTIN] = useState("");
  const [SSS, setSSS] = useState("");

  const [btnEditName, setEditName] = useState(" Add / Edit ID's Number");

  const [disable, setDisable] = useState(true);

  const [btnEditHide, setBtnEditHide] = useState(true);
  const [btnsaveHide, setBtnSaveHide] = useState(false);
  const [toLoad, setToLoad] = useState(false);

  const loadingMessage = (
    <div className="mb-3">
      <div className="spinner-border  text-danger me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="h4 text-muted text-center  mt-5">Loading...</span>
    </div>
  );

  const onEditInfo = () => {
    setDisable(false);
    setBtnEditHide(false);
    setBtnSaveHide(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log();
    if (hasData) {
      updateIDs();
    } else {
      addIDs();
    }
  };

  const [hasData, setHasData] = useState(false);
  const employeeId = props.employeeId;

  const addIDs = () => {
    const newData = {
      employee_id: employeeId,
      GSIS_num: GSIS,
      PAGIBIG_num: PAGIBIG,
      PHILHEALTH_num: PHILHEALTH,
      SSS_num: SSS,
      TIN_num: TIN,
    };
    Axios.post(`http://localhost:3001/issued-id/create`, newData).then(
      (response) => {
        const faculty = response.data;
        setGSIS(faculty.GSIS_num);
        setPAGIBIG(faculty.PAGIBIG_num);
        setPHILHEALTH(faculty.PHILHEALTH_num);
        setSSS(faculty.SSS_num);
        setTIN(faculty.TIN_num);

        setHasData(true);

        setDisable(true);
        setBtnEditHide(true);
        setBtnSaveHide(false);
      }
    );
  };

  const updateIDs = () => {
    const newData = {
      GSIS_num: GSIS,
      PAGIBIG_num: PAGIBIG,
      PHILHEALTH_num: PHILHEALTH,
      SSS_num: SSS,
      TIN_num: TIN,
    };
    Axios.post(
      `http://localhost:3001/issued-id/update/${employeeId}`,
      newData
    ).then((response) => {
      const faculty = response.data;
      setGSIS(faculty.GSIS_num);
      setPAGIBIG(faculty.PAGIBIG_num);
      setPHILHEALTH(faculty.PHILHEALTH_num);
      setSSS(faculty.SSS_num);
      setTIN(faculty.TIN_num);

      setHasData(true);

      setDisable(true);
      setBtnEditHide(true);
      setBtnSaveHide(false);
    });
  };

  useEffect(() => {
    setToLoad(true);
    Axios.get(`http://localhost:3001/issued-id/${employeeId}`, {}).then(
      (response) => {
        // console.log(response.data);
        const faculty = response.data;
        // console.log(dateFormater(faculty.birth_date));

        if (faculty !== null) {
          setGSIS(faculty.GSIS_num);
          setPAGIBIG(faculty.PAGIBIG_num);
          setPHILHEALTH(faculty.PHILHEALTH_num);
          setSSS(faculty.SSS_num);
          setTIN(faculty.TIN_num);
          setHasData(true);
          setToLoad(false);
        } else {
          setEditName("Add ID's Number");
          setToLoad(false);
        }
      }
    );
  }, []);

  return (
    <main>
      <div className="container-xl px-4 float-start">
        <h1 className="mt-4">Faculty Profile </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Issued Ids</li>
        </ol>
        {toLoad ? (
          loadingMessage
        ) : (
          <div className="container">
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                    onChange={(e) => {
                      setTIN(e.target.value);
                    }}
                  />
                  <label htmlFor="txtTIN">TIN No.</label>
                </div>
              </div>
              <div className="row mt-3">
                {btnsaveHide && <p>Please write "n/a" or "none" if none </p>}
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
        )}
      </div>
    </main>
  );
}

export default UserIsssuedId;
