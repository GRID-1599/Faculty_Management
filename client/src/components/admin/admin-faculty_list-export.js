import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Modal, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

import FacultyPDS from "./faculty-pds";
import {
  dateTimeFormater,
  dateTimeFormater2,
  dateFormatStringSet,
} from "../functions/dateFunction";
const FacultyDataExport = (props) => {
  const navigate = useNavigate();
  const componentRef = useRef();
  const { employeeId } = useParams();

  const adminUsername = props.admin;
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
        size:8.5in 14in;
    } 
    @media all {
        display:none;
    }
    @media print {
        .pagebreak{
            page-break-before:always;
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
        <ol className="breadcrumb mb-6">
          <li className="breadcrumb-item ">Faculty List</li>
          <li className="breadcrumb-item ">Faculty View</li>
          <li className="breadcrumb-item active">Export</li>
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
                        <span className="h3 f-bold">Faculty Management</span>
                        <br />
                        <span className="h3 f-bold">Information System</span>
                      </div>
                    </div>
                    {/* print details */}
                    <div className="row mb-3 ">
                      <div className="col">
                        <span className="txt-sm">Printed by admin: </span>
                        <span className=" txt-sm"> {adminUsername}</span>
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
                          style={{ width: "2in", height: "2in" }}
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
                          {facultyData.personal_info.first_name}{" "}
                          {facultyData.personal_info.middle_name}{" "}
                          {facultyData.personal_info.last_name}{" "}
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
                      Trainings, Seminars and Programs
                    </label>
                  </div>
                </div>
              </div>
              {toRender && (
                <div className="container">
                  <div className="row">
                    <button className="btn btn-1 w-100 " onClick={handlePrint}>
                      Print
                    </button>
                  </div>
                  <div className="row my-2">
                    <p className="text-center txt-unat my-0">OR</p>
                  </div>
                  <div className="row">
                    <FacultyPDS className="w-100 " facultyData={facultyData} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const PersonalData = (props) => {
  const facultyData = props.facultyData;

  const [no, setNo] = useState("N/A");
  const [street, setStreet] = useState("N/A");
  const [subdivision, setSubdivision] = useState("N/A");
  const [barangay, setBarangay] = useState("N/A");
  const [city, setCity] = useState("N/A");
  const [province, setProvince] = useState("N/A");
  const [zipCode, setZipCode] = useState("N/A");

  const [perm_no, setPerm_No] = useState("N/A");
  const [perm_street, setPerm_Street] = useState("N/A");
  const [perm_subdivision, setPerm_Subdivision] = useState("N/A");
  const [perm_barangay, setPerm_Barangay] = useState("N/A");
  const [perm_city, setPerm_City] = useState("N/A");
  const [perm_province, setPerm_Province] = useState("N/A");
  const [perm_zipCode, setPerm_ZipCode] = useState("N/A");

  const [GSIS, setGSIS] = useState("N/A");
  const [PAGIBIG, setPAGIBIG] = useState("N/A");
  const [PHILHEALTH, setPHILHEALTH] = useState("N/A");
  const [TIN, setTIN] = useState("N/A");
  const [SSS, setSSS] = useState("N/A");

  const [citezenship, setCitezenship] = useState("FILIPINO");

  useEffect(() => {
    if (facultyData.hasOwnProperty("address")) {
      setNo(facultyData.address.resident_address.lot_number);
      setStreet(facultyData.address.resident_address.street);
      setSubdivision(facultyData.address.resident_address.subdivision);
      setBarangay(facultyData.address.resident_address.barangay);
      setCity(facultyData.address.resident_address.city);
      setProvince(facultyData.address.resident_address.province);
      setZipCode(facultyData.address.resident_address.zip_code);

      setPerm_No(facultyData.address.permanent_address.lot_number);
      setPerm_Street(facultyData.address.permanent_address.street);
      setPerm_Subdivision(facultyData.address.permanent_address.subdivision);
      setPerm_Barangay(facultyData.address.permanent_address.barangay);
      setPerm_City(facultyData.address.permanent_address.city);
      setPerm_Province(facultyData.address.permanent_address.province);
      setPerm_ZipCode(facultyData.address.permanent_address.zip_code);
    }

    if (facultyData.hasOwnProperty("issuedIds")) {
      setGSIS(facultyData.issuedIds.GSIS_num);
      setPAGIBIG(facultyData.issuedIds.PAGIBIG_num);
      setPHILHEALTH(facultyData.issuedIds.PHILHEALTH_num);
      setSSS(facultyData.issuedIds.SSS_num);
      setTIN(facultyData.issuedIds.TIN_num);
    }
  }, []);

  return (
    <div className="row  mb-3 align-items-center">
      <p className="header-bg">Personal Information</p>
      <div className="row custom-wrapper">
        <div className="col">
          <span>First Name : </span>
          <span>{facultyData.personal_info.first_name}</span>
          <br />
          <span>Middle Name : </span>
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
          {no} {street} St. {subdivision} ,{barangay} ,{city} ,{province}{" "}
          {zipCode}
        </span>
        <br />
        <span>Permanent Address : </span>
        <span>
          {perm_no} {perm_street} St. {perm_subdivision} ,{perm_barangay} ,
          {perm_city} ,{perm_province}
          {perm_zipCode}
        </span>
      </div>
      <div className="mt-3 custom-wrapper">
        <span>Issued Id's </span> <br />
        <span>GSIS ID No. : </span>
        <span>{GSIS}</span>
        <br />
        <span>PAGIBIG ID No. : </span>
        <span>{PAGIBIG}</span>
        <br />
        <span>PHILHEALTH ID No. : </span>
        <span>{PHILHEALTH}</span>
        <br />
        <span>SSS ID No. : </span>
        <span>{SSS}</span>
        <br />
        <span>TIN ID No. : </span>
        <span>{TIN}</span>
        <br />
      </div>
      <div className="pagebreak"> </div>
    </div>
  );
};

const EducationalBackGround = (props) => {
  const facultyData = props.facultyData;

  return (
    <div className="row  mb-3 align-items-center">
      <p className="header-bg">Educational Background </p>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Elementary</p>
        <EducationalBackgroundElementary facultyData={facultyData} />
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Junior High</p>
        {/* EducationalBackgroundJuniorHigh */}
        <EducationalBackgroundJuniorHigh facultyData={facultyData} />
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Senior High</p>
        {/* EducationalBackgroundSeniorHigh */}
        <EducationalBackgroundSeniorHigh facultyData={facultyData} />
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Vocational / Trade Course</p>
        {/* {vocational} */}
        <VocationalEduc facultyData={facultyData} />
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">College</p>
        {/* CollegeEduc */}
        <CollegeEduc facultyData={facultyData} />
      </div>
      <div className="row mb-3 custom-wrapper">
        <p className="f-b mb-0">Graduate Studies</p>

        {/* GraduateStudiesEduc */}
        <GraduateStudiesEduc facultyData={facultyData} />
      </div>
    </div>
  );
};

const EducationalBackgroundElementary = (props) => {
  const [name, setName] = useState("N/A");
  const [education, seteducation] = useState("N/A");
  const [from, setfrom] = useState("N/A");
  const [to, setto] = useState("N/A");
  const [level, setlevel] = useState("N/A");
  const [graduate, setgraduate] = useState("N/A");
  const [honor, sethonor] = useState("N/A");

  const facultyData = props.facultyData;

  const [hasNoData, setHasNoData] = useState(true);

  useEffect(() => {
    if (facultyData.hasOwnProperty("educ_elementary")) {
      setName(facultyData.educ_elementary.school_name);
      seteducation(facultyData.educ_elementary.basic_education);
      setfrom(facultyData.educ_elementary.period_from);
      setto(facultyData.educ_elementary.period_to);
      setlevel(facultyData.educ_elementary.highest_level);
      setgraduate(facultyData.educ_elementary.year_graduate);
      sethonor(facultyData.educ_elementary.honor_recieved);
      setHasNoData(false);
    }
  }, []);

  return (
    <>
      {hasNoData ? (
        <p className="text-muted ps-4 mb-0">No entry</p>
      ) : (
        <div
          className="card p-0 ms-3 mt-1 border-left"
          style={{ width: "fit-content" }}
        >
          <div className="card-body py-1">
            <label>School Name : </label>
            <span> {name}</span>
            <br />
            <label>Basic Education : </label>
            <span> {education}</span>
            <br />
            <label>Period of Attendance : </label>
            <span>
              {from} -{to}
            </span>
            <br />
            <label>Highest Level (if not graduated) : </label>
            <span>{level} </span>
            <br />
            <label>Year Graduated : </label>
            <span> {graduate} </span>
            <br />
            <label>Honors Recieved: </label>
            <span> {honor} </span>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

const EducationalBackgroundJuniorHigh = (props) => {
  const [name, setName] = useState("N/A");
  const [education, seteducation] = useState("N/A");
  const [from, setfrom] = useState("N/A");
  const [to, setto] = useState("N/A");
  const [level, setlevel] = useState("N/A");
  const [graduate, setgraduate] = useState("N/A");
  const [honor, sethonor] = useState("N/A");

  const facultyData = props.facultyData;

  const [hasNoData, setHasNoData] = useState(true);

  useEffect(() => {
    if (facultyData.hasOwnProperty("educ_juniorHigh")) {
      setName(facultyData.educ_juniorHigh.school_name);
      seteducation(facultyData.educ_juniorHigh.basic_education);
      setfrom(facultyData.educ_juniorHigh.period_from);
      setto(facultyData.educ_juniorHigh.period_to);
      setlevel(facultyData.educ_juniorHigh.highest_level);
      setgraduate(facultyData.educ_juniorHigh.year_graduate);
      sethonor(facultyData.educ_juniorHigh.honor_recieved);
      setHasNoData(false);
    }
  }, []);

  return (
    <>
      {hasNoData ? (
        <p className="text-muted ps-4 mb-0">No entry</p>
      ) : (
        <div
          className="card p-0 ms-3 mt-1 border-left"
          style={{ width: "fit-content" }}
        >
          <div className="card-body py-1">
            <label>School Name : </label>
            <span> {name}</span>
            <br />
            <label>Basic Education : </label>
            <span> {education}</span>
            <br />
            <label>Period of Attendance : </label>
            <span>
              {from} -{to}
            </span>
            <br />
            <label>Highest Level (if not graduated) : </label>
            <span>{level} </span>
            <br />
            <label>Year Graduated : </label>
            <span> {graduate} </span>
            <br />
            <label>Honors Recieved: </label>
            <span> {honor} </span>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

const EducationalBackgroundSeniorHigh = (props) => {
  const [name, setName] = useState("N/A");
  const [education, seteducation] = useState("N/A");
  const [from, setfrom] = useState("N/A");
  const [to, setto] = useState("N/A");
  const [level, setlevel] = useState("N/A");
  const [graduate, setgraduate] = useState("N/A");
  const [honor, sethonor] = useState("N/A");

  const facultyData = props.facultyData;
  const [hasNoData, setHasNoData] = useState(true);

  useEffect(() => {
    if (facultyData.hasOwnProperty("educ_seniorHigh")) {
      setName(facultyData.educ_seniorHigh.school_name);
      seteducation(facultyData.educ_seniorHigh.basic_education);
      setfrom(facultyData.educ_seniorHigh.period_from);
      setto(facultyData.educ_seniorHigh.period_to);
      setlevel(facultyData.educ_seniorHigh.highest_level);
      setgraduate(facultyData.educ_seniorHigh.year_graduate);
      sethonor(facultyData.educ_seniorHigh.honor_recieved);
      setHasNoData(false);
    }
  }, []);

  return (
    <>
      {hasNoData ? (
        <p className="text-muted ps-4 mb-0">No entry</p>
      ) : (
        <div
          className="card p-0 ms-3 mt-1 border-left"
          style={{ width: "fit-content" }}
        >
          <div className="card-body py-1">
            <label>School Name : </label>
            <span> {name}</span>
            <br />
            <label>Basic Education : </label>
            <span> {education}</span>
            <br />
            <label>Period of Attendance : </label>
            <span>
              {from} -{to}
            </span>
            <br />
            <label>Highest Level (if not graduated) : </label>
            <span>{level} </span>
            <br />
            <label>Year Graduated : </label>
            <span> {graduate} </span>
            <br />
            <label>Honors Recieved: </label>
            <span> {honor} </span>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

const VocationalEduc = (props) => {
  const facultyData = props.facultyData;
  let counter = 0;

  const [arr, setArr] = useState([]);

  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyData.educ_vocational.length !== 0) {
      setArr(facultyData.educ_vocational);
      setHasNoData(false);
    }
  }, []);

  const vocational = arr.map((vocational) => {
    counter++;
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
          <span>{vocational.units_earned} </span>
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

  return (
    <>
      {vocational} {hasNoData && noData}
    </>
  );
};

const CollegeEduc = (props) => {
  const facultyData = props.facultyData;
  let counter = 0;

  const [arr, setArr] = useState([]);

  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyData.educ_college.length !== 0) {
      setArr(facultyData.educ_college);
      setHasNoData(false);
    }
  }, []);

  const collegeSet = arr.map((element) => {
    counter++;
    return (
      <div
        key={element._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "fit-content" }}
      >
        <div className="card-body py-1">
          <label>School Name : </label>
          <span> {element.school_name}</span>
          <br />
          <label>Basic Education : </label>
          <span> {element.course}</span>
          <br />
          <label>Period of Attendance : </label>
          <span>
            {element.period_from} -{element.period_to}
          </span>
          <br />
          <label>Highest Level (if not graduated) : </label>
          <span>{element.units_earned} </span>
          <br />
          <label>Year Graduated : </label>
          <span> {element.year_graduate} </span>
          <br />
          <label>Honors Recieved: </label>
          <span> {element.honor_recieved} </span>
          <br />
        </div>
      </div>
    );
  });

  return (
    <>
      {collegeSet} {hasNoData && noData}
    </>
  );
};

const GraduateStudiesEduc = (props) => {
  const facultyData = props.facultyData;
  let counter = 0;

  const [arr, setArr] = useState([]);

  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyData.educ_graduateStudies.length !== 0) {
      setArr(facultyData.educ_graduateStudies);
      setHasNoData(false);
    }
  }, []);

  const collegeSet = arr.map((element) => {
    counter++;
    return (
      <div
        key={element._id}
        className="card p-0 mt-1 ms-3 border-left"
        style={{ width: "fit-content" }}
      >
        <div className="card-body py-1">
          <label>School Name : </label>
          <span> {element.school_name}</span>
          <br />
          <label>Basic Education : </label>
          <span> {element.course}</span>
          <br />
          <label>Period of Attendance : </label>
          <span>
            {element.period_from} -{element.period_to}
          </span>
          <br />
          <label>Highest Level (if not graduated) : </label>
          <span>{element.units_earned} </span>
          <br />
          <label>Year Graduated : </label>
          <span> {element.year_graduate} </span>
          <br />
          <label>Honors Recieved: </label>
          <span> {element.honor_recieved} </span>
          <br />
        </div>
      </div>
    );
  });

  return (
    <>
      {collegeSet} {hasNoData && noData}
    </>
  );
};

const CivilStatus = (props) => {
  const facultyData = props.facultyData;
  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;
  useEffect(() => {
    if (facultyData.civil_elegibility.length !== 0) {
      setHasNoData(false);
    }
  }, []);
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
      {hasNoData && noData}
      <div className="row mb-3 custom-wrapper">{civil} </div>
    </div>
  );
};

const WorkExp = (props) => {
  const facultyData = props.facultyData;
  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyData.work_exp.length !== 0) {
      setHasNoData(false);
    }
  }, []);

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
      {hasNoData && noData}
      <div className="row mb-3 custom-wrapper">{work}</div>
    </div>
  );
};

const Certificates = (props) => {
  const facultyData = props.facultyData;

  const [hasNoData, setHasNoData] = useState(true);

  const noData = <p className="text-muted ps-4 mb-0">No entry</p>;

  useEffect(() => {
    if (facultyData.certificates.length !== 0) {
      setHasNoData(false);
    }
  }, []);

  const certificates = facultyData.certificates.map((certi) => {
    const certificateShower = () => {
      if (certi.certificate_src.substr(-3) === "pdf") {
        return (
          <iframe
            src={`/certificates/${certi.certificate_src}`}
            id="pdfFrame"
            width="100%"
            scrolling="no"
            frameBorder="0"
            style={{
              maxWidth: 640,
              width: "100%",
              height: "auto",
              overflow: "auto",
            }}
          />
        );
      } else {
        return (
          <img
            src={`/certificates/${certi.certificate_src}`}
            alt=""
            style={{ width: "3in", height: "3in" }}
          />
        );
      }
    };
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
          <div className="col p-3">{certificateShower()}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="row  mb-3 align-items-center">
      <p className="header-bg">Trainings, Seminars and Programs</p>
      {hasNoData && noData}
      <div className="row mb-3 custom-wrapper">{certificates}</div>
    </div>
  );
};

export default FacultyDataExport;
