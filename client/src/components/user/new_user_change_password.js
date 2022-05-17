import ChangesPassword from "./change_password";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
const NewUserChangePassword = () => {
  const navigate = useNavigate();

  var theUser = sessionStorage.getItem("user");
  if (theUser !== null) {
    Axios.get(`http://localhost:3001/facultyFind/${theUser}`).then(
      (response) => {
        const id = response.data;
        console.log(id);
        if (id !== "NOUSER") {
          // setEmployeeId(id);
          // setToRender(true);
        } else {
          navigate("../../faculty/login");
          sessionStorage.removeItem("user");
        }
      }
    );
  } else {
    navigate("../../faculty/login");
    sessionStorage.removeItem("user");
  }
  return (
    <div
      className="user-login-main d-flex align-items-center  grd-bg-maroon"
      style={{ height: "100vh" }}
    >
      <div className="container ">
        <div className=" row justify-content-center ">
          <div className="col-lg-4  bg-red py-5 ">
            <div className="container mt-lg-3">
              <div className="row ">
                <p className="text-white h1 m-0 f-b ltsp-5 login-header">
                  FACULTY
                </p>
              </div>
              <div className="row">
                <p className="text-white h1 m-0 f-b ltsp-5 login-header">
                  MANAGEMENT
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 p-5 bg-white login-wrapper">
            <p
              className="h2 text-uppercase fw-bolder mt-lg-3"
              style={{
                letterSpacing: ".25rem",
              }}
            >
              New User
            </p>
            <p className="fw-lighter fs-8 fc-g">Change Password</p>
            <p className="fw-lighter fs-8 fc-g">Please input the following.</p>

            <ChangesPassword employeeId={theUser} navigateTo={"../faculty"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserChangePassword;
