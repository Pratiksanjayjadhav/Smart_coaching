import { useState, useEffect, useRef } from "react";
import API from "../../api/api";

const CreateTrainingPlan = () => {
  const [form, setForm] = useState({
    title: "",
    type: "",
    schedule: "",
    athletes: [], // to assign athlete IDs
  });

  const [athletesList, setAthletesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  // Fetch all athletes for the coach to assign
  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get("/coach/athletes", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAthletesList(res.data); // expect array of athletes { _id, name }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load athletes");
        setLoading(false);
      }
    };

    fetchAthletes();
  }, []);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggleAthlete = (id) => {
    if (form.athletes.includes(id)) {
      setForm({
        ...form,
        athletes: form.athletes.filter((athleteId) => athleteId !== id),
      });
    } else {
      setForm({ ...form, athletes: [...form.athletes, id] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await API.post("/coach/plan", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Training Plan Created Successfully!");
      setForm({ title: "", type: "", schedule: "", athletes: [] });
      setDropdownOpen(false);
    } catch (err) {
      console.error(err);
      alert("Error creating training plan");
    }
  };

  if (loading) return <p>Loading athletes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          padding: "25px",
          borderRadius: "12px",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Create Training Plan
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            name="title"
            placeholder="Plan Title"
            value={form.title}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "15px",
              backgroundColor: "white",
              color: "#000",
            }}
          >
            <option value="">Select Type</option>
            <option value="strength">Strength</option>
            <option value="endurance">Endurance</option>
            <option value="skills">Skills</option>
          </select>

          <input
            type="date"
            name="schedule"
            value={form.schedule}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          />


          {/* Dropdown for assigning athletes */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <div
              onClick={() => setDropdownOpen((prev) => !prev)}
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                backgroundColor: "#f5f5f5",
                color: "#000",
                cursor: "pointer",
                position: "relative",
                fontSize: "15px",
              }}
            >
              {form.athletes.length === 0
                ? "Assign to Athletes"
                : `${form.athletes.length} selected`}
            </div>

            {dropdownOpen && (
              <div
                style={{
                  backgroundColor: "white",
                  color: "#000",
                  maxHeight: "200px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  marginTop: "5px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >

                {athletesList.map((athlete) => (
                  <label
                    key={athlete._id}
                    style={{
                      display: "block",
                      padding: "8px 10px",
                      cursor: "pointer",
                      backgroundColor: form.athletes.includes(athlete._id)
                        ? "#e0e0e0"
                        : "white",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={form.athletes.includes(athlete._id)}
                      onChange={() => toggleAthlete(athlete._id)}
                      style={{ marginRight: "8px" }}
                    />
                    {athlete.name}
                  </label>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "6px",
              backgroundColor: "#6B7280",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Create Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTrainingPlan;
