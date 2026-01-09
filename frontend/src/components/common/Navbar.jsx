import React from "react"; 
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundImage: "url('/stedium.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          display: "flex",
          alignItems: "center",
          padding: "12px 24px",
          color: "white",
        }}
      >
        {/* Left: Logo */}
        <div style={{ width: "200px" }}>
          <Link
            to="/"
            style={{
              fontSize: "21px",
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Smart Coaching
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            gap: "35px",
            alignItems: "center",
          }}
        >
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>

          {!user ? (
            <>
              <Link to="/register" style={linkStyle}>Register</Link>
              <Link to="/login" style={linkStyle}>Login</Link>
            </>
          ) : (
            <>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                Welcome, {user.name}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#2563EB",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Right: Profile Icon */}
        {user && (
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <FaUserCircle size={30} />
          </div>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: "500",
  textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
};

export default Navbar;
