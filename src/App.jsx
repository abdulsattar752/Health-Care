// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SymptomChecker from './pages/SymptomChecker';
import ChatDoctor from './pages/ChatDoctor';
import DietPlanner from './pages/DietPlanner';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    // ──────────────────────────────────────────────
    // IMPORTANT: Router must wrap AuthProvider
    // so that useNavigate() inside AuthProvider works
    // ──────────────────────────────────────────────
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/symptom-checker" element={<ProtectedRoute><SymptomChecker /></ProtectedRoute>} />
            <Route path="/chat-doctor" element={<ProtectedRoute><ChatDoctor /></ProtectedRoute>} />
            <Route path="/diet-planner" element={<ProtectedRoute><DietPlanner /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;