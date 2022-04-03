import React from "react";

function RegistrationTrainingSeminars(params) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="civil-service-infos">
      <p className="text-uppercase  mt-lg-3 ms-4">
        Learning and Development (L&D) {"\n"} Interventions / Training Programs
        Attended
      </p>
      <form
        onSubmit={handleSubmit}
        className="px-5 pb-3 registration-wrapper custom-scrollbar"
      >
        <div className="row  g-3">
          <div className="col-sm-10 ">
            <label className="form-label">
              Title of Learning and Development Interventions/Trainings Programs{" "}
              <small>(please write in full)</small>
            </label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-4 ">
            <label className="form-label">Type</label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="row g-3 mt-2">
            <div className="h6 mb-0">Inclusives dates of attendance</div>
            <div className="col-sm-6 ">
              <label className="form-label">From</label>
              <input
                type="Date"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>

            <div className="col-sm-6 ">
              <label className="form-label">To</label>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                required
              />
            </div>
          </div>

          <div className="col-sm-4 ">
            <label className="form-label">Number of Hours</label>
            <input
              type="text"
              name=""
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-sm-10 ">
            <label className="form-label">
              Type of LD <small>(Managerial/Supervisory/Technical/etc)</small>
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
            <label className="form-label">
              Conducted/Sponsored by <small>(please write in full)</small>
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
          <div className="h6 mb-0">Certificates</div>

          <div className="col-sm-7 ">
            <label className="form-label"></label>
            <input
              type="File"
              name=""
              className="form-control"
              id=""
              required
              multiple
            />
          </div>
        </div>

        <div className="row mt-5 g-1 ">
          <div className="col-md-3 ">
            <button className="btn btn-light w-100">Add more +</button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 g-1 ">
          <div className="col-md-3 offset-md-6 ">
            <button className="btn btn-outline-danger w-100">Previous</button>
          </div>
          <div className="col-md-3 ">
            <button className="btn btn-1 w-100">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationTrainingSeminars;
