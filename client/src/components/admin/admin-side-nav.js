import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faUsers,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon icon={faCoffee} color="white" />  */
}

function SideNav(params) {
  const navigate = useNavigate();

  const onClickFaculties = () => {
    navigate("../admin/faculty-list/");
  };

  const onClicktoApproveFaculties = () => {
    navigate("../admin/pending-approval-list/");
  };

  const onClickAdmin = () => {
    navigate("../admin/admin-list/");
  };

  // const onClickIssuedId = () => {
  //   navigate("../faculty/issued-id/");
  // };

  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu custom-scrollbar1">
          <div className="nav">
            {/* <div className="nav-link btn-link ">
              <form className=" w-100">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </form>
            </div> */}
            <div className="sb-sidenav-menu-heading">Faculty</div>
            <div className="nav-link btn-link" onClick={onClickFaculties}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUsers} color="white" />
              </div>
              All Faculty
            </div>
            <div
              className="nav-link btn-link"
              onClick={onClicktoApproveFaculties}
            >
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUserCheck} color="white" />
              </div>
              Pending for Approval
            </div>
            <div className="sb-sidenav-menu-heading">Admin</div>
            <div className="nav-link btn-link" onClick={onClickAdmin}>
              <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={faUserGroup} color="white" />
              </div>
              All Admin
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
