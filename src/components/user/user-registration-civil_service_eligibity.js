import React from "react";

function RegistrationCivilService(params) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="civil-service-infos">
      <p className="text-uppercase  mt-lg-3 ms-4">civil Service Eligibilty</p>
      <form
        onSubmit={handleSubmit}
        className="px-5 pb-3 registration-wrapper custom-scrollbar"
      >
        <div className="row  g-3">
          <div className="col-sm-10 ">
            <label className="form-label">Career</label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-4 ">
            <label className="form-label">Rating</label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
        </div>

        <div className="row g-3 mt-2">
          <div className="col-sm-7 ">
            <label className="form-label">
              Date of Examination / Conferment
            </label>
            <input
              type="Date"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-7 ">
            <label className="form-label">
              Place of Examination / Conferment
            </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>
        </div>

        <div className="row g-3 mt-2">
          <div className="h6">License ( if applicable )</div>

          <div className="col-sm-7 ">
            <label className="form-label">Number</label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-7 ">
            <label className="form-label">Date of Validity</label>
            <input
              type="Date"
              name=""
              className="form-control"
              id=""
              required
            />
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

export default RegistrationCivilService;
