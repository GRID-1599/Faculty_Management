import React from "react";
// import default_user_profile from ".././users-profile.png";

function RegistrationPersonalInfo(params) {
  return (
    <div className="personal-infos">
      <p className="text-uppercase  mt-lg-3 ms-4">Personal Informations</p>
      <form
        action=""
        className="px-5 pb-3 registration-wrapper custom-scrollbar"
      >
        <div className="row mb-3">
          <div className="col-md-4 order-md-last   p-3 px-5 d-flex flex-column align-items-center">
            <div
              className="img-wrapper border border-1 border-dark rounded "
              style={{ height: "150px", width: "150px" }}
            >
              <img src="default_user_profile" alt="" />
            </div>
            <button className="btn btn-sm btn-1 w-100 mx-3 my-1 ">
              Upload 2x2 picture
            </button>
          </div>

          <div className="col-md-7">
            <div className="col-sm-12 mb-4">
              <label className="form-label"> Email * </label>
              <input type="email" className="form-control" id="" required />
            </div>

            <div className="col-sm-12 mb-3">
              <label className="form-label"> Employee Number * </label>
              <input type="text" className="form-control" id="" required />
            </div>

            {/* <div className="col-sm-12 ">
              <label className="form-label">First Name </label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div> */}
          </div>
        </div>

        <div className="row mb-2 g-3 ">
          <div className="h5">Sample title</div>
          <div className="col-sm-4 ">
            <label className="form-label">First Name * </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-sm-3 ">
            <label className="form-label">Middle Name </label>
            <input type="text" name="" className="form-control" id="" />
          </div>
          <div className="col-sm-4 ">
            <label className="form-label">Last Name * </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-sm-1 ">
            <label className="form-label">Suffix </label>
            <input type="text" name="" className="form-control" id="" />
          </div>
          <div className="col-sm-4 ">
            <label className="form-label">Date of Birth * </label>
            <input
              type="date"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-sm-2 ">
            <label className="form-label">Age *</label>
            <input
              type="number"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-sm-4 ">
            <label className="form-label">Sex * </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-sm-5 ">
            <label className="form-label">Civil Status * </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-sm-2 ">
            <label className="form-label">Height </label>
            <input type="text" name="" className="form-control" id="" />
          </div>
          <div className="col-sm-2 ">
            <label className="form-label">Weight </label>
            <input type="text" name="" className="form-control" id="" />
          </div>
          <div className="col-sm-2 ">
            <label className="form-label">Blood Type </label>
            <input type="text" name="" className="form-control" id="" />
          </div>
          <div className="row my-3 mt-5 g-3">
            <div className="h5 ">Sample title</div>
            <div className="col-sm-4 ">
              <label className="form-label">GSIS ID No. </label>
              <input type="text" name="" className="form-control" id="" />
            </div>

            <div className="col-sm-4 ">
              <label className="form-label">PAG_IBIG ID No.</label>
              <input type="text" name="" className="form-control" id="" />
            </div>

            <div className="col-sm-4 ">
              <label className="form-label">PHILHEALTH No.</label>
              <input type="text" name="" className="form-control" id="" />
            </div>

            <div className="col-sm-4 ">
              <label className="form-label">SSS No.</label>
              <input type="text" name="" className="form-control" id="" />
            </div>

            <div className="col-sm-4 ">
              <label className="form-label">TIN No.</label>
              <input type="text" name="" className="form-control" id="" />
            </div>

            <div className="col-sm-4 ">
              <label className="form-label">Citizenship</label>
              <input type="text" name="" className="form-control" id="" />
            </div>
          </div>
          <div className="row my-3 mt-5 g-2 gx-3">
            <div className="h5">Resident Address</div>

            <div className="col-sm-4 ">
              <label className="form-label">House/Block/Lot No.</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">Street</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">Subdivision/Village</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">Barangay</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">City/Municipality</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">Province</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-4 ">
              <label className="form-label">Zip Code</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>
          </div>
          <div className="row my-3 mt-5 g-2 gx-3">
            <div className="h5">Permanent Address</div>

            <div className="col-sm-4 ">
              <label className="form-label">House/Block/Lot No.</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">Street</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">Subdivision/Village</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">Barangay</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">City/Municipality</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-5 ">
              <label className="form-label">Province</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-4 ">
              <label className="form-label">Zip Code</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>
          </div>
          <div className="row my-3 mt-5 g-2 gx-3">
            <div className="h5">Contact Information</div>
            <div className="col-sm-6 ">
              <label className="form-label">Telephone No.</label>
              <input type="text" name="" className="form-control" id="" />
            </div>

            <div className="col-sm-6 ">
              <label className="form-label">Mobile No. *</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-7 ">
              <label className="form-label">Alternate Email Address</label>
              <input type="text" name="" className="form-control" id="" />
            </div>
          </div>
        </div>

        <div className="row mt-5 g-1 ">
          <div className="col-md-3 offset-md-9 ">
            <button className="btn btn-1 w-100">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPersonalInfo;
