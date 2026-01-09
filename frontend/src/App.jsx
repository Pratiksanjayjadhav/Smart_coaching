
import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/common/Navbar.jsx";

function App() {
  return (
     <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/stedium.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </div>
    // <AuthProvider>
    //   <Navbar />
    //   <div style={{ padding: "20px" }}>
    //     <AppRoutes />
    //   </div>
    // </AuthProvider>
  );
}

export default App;

// import { AuthProvider } from "./context/AuthContext.jsx";
// import AppRoutes from "./routes/AppRoutes.jsx";
// import Navbar from "./components/common/Navbar.jsx";

// function App() {
//   return (
//     <AuthProvider>
//       <Navbar />
//       <AppRoutes /> {/* BrowserRouter is already in main.jsx */}
//     </AuthProvider>
//   );
// }

// export default App;
