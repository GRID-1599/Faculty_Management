import ChangePassword from "./change_password";

const UserPasswordChange = (props) => {
  const employeeId = props.employeeId;
  return (
    <main>
      <div className="container-xl px-4 float-start">
        <h1 className="mt-4">Change Password</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active"></li>
        </ol>
        <div className="row">
          <div className="col-md-6">
            <ChangePassword employeeId={employeeId} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserPasswordChange;
