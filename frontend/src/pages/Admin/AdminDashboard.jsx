import { useEffect, useState } from "react";
import API from "../../api/api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/admin/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await API.delete(`/admin/users/${id}`);
      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleEdit = (user) => {
    console.log("Edit user:", user);
    // Later: open modal or navigate to edit page
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px" ,textAlign:"center"}}>Admin Dashboard</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td style={tdStyle}>{u.name}</td>
              <td style={tdStyle}>{u.email}</td>
              <td style={tdStyle}>{u.role}</td>
              <td style={tdStyle}>
                <button
                  style={{ ...btnStyle, backgroundColor: "#4caf50" }}
                  onClick={() => handleEdit(u)}
                >
                  Edit
                </button>

                <button
                  style={{ ...btnStyle, backgroundColor: "#f44336" }}
                  onClick={() => handleDelete(u._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* Inline Styles */
const thStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

const btnStyle = {
  color: "#fff",
  border: "none",
  padding: "6px 10px",
  marginRight: "6px",
  cursor: "pointer",
  borderRadius: "4px",
};

export default AdminDashboard;
