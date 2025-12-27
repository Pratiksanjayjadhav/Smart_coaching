import { useEffect, useState } from "react";
import API from "../../api/api";
import ProgressChart from "../../components/charts/ProgressChart";

const ViewProgress = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      // dummy mapping until backend analytics
      const res = await API.get("/athlete/logs");
      const mapped = res.data.map((log) => ({
        date: new Date(log.date).toLocaleDateString(),
        score: log.fatigueLevel
      }));
      setProgress(mapped);
    };
    fetchProgress();
  }, []);

  return (
    <div>
      <h3>Progress Chart</h3>
      <ProgressChart data={progress} />
    </div>
  );
};

export default ViewProgress;
