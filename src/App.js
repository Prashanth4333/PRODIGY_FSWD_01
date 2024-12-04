import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Keep only one Router import
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "./ForgotPassword";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function App() {
  return (
    <Router>
      <div>
        {/* Your App Components */}
        <ToastContainer />  {/* Add ToastContainer to display notifications */}

        <Routes>
          {/* Default route to redirect to signup */}
          <Route path="/" element={<Navigate to="/signup" />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
