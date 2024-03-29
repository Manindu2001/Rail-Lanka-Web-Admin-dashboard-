import React from "react";
import { useAdmin } from "../../components/Auth/AdminContext";

function AdminDetails() {
  const { adminDetails } = useAdmin(); // Access the admin's details from AdminContext

  if (!adminDetails) {
    // Handle the case when adminDetails is null (loading or not logged in)
    return (
      <div className="container mt-5">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container-lg my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="card">
            <div className="card-body">
              <form className="row g-3 p-3">
                <div className="col-md-6">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={adminDetails.userName}
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={adminDetails.email}
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Railway Station</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={adminDetails.city}
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Railway Station ID</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={adminDetails.stationId}
                    readOnly
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDetails;
