import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import RankPieChart from "./admin-faculty_pieChart-rank";
import StatusPieChart from "./admin-faculty_pieChart-status";

const AdminDashBoard = (props) => {
  const navigate = useNavigate();

  const [facultyTotal, setFacultyTotal] = useState(0);
  const [toApproveTotal, setToApproveTotal] = useState(0);

  const [toLoad1, setToLoad1] = useState(true);
  const [toLoad2, setToLoad2] = useState(true);

  const [toLoad, setToLoad] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/getFaculty").then((response) => {
      var total = Object.keys(response.data).length;
      if (total.toString().length === 1) {
        total = "0" + total;
      }
      setFacultyTotal(total);
      setToLoad1(false);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/getToApproveFaculties").then(
      (response) => {
        var total = Object.keys(response.data).length;
        if (total.toString().length === 1) {
          total = "0" + total;
        }
        setToApproveTotal(total);
        setToLoad2(false);
      }
    );
  }, []);

  const loader = (
    <div className="loader  mb-4 mt-5 text-center">
      <div className="wrapper  justify-content-center">
        <div
          className="spinner-border spinner-border-lg text-danger me-1"
          role="status"
        >
          <span className="visually-hidden">Checking...</span>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">Admin Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Summary</li>
        </ol>
        <div className="row mt-3 g-4">
          {/* for faculty list*/}
          <div
            className="col-md-5 admin-box me-md-3"
            onClick={() => {
              navigate("./faculty-list");
            }}
          >
            <div className="row">
              <div className="col-md-8 ">
                <p className="label mt-md-4 mb-0 text-center">Total Faculty</p>
              </div>
              <div className="col-md-4 ">
                {toLoad1 ? (
                  loader
                ) : (
                  <p className="label-number m-0 text-center">{facultyTotal}</p>
                )}
              </div>
            </div>
          </div>

          {/* for faculty to approve */}
          <div
            className="col-md-6 admin-box me-md-3"
            onClick={() => {
              navigate("./pending-approval-list");
            }}
          >
            <div className="row">
              <div className="col-md-8 ">
                <p className="align-middle label mb-0 mt-md-4 text-center">
                  Faculty To Approve
                </p>
              </div>

              <div className="col-md-4 ">
                {toLoad2 ? (
                  loader
                ) : (
                  <p className="label-number m-0 text-center">
                    {toApproveTotal}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 g-4 ">
          <Summary />
        </div>
      </div>
    </main>
  );
};

const Summary = (props) => {
  const [toLoad, setToLoad] = useState(true);
  const [facultyList, setFacultyList] = useState([]);
  const [college, setCollege] = useState(
    "College of Information and Communications Technology (CICT)"
  );
  const loaderList = (
    <div className="wrapper  justify-content-center">
      <div
        className="spinner-border spinner-border-sm text-danger me-1"
        role="status"
      >
        <span className="visually-hidden">Checking...</span>
      </div>
      <span className="text-muted text-center ms-2  mt-5">
        Fetching Data. Please wait...
      </span>
    </div>
  );

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

  useEffect(() => {
    Axios.get("http://localhost:3001/faculty/summary").then((response) => {
      setFacultyList(response.data);
      setToLoad(false);
    });
  }, []);

  return (
    <>
      <select
        className="form-select form-select-lg"
        aria-label="College"
        defaultValue={
          "College of Information and Communications Technology (CICT)"
        }
        onChange={(e) => {
          setCollege(e.target.value);
        }}
        required
      >
        {collegeList.map((rank) => {
          return (
            <option value={rank} key={rank}>
              {rank}
            </option>
          );
        })}
      </select>
      {toLoad
        ? loaderList
        : facultyList.map((obj) => {
            return (
              college === obj.college && (
                <div className="container" key={obj.college}>
                  <div className="row">
                    <p className="lead mb-2">{obj.college}</p>
                    <p className="lead">Total faculty : {obj.total}</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <RankPieChart datas={obj.rankSummary} />
                    </div>
                    <div className="col-md-6">
                      <StatusPieChart datas={obj.appointmentStatusSummary} />
                    </div>
                  </div>
                </div>
              )
            );
          })}
    </>
  );
};

export default AdminDashBoard;
