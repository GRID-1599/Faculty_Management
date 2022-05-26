import React, { useState, useEffect } from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";
import { Modal, Button, Alert } from "react-bootstrap";

import Axios from "axios";

function UserAddress(props) {
  const employeeId = props.employeeId;
  const [facultyData, setFacultyData] = useState(null);

  const [toLoad, setToLoad] = useState(false);

  const loadingMessage = (
    <div className="mb-3">
      <div className="spinner-border  text-danger me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="h4 text-muted text-center  mt-5">Loading...</span>
    </div>
  );
  useEffect(() => {
    setToLoad(true);

    Axios.get(`http://localhost:3001/address/${employeeId}`, {}).then(
      (response) => {
        // console.log(response.data);
        const faculty = response.data;
        setFacultyData(faculty);
        setToLoad(false);
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
        {toLoad ? (
          loadingMessage
        ) : (
          <div className="container">
            {facultyData !== null && (
              <AddressWrapper
                AddressData={facultyData}
                employeeId={employeeId}
              />
            )}

            {facultyData === null && <AddAddress employeeId={employeeId} />}
          </div>
        )}
      </div>
    </main>
  );
}

const AddressWrapper = (props) => {
  const employeeId = props.employeeId;

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
    const newData = {
      lot_number: no,
      street: street,
      subdivision: subdivision,
      barangay: barangay,
      city: city,
      province: province,
      zip_code: zipCode,
    };
    Axios.post(
      `http://localhost:3001/address/resident/update/${employeeId}`,
      newData
    ).then((response) => {
      console.log(response.data);
      const faculty = response.data;

      setNo(faculty.resident_address.lot_number);
      setStreet(faculty.resident_address.street);
      setSubdivision(faculty.resident_address.subdivision);
      setBarangay(faculty.resident_address.barangay);
      setCity(faculty.resident_address.city);
      setProvince(faculty.resident_address.province);
      setZipCode(faculty.resident_address.zip_code);

      setDisable(true);
      setBtnEditHide(true);
      setBtnSaveHide(false);
    });
  };

  const handlePermSubmit = (e) => {
    e.preventDefault();
    const newData = {
      lot_number: perm_no,
      street: perm_street,
      subdivision: perm_subdivision,
      barangay: perm_barangay,
      city: perm_city,
      province: perm_province,
      zip_code: perm_zipCode,
    };
    Axios.post(
      `http://localhost:3001/address/permanent/update/${employeeId}`,
      newData
    ).then((response) => {
      console.log(response.data);
      const faculty = response.data;

      setPerm_No(faculty.permanent_address.lot_number);
      setPerm_Street(faculty.permanent_address.street);
      setPerm_Subdivision(faculty.permanent_address.subdivision);
      setPerm_Barangay(faculty.permanent_address.barangay);
      setPerm_City(faculty.permanent_address.city);
      setPerm_Province(faculty.permanent_address.province);
      setPerm_ZipCode(faculty.permanent_address.zip_code);

      setPermDisable(true);

      setBtnPermEditHide(true);
      setBtnPermSaveHide(false);
    });
  };

  useEffect(() => {
    // console.log(response.data);
    const faculty = props.AddressData;

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
  }, []);

  return (
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
                <button className="btn btn-1 btn-sm w-100">Save Changes</button>
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
                <button className="btn btn-1 btn-sm w-100">Save Changes</button>
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
  );
};

const AddAddress = (props) => {
  const [no, setNo] = useState("");
  const [street, setStreet] = useState("");
  const [subdivision, setSubdivision] = useState("");
  const [barangay, setBarangay] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [perm_no, setPerm_No] = useState("");
  const [perm_street, setPerm_Street] = useState("");
  const [perm_subdivision, setPerm_Subdivision] = useState("");
  const [perm_barangay, setPerm_Barangay] = useState("");
  const [perm_city, setPerm_City] = useState("");
  const [perm_province, setPerm_Province] = useState("");
  const [perm_zipCode, setPerm_ZipCode] = useState("");

  const [showUpdate, setShowUpdate] = useState(false);

  const noResidentAddress = () => {
    console.log("mo resident");
    setNo("none");
    setStreet("none");
    setSubdivision("none");
    setBarangay("none");
    setCity("none");
    setProvince("none");
    setZipCode("none");
  };

  const noPermanentAddress = () => {
    setPerm_No("none");
    setPerm_Street("none");
    setPerm_Subdivision("none");
    setPerm_Barangay("none");
    setPerm_City("none");
    setPerm_Province("none");
    setPerm_ZipCode("none");
  };

  const toAdd = () => {
    const address = {
      employee_id: props.employeeId,
      resident_address: {
        lot_number: no,
        street: street,
        subdivision: subdivision,
        barangay: barangay,
        city: city,
        province: province,
        zip_code: zipCode,
      },
      permanent_address: {
        lot_number: perm_no,
        street: perm_street,
        subdivision: perm_subdivision,
        barangay: perm_barangay,
        city: perm_city,
        province: perm_province,
        zip_code: perm_zipCode,
      },
    };

    Axios.post("http://localhost:3001/address/create", address).then(
      (response) => {
        setShowUpdate(true);
        console.log("submit", address);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("xx add");
    toAdd();
  };
  return (
    <div className="row px-md-5 mt-3">
      <p className="m-1 mb-3 lead">Please inputs your address informations. </p>
      <div className=" border-styled p-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 mb-3">
            <div className="row  justify-content-between">
              <div className="col">
                <p className="h5 mt-4">Resident Address</p>
              </div>
              <div className="col">
                <p className=" mt-4"> Write "none" or "n/a" if none</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="txtNo"
                  value={no}
                  placeholder="House/Block/Lot No"
                  required={true}
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
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setSubdivision(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setBarangay(e.target.value);
                  }}
                  required
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
                  value={city}
                  placeholder="City/Municipality"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setProvince(e.target.value);
                  }}
                  required
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
                  value={zipCode}
                  placeholder="Zip Code"
                  onChange={(e) => {
                    setZipCode(e.target.value);
                  }}
                  required
                />
                <label htmlFor="txtZip">Zip Code</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <p
                  className="btn btn-1 btn-sm mt-3 mb-0 float-end"
                  onClick={() => {
                    noResidentAddress();
                  }}
                >
                  No Resident address
                </p>
              </div>
            </div>
          </div>
          <div className="row  g-3 mb-3">
            <p className="h5 mt-4">Permanent Address</p>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="txtpNo"
                  placeholder="House/Block/Lot No"
                  value={perm_no}
                  onChange={(e) => {
                    setPerm_No(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setPerm_Street(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setPerm_Subdivision(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setPerm_Barangay(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setPerm_City(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setPerm_Province(e.target.value);
                  }}
                  required
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
                  onChange={(e) => {
                    setPerm_ZipCode(e.target.value);
                  }}
                  required
                />
                <label htmlFor="txtpZip">Zip Code</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <p
                  className="btn btn-1 btn-sm mt-3 mb-0 float-end"
                  onClick={() => {
                    noPermanentAddress();
                  }}
                >
                  No Permanent address
                </p>
              </div>
            </div>
          </div>
          <div className="row my-3 mt-5">
            <button type="submit" className="btn btn-1">
              Submit Address Informations
            </button>
          </div>
        </form>
      </div>
      {showUpdate && <UpdatedModal bodyText="Updated" show={true} />}
    </div>

    //
  );
};

const UpdatedModal = (props) => {
  const [show, setShow] = useState(props.show);
  return (
    <Modal show={show} backdrop="static" keyboard={false} centered>
      <Modal.Body>{props.bodyText}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            setShow(false);
          }}
        >
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserAddress;
