import React, { useState, useEffect } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import Axios from "axios";

function UserAddress(props) {
  const [no, setNo] = useState("");
  const [street, setStreet] = useState("");
  const [subdivision, setSubdivision] = useState("");
  const [barangay, setBarangay] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [btnEditName, setEditName] = useState("Edit Resident Address");

  const [disable, setDisable] = useState(true);

  const [btnEditHide, setBtnEditHide] = useState(true);
  const [btnsaveHide, setBtnSaveHide] = useState(false);

  const [perm_no, setPerm_No] = useState("");
  const [perm_street, setPerm_Street] = useState("");
  const [perm_subdivision, setPerm_Subdivision] = useState("");
  const [perm_barangay, setPerm_Barangay] = useState("");
  const [perm_city, setPerm_City] = useState("");
  const [perm_province, setPerm_Province] = useState("");
  const [perm_zipCode, setPerm_ZipCode] = useState("");

  const [disablePerm, setPermDisable] = useState(true);

  const [btnPermEditHide, setBtnPermEditHide] = useState(true);
  const [btnPermsaveHide, setBtnPermSaveHide] = useState(false);

  const onEditInfo = () => {
    setDisable(false);
    setBtnEditHide(false);
    setBtnSaveHide(true);
  };

  const permOnEditInfo = () => {
    setPermDisable(false);
    setBtnPermEditHide(false);
    setBtnPermSaveHide(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    setBtnEditHide(true);
    setBtnSaveHide(false);
  };

  const handlePermSubmit = (e) => {
    e.preventDefault();
    setPermDisable(true);

    setBtnPermEditHide(true);
    setBtnPermSaveHide(false);
  };

  const employeeId = props.employeeId;

  useEffect(() => {
    Axios.get(`http://localhost:3001/address/${employeeId}`, {}).then(
      (response) => {
        // console.log(response.data);
        const faculty = response.data;
        // console.log(dateFormater(faculty.birth_date));

        setNo(faculty.resident_address.lot_number);
        setStreet(faculty.resident_address.street);
        setSubdivision(faculty.resident_address.subdivision);
        setBarangay(faculty.resident_address.barangay);
        setCity(faculty.resident_address.city);
        setProvince(faculty.resident_address.province);
        setZipCode(faculty.resident_address.zip_code);

        setPerm_No(faculty.permanent_address.lot_number);
        setPerm_Street(faculty.permanent_address.street);
        setPerm_Subdivision(faculty.permanent_address.subdivision);
        setPerm_Barangay(faculty.permanent_address.barangay);
        setPerm_City(faculty.permanent_address.city);
        setPerm_Province(faculty.permanent_address.province);
        setPerm_ZipCode(faculty.permanent_address.zip_code);
      }
    );
  }, []);

  return (
    <main>
      <div className="container-xl px-4 float-start">
        <h1 className="mt-4">Faculty Profile </h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Address</li>
        </ol>
        <div className="row px-5 g-5">
          <div className="col-xl-5  border-styled">
            <p className="h5 mt-4">Resident Address</p>
            <form onSubmit={handleSubmit} className="row gy-2">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtNo"
                    placeholder="House/Block/Lot No"
                    value={no}
                    disabled={disable}
                    onChange={(e) => {
                      setNo(e.target.value);
                    }}
                  />
                  <label htmlFor="txtNo">House/Block/Lot No</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtStreet"
                    placeholder="Street"
                    value={street}
                    disabled={disable}
                    onChange={(e) => {
                      setStreet(e.target.value);
                    }}
                  />
                  <label htmlFor="txtStreet">Street</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtSubd"
                    placeholder="Subdivision/Village"
                    value={subdivision}
                    disabled={disable}
                    onChange={(e) => {
                      setSubdivision(e.target.value);
                    }}
                  />
                  <label htmlFor="txtSubd">Subdivision/Village</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="barangay"
                    placeholder="Barangay"
                    value={barangay}
                    disabled={disable}
                    onChange={(e) => {
                      setBarangay(e.target.value);
                    }}
                  />
                  <label htmlFor="barangay">Barangay</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtMuni"
                    placeholder="City/Municipality"
                    value={city}
                    disabled={disable}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                  <label htmlFor="txtMuni">City/Municipality</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtProvince"
                    placeholder="Province"
                    value={province}
                    disabled={disable}
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  />
                  <label htmlFor="txtProvince">Province</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtZip"
                    placeholder="Zip Code"
                    value={zipCode}
                    disabled={disable}
                    onChange={(e) => {
                      setZipCode(e.target.value);
                    }}
                  />
                  <label htmlFor="txtZip">Zip Code</label>
                </div>
              </div>
              <div className="row p-0 justify-content-end">
                <div className="col-md-6 mb-3 ">
                  {btnsaveHide ? (
                    <button className="btn btn-1 btn-sm w-100">
                      Save Changes
                    </button>
                  ) : null}
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-md-7 mb-3 ">
                {btnEditHide ? (
                  <button
                    className="btn btn-1 btn-sm w-100"
                    onClick={() => {
                      onEditInfo();
                    }}
                  >
                    Edit Resident Address
                  </button>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-xl-1"></div>
          <div className="col-xl-5 border-styled">
            <p className="h5 mt-4">Permanent Address</p>
            <form onSubmit={handlePermSubmit} className="row gy-2">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtpNo"
                    placeholder="House/Block/Lot No"
                    value={perm_no}
                    disabled={disablePerm}
                    onChange={(e) => {
                      setPerm_No(e.target.value);
                    }}
                  />
                  <label htmlFor="txtpNo">House/Block/Lot No</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtpStreet"
                    placeholder="Street"
                    value={perm_street}
                    disabled={disablePerm}
                    onChange={(e) => {
                      setPerm_Street(e.target.value);
                    }}
                  />
                  <label htmlFor="txtpStreet">Street</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtpSubd"
                    placeholder="Subdivision/Village"
                    value={perm_subdivision}
                    disabled={disablePerm}
                    onChange={(e) => {
                      setPerm_Subdivision(e.target.value);
                    }}
                  />
                  <label htmlFor="txtpSubd">Subdivision/Village</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtpBarangay"
                    placeholder="Barangay"
                    value={perm_barangay}
                    disabled={disablePerm}
                    onChange={(e) => {
                      setPerm_Barangay(e.target.value);
                    }}
                  />
                  <label htmlFor="txtpBarangay">Barangay</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtpMuni"
                    placeholder="City/Municipality"
                    value={perm_city}
                    disabled={disablePerm}
                    onChange={(e) => {
                      setPerm_City(e.target.value);
                    }}
                  />
                  <label htmlFor="txtpMuni">City/Municipality</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtpProvince"
                    placeholder="Province"
                    value={perm_province}
                    disabled={disablePerm}
                    onChange={(e) => {
                      setPerm_Province(e.target.value);
                    }}
                  />
                  <label htmlFor="txtpProvince">Province</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="txtpZip"
                    placeholder="Zip Code"
                    value={perm_zipCode}
                    disabled={disablePerm}
                    onChange={(e) => {
                      setPerm_ZipCode(e.target.value);
                    }}
                  />
                  <label htmlFor="txtpZip">Zip Code</label>
                </div>
              </div>
              <div className="row p-0 justify-content-end">
                <div className="col-md-6 mb-3 ">
                  {btnPermsaveHide ? (
                    <button className="btn btn-1 btn-sm w-100">
                      Save Changes
                    </button>
                  ) : null}
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-md-7 mb-3 ">
                {btnPermEditHide ? (
                  <button
                    className="btn btn-1 btn-sm w-100"
                    onClick={() => {
                      permOnEditInfo();
                    }}
                  >
                    Edit Permanent Address
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserAddress;
