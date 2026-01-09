import React from "react";

const Dashboard = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/stedium.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // keeps image fixed
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden", // prevents scroll gaps
        paddingTop: "90px", // navbar space
      }}
    >
      <div className="container-fluid d-flex justify-content-center">
        <div
          className="container"
          style={{
            background: "rgba(0, 0, 0, 0.55)",
            borderRadius: "16px",
            padding: "35px",
            maxWidth: "900px",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <h1
            className="text-center mb-4 fw-bold"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            Welcome to Smart Coaching
          </h1>

          <p
            className="text-center mb-4 fs-5"
            style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}
          >
            View your training plans, performance stats, and progress.
          </p>

          <div className="row text-center">
            <div className="col-md-6 mb-3">
              <div
                className="p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                }}
              >
                <h4>Your Training Plans</h4>
                <p>No training plans assigned yet.</p>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div
                className="p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                }}
              >
                <h4>Performance Summary</h4>
                <p>Track your progress and achievements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;  