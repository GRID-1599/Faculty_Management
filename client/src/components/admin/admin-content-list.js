import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";

const ContentList = (props) => {
  const navigate = new useNavigate();
  const [contentList, setContentList] = useState([]);
  const [toLoad, setToLoad] = useState(false);

  var [updatedPointer, setUpdatedPointer] = useState(true);
  const makeUpdate = () => {
    setUpdatedPointer(!updatedPointer);
    console.log(updatedPointer);
  };

  useEffect(() => {
    setToLoad(true);
    Axios.get("http://localhost:3001/content/").then((response) => {
      setContentList(response.data);

      setToLoad(false);
    });
  }, [updatedPointer]);

  const loader = (
    <div className="wrapper  justify-content-center">
      <div
        className="spinner-border spinner-border-sm text-danger me-1"
        role="status"
      >
        <span className="visually-hidden">Checking...</span>
      </div>
      <span className="text-muted text-center ms-2  mt-5">
        Fetching Data. Please wait...
      </span>
    </div>
  );

  const noData = <div className="text-center">No information to display.</div>;

  return (
    <>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Content List</li>
      </ol>
      <div className="row mb-3 justify-content-end">
        <div className="col-md-12">
          <button
            className="btn btn-1 btn-sm px-5 "
            onClick={() => {
              navigate("./add");
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {contentList.length === 0 && noData}
          {toLoad && loader}
          {contentList.length !== 0 &&
            contentList.map((content) => {
              return (
                <ContentCard
                  key={content._id}
                  content={content}
                  makeUpdate={makeUpdate}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

const ContentCard = (props) => {
  const [title, setTitle] = useState(props.content.title);
  const [body, setBody] = useState(props.content.body);
  const [toLoad, setToLoad] = useState(false);
  const [toSumbit, setToSumbit] = useState(false);
  const [toEdit, setToEdit] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit();
  };

  const loader = (
    <div className="wrapper">
      <div
        className="spinner-border spinner-border-sm text-danger me-1"
        role="status"
      >
        <span className="visually-hidden">Checking...</span>
      </div>
      <span className="text-muted text-center  mt-5">Loading...</span>
    </div>
  );

  const loader2 = (
    <span
      className="spinner-border spinner-border-sm text-light mx-1"
      role="status"
    >
      <span className="visually-hidden">Checking...</span>
    </span>
  );

  const handleDelete = () => {
    console.log(props.content._id);
    Axios.delete(
      `http://localhost:3001/content/delete/${props.content._id}`
    ).then((response) => {
      console.log(response.data);
      handleClose();
      props.makeUpdate();
    });
  };

  const handleEdit = () => {
    setToSumbit(true);
    const data = {
      title: title,
      body: body,
    };
    Axios.post(
      `http://localhost:3001/content/update/${props.content._id}`,
      data
    ).then((response) => {
      console.log(response.data);
      props.makeUpdate();
      setToEdit(false);
      setDisabled(true);
      setToSumbit(false);
    });
  };

  return (
    <div className="col-md-10 mb-3">
      <div className="card">
        <div className="card-body">
          <p className="card-title text-muted">Content</p>
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
                    disabled={disabled}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <label>Title</label>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-floating " style={{ height: "10rem" }}>
                  <textarea
                    className="form-control h-100"
                    placeholder="Input body text here"
                    value={body}
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                    id="floatingTextarea"
                    disabled={disabled}
                  ></textarea>
                  <label>Body</label>
                </div>
              </div>

              <div className="col-md-12">
                {toEdit && (
                  <div className="form-floating">
                    <button className="btn btn-1 btn-sm float-end px-5 m-1">
                      Submit{toSumbit && loader2}
                    </button>
                    <span
                      className="btn btn-1 btn-sm float-end px-5 m-1"
                      onClick={() => {
                        setToEdit(false);
                        setDisabled(true);
                      }}
                    >
                      Cancel
                    </span>
                  </div>
                )}
                <div className="col-md-6 ms-2"> {toLoad && loader}</div>
              </div>
            </div>
          </form>
        </div>
        {!toEdit && (
          <div className="card-body ">
            <button
              className="btn btn-1 btn-sm float-end px-5 m-1"
              onClick={() => {
                setToEdit(true);
                setDisabled(false);
              }}
            >
              {" "}
              Edit
            </button>
            <button
              className="btn btn-1 btn-sm float-end px-5 m-1"
              onClick={handleShow}
            >
              {" "}
              Delete
            </button>
          </div>
        )}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure to delete content?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-1 btn-sm" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContentList;
