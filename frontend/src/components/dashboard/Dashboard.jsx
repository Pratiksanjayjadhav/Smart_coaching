// frontend/src/components/dashboard/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! Here you can view your training plans, stats, and performance.</p>

      {/* Example sections */}
      <section style={{ marginTop: "20px" }}>
        <h2>Your Training Plans</h2>
        <p>No training plans assigned yet.</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Performance Summary</h2>
        <p>Track your progress and achievements here.</p>
      </section>
    </div>
  );
};

export default Dashboard;
