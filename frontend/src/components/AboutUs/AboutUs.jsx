// src/components/about/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        paddingTop: "90px", // navbar space
      }}
    >
      <div className="container-fluid d-flex justify-content-center px-2">
        <div
          className="container"
          style={{
            background: "rgba(0, 0, 0, 0.45)",
            borderRadius: "16px",
            padding: "35px",
            maxWidth: "950px",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <h1
            className="text-center mb-4 fw-bold"
            style={{
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              fontSize: "2rem",
            }}
          >
            About Us
          </h1>

          <p
            className="text-center mb-4 fs-6"
            style={{
              textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
              lineHeight: "1.7",
            }}
          >
            At Smart Coaching, we provide comprehensive training solutions for athletes of all levels.
            Our platform helps in planning personalized workouts, tracking progress, and analyzing
            performance. Coaches can design structured training schedules while athletes can monitor
            their daily exercises and achievements. With real-time performance insights, athletes can
            improve techniques and reach their goals efficiently. We also provide tools for performance
            analytics, progress charts, and feedback to optimize training outcomes. Our mission is to
            empower athletes with professional guidance and digital tools for peak performance.
          </p>

          <div className="row text-center">
            <div className="col-12 col-md-6 mb-3">
              <div
                className="p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  minHeight: "120px",
                }}
              >
                <h4>Personalized Training</h4>
                <p>
                  Create customized workout plans for each athlete based on their unique needs and goals.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <div
                className="p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  minHeight: "120px",
                }}
              >
                <h4>Performance Analytics</h4>
                <p>
                  Track progress with charts, stats, and insights to improve techniques and outcomes.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <div
                className="p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  minHeight: "120px",
                }}
              >
                <h4>Goal Planning</h4>
                <p>
                  Set realistic goals and monitor progress to ensure continuous improvement.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <div
                className="p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  minHeight: "120px",
                }}
              >
                <h4>Coach Feedback</h4>
                <p>
                  Receive professional guidance and feedback to refine skills and achieve peak performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
