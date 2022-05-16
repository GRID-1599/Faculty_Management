import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faAddressCard,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import emailjs from "emailjs-com";

import { dateFormatStringSet } from "../functions/dateFunction";

import Axios from "axios";

const ToApproveFacultyList = (props) => {
  const [total, setTotal] = useState(0);
  var [showing, setShowing] = useState(0);
  const [listFaculty, setListFaculty] = useState([]);
  const [listGet, setListGet] = useState([]);
  const [toShowListFaculty, setToShowListFaculty] = useState([]);
  const [toTable, setToTable] = useState(true);

  const [college, setCollege] = useState("All");
  const [rank, setRank] = useState("All");
  const [appoinmentStatus, setAppoinmentStatus] = useState("All");

  const rankList = [
    "Intructor I",
    "Intructor II",
    "Intructor III",
    "Assistant Professor I",
    "Assistant Professor II",
    "Assistant Professor III",
    "Assistant Professor IV",
    "Assiociate Professor I",
    "Assiociate Professor II",
    "Assiociate Professor III",
    "Assiociate Professor IV",
    "Assiociate Professor V",
    "Professor I",
    "Professor II",
    "Professor III",
    "Professor IV",
    "Professor V",
    "Professor VI",
    "College/University Proffessor",
  ];

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
    "College of Engineering (COE",
    "College of Education (COED)",
    "College of Science (CS)",
    "College of Sports, Exercise and Recreation (CSER)",
    "College of Social Sciences and Philosophy (CSSP)",
    "College of School (GS)",
  ];

  const appointmentStatusList = [
    "Permanent",
    "Temporary",
    "Coterminous",
    "Contractual",
    "Substitute",
    "Provisional",
  ];
  useEffect(() => {
    // setListFaculty([]);
    Axios.get("http://localhost:3001/getToApproveFaculties").then(
      (response) => {
        // theAllList = ;
        console.log(response.data);
        // setListFaculty([]);
        setListGet(response.data);

        setTotal(Object.keys(response.data).length);
      }
    );
  }, []);

  useEffect(() => {
    // setListFaculty(listGet);
    setShowing(0);
    var totalShow = 0;
    setListFaculty([]);
    listGet
      .filter((faculty) => {
        if (college === "All" && rank === "All" && appoinmentStatus === "All") {
          return faculty;
        } else if (
          college !== "All" &&
          rank === "All" &&
          appoinmentStatus === "All"
        ) {
          if (faculty.college === college) {
            return faculty;
          }
        } else if (
          college !== "All" &&
          rank !== "All" &&
          appoinmentStatus === "All"
        ) {
          console.log("search * college rank x");
          if (faculty.college === college && faculty.rank === rank) {
            return faculty;
          }
        } else if (
          college === "All" &&
          rank !== "All" &&
          appoinmentStatus === "All"
        ) {
          console.log("search *x rank x");
          if (faculty.rank === rank) {
            return faculty;
          }
        } else if (
          college === "All" &&
          rank !== "All" &&
          appoinmentStatus !== "All"
        ) {
          console.log("search * x rank appS");
          if (
            faculty.rank === rank &&
            faculty.appointment_status === appoinmentStatus
          ) {
            return faculty;
          }
        } else if (
          college === "All" &&
          rank === "All" &&
          appoinmentStatus !== "All"
        ) {
          console.log("search x x appS");
          if (faculty.appointment_status === appoinmentStatus) {
            return faculty;
          }
        } else if (
          college !== "All" &&
          rank === "All" &&
          appoinmentStatus !== "All"
        ) {
          console.log("search college x apps");
          if (
            faculty.college === college &&
            faculty.appointment_status === appoinmentStatus
          ) {
            return faculty;
          }
        } else if (
          college !== "All" &&
          rank !== "All" &&
          appoinmentStatus !== "All"
        ) {
          console.log("search college rank appS");
          if (
            faculty.college === college &&
            faculty.rank === rank &&
            faculty.appointment_status === appoinmentStatus
          ) {
            return faculty;
          }
        }
      })
      .map((data) => {
        //   console.log(data);
        totalShow++;
        setShowing(totalShow);
        setListFaculty((listFaculty) => [...listFaculty, data]);
        //   setListFaculty(listFaculty.concat(data));
      });
    // setShowing(Object.keys(listFaculty).length);
  }, [listGet, college, rank, appoinmentStatus]);

  const toBeSearch = () => {};

  //   useEffect(() => {
  //     console.log(college, rank, appoinmentStatus);
  //     setToShowListFaculty(listFaculty);
  //     console.log(toShowListFaculty);
  //   }, [listFaculty, college, rank, appoinmentStatus]);

  return (
    <>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">For Approval List</li>
      </ol>
      <div className="row">
        <div className="col-sm-3 mb-2">
          <label className="form-label text-muted">
            <small>College</small>
          </label>
          <select
            className="form-select form-select-sm"
            aria-label="College"
            defaultValue={"All"}
            onChange={(e) => {
              setCollege(e.target.value);
            }}
            required
          >
            <option value="All">All</option>
            {collegeList.map((rank) => {
              return (
                <option value={rank} key={rank}>
                  {rank}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-sm-3 mb-2">
          <label className="form-label text-muted">
            {" "}
            <small>Rank</small>{" "}
          </label>
          <select
            className="form-select form-select-sm"
            aria-label="Rank"
            defaultValue={"All"}
            onChange={(e) => {
              setRank(e.target.value);
            }}
            required
          >
            <option value="All">All</option>
            {rankList.map((rank) => {
              return (
                <option value={rank} key={rank}>
                  {rank}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-sm-3 mb-2">
          <label className="form-label text-muted">
            {" "}
            <small>Appointment Status </small>
          </label>
          <select
            className="form-select form-select-sm"
            aria-label="Rank"
            defaultValue={"All"}
            onChange={(e) => {
              setAppoinmentStatus(e.target.value);
            }}
            required
          >
            <option value="All">All</option>
            {appointmentStatusList.map((rank) => {
              return (
                <option value={rank} key={rank}>
                  {rank}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="row justify-content-between ">
        <div className="col-auto">
          <p>
            Showing {showing} of {total}
          </p>
        </div>
        <div className="col-auto">
          <button
            className={
              toTable
                ? "btn btn-sm btn-danger mx-1"
                : "btn btn-sm btn-outline-danger mx-1"
            }
            onClick={() => {
              setToTable(true);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faTable} />
          </button>
          <button
            className={
              !toTable
                ? "btn btn-sm btn-danger mx-1"
                : "btn btn-sm btn-outline-danger mx-1"
            }
            onClick={() => {
              setToTable(false);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faAddressCard} />
          </button>
        </div>
      </div>
      <div className="row justify-content-between  mb-3">
        <div className="col-md-2">
          <button className="btn btn-1 w-100">Print</button>
        </div>
        <div className="col-md-2">
          <button className="btn btn-outline-danger w-100">Refresh</button>
        </div>
      </div>

      {!toTable && <CardList listFaculty={listFaculty} />}
      {toTable && <TableList listFaculty={listFaculty} />}
    </>
  );
};

const FacultyCard = (props) => {
  const navigate = useNavigate();

  const onClickView = (id) => {
    navigate(`${id}`);
  };
  // console.log(props.facultyData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showView, setShowView] = useState(false);
  const handleCloseView = () => setShowView(false);
  const handleShowView = () => setShowView(true);

  const imgSrc = props.facultyData.image;

  return (
    <div
      className="card col-sm-4 py-3  border-shadow"
      style={{ width: "34rem", height: "fit-content", minHeight: "15rem" }}
    >
      <div className="row g-0">
        <div className="col-md-4 px-3">
          <img
            src={`/facultyImages/${imgSrc}`}
            className="  border"
            // src="https://th.bing.com/th/id/OIP.hhqab-_voCR-IcizNa1MKwHaG8?pid=ImgDet&rs=1"
            alt={imgSrc}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <span className="text-muted">Employee No :</span>
              {props.facultyData.employee_id}
            </h5>
            <p className="card-text">
              <small className="fw-bold">Name:</small>
              <br />
              <span>
                {" "}
                {props.facultyData.first_name} {props.facultyData.middle_name}{" "}
                {props.facultyData.last_name} {props.facultyData.name_extension}
              </span>
              <br />
              <small className="fw-bold">College: </small>
              <br />
              <span>{props.facultyData.college}</span>
              <br />
              <small className="fw-bold">Rank:</small>
              <br />
              <span> {props.facultyData.rank}</span>
              <br />
              <small className="fw-bold">Appointment Status:</small>
              <br />
              <span>{props.facultyData.appointment_status}</span>
              <br />
              <small className="fw-bold">Email:</small>
              <br />
              <span> {props.facultyData.email}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3 px-2">
        <div className="col mb-3">
          <small className="text-muted">
            Date created - {dateFormatStringSet(props.facultyData.date_created)}
          </small>
        </div>
        <div className="col-md-5">
          <button
            className="btn btn-1 btn-sm float-end w-100 "
            onClick={() => {
              onClickView(props.facultyData.employee_id);
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  const noData = <p className="text-center">No information to display</p>;
  return (
    <div className="row mx-2 g-5 justify-content-around">
      {props.listFaculty.length === 0 && noData}
      {props.listFaculty.length !== 0 &&
        props.listFaculty.map((faculty) => {
          return <FacultyCard facultyData={faculty} key={faculty._id} />;
        })}
    </div>
  );
};

const TableList = (props) => {
  const navigate = useNavigate();

  const loadingMessage = (
    <tr className="wrapper">
      <td scope="row">
        <div className="spinner-border text-danger me-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="h3 text-muted text-center  mt-5">Loading...</span>
      </td>
    </tr>
  );

  const noData = (
    <tr>
      <td colSpan={7} className="text-center">
        No information to display.
      </td>
    </tr>
  );

  const onClickView = (id) => {
    navigate(`${id}`);
  };
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Employee #</th>
            <th scope="col">Name</th>
            <th scope="col">College</th>
            <th scope="col">Rank</th>
            <th scope="col">Appointment Status</th>
            <th scope="col">Date Created</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.listFaculty.length === 0 && noData}
          {props.listFaculty.length !== 0 &&
            props.listFaculty.map((faculty) => {
              return (
                <tr key={faculty.employee_id}>
                  <td scope="row">{faculty.employee_id}</td>
                  <td>
                    {faculty.first_name} {faculty.middle_name}{" "}
                    {faculty.last_name} {faculty.name_extension}
                  </td>
                  <td>{faculty.college}</td>
                  <td>{faculty.rank}</td>
                  <td>{faculty.appointment_status}</td>
                  <td>{dateFormatStringSet(faculty.date_created)}</td>
                  <td className="align-middle">
                    <button
                      className="btn btn-1 btn-sm float-end "
                      onClick={() => {
                        onClickView(faculty.employee_id);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ToApproveFacultyList;
