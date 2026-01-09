import { useEffect, useState } from "react";
import API from "../../api/api";

const ViewAssignedPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not logged in");

        const res = await API.get("/athlete/plans", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPlans(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching plans:", err);
        setError(err.message || "Failed to fetch plans");
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)", // navbar height safe
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          padding: "35px",
          background: "rgba(0, 0, 0, 0.55)",
          borderRadius: "16px",
          color: "#fff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "2rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Assigned Training Plans
        </h1>

        {loading ? (
          <p style={{ textAlign: "center", fontSize: "1rem" }}>
            Loading assigned training plans...
          </p>
        ) : error ? (
          <p style={{ textAlign: "center", fontSize: "1rem" }}>{error}</p>
        ) : plans.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "1rem" }}>
            No training plans assigned yet.
          </p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {plans.map((plan) => (
              <li
                key={plan._id}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  marginBottom: "12px",
                  padding: "15px",
                  borderRadius: "12px",
                }}
              >
                <strong style={{ fontSize: "1.1rem" }}>{plan.title}</strong> –{" "}
                {plan.type} – Scheduled: {plan.schedule}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewAssignedPlans;



// import { useEffect, useState } from "react";
// import API from "../../api/api";

// const ViewAssignedPlans = () => {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("User not logged in");

//         const res = await API.get("/athlete/plans", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setPlans(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching plans:", err);
//         setError(err.message || "Failed to fetch plans");
//         setLoading(false);
//       }
//     };

//     fetchPlans();
//   }, []);

//   if (loading) return <p>Loading assigned training plans...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h3>Assigned Training Plans</h3>
//       {plans.length === 0 ? (
//         <p>No training plans assigned yet.</p>
//       ) : (
//         <ul>
//           {plans.map((plan) => (
//             <li key={plan._id}>
//               <strong>{plan.title}</strong> – {plan.type} – Scheduled: {plan.schedule}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ViewAssignedPlans;
