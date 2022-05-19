import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
const ContentAdd = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [toLoad, setToLoad] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loader = (
    <div className="wrapper">
      <div
        className="spinner-border spinner-border-sm text-danger me-1"
        role="status"
      >
        <span className="visually-hidden">Checking...</span>
      </div>
      <span className="text-muted text-center  mt-5">Checking...</span>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setToLoad(true);
    const data = {
      title: title,
      body: body,
    };
    Axios.post(`http://localhost:3001/content/create`, data).then(
      (response) => {
        console.log(response.data);
        setToLoad(false);
        handleShow();
      }
    );
  };

  return (
    <>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item ">Manage Content</li>
        <li className="breadcrumb-item active">Add</li>
      </ol>
      <div className="row justify-content-between ">
        <div className="col-auto">
          <p>Please input the following.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="row gy-3">
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <label>Title</label>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-floating " style={{ height: "25rem" }}>
                  <textarea
                    className="form-control h-100"
                    placeholder="Input body text here"
                    value={body}
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                    id="floatingTextarea"
                    cols={25}
                    rows="50"
                  ></textarea>
                  <label>Body</label>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-floating">
                  <button className="btn btn-1 float-end px-5"> Submit</button>
                </div>
                <div className="col-md-6 ms-2"> {toLoad && loader}</div>
              </div>
            </div>
          </form>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Body>New Content Added.</Modal.Body>
            <Modal.Footer className="border-0">
              <Button
                className="btn btn-1 w-25"
                onClick={() => {
                  handleClose();
                  navigate("../");
                }}
              >
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ContentAdd;
