import React, { useState, useEffect } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import Axios from "axios";

function UserJuniorHigh(props) {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [periodFrom, setPeriodFrom] = useState("");
  const [periodTo, setPeriodTo] = useState("");
  const [highest, setHighest] = useState("");
  const [yearGraduate, setYearGraduate] = useState("");
  const [honors, setHonors] = useState("");

  const [disable, setDisable] = useState(true);

  const [btnEditHide, setBtnEditHide] = useState(true);
  const [btnsaveHide, setBtnSaveHide] = useState(false);

  const setJuniorData = (faculty) => {
    setName(faculty.school_name);
    setEducation(faculty.basic_education);
    setPeriodFrom(faculty.period_from);
    setPeriodTo(faculty.period_to);
    setHighest(faculty.highest_level);
    setYearGraduate(faculty.year_graduate);
    setHonors(faculty.honor_recieved);
    setHasData(true);
    setIsToInput(false);
    setToLoad(false);
  };

  const [hasData, setHasData] = useState(false);
  const [isToInput, setIsToInput] = useState(false);
  const [toLoad, setToLoad] = useState(false);

  const employeeId = props.employeeId;

  const onEditInfo = () => {
    setDisable(false);
    setIsToInput(true);
    setBtnEditHide(false);
    setBtnSaveHide(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToLoad(true);
    if (hasData) {
      updateJunior();
    } else {
      addJunior();
    }
  };

  const addJunior = () => {
    const newData = {
      employee_id: employeeId,
      school_name: name,
      basic_education: education,
      period_from: periodFrom,
      period_to: periodTo,
      highest_level: highest,
      year_graduate: yearGraduate,
      honor_recieved: honors,
    };
    Axios.post(
      `http://localhost:3001/educ-junior-highschool/create`,
      newData
    ).then((response) => {
      const faculty = response.data;
      setJuniorData(faculty);
      setDisable(true);
      setBtnEditHide(true);
      setBtnSaveHide(false);
    });
  };

  const updateJunior = () => {
    const newData = {
      school_name: name,
      basic_education: education,
      period_from: periodFrom,
      period_to: periodTo,
      highest_level: highest,
      year_graduate: yearGraduate,
      honor_recieved: honors,
    };
    Axios.post(
      `http://localhost:3001/educ-junior-highschool/update/${employeeId}`,
      newData
    ).then((response) => {
      const faculty = response.data;
      setJuniorData(faculty);
      setDisable(true);
      setBtnEditHide(true);
      setBtnSaveHide(false);
    });
  };

  useEffect(() => {
    setToLoad(true);
    Axios.get(
      `http://localhost:3001/educ-junior-highschool/${employeeId}`,
      {}
    ).then((response) => {
      const faculty = response.data;
      if (faculty !== null) {
        setJuniorData(faculty);
      } else {
        setToLoad(false);
      }
    });
  }, []);

  const toThrow = () => {
    if (!hasData && !isToInput && !toLoad) {
      return <p className="lead">No Junior HighSchool Education Information</p>;
    } else if (isToInput) {
      return <p className="lead">Write "none" or "n/a" if none </p>;
    }
  };

  const loadingMessage = (
    <div className="">
      <div className="spinner-border text-danger me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="h4 text-muted text-center  mt-5">Loading...</span>
    </div>
  );

  return (
    <main>
      <div className="container-xl px-4 float-start">
        <h1 className="mt-4">Educational Background </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item ">Secondary</li>
          <li className="breadcrumb-item active">Junior High</li>
        </ol>
        {toLoad ? (
          loadingMessage
        ) : (
          <div className="container">
            {toThrow()}
            <form className="row gy-2" onSubmit={handleSubmit}>
              <div className="col-md-10">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtName"
                    placeholder="Name of School"
                    value={name}
                    disabled={disable}
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label htmlFor="txtName">Name of School</label>
                </div>
              </div>
              <div className="col-md-10">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtEduc"
                    placeholder="Basic Education/Degree"
                    value={education}
                    disabled={disable}
                    required
                    onChange={(e) => {
                      setEducation(e.target.value);
                    }}
                  />
                  <label htmlFor="txtEduc">Basic Education/Degree</label>
                </div>
              </div>
              <div className="col-md-10">
                <label>Period of Attendance</label>
              </div>
              <div className="col-md-5">
                <div className="form-floating">
                  <input
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    className="form-control"
                    id="txtPeriodTo"
                    placeholder="From"
                    value={periodFrom}
                    disabled={disable}
                    required
                    onChange={(e) => {
                      setPeriodFrom(e.target.value);
                    }}
                  />
                  <label htmlFor="txtPeriodTo">From</label>
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-floating">
                  <input
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    className="form-control"
                    id="txtTo"
                    placeholder="To"
                    value={periodTo}
                    disabled={disable}
                    required
                    onChange={(e) => {
                      setPeriodTo(e.target.value);
                    }}
                  />
                  <label htmlFor="txtTo">To</label>
                </div>
              </div>
              <div className="col-md-10">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txthighest"
                    placeholder="Highest Level ( if not graduated)"
                    value={highest}
                    disabled={disable}
                    required
                    onChange={(e) => {
                      setHighest(e.target.value);
                    }}
                  />
                  <label htmlFor="txthighest">
                    Highest Level ( if not graduated)
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    className="form-control"
                    id="txtGraduateYear"
                    placeholder="Year Graduate"
                    value={yearGraduate}
                    disabled={disable}
                    required
                    onChange={(e) => {
                      setYearGraduate(e.target.value);
                    }}
                  />
                  <label htmlFor="txtGraduateYear">Year Graduate</label>
                </div>
              </div>
              <div className="col-md-10">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtHonors"
                    placeholder="Scholarship/Academic Honors Recieved"
                    value={honors}
                    disabled={disable}
                    required
                    onChange={(e) => {
                      setHonors(e.target.value);
                    }}
                  />
                  <label htmlFor="txtHonors">
                    Scholarship/Academic Honors Recieved
                  </label>
                </div>
              </div>
              <div className="row mt-3 ">
                <div className="col-md-3 mb-3 offset-md-7 ">
                  {btnsaveHide ? (
                    <button className="btn btn-1 btn-sm w-100">Save </button>
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
                    {hasData
                      ? "Edit Junior High Education Information"
                      : "Input Junior High Education Information"}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default UserJuniorHigh;
