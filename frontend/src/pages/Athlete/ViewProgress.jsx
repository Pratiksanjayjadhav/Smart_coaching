import { useEffect, useState } from "react";
import API from "../../api/api";
import ProgressChart from "../../components/charts/ProgressChart";

const ViewProgress = () => {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not logged in");

        const res = await API.get("/athlete/logs", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const mapped = res.data.map((log) => ({
          date: new Date(log.date).toLocaleDateString(),
          score: Number(log.fatigueLevel || 0),
        }));

        setProgress(mapped);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching progress:", err);
        setError("Failed to fetch progress data");
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (loading) return <p>Loading progress chart...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "900px",
        margin: "20px auto",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Progress Chart</h3>
      {progress.length === 0 ? (
        <p>No workout logs found.</p>
      ) : (
        <div style={{ width: "100%", height: "400px" }}>
          <ProgressChart data={progress} />
        </div>
      )}
    </div>
  );
};

export default ViewProgress;
