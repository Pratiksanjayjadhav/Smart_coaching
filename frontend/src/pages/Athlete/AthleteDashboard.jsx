import ViewAssignedPlans from "./ViewAssignedPlans";
import LogWorkout from "./LogWorkout";
import ViewProgress from "./ViewProgress";

const AthleteDashboard = () => {
  return (
    <div>
      <h2>Athlete Dashboard</h2>
      <ViewAssignedPlans />
      <LogWorkout />
      <ViewProgress />
    </div>
  );
};

export default AthleteDashboard;
