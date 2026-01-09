import { useState } from "react";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "athlete",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    /* ✅ ONLY THIS WRAPPER IS NEW */
    <div
      style={{
        minHeight: "calc(100vh - 70px)", // navbar height safe
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ❌ NOTHING INSIDE IS CHANGED */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.15)",
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px", color: "white",}}>
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "1px solid #374151",
            }}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "white",
            }}
          >
            <option value="athlete">Athlete</option>
            <option value="coach">Coach</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#6B7280",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
 