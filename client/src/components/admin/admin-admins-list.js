import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const AdminList = (props) => {
  const navigate = new useNavigate();
  const [total, setTotal] = useState(0);
  var [showing, setShowing] = useState(0);
  const [listAdmin, setListAdmin] = useState([]);
  const [toLoad, setToLoad] = useState(false);

  const loader = (
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

  useEffect(() => {
    setToLoad(true);
    Axios.get("http://localhost:3001/admin/").then((response) => {
      setListAdmin(response.data);

      setTotal(Object.keys(response.data).length);
      setToLoad(false);
    });
  }, []);
  const noData = (
    <tr>
      <td colSpan={7} className="text-center">
        No information to display.
      </td>
    </tr>
  );

  return (
    <>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Admin List</li>
      </ol>
      <div className="row justify-content-between ">
        <div className="col-auto">
          <p>
            Showing {total} of {total}
          </p>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-1 btn-sm"
            onClick={() => {
              navigate("register");
            }}
          >
            Register New Admin
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {listAdmin.length === 0 && noData}
            {listAdmin.length !== 0 &&
              listAdmin.map((admin) => {
                return (
                  <tr key={admin.username}>
                    <td scope="row">{admin.username}</td>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {toLoad && loader}
    </>
  );
};

export default AdminList;
