import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";

import {
  dateTimeFormater,
  dateTimeFormater2,
  dateFormatStringSet,
} from "../functions/dateFunction";
const Example = (props) => {
  const componentRef = useRef();
  const employeeId = props.employeeId;
  // const employeeId = props;

  const [facultyData, setFacultyData] = useState({});
  const [showPrintOpt, setShowPrintOpt] = useState(false);
  const handleClosePrintOpt = () => setShowPrintOpt(false);
  const handleShowPrintOpt = () => setShowPrintOpt(true);
  const [toLoad, setToLoad] = useState(false);
  const [toRender, setToRender] = useState(false);

  const [isPrintPersonalInfo, setIsPrintPersonalInfo] = useState(false);
  const [isPrintEducBG, setIsPrintEducBG] = useState(false);
  const [isPrintCivil, setIsPrintCivil] = useState(false);
  const [isPrintWorkExp, setIsPrintWorkExp] = useState(false);
  const [isPrintCert, setIsPrintCert] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "2018107987 [" + dateTimeFormater(new Date()) + "]",
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
  const [today, setToday] = useState(dateTimeFormater2(new Date()));

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       // Creates an interval which will update the current data every minute
  //       // This will trigger a rerender every component that uses the useDate hook.
  //       setToday(new Date());
  //     }, 60 * 1000);
  //     return () => {
  //       clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
  //     };
  //   }, []);

  useEffect(() => {
    // console.log(facultyData === null);
    setToLoad(true);
    Axios.get(`http://localhost:3001/faculty/get-all/${employeeId}`, {}).then(
      (response) => {
        const facultyData = response.data;
        setFacultyData(facultyData);
        setToRender(true);
        setToLoad(false);
        // console.log(JSON.stringify(facultyData));
      }
    );
  }, []);

  //   <div className="pagebreak"> </div>
  const toLoadMessage = (
    <div className="">
      <div className="spinner-border text-danger me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="h3 text-muted text-center  mt-5">
        Fetching Faculty Data...
      </span>
    </div>
  );

  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">Faculty </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">To Print</li>
        </ol>
        <div className="row">
          <div className="col-md-8 order-1">
            {toLoad && toLoadMessage}
            {/* to be print */}
            {toRender && (
              <div className="container">
                <div style={{ display: "" }} className="border pt-4">
                  <style>{getPageMargins()}</style>

                  <div className="container" ref={componentRef}>
                    {/* header */}
                    <div className="row mb-3 align-items-center justify-content-center">
                      <div className="col-auto ">
                        <img
                          src={`/resources/logo-dark.png`}
                          alt=""
                          style={{ width: "1in" }}
                        />
                      </div>
                      <div className="col">
                        <span className="h3 f-bold">Faculty Information</span>
                        <br />
                        <span className="h3 f-bold">Management System</span>
                      </div>
                    </div>
                    {/* print details */}
                    <div className="row mb-3 ">
                      <div className="col">
                        <span className="txt-sm">Printed by : </span>
                        <span className=" txt-sm">Faculty itself</span>
                        <br />
                        <span className="txt-sm">Date and time printed : </span>
                        <span className=" txt-sm">{today}</span>
                        <br />
                      </div>
                    </div>
                    {/* faculty data */}
                    <div className="row mb-3 align-items-center">
                      <div className="col-4 ">
                        <img
                          src={
                            `/facultyImages/` + facultyData.personal_info.image
                          }
                          alt=""
                          className="float-end"
                          style={{ width: "2in" }}
                        />
                      </div>
                      <div className="col-8 ">
                        <span className=" f-b txt-sm txt-sm">
                          Employee Number :
                        </span>
                        <span className=" f-b txt-sm">{employeeId}</span>
                        <br />
                        <span className="f-b txt-sm">Name : </span>
                        <span className="txt-sm">
                          {facultyData.personal_info.first_name}
                          {facultyData.personal_info.middle_name}
                          {facultyData.personal_info.last_name}
                          {facultyData.personal_info.name_extension}
                        </span>
                        <br />
                        <span className="f-b txt-sm">College : </span>
                        <span className="txt-sm">
                          {facultyData.personal_info.college}
                        </span>
                        <br />
                        <span className="f-b txt-sm">Rank : </span>
                        <span className="txt-sm">
                          {facultyData.personal_info.rank}
                        </span>
                        <br />
                        <span className="f-b txt-sm">Appoinment Status : </span>
                        <span className="txt-sm">
                          {facultyData.personal_info.appointment_status}
                        </span>
                        <br />
                        <span className="f-b txt-sm">Email : </span>
                        <span className="txt-sm">
                          {facultyData.personal_info.email}
                        </span>
                        <br />
                      </div>
                    </div>

                    {/* faculty personal */}
                    {isPrintPersonalInfo && (
                      <PersonalData facultyData={facultyData} />
                    )}

                    {/* education EducationalBackGround */}
                    {isPrintEducBG && (
                      <EducationalBackGround facultyData={facultyData} />
                    )}

                    {/* CivilStatus */}
                    {isPrintCivil && <CivilStatus facultyData={facultyData} />}

                    {/* WorkExp */}
                    {isPrintWorkExp && <WorkExp facultyData={facultyData} />}

                    {/* Certificates */}
                    {isPrintCert && <Certificates facultyData={facultyData} />}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-4 ">
            <div className="container pt-5 sticky-md-top">
              <p className="mt-3">Please select the following to be print.</p>
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-outline-danger btn-sm  w-100 mb-3"
                    type="checkbox"
                    onClick={() => {
                      setIsPrintPersonalInfo(true);
                      setIsPrintEducBG(true);
                      setIsPrintCivil(true);
                      setIsPrintWorkExp(true);
                      setIsPrintCert(true);
                    }}
                  >
                    Select All
                  </button>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="personalInfoPrint"
                      checked={isPrintPersonalInfo}
                      onChange={() => {
                        setIsPrintPersonalInfo(!isPrintPersonalInfo);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="personalInfoPrint"
                    >
                      Personal Information
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="educInfoPrint"
                      checked={isPrintEducBG}
                      onChange={() => {
                        setIsPrintEducBG(!isPrintEducBG);
                      }}
                    />
                    <label className="form-check-label" htmlFor="educInfoPrint">
                      Educational Background
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="civilInfoPrint"
                      checked={isPrintCivil}
                      onChange={() => {
                        setIsPrintCivil(!isPrintCivil);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="civilInfoPrint"
                    >
                      Civil Service Eligibility
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="workInfoPrint"
                      checked={isPrintWorkExp}
                      onChange={() => {
                        setIsPrintWorkExp(!isPrintWorkExp);
                      }}
                    />
                    <label className="form-check-label" htmlFor="workInfoPrint">
                      Work Experience
                    </label>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="certInfoPrint"
                      checked={isPrintCert}
                      onChange={() => {
                        setIsPrintCert(!isPrintCert);
                      }}
                    />
                    <label className="form-check-label" htmlFor="certInfoPrint">
                      Certificates
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                {toRender && (
                  <button className="btn btn-1 w-100 " onClick={handlePrint}>
                    Print
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const PersonalData = (props) => {
  const facultyData = props.facultyData;
  return (
    <div className="row  mb-3 align-items-center">
      <p className="header-bg">Personal Information</p>
      <div className="row custom-wrapper">
        <div className="col">
          <span>First Name : </span>
          <span>{facultyData.personal_info.first_name}</span>
          <br />
          <span>Middle Initial : </span>
          <span>{facultyData.personal_info.middle_name}</span>
          <br />
          <span>Last Name : </span>
          <span>{facultyData.personal_info.last_name}</span>
          <br />
          <span>Name Suffix : </span>
          <span>{facultyData.personal_info.name_extension}</span>
          <br />
          <span>Birthday : </span>
          <span>
            {dateFormatStringSet(facultyData.personal_info.birth_date)}
          </span>
          <br />
          <span>Age : </span>
          <span>{facultyData.personal_info.age}</span> <br />
        </div>
        <div className="col">
          <span>Birth place : </span>
          <span>{facultyData.personal_info.birth_place}</span>
          <br />
          <span>Sex : </span>
          <span>{facultyData.personal_info.sex}</span> <br />
          <span>Civil Status : </span>
          <span>{facultyData.personal_info.civil_status}</span>
          <br />
          <span>Height : </span>
          <span>{facultyData.personal_info.height}</span>
          <br />
          <span>Weight : </span>
          <span>{facultyData.personal_info.weight}</span>
          <br />
          <span>Blood Type : </span>
          <span>{facultyData.personal_info.blood_type}</span>
          <br />
        </div>
      </div>
      <div className="mt-3 custom-wrapper">
        <span>Contact </span> <br />
        <span>Mobile number : </span>
        <span>{facultyData.personal_info.mobile_number}</span>
        <br />
        <span>Telephone number : </span>
        <span>{facultyData.personal_info.telephone_number}</span>
        <br />
        <span>Email Address: </span>
        <span>{facultyData.personal_info.email}</span>
        <br />
        <span>Aternative Email Address : </span>
        <span>{facultyData.personal_info.alternative_email}</span>
        <br />
      </div>
      <div className="mt-3 custom-wrapper">
        <span>Addresses </span> <br />
        <span>Resident Address : </span>
        <span>
          {facultyData.address.resident_address.lot_number}
          {facultyData.address.resident_address.street} St.
          {facultyData.address.resident_address.subdivision} ,
          {facultyData.address.resident_address.barangay} ,
          {facultyData.address.resident_address.city} ,
          {facultyData.address.resident_address.province}
          {facultyData.address.resident_address.zip_code}
        </span>
        <br />
        <span>Permanent Address : </span>
        <span>
          {facultyData.address.permanent_address.lot_number}
          {facultyData.address.permanent_address.street} St.
          {facultyData.address.permanent_address.subdivision},
          {facultyData.address.permanent_address.barangay} ,
          {facultyData.address.permanent_address.city} ,
          {facultyData.address.permanent_address.province}
          {facultyData.address.permanent_address.zip_code}
        </span>
      </div>
      <div className="mt-3 custom-wrapper">
        <span>Issued Id's </span> <br />
        <span>:GSIS ID No. : </span>
        <span>{facultyData.personal_info.GSIS_num}</span>
        <br />
        <span>PAGIBIG ID No. : </span>
        <span>{facultyData.personal_info.PAGIBIG_num}</span>
        <br />
        <span>PHILHEALTH ID No. : </span>
        <span>{facultyData.personal_info.PHILHEALTH_num}</span>
        <br />
        <span>SSS ID No. : </span>
        <span>{facultyData.personal_info.SSS_num}</span>
        <br />
        <span>TIN ID No. : </span>
        <span>{facultyData.personal_info.TIN_num}</span>
        <br />
      </div>
      <div className="pagebreak"> </div>
    </div>
  );
};

const EducationalBackGround = (props) => {
  const facultyData = props.facultyData;

  const elementary = (
    <div
      className="card p-0 ms-3 mt-1 border-left"
      style={{ width: "fit-content" }}
    >
      <div className="card-body py-1">
        <label>School Name : </label>
        <span> {facultyData.educ_elementary.school_name}</span>
        <br />
        <label>Basic Education : </label>
        <span> {facultyData.educ_elementary.basic_education}</span>
        <br />
        <label>Period of Attendance : </label>
        <span>
          {facultyData.educ_elementary.period_from} -
          {facultyData.educ_elementary.period_to}
        </span>
        <br />
        <label>Highest Level (if not graduated) : </label>
        <span>{facultyData.educ_elementary.highest_level} </span>
        <br />
        <label>Year Graduated : </label>
        <span> {facultyData.educ_elementary.year_graduate} </span>
        <br />
        <label>Honors Recieved: </label>
        <span> {facultyData.educ_elementary.honor_recieved} </span>
        <br />
      </div>
    </div>
  );

  const junior = (
    <div
      className="card p-0 mt-1 ms-3 border-left"
      style={{ width: "fit-content" }}
    >
      <div className="card-body py-1">
        <label>School Name : </label>
        <span> {facultyData.educ_juniorHigh.school_name}</span>
        <br />
        <label>Basic Education : </label>
        <span> {facultyData.educ_juniorHigh.basic_education}</span>
        <br />
        <label>Period of Attendance : </label>
        <span>
          {facultyData.educ_juniorHigh.period_from} -
          {facultyData.educ_juniorHigh.period_to}
        </span>
        <br />
        <label>Highest Level (if not graduated) : </label>
        <span>{facultyData.educ_juniorHigh.highest_level} </span>
        <br />
        <label>Year Graduated : </label>
        <span> {facultyData.educ_juniorHigh.year_graduate} </span>
        <br />
        <label>Honors Recieved: </label>
        <span> {facultyData.educ_juniorHigh.honor_recieved} </span>
        <br />
      </div>
    </div>
  );

  const senior = (
    <div
      className="card p-0 mt-1 ms-3 border-left"
      style={{ width: "fit-content" }}
    >
      <div className="card-body py-1">
        <label>School Name : </label>
        <span> {facultyData.educ_seniorHigh.school_name}</span>
        <br />
        <label>Basic Education : </label>
        <span> {facultyData.educ_seniorHigh.basic_education}</span>
        <br />
        <label>Period of Attendance : </label>
        <span>
          {facultyData.educ_seniorHigh.period_from} -
          {facultyData.educ_seniorHigh.period_to}
        </span>
        <br />
        <label>Highest Level (if not graduated) : </label>
        <span>{facultyData.educ_seniorHigh.highest_level} </span>
        <br />
        <label>Year Graduated : </label>
        <span> {facultyData.educ_seniorHigh.year_graduate} </span>
        <br />
        <label>Honors Recieved: </label>
        <span> {facultyData.educ_seniorHigh.honor_recieved} </span>
        <br />
      </div>
    </div>
  );

  const vocational = facultyData.educ_vocational.map((vocational) => {
    return (
      <div
        key={vocational._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "fit-content" }}
      >
        <div className="card-body py-1">
          <label>School Name : </label>
          <span> {vocational.school_name}</span>
          <br />
          <label>Basic Education : </label>
          <span> {vocational.course}</span>
          <br />
          <label>Period of Attendance : </label>
          <span>
            {vocational.period_from} -{vocational.period_to}
          </span>
          <br />
          <label>Highest Level (if not graduated) : </label>
          <span>{vocational.highest_level} </span>
          <br />
          <label>Year Graduated : </label>
          <span> {vocational.year_graduate} </span>
          <br />
          <label>Honors Recieved: </label>
          <span> {vocational.honor_recieved} </span>
          <br />
        </div>
      </div>
    );
  });

  const college = facultyData.educ_college.map((college) => {
    return (
      <div
        key={college._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "fit-content" }}
      >
        <div className="card-body py-1">
          <label>School Name : </label>
          <span> {college.school_name}</span>
          <br />
          <label>Basic Education : </label>
          <span> {college.course}</span>
          <br />
          <label>Period of Attendance : </label>
          <span>
            {college.period_from} -{college.period_to}
          </span>
          <br />
          <label>Highest Level (if not graduated) : </label>
          <span>{college.highest_level} </span>
          <br />
          <label>Year Graduated : </label>
          <span> {college.year_graduate} </span>
          <br />
          <label>Honors Recieved: </label>
          <span> {college.honor_recieved} </span>
          <br />
        </div>
      </div>
    );
  });

  const graduateStudies = facultyData.educ_graduateStudies.map((college) => {
    return (
      <div
        key={college._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "fit-content" }}
      >
        <div className="card-body py-1">
          <label>School Name : </label>
          <span> {college.school_name}</span>
          <br />
          <label>Basic Education : </label>
          <span> {college.course}</span>
          <br />
          <label>Period of Attendance : </label>
          <span>
            {college.period_from} -{college.period_to}
          </span>
          <br />
          <label>Highest Level (if not graduated) : </label>
          <span>{college.highest_level} </span>
          <br />
          <label>Year Graduated : </label>
          <span> {college.year_graduate} </span>
          <br />
          <label>Honors Recieved: </label>
          <span> {college.honor_recieved} </span>
          <br />
        </div>
      </div>
    );
  });

  return (
    <div className="row  mb-3 align-items-center">
      <p className="header-bg">Educational Background </p>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Elementary</p>
        {elementary}
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Junior High</p>
        {junior}
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Senior High</p>
        {senior}
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Vocational / Trade Course</p>
        {vocational}
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">College</p>
        {college}
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Graduate Studies</p>
        {graduateStudies}
      </div>
    </div>
  );
};

const CivilStatus = (props) => {
  const facultyData = props.facultyData;

  const civil = facultyData.civil_elegibility.map((college) => {
    return (
      <div
        key={college._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "fit-content" }}
      >
        <div className="card-body py-1">
          <label>Title / License Name : </label>
          <span> {college.license_name}</span>
          <br />
          <label>Rating : </label>
          <span> {college.rating}</span>
          <br />
          <label>Date of Examination : </label>
          <span>{college.exam_date}</span>
          <br />
          <label>Place of Examination : </label>
          <span>{college.exam_place} </span>
          <br />
          <label>License Number : </label>
          <span> {college.license_number} </span>
          <br />
          <label>License Validity: </label>
          <span> {dateFormatStringSet(college.license_validity_date)} </span>
          <br />
        </div>
      </div>
    );
  });
  return (
    <div className="row  mb-3 align-items-center">
      <p className="header-bg">Civil Service Eligibility </p>
      <div className="row mb-3 custom-wrapper">{civil}</div>
    </div>
  );
};

const WorkExp = (props) => {
  const facultyData = props.facultyData;

  const work = facultyData.work_exp.map((worKExp) => {
    return (
      <div
        key={worKExp._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "fit-content" }}
      >
        <div className="card-body py-1">
          <label>Position Title : </label>
          <span> {worKExp.position}</span>
          <br />
          <label>Company : </label>
          <span> {worKExp.company_name}</span>
          <br />
          <label>Inclusive Dates : </label>
          <span>
            {" "}
            {dateFormatStringSet(worKExp.period_from)} -{" "}
            {dateFormatStringSet(worKExp.period_to)}
          </span>
          <br />
          <label>Montly Salary : </label>
          <span>{worKExp.monthly_salary} </span>
          <br />
          <label>Pay Grade : </label>
          <span> {worKExp.pay_grade} </span>
          <br />
          <label>Status of Appointment: </label>
          <span> {worKExp.appointment_status} </span>
          <br />
          <label>Goverment Service: </label>
          <span> {worKExp.isGov_service ? "Yes" : "No"} </span>
          <br />
        </div>
      </div>
    );
  });
  return (
    <div className="row  mb-3 align-items-center">
      <p className="header-bg">Work Experiences</p>
      <div className="row mb-3 custom-wrapper">{work}</div>
    </div>
  );
};

const Certificates = (props) => {
  const facultyData = props.facultyData;

  const certificates = facultyData.certificates.map((certi) => {
    return (
      <div
        key={certi._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "fit-content" }}
      >
        <div className="card-body row py-1">
          <div className="col">
            <label>Title : </label>
            <span> {certi.certificate_name}</span>
            <br />
            <label>Type : </label>
            <span> {certi.type}</span>
            <br />
            <label>Inclusive Dates : </label>
            <span>
              {" "}
              {dateFormatStringSet(certi.period_from)} -{" "}
              {dateFormatStringSet(certi.period_to)}
            </span>
            <br />
            <label>Number of Hours : </label>
            <span>{certi.total_hours} </span>
            <br />
            <label>Conducted By : </label>
            <span> {certi.conducted_by} </span>
            <br />
            <label>File Name : </label>
            <span> {certi.certificate_src} </span>
          </div>
          <div className="col p-3">
            <img
              src={`/certificates/${certi.certificate_src}`}
              alt=""
              style={{ width: "2in" }}
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="row  mb-3 align-items-center">
      <p className="header-bg">Certificates</p>
      <div className="row mb-3 custom-wrapper">{certificates}</div>
    </div>
  );
};

export default Example;
