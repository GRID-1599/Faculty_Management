import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

import {
  dateTimeFormater,
  dateFormater,
  dateTimeFormater2,
  dateTimeFormaterSlash,
} from "../functions/dateFunction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const PersonalDataSheet = (props) => {
  const facultyData = props.facultyData;
  // const facultyData = {
  //   employee_id: "2018107987",
  //   personal_info: {
  //     _id: "62805251f953df0b8af07af6",
  //     employee_id: "2018107987",
  //     email: "catudiochristianjude@gmail.com",
  //     college: "College of Information and Communications Technology (CICT)",
  //     rank: "Intructor I",
  //     appointment_status: "Temporary",
  //     mobile_number: "+67610545596",
  //     first_name: "Christian Jude Pogi",
  //     middle_name: "J",
  //     name_extension: "",
  //     last_name: "Catudio",
  //     age: 22,
  //     birth_date: "1999-10-15T00:00:00.000Z",
  //     birth_place: "Parada",
  //     sex: "Male",
  //     civil_status: "Single",
  //     height: "170cm",
  //     weight: "75kg",
  //     blood_type: "",
  //     alternative_email: "catudio.christianjude.j.7987@gmail.com",
  //     telephone_number: "+639168dsfsadf",
  //     image: "received_889903571353208 (1).jpeg",
  //     password: "$2b$10$pEvb8KtFBODbayMyLVmzdu.sls1yVac1RlHPI4ZZR.wRHsJM6XTQe",
  //     is_newUser: false,
  //     __v: 0,
  //   },
  //   address: {
  //     _id: "62791cb009206e0891908c7a",
  //     employee_id: "2018107987",
  //     resident_address: {
  //       lot_number: "6246",
  //       street: "Kaypalong",
  //       subdivision: "qwe",
  //       barangay: "San Vicente",
  //       city: "Sta Maria",
  //       province: "Bulacan",
  //       zip_code: "3022",
  //     },
  //     permanent_address: {
  //       lot_number: "624",
  //       street: "Kaypalong",
  //       subdivision: "pe_subdivision",
  //       barangay: "San Vicente",
  //       city: "Sta Maria",
  //       province: "Bulcan",
  //       zip_code: "3022",
  //     },
  //     __v: 0,
  //   },

  //   issuedIds: {
  //     _id: "627920c65cffe49a6e9b9ec6",
  //     employee_id: "2018107987",
  //     GSIS_num: "123456",
  //     PAGIBIG_num: "123456",
  //     PHILHEALTH_num: "123456",
  //     SSS_num: "123456",
  //     TIN_num: "123456",
  //     __v: 0,
  //   },
  //   educ_elementary: {
  //     _id: "62794c8ceaee5c7d32589212",
  //     employee_id: "2018107987",
  //     school_name: "sample name",
  //     basic_education: "sample",
  //     period_from: "2000",
  //     period_to: "2001",
  //     highest_level: "sample",
  //     year_graduate: "2012",
  //     honor_recieved: "sample",
  //     __v: 0,
  //   },
  //   educ_juniorHigh: {
  //     _id: "62794cf2eaee5c7d32589216",
  //     employee_id: "2018107987",
  //     school_name: "sample name",
  //     basic_education: "sample",
  //     period_from: "2000",
  //     period_to: "2001",
  //     highest_level: "sample",
  //     year_graduate: "2012",
  //     honor_recieved: "sample",
  //     __v: 0,
  //   },
  //   educ_seniorHigh: {
  //     _id: "62794cfaeaee5c7d32589218",
  //     employee_id: "2018107987",
  //     school_name: "sample name",
  //     basic_education: "sample",
  //     period_from: "2000",
  //     period_to: "2001",
  //     highest_level: "sample",
  //     year_graduate: "2012",
  //     honor_recieved: "sample",
  //     __v: 0,
  //   },
  //   educ_vocational: [
  //     {
  //       _id: "62875fc24f9915436aa63b9f",
  //       employee_id: "2018107987",
  //       school_name: "sample `",
  //       course: "sample ",
  //       period_from: "2012",
  //       period_to: "2015",
  //       units_earned: "sample",
  //       year_graduate: "2015",
  //       honor_recieved: "sadasd",
  //       __v: 0,
  //     },
  //     {
  //       _id: "62875fc24f9915436aa63b9g",
  //       employee_id: "2018107987",
  //       school_name: "sample `",
  //       course: "sample ",
  //       period_from: "2012",
  //       period_to: "2015",
  //       units_earned: "sample",
  //       year_graduate: "2015",
  //       honor_recieved: "sadasd",
  //       __v: 0,
  //     },
  //     {
  //       _id: "62875fc24f9915436aa63b9r",
  //       employee_id: "2018107987",
  //       school_name: "sample `",
  //       course: "sample ",
  //       period_from: "2012",
  //       period_to: "2015",
  //       units_earned: "sample",
  //       year_graduate: "2015",
  //       honor_recieved: "sadasd",
  //       __v: 0,
  //     },
  //   ],

  //   educ_college: [
  //     {
  //       _id: "62797b907f1306f2d338198c",
  //       employee_id: "2018107987",
  //       school_name: "BulSu",
  //       course: "BSIT",
  //       period_from: "2018",
  //       period_to: "2022",
  //       units_earned: "",
  //       year_graduate: "2022",
  //       honor_recieved: "",
  //       __v: 0,
  //     },
  //     {
  //       _id: "627d1be11975ce5190c0760b",
  //       employee_id: "2018107987",
  //       school_name: "Samle College",
  //       course: "com sci",
  //       period_from: "2010",
  //       period_to: "2012",
  //       units_earned: "",
  //       year_graduate: "2021",
  //       honor_recieved: "sample",
  //       __v: 0,
  //     },
  //     {
  //       _id: "627dfd200973a263ffee75aa",
  //       employee_id: "2018107987",
  //       school_name: "college1",
  //       course: "bsit",
  //       period_from: "2012",
  //       period_to: "2018",
  //       units_earned: "",
  //       year_graduate: "2018",
  //       honor_recieved: "",
  //       __v: 0,
  //     },
  //   ],
  //   educ_graduateStudies: [
  //     {
  //       _id: "6279565ec9a5f0ad9093ffe1",
  //       employee_id: "2018107987",
  //       school_name: "sample name",
  //       course: "sample",
  //       period_from: "2000",
  //       period_to: "2001",
  //       units_earned: "units_earned",
  //       year_graduate: "2012",
  //       honor_recieved: "sample",
  //       __v: 0,
  //     },
  //     {
  //       _id: "62795667c9a5f0ad9093ffe3",
  //       employee_id: "2018107987",
  //       school_name: "sample name",
  //       course: "sample",
  //       period_from: "2000",
  //       period_to: "2001",
  //       units_earned: "units_earned",
  //       year_graduate: "2012",
  //       honor_recieved: "sample",
  //       __v: 0,
  //     },
  //   ],
  //   civil_elegibility: [
  //     {
  //       _id: "628b7395a2c5cfc8cc524250",
  //       employee_id: "2018107987",
  //       license_name: "sample 1",
  //       rating: "12",
  //       exam_date: "2001-10-15T00:00:00.000Z",
  //       exam_place: "sample place",
  //       license_number: "123123",
  //       license_validity_date: "2022-05-01T00:00:00.000Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "628b7395a2c5cfc8cc524251",
  //       employee_id: "2018107987",
  //       license_name: "sample 1",
  //       rating: "12",
  //       exam_date: "2001-10-15T00:00:00.000Z",
  //       exam_place: "sample place",
  //       license_number: "123123",
  //       license_validity_date: "2022-05-01T00:00:00.000Z",
  //       __v: 0,
  //     },
  //   ],
  //   work_exp: [
  //     {
  //       _id: "628b73c3a2c5cfc8cc524254",
  //       employee_id: "2018107987",
  //       position: "sample",
  //       company_name: "sample",
  //       monthly_salary: "12000",
  //       pay_grade: "samplke",
  //       appointment_status: "sample",
  //       period_from: "2022-05-01T00:00:00.000Z",
  //       period_to: "2022-05-30T00:00:00.000Z",
  //       isGov_service: false,
  //       __v: 0,
  //     },
  //     {
  //       _id: "628b73c3a2c5cfc8cc524253",
  //       employee_id: "2018107987",
  //       position: "sample",
  //       company_name: "sample",
  //       monthly_salary: "12000",
  //       pay_grade: "samplke",
  //       appointment_status: "sample",
  //       period_from: "2022-05-01T00:00:00.000Z",
  //       period_to: "2022-05-30T00:00:00.000Z",
  //       isGov_service: false,
  //       __v: 0,
  //     },
  //   ],
  //   certificates: [
  //     {
  //       _id: "6279faa5c81214993fbab686",
  //       employee_id: "2018107987",
  //       certificate_name: "qwe",
  //       type: "qwe",
  //       period_from: "2022-05-20T00:00:00.000Z",
  //       period_to: "2022-05-12T00:00:00.000Z",
  //       total_hours: 12,
  //       conducted_by: "qwe",
  //       certificate_src: "blue.JPG",
  //       __v: 0,
  //     },
  //     {
  //       _id: "6279fdcbace46562c9e734ed",
  //       employee_id: "2018107987",
  //       certificate_name: "234",
  //       type: "234",
  //       period_from: "2022-05-06T00:00:00.000Z",
  //       period_to: "2022-05-12T00:00:00.000Z",
  //       total_hours: 2,
  //       conducted_by: "234",
  //       certificate_src: "Grade 3rd Yr 1st Sem.JPG",
  //       __v: 0,
  //     },
  //     {
  //       _id: "627dfd480973a263ffee77c7",
  //       employee_id: "2018107987",
  //       certificate_name: "sample",
  //       type: "qweqwe",
  //       period_from: "2022-05-12T00:00:00.000Z",
  //       period_to: "2022-05-19T00:00:00.000Z",
  //       total_hours: 20,
  //       conducted_by: "qwe",
  //       certificate_src: "Grade 3rd Yr 1st Sem.JPG",
  //       __v: 0,
  //     },
  //     {
  //       _id: "627fb0c962e73f110c4cbbdf",
  //       employee_id: "2018107987",
  //       certificate_name: "qwe",
  //       type: "w",
  //       period_from: "2022-05-21T00:00:00.000Z",
  //       period_to: "2022-05-13T00:00:00.000Z",
  //       total_hours: 12,
  //       conducted_by: "234",
  //       certificate_src: "listening-to-music-3550359.jpg",
  //       __v: 0,
  //     },
  //   ],
  // };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${facultyData.personal_info.last_name}, ${
      facultyData.personal_info.first_name
    }  PDS  ${dateTimeFormater(new Date())}`,
    copyStyles: true,
  });

  const getPageMargins = () => {
    return `
    @page {  
        margin: .45in;
        counter-increment: page;
        content: counter(page);
        size:8.5in 14in;

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
        <button className="btn btn-1 w-100 " onClick={handlePrint}>
          Export as PDS
        </button>
      </div>

      <div className="row" style={{ display: "none" }}>
        <style>{getPageMargins()}</style>
        <table
          id="PDS_table"
          className="table txt-xsm txt-ipit "
          ref={componentRef}
        >
          <thead>
            <tr className="">
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <PDSHeader />
            <PersonalDAta facultyData={facultyData} />
            {/* Familty No info */}
            <FamiltyBacground />
            <EducationalBackgroundHeader />
            {/* Informations Below */}
            <EducationalBackgroundElementary facultyData={facultyData} />
            <EducationalBackgroundJuniorHigh facultyData={facultyData} />
            <EducationalBackgroundSeniorHigh facultyData={facultyData} />
            <EducationalBackgroundVocational facultyData={facultyData} />
            <EducationalBackgroundCollege facultyData={facultyData} />
            <EducationalBackgroundGradStud facultyData={facultyData} />

            <CivilServiceInfo facultyData={facultyData} />

            <WorkExpInfo facultyData={facultyData} />

            <VolunataryWorkInfo />

            <LearningDevInfo facultyData={facultyData} />
          </tbody>

          <PSDFooter facultyData={facultyData} />
        </table>
      </div>
    </div>
  );
};

const PDSHeader = () => {
  return (
    <tr>
      <td className="" colSpan={12}>
        <div className="row">
          <p className="text-center pds-header mb-0">PERSONAL DATA SHEET</p>
        </div>
        <div className="row">
          <p className="txt-italic my-0">
            <strong>WARNING</strong> : Any misinterpresentation made in the
            Personal Data Sheet and the Work Experience Sheet shall cause the
            filling of administrative/criminal case/s againts the person
            concernered.
          </p>
        </div>
        <div className="row">
          <p className="my-0">
            <strong>
              READ THE ATTACHED GUIDE TO FILLING OUT THE PERSONAL DATA SHEET
              (PDS) BEFORE ACCOMPLISHING THE PDS FORM.
            </strong>
          </p>
        </div>
        <div className="row mb-0 align-items-end">
          <div className="col-8">
            <p className="my-0 txt-ipit">
              Print legibly. Tick appropriate boxes ({" "}
              <FontAwesomeIcon icon={faSquare} /> ) and use seperate sheet if
              necessary. Indicate N/A if not appicable.{" "}
              <span className="txt-color-red">DO NOT ABBREVIATE</span>
            </p>
          </div>
          <div className="col-4">
            <div className="row  m-0 p-0">
              <div className="col-3 px-1 border border-dark">1. CS ID No.</div>
              <div className="col-9 text-end border border-dark">
                (Do not fill up. For CSC use only)
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

const PersonalDAta = (props) => {
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
    <>
      <tr className="bg-grey">
        <td className="p-0 " colSpan={12}>
          <p className="m-0 f-b text-white ps-1"> I. PERSONAL INFORMATION</p>
        </td>
      </tr>
      {/* persnal table */}
      <tr>
        <td colSpan={2} rowSpan={3} className="pt-2">
          <span>2. SURNAME</span>
          <br />
          <br />
          <span className="ps-2"> FIRST NAME</span>
          <br />
          <br />
          <span className="ps-2"> MIDDLE NAME</span>
        </td>
        <td colSpan={10} className="f-b txt-unat txt-uppercase">
          {facultyData.personal_info.last_name}
        </td>
      </tr>
      <tr>
        <td colSpan={6} className="f-b txt-unat txt-uppercase">
          {facultyData.personal_info.first_name}
        </td>
        <td colSpan={4}>
          <span className="txt-sm-lbl txt-ipit-1">
            NAME EXTENSION (JR. , SR.){" "}
            <span className="f-b txt-unat txt-uppercase">
              {facultyData.personal_info.name_extension !== ""
                ? facultyData.personal_info.name_extension
                : "N/A"}
            </span>
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan={11} className="f-b txt-unat txt-uppercase">
          {facultyData.personal_info.middle_name !== ""
            ? facultyData.personal_info.middle_name
            : "N/A"}
        </td>
      </tr>

      {/* others */}
      <tr>
        <td colSpan={2}>
          3. DATE OF BIRTH <br /> (mm/dd/yyyy){" "}
        </td>
        <td colSpan={3} className="f-b text-center">
          {dateTimeFormaterSlash(facultyData.personal_info.birth_date)}
        </td>
        <td colSpan={3} rowSpan={2}>
          16. CITIZENSHIP
          <br />
          <small>
            If holder is dual citizenship. Please indicate the details
          </small>
        </td>
        <td colSpan={4} rowSpan={2} className="txt-uppercase f-b">
          {citezenship}
        </td>
      </tr>
      <tr>
        <td colSpan={2}>4. PLACE OF BIRTH</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.birth_place !== ""
            ? facultyData.personal_info.birth_place
            : "N/A"}
        </td>
      </tr>
      <tr>
        <td colSpan={2}>5. SEX</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.sex !== ""
            ? facultyData.personal_info.sex
            : "N/A"}
        </td>
        <td colSpan={2} rowSpan={4}>
          17. RESIDENT ADDRESS
        </td>
        <td colSpan={5} rowSpan={1} className=" p-0 pt-1 text-center ">
          <div className="row">
            <div className="col-6">
              <span className="f-b text-uppercase">{no}</span>
              <br />
              <small>House/Block/Lot No</small>
            </div>
            <div className="col-6">
              <span className="f-b text-uppercase">{street}</span>
              <br />
              <small>Street</small>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>6. CIVIL STATUS</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.civil_status !== ""
            ? facultyData.personal_info.civil_status
            : "N/A"}
        </td>
        {/*  resident adress subdivision / barangay */}
        <td colSpan={5} rowSpan={1} className=" p-0 pt-1 text-center ">
          <div className="row">
            <div className="col-6">
              <span className="f-b text-uppercase">{subdivision}</span>
              <br />
              <small>Subdivission/Village</small>
            </div>
            <div className="col-6">
              <span className="f-b text-uppercase">{barangay}</span>
              <br />
              <small>Barangay</small>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>7. HEIGHT (cm)</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.height !== ""
            ? facultyData.personal_info.height
            : "N/A"}
        </td>
        {/*  resident adress city / province  */}
        <td colSpan={5} rowSpan={1} className=" p-0 pt-1 text-center ">
          <div className="row">
            <div className="col-6">
              <span className="f-b text-uppercase">{city}</span>
              <br />
              <small>City/Municipality</small>
            </div>
            <div className="col-6">
              <span className="f-b text-uppercase">{province}</span>
              <br />
              <small>Province</small>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>8. WEIGHT (kg)</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.weight !== ""
            ? facultyData.personal_info.weight
            : "N/A"}
        </td>
        {/*  resident adress zip code   */}
        <td colSpan={5} rowSpan={1} className=" p-0 pt-1 text-center ">
          <div className="row">
            <div className="col-6">
              <span className="f-b text-uppercase">{zipCode}</span>
              <br />
              <small>Zip Code</small>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>9. BLODD TYPE</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.blood_type !== ""
            ? facultyData.personal_info.blood_type
            : "N/A"}
        </td>
        <td colSpan={2} rowSpan={4}>
          18. PERMANENT ADDRESS
        </td>
        <td colSpan={5} rowSpan={1} className=" p-0 pt-1 text-center ">
          <div className="row">
            <div className="col-6">
              <span className="f-b text-uppercase">{perm_no}</span>
              <br />
              <small>House/Block/Lot No</small>
            </div>
            <div className="col-6">
              <span className="f-b text-uppercase">{perm_street}</span>
              <br />
              <small>Street</small>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>10. GSIS ID NO.</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {GSIS !== "" ? GSIS : "N/A"}
        </td>
        {/*  perma adress subdivision / barangay */}
        <td colSpan={5} rowSpan={1} className=" p-0 pt-1 text-center ">
          <div className="row">
            <div className="col-6">
              <span className="f-b text-uppercase">{perm_subdivision}</span>
              <br />
              <small>Subdivission/Village</small>
            </div>
            <div className="col-6">
              <span className="f-b text-uppercase">{perm_barangay}</span>
              <br />
              <small>Barangay</small>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>11. PAGIBIG ID NO.</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {PAGIBIG !== "" ? PAGIBIG : "N/A"}
        </td>
        {/*  permanent_address adress city / province  */}
        <td colSpan={5} rowSpan={1} className=" p-0 pt-1 text-center ">
          <div className="row">
            <div className="col-6">
              <span className="f-b text-uppercase">{perm_city}</span>
              <br />
              <small>City/Municipality</small>
            </div>
            <div className="col-6">
              <span className="f-b text-uppercase">{perm_province}</span>
              <br />
              <small>Province</small>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>12.PHILHEALTH NO.</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {PHILHEALTH !== "" ? PHILHEALTH : "N/A"}
        </td>
        {/*  permanent_address adress zip code   */}
        <td colSpan={5} rowSpan={1} className=" p-0 pt-1 text-center ">
          <div className="row">
            <div className="col-6">
              <span className="f-b text-uppercase">{perm_zipCode}</span>
              <br />
              <small>Zip Code</small>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>13. SSS NO.</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {SSS !== "" ? SSS : "N/A"}
        </td>
        <td colSpan={2}>19. TELEPHONE NO.</td>
        <td colSpan={5} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.telephone_number !== ""
            ? facultyData.personal_info.telephone_number
            : "N/A"}
        </td>
      </tr>
      <tr>
        <td colSpan={2}>14. TIN NO</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {TIN !== "" ? TIN : "N/A"}
        </td>
        <td colSpan={2}>20. MOBILE NO.</td>
        <td colSpan={5} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.mobile_number !== ""
            ? facultyData.personal_info.mobile_number
            : "N/A"}
        </td>
      </tr>
      <tr>
        <td colSpan={2}>15. AGENCY EMPLOYEE NO.</td>
        <td colSpan={3} className="f-b txt-uppercase text-center">
          {facultyData.personal_info.employee_id !== ""
            ? facultyData.personal_info.employee_id
            : "N/A"}
        </td>
        <td colSpan={2}>21. EMAIL ADDRESS</td>
        <td colSpan={5} className="f-b text-center">
          {facultyData.personal_info.email !== ""
            ? facultyData.personal_info.email
            : "N/A"}
        </td>
      </tr>
    </>
  );
};

const FamiltyBacground = () => {
  return (
    <>
      <tr className="bg-grey">
        <td className="p-0 " colSpan={12}>
          <p className="m-0 f-b text-white ps-1"> II. FAMILY BACKGROUND</p>
        </td>
      </tr>
      <tr>
        <td colSpan={2} rowSpan={3}>
          22. SPOUSE'S SURNAME
          <br /> <br /> <br />
          <span className="ps-2">FIRST NAME</span>
          <br /> <br />
          <span className="ps-2">MIDDLE NAME</span>
        </td>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          N/A
        </td>
        <td colSpan={3} className="p-1 ">
          23. NAME of CHILDREN <br />
          <small>(Write in full name and list all)</small>
        </td>
        <td colSpan={2} className="p-1 ">
          DATE OF BIRTH <br />
          <small>(mm/dd/yyyy)</small>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className="f-b txt-unat txt-uppercase">
          N/A
        </td>
        <td colSpan={2}>
          <span className="txt-sm-lbl txt-ipit-1">
            NAME EXTENSION (JR. , SR.){" "}
            <span className="f-b txt-unat txt-uppercase">N/A</span>
          </span>
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase">
          N/A
        </td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase">
          N/A
        </td>
      </tr>
      <tr>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
      <tr>
        <td colSpan={2} className="ps-3 no-border-b">
          OCCUPATION
        </td>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
      <tr>
        <td colSpan={2} className="ps-3 no-border-b">
          EMPLOYER/BUSINESS NAME
        </td>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
      <tr>
        <td colSpan={2} className="ps-3 no-border-b">
          TELEPHONE NO.
        </td>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>

      <tr>
        <td colSpan={2} rowSpan={3} className="no-border-b">
          24. FATHER'S SURNAME
          <br /> <br />
          <span className="ps-2">FIRST NAME</span>
          <br /> <br />
          <span className="ps-2">MIDDLE NAME</span>
        </td>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
      <tr>
        <td colSpan={3} className="f-b txt-unat txt-uppercase">
          N/A
        </td>
        <td colSpan={2}>
          <span className="txt-sm-lbl txt-ipit-1">
            NAME EXTENSION (JR. , SR.){" "}
            <span className="f-b txt-unat txt-uppercase">N/A</span>
          </span>
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
      <tr>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>

      <tr>
        <td colSpan={2} rowSpan={4} className="no-border-b">
          24. MOTHER'S MAIDEN NAME
          <br />
          <br />
          <span className="ps-2">SURNAME</span>
          <br />
          <br />
          <span className="ps-2">FIRST NAME</span>
          <br />
          <br />
          <span className="ps-2">MIDDLE NAME</span>
        </td>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
      <tr>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
      <tr>
        <td colSpan={3} className="f-b txt-unat txt-uppercase">
          N/A
        </td>
        <td colSpan={2}>
          <span className="txt-sm-lbl txt-ipit-1">
            NAME EXTENSION (JR. , SR.){" "}
            <span className="f-b txt-unat txt-uppercase">N/A</span>
          </span>
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
      <tr>
        <td colSpan={5} className="f-b txt-unat txt-uppercase">
          n/a
        </td>
        <td colSpan={3} className="f-b txt-unat txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat txt-uppercase"></td>
      </tr>
    </>
  );
};

const EducationalBackgroundHeader = (props) => {
  // const facultyData = props.facultyData;

  return (
    <>
      <tr className="bg-grey">
        <td className="p-0 " colSpan={12}>
          <p className="m-0 f-b text-white ps-1">
            {" "}
            III. EDUCATIONAL BACKGROUND
          </p>
        </td>
      </tr>
      {/* educational background */}
      <tr>
        <td colSpan={2} rowSpan={2}>
          26. LEVEL
        </td>
        <td colSpan={2} rowSpan={2} className=" text-center">
          NAME OF SCHOOL <br />
          <small>(write in full)</small>
        </td>
        <td colSpan={3} rowSpan={2} className="text-center">
          BASIC EDUCATION/DEGREE/COURSE <br />
          <small>(write in full)</small>
        </td>
        <td colSpan={2} rowSpan={1} className=" text-center">
          PERIOD OF ATTENDANCE
        </td>
        <td colSpan={1} rowSpan={2} className="  ps-1">
          HIGHEST LEVEL/UNIT EARNED <br />
          <small>(if not graduated)</small>
        </td>
        <td colSpan={1} rowSpan={2} className="  text-center">
          YEAR GRADUATED
        </td>
        <td colSpan={1} rowSpan={2} className="ps-1  text-center">
          SCHOLARSHIP / ACADEMIC HONORS RECEIVED
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} className=" text-center">
          From
        </td>
        <td colSpan={1} rowSpan={1} className=" text-center">
          To
        </td>
      </tr>
    </>
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

  useEffect(() => {
    if (facultyData.hasOwnProperty("educ_elementary")) {
      setName(facultyData.educ_elementary.school_name);
      seteducation(facultyData.educ_elementary.basic_education);
      setfrom(facultyData.educ_elementary.period_from);
      setto(facultyData.educ_elementary.period_to);
      setlevel(facultyData.educ_elementary.highest_level);
      setgraduate(facultyData.educ_elementary.year_graduate);
      sethonor(facultyData.educ_elementary.honor_recieved);
    }
  }, []);

  return (
    <>
      {/* senior educ */}
      <tr>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          ELEMENTARY
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {name}
        </td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          {education}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {from}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {to}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {level}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {graduate}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {honor}
        </td>
      </tr>
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

  useEffect(() => {
    if (facultyData.hasOwnProperty("educ_juniorHigh")) {
      setName(facultyData.educ_juniorHigh.school_name);
      seteducation(facultyData.educ_juniorHigh.basic_education);
      setfrom(facultyData.educ_juniorHigh.period_from);
      setto(facultyData.educ_juniorHigh.period_to);
      setlevel(facultyData.educ_juniorHigh.highest_level);
      setgraduate(facultyData.educ_juniorHigh.year_graduate);
      sethonor(facultyData.educ_juniorHigh.honor_recieved);
    }
  }, []);

  return (
    <>
      {/* senior educ */}
      <tr>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          JUNIOR HIGH SCHOOL
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {name}
        </td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          {education}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {from}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {to}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {level}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {graduate}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {honor}
        </td>
      </tr>
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

  useEffect(() => {
    if (facultyData.hasOwnProperty("educ_seniorHigh")) {
      setName(facultyData.educ_seniorHigh.school_name);
      seteducation(facultyData.educ_seniorHigh.basic_education);
      setfrom(facultyData.educ_seniorHigh.period_from);
      setto(facultyData.educ_seniorHigh.period_to);
      setlevel(facultyData.educ_seniorHigh.highest_level);
      setgraduate(facultyData.educ_seniorHigh.year_graduate);
      sethonor(facultyData.educ_seniorHigh.honor_recieved);
    }
  }, []);

  return (
    <>
      {/* senior educ */}
      <tr>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          SENIOR HIGH SCHOOL
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {name}
        </td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          {education}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {from}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {to}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {level}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {graduate}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {honor}
        </td>
      </tr>
    </>
  );
};

const EducationalBackgroundVocational = (props) => {
  const facultyData = props.facultyData;

  return <VocationalEduc facultyData={facultyData} />;
};

const EducationalBackgroundCollege = (props) => {
  const facultyData = props.facultyData;

  return <CollegeEduc facultyData={facultyData} />;
};

const EducationalBackgroundGradStud = (props) => {
  const facultyData = props.facultyData;

  return <GraduateStudiesEduc facultyData={facultyData} />;
};

const VocationalEduc = (props) => {
  const facultyData = props.facultyData;
  let counter = 0;

  const [arr, setArr] = useState([]);
  const [hasNoData, setHasNoData] = useState(false);

  const noData = (
    <tr>
      <td
        colSpan={2}
        rowSpan={1}
        className="f-b px-0 txt-unat text-center txt-uppercase"
      >
        VOCATIONAL / TRADE COURSE
      </td>

      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
    </tr>
  );

  useEffect(() => {
    if (facultyData.educ_vocational.length !== 0) {
      setArr(facultyData.educ_vocational);
    } else {
      setHasNoData(true);
    }
  }, []);

  const vocational = arr.map((vocatinal) => {
    counter++;
    return (
      <tr key={vocatinal._id}>
        {counter === 1 && (
          <td
            colSpan={2}
            rowSpan={arr.length}
            className="f-b px-0 txt-unat text-center txt-uppercase"
          >
            VOCATIONAL / TRADE COURSE
          </td>
        )}
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {vocatinal.school_name}
        </td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          {vocatinal.course}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {vocatinal.period_from}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {vocatinal.period_to}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {vocatinal.units_earned}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {vocatinal.year_graduate}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {vocatinal.honor_recieved}
        </td>
      </tr>
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
  const [hasNoData, setHasNoData] = useState(false);

  const noData = (
    <tr>
      <td
        colSpan={2}
        rowSpan={1}
        className="f-b px-0 txt-unat text-center txt-uppercase"
      >
        COLLEGE
      </td>

      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
    </tr>
  );

  useEffect(() => {
    if (facultyData.educ_college.length !== 0) {
      setArr(facultyData.educ_college);
    } else {
      setHasNoData(true);
    }
  }, []);

  const collegeSet = arr.map((element) => {
    counter++;
    return (
      <tr key={element._id}>
        {counter === 1 && (
          <td
            colSpan={2}
            rowSpan={arr.length}
            className="f-b p-0  txt-unat text-center txt-uppercase"
          >
            COLLEGE
          </td>
        )}
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.school_name}
        </td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          {element.course}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.period_from}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.period_to}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.units_earned}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.year_graduate}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.honor_recieved}
        </td>
      </tr>
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
  const [hasNoData, setHasNoData] = useState(false);

  const noData = (
    <tr>
      <td
        colSpan={2}
        rowSpan={1}
        className="f-b px-0 txt-unat text-center txt-uppercase"
      >
        GRADUATE STUDIES
      </td>

      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
    </tr>
  );

  useEffect(() => {
    if (facultyData.educ_graduateStudies.length !== 0) {
      setArr(facultyData.educ_graduateStudies);
    } else {
      setHasNoData(true);
    }
  }, []);

  const gradStudSet = arr.map((element) => {
    counter++;
    return (
      <tr key={element._id}>
        {counter === 1 && (
          <td
            colSpan={2}
            rowSpan={arr.length}
            className="f-b px-0 txt-unat text-center txt-uppercase"
          >
            GRADUATE STUDIES
          </td>
        )}
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.school_name}
        </td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          {element.course}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.period_from}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.period_to}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.units_earned}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.year_graduate}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.honor_recieved}
        </td>
      </tr>
    );
  });

  return (
    <>
      {gradStudSet} {hasNoData && noData}
    </>
  );
};

const CivilServiceInfo = (props) => {
  const facultyData = props.facultyData;

  return (
    <>
      {/*  CIVIL SERVICE ELIGIBILITY */}
      <tr className="bg-grey">
        <td className="p-0 " colSpan={12}>
          <p className="m-0 f-b text-white ps-1">
            {" "}
            IV. CIVIL SERVICE ELIGIBILITY
          </p>
        </td>
      </tr>
      <tr>
        <td colSpan={2} rowSpan={2}>
          27. CAREER SERVICE / RA 1080 (BOARD/BAR) UNDER SPECIAL LAWS/ CES/
          CSEE/ BARANGAY ELIGIBILITY/ DRIVERS LICENSE
        </td>
        <td colSpan={2} rowSpan={2} className=" text-center">
          RATING <br />
          <small>(If Applicable)</small>
        </td>
        <td colSpan={2} rowSpan={2} className="text-center">
          DATE OF EXAMINATION / CONFIRMENT
        </td>
        <td colSpan={2} rowSpan={2} className=" text-center">
          PLACE OF EXAMINATION / CONFIRMENT
        </td>
        <td colSpan={4} rowSpan={1} className=" text-center">
          LICENSE
          <br />
          <small>(If Applicable)</small>
        </td>
      </tr>
      <tr>
        <td colSpan={2} className=" text-center">
          NUMBER
        </td>
        <td colSpan={2} className=" text-center">
          Date of Validity
        </td>
      </tr>
      <CivilService facultyData={facultyData} />
      <tr>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
      </tr>
    </>
  );
};

const CivilService = (props) => {
  const facultyData = props.facultyData;
  const [arr, setArr] = useState([]);
  const [hasNoData, setHasNoData] = useState(false);

  const noData = (
    <tr>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
    </tr>
  );

  useEffect(() => {
    if (facultyData.civil_elegibility.length !== 0) {
      setArr(facultyData.civil_elegibility);
    } else {
      setHasNoData(true);
    }
  }, []);

  const civilSet = arr.map((element) => {
    return (
      <tr key={element._id}>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.license_name}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.rating}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {dateTimeFormaterSlash(element.exam_date)}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.exam_place}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.license_number}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {dateTimeFormaterSlash(element.license_validity_date)}
        </td>
      </tr>
    );
  });

  return (
    <>
      {civilSet} {hasNoData && noData}
    </>
  );
};

const WorkExpInfo = (props) => {
  const facultyData = props.facultyData;

  return (
    <>
      {/*  WORK EXPERIENCE */}
      <tr className="bg-grey">
        <td className="p-0 " colSpan={12}>
          <p className="m-0 f-b text-white ps-1"> V. WORK EXPERIENCE</p>
        </td>
      </tr>
      <tr>
        <td colSpan={2} rowSpan={1}>
          28. INCLUSIVE DATES <br />
          <small>(mm/dd/yyyy)</small>
        </td>
        <td colSpan={2} rowSpan={2} className=" text-center">
          POSITION TITLE <br />
          <small>(Write in full. Do not abbrevriate)</small>
        </td>
        <td colSpan={3} rowSpan={2} className="text-center">
          Department / AGENCY / OFFICE / COMPANY <br />
          <small>(Write in full. Do not abbrevriate)</small>
        </td>
        <td colSpan={1} rowSpan={2} className=" text-center">
          MONTHLY SALARY
        </td>
        <td colSpan={2} rowSpan={2} className=" text-center">
          SALARY/ JOB/ PAY/ GRADE <br />
          <small>(If appicable) </small> & STEP
          <small>(Format "00-0")</small> INCREMENT
        </td>
        <td colSpan={1} rowSpan={2} className=" text-center">
          STATUS OF APPOINTMENT
        </td>
        <td colSpan={1} rowSpan={2} className=" text-center">
          GOV'T SERVICE (Y/N)
        </td>
      </tr>
      <tr>
        <td colSpan={1} className=" text-center">
          FROM
        </td>
        <td colSpan={1} className=" text-center">
          TO
        </td>
      </tr>
      <WorkExp facultyData={facultyData} />
      <tr>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase"></td>
      </tr>
    </>
  );
};

const WorkExp = (props) => {
  const facultyData = props.facultyData;
  const [arr, setArr] = useState([]);
  const [hasNoData, setHasNoData] = useState(false);

  const noData = (
    <tr>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
    </tr>
  );

  useEffect(() => {
    if (facultyData.work_exp.length !== 0) {
      setArr(facultyData.work_exp);
    } else {
      setHasNoData(true);
    }
  }, []);

  const WorkExpSet = arr.map((element) => {
    return (
      <tr key={element._id}>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {dateTimeFormaterSlash(element.period_from)}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {dateTimeFormaterSlash(element.period_from)}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.position}
        </td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          {element.company_name}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.monthly_salary}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.pay_grade}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.appointment_status}
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.isGov_service ? "Yes" : "No"}
        </td>
      </tr>
    );
  });

  return (
    <>
      {WorkExpSet} {hasNoData && noData}
    </>
  );
};

const VolunataryWorkInfo = () => {
  return (
    <>
      {" "}
      {/*  VOLUNTARY WORK */}
      <tr className="bg-grey">
        <td className="p-0 " colSpan={12}>
          <p className="m-0 f-b text-white ps-1">
            {" "}
            VI. VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERMENT / PEOPLE
            / VOLUNTARY ORGANIZATIONS
          </p>
        </td>
      </tr>
      <tr>
        <td colSpan={5} rowSpan={2}>
          29. NAME & ADDRESS OF ORGANIZATION <br />
          <small>(Write in full)</small>
        </td>
        <td colSpan={4} rowSpan={1} className=" text-center">
          INCLUSIVE DATES <br />
          <small>(mm/dd/yyyy)</small>
        </td>
        <td colSpan={1} rowSpan={2} className="text-center">
          NUMBERS OF HOURS
        </td>
        <td colSpan={2} rowSpan={2} className=" text-center">
          POSITION / NATURE OF WORK
        </td>
      </tr>
      <tr>
        <td colSpan={2} className=" text-center">
          FROM
        </td>
        <td colSpan={2} className=" text-center">
          TO
        </td>
      </tr>
      <tr>
        <td colSpan={5} className="f-b txt-unat text-center txt-uppercase">
          N/A
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          N/A
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          N/A
        </td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          N/A
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          N/A
        </td>
      </tr>
    </>
  );
};

const LearningDevInfo = (props) => {
  const facultyData = props.facultyData;

  return (
    <>
      <tr className="bg-grey">
        <td className="p-0 " colSpan={12}>
          <p className="m-0 f-b text-white ps-1">
            VII. LEARNING AND DEVELOPMENT (L&D) INTERVENTION / TRAININGS
            PROGRAMS ATTENDED
          </p>
        </td>
      </tr>
      <tr>
        <td colSpan={3} rowSpan={2}>
          30. TITLE OF LEARNING AND DEVELOPMENT (L&D) INTERVENTION / TRAININGS
          PROGRAMS
          <br />
          <small>(Write in full)</small>
        </td>
        <td colSpan={4} rowSpan={1} className=" text-center">
          INCLUSIVE DATES OF ATTENDANCE <br />
          <small>(mm/dd/yyyy)</small>
        </td>
        <td colSpan={1} rowSpan={2} className="text-center">
          NUMBERS OF HOURS
        </td>
        <td colSpan={2} rowSpan={2} className=" text-center">
          TYPE OF LD <br />
          <small>(MANAGERIAL / SUPERVISORY / TECHINICAL / ETC.)</small>
        </td>
        <td colSpan={2} rowSpan={2} className=" text-center">
          CONDUCTED / SPONSORED BY
          <br />
          <small>(Write in full)</small>
        </td>
      </tr>
      <tr>
        <td colSpan={2} className=" text-center">
          FROM
        </td>
        <td colSpan={2} className=" text-center">
          TO
        </td>
      </tr>
      <LerningDev facultyData={facultyData} />
      <tr>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>

        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase"></td>
      </tr>
    </>
  );
};

const LerningDev = (props) => {
  const facultyData = props.facultyData;
  const [learningDevArr, setLearningDevArr] = useState([]);
  const [hasNoData, setHasNoData] = useState(false);

  const noData = (
    <tr>
      <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>

      <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
      <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
        N/A
      </td>
    </tr>
  );

  useEffect(() => {
    if (facultyData.certificates.length !== 0) {
      setLearningDevArr(facultyData.certificates);
    } else {
      setHasNoData(true);
    }
  }, []);

  const LerningDevSet = learningDevArr.map((element) => {
    return (
      <tr key={element._id}>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          {element.certificate_name}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {dateTimeFormaterSlash(element.period_from)}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {dateTimeFormaterSlash(element.period_from)}
        </td>

        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          {element.total_hours}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.type}
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {element.conducted_by}
        </td>
      </tr>
    );
  });

  return (
    <>
      {LerningDevSet}
      {hasNoData && noData}
    </>
  );
};

const PSDFooter = (props) => {
  const facultyData = props.facultyData;

  return (
    <tfoot>
      <tr>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          SIGNATURE
        </td>
        <td colSpan={4} className="f-b txt-unat text-center txt-uppercase"></td>
        <td colSpan={1} className="f-b txt-unat text-center txt-uppercase">
          DATE
        </td>
        <td colSpan={2} className="f-b txt-unat text-center txt-uppercase">
          {dateTimeFormater2(new Date())}
        </td>
        <td colSpan={3} className="f-b txt-unat text-center txt-uppercase">
          PERSONAL DATA SHEET
        </td>
      </tr>
    </tfoot>
  );
};

export default PersonalDataSheet;
