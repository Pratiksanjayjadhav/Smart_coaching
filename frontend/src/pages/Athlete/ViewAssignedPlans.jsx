import { useEffect, useState } from "react";
import API from "../../api/api";

const ViewAssignedPlans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const res = await API.get("/athlete/plans");
      setPlans(res.data);
    };
    fetchPlans();
  }, []);

  return (
    <div>
      <h3>Assigned Training Plans</h3>
      <ul>
        {plans.map(plan => (
          <li key={plan._id}>
            {plan.title} – {plan.type} – {plan.schedule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAssignedPlans;
