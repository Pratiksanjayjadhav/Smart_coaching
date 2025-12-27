import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/common/Navbar.jsx";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <AppRoutes /> {/* Do NOT put BrowserRouter here */}
    </AuthProvider>
  );
}

export default App;
