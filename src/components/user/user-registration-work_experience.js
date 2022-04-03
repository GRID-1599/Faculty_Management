import React from "react";

function RegistrationWorkExperience(params) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="work-exp-infos">
      <p className="text-uppercase  mt-lg-3 ms-4">Work Experience</p>
      <form
        onSubmit={handleSubmit}
        className="px-5 pb-3 registration-wrapper custom-scrollbar"
      >
        <div className="row  g-3">
          <div className="h5">Contact Information</div>
          <div className="col-sm-12 ">
            <label className="form-label">
              Position TITLE{"\t"}
              <small>(write in full / please do not abbreviate)</small>
            </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-12 ">
            <label className="form-label">
              Department{"\t"}
              <small>(write in full / please do not abbreviate)</small>
            </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-10 ">
            <label className="form-label">Monthly Salary</label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-10 ">
            <label className="form-label">Salary / Job / Pay Grade STEP </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-10 ">
            <label className="form-label">Status of Appointment</label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
        </div>

        <div className="row g-2 my-3">
          <div className="h6 m-0">Inclusives Dates</div>
          <div className="col-sm-6 ">
            <label className="form-label">From</label>
            <input
              type="date"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-6 ">
            <label className="form-label">To</label>
            <input
              type="Date"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
        </div>

        <div className="row g-2  my-4">
          <div className="h6 m-0">Goverment Service</div>

          <div className=" col-auto ms-3 form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Yes
            </label>
          </div>
          <div className="col-auto form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              No
            </label>
          </div>
        </div>

        <div className="row mt-5 g-1 ">
          <div className="col-md-3 ">
            <button className="btn btn-light w-100">Add more +</button>
          </div>
        </div>

        <div className="row mt-5 g-1 ">
          <div className="col-md-3 offset-md-6 ">
            <button className="btn btn-outline-danger w-100">Previous</button>
          </div>
          <div className="col-md-3 ">
            <button className="btn btn-1 w-100">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationWorkExperience;
