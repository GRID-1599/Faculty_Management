import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const AdminDashBoard = (props) => {
  const navigate = useNavigate();

  const [facultyTotal, setFacultyTotal] = useState(0);
  const [toApproveTotal, setToApproveTotal] = useState(0);

  const [toLoad1, setToLoad1] = useState(true);
  const [toLoad2, setToLoad2] = useState(true);

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
          <div
            className="col-md-5 mx-4 admin-box"
            onClick={() => {
              navigate("./faculty-list");
            }}
          >
            <div className="row">
              {toLoad1 ? (
                loader
              ) : (
                <p className="label-number mb-1 mt-2 text-center">
                  {facultyTotal}
                </p>
              )}
            </div>
            <div className="row">
              <p className="label text-center">Total Faculty</p>
            </div>
          </div>
          <div
            className="col-md-5 mx-4 admin-box"
            onClick={() => {
              navigate("./pending-approval-list");
            }}
          >
            <div className="row">
              {toLoad2 ? (
                loader
              ) : (
                <p className="label-number mb-1 mt-2 text-center">
                  {toApproveTotal}
                </p>
              )}
            </div>
            <div className="row">
              <p className="label text-center">Faculty To Approve</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashBoard;
