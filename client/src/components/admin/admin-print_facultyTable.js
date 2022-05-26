import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

import {
  dateTimeFormater,
  dateTimeFormater2,
  dateFormatStringSet,
} from "../functions/dateFunction";

const PrintFaculty = (props) => {
  const adminUsername = props.admin;
  const componentRef = useRef();

  const [facultyData, setFacultyData] = useState({});

  const [toLoad, setToLoad] = useState(false);
  const [toRender, setToRender] = useState(true);

  const [today, setToday] = useState(dateTimeFormater2(new Date()));

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Faculty_List [" + dateTimeFormater(new Date()) + "]",
    copyStyles: true,
  });

  const getPageMargins = () => {
    return `

    @page {  
        margin: .5in;
        counter-increment: page;
  content: counter(page);
  font-size: ".75rem"
    } 
    @media all {
        display:none;
    }
    @media print {
        .pagebreak{
            page-break-before:always;
            counter-increment: page;
  content: counter(page);
        }
    }
    `;
  };

  return (
    <div className="container">
      <div className="row">
        {toRender && (
          <button className="btn btn-1 w-100 " onClick={handlePrint}>
            Print
          </button>
        )}
      </div>
      <div className="row" style={{ display: "none" }}>
        <div className="container" ref={componentRef}>
          {/* header */}
          <style>{getPageMargins()}</style>
          <div className="row mb-3 align-items-center justify-content-center">
            <div className="col-auto ">
              <img
                src={`/resources/logo-dark.png`}
                alt=""
                style={{ width: "1in" }}
              />
            </div>
            <div className="col">
              <span className="h3 f-bold">Faculty Management</span>
              <br />
              <span className="h3 f-bold">Information System</span>
            </div>
          </div>
          <div className="row mb-2 row font-rem-55">
            <p className="mb-1">Printed by admin: {adminUsername}</p>
            <p className="mb-1">Date and time printed : {today}</p>
          </div>
          <div className="row mb-2 border-top py-2  font-rem-55">
            <p className="mb-1 ">College : {props.filtered.college}</p>
            <p className="mb-1 ">Rank : {props.filtered.rank}</p>
            <p className="mb-1 ">
              Appointment Status : {props.filtered.appoinmentStatus}
            </p>
            <p className="mb-1 ">Total Faculty Showed : {props.showing}</p>
            <p className="mb-1 ">Total of All Faculty : {props.totalShowing}</p>
          </div>
          <div className="row font-rem-55 m-0 ">
            <p className="header-bg mb-0">Faculty List </p>
            <div className="table-responsive m-0 p-0 ">
              <table className="table table-striped table-hover  mx-0 ">
                <caption>
                  {" "}
                  Showing {props.showing} of {props.totalShowing}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Employee #</th>
                    <th scope="col">Name</th>
                    <th scope="col">College</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Appointment Status</th>
                  </tr>
                </thead>
                <tbody>
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
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintFaculty;
