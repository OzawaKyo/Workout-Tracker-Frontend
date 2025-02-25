import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { getUserProfile } from "./services/userServices";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const checkUser = async () => {
      const profile = await getUserProfile();
      setUser(profile);
      setLoading(false);
    };

    checkUser();
  }, []);

  // Separate useEffect for background color (only on mobile)
  useEffect(() => {
    const isMobile = window.innerWidth <= 450; // Adjust breakpoint if needed
    if (!isMobile) {
      document.body.style.backgroundColor = "#F5F5F7";
    }
    else if (location.pathname === "/") {
      document.body.style.backgroundColor = "#e2cbee";
    }
    else if (location.pathname === "/home") {
      document.body.style.backgroundColor = "#F2EFF0";
    }
  }, [location.pathname]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="iphone-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
