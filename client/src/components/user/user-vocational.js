import React from "react";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

function UserVocational(params) {
  return (
    <div className="user-home-main sb-nav-fixed">
      <TopNav />
      <div id="layoutSidenav">
        <SideNav />
        {/* CONTAINer */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-xl px-4 float-start">
              <h1 className="mt-4">Educational Background </h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Vocational / Trade Course
                </li>
              </ol>
              <div className="row"></div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Sample Footer</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default UserVocational;
