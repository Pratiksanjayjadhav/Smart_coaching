import { useState } from "react";
import API from "../../api/api";

const LogWorkout = () => {
  const [form, setForm] = useState({
    performance: "",
    fatigueLevel: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/athlete/log", form);
      alert("Workout Logged");
      setForm({ performance: "", fatigueLevel: "" });
    } catch {
      alert("Error logging workout");
    }
  };

  return (
    <div>
      <h3>Log Workout</h3>
      <form onSubmit={handleSubmit}>
        <input name="performance" placeholder="Performance Notes" onChange={handleChange} value={form.performance} required /><br/>
        <input type="number" name="fatigueLevel" placeholder="Fatigue (1–10)" onChange={handleChange} value={form.fatigueLevel} required /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogWorkout;
