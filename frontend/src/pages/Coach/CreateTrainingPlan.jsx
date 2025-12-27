import { useState } from "react";
import API from "../../api/api";

const CreateTrainingPlan = () => {
  const [form, setForm] = useState({
    title: "",
    type: "",
    schedule: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/coach/plan", form);
      alert("Training Plan Created");
      setForm({ title: "", type: "", schedule: "" });
    } catch (err) {
      alert("Error creating plan");
    }
  };

  return (
    <div>
      <h3>Create Training Plan</h3>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Plan Title" onChange={handleChange} value={form.title} required /><br/>
        <select name="type" onChange={handleChange} value={form.type} required>
          <option value="">Select Type</option>
          <option value="strength">Strength</option>
          <option value="endurance">Endurance</option>
          <option value="skills">Skills</option>
        </select><br/>
        <input name="schedule" placeholder="Schedule (e.g. Mon-Fri)" onChange={handleChange} value={form.schedule} required /><br/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTrainingPlan;
