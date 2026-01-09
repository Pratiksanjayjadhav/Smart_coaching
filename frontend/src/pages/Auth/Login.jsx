import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser({ email, password });
      if (!user || !user.role) return;

      
      if (user.token) localStorage.setItem("token", user.token);

      switch (user.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "coach":
          navigate("/coach/dashboard");
          break;
        case "athlete":
          navigate("/athlete/dashboard");
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      alert("Login failed!");
      console.error(err);
    }
  };

  return (
    /* ✅ ONLY THIS WRAPPER IS ADDED */
    <div
      style={{
        minHeight: "calc(100vh - 70px)", // navbar safe height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ❌ FORM CONTENT NOT CHANGED */}
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" ,color:"white" }}>
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
