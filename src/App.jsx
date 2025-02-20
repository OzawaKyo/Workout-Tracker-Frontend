import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login"; 
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { getUserProfile } from "./services/userServices";


const App = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const checkUser = async () => {
          const profile = await getUserProfile();
          setUser(profile);
          setLoading(false);
      };

      checkUser();
  }, []);

  if (loading) return <div>Loading...</div>; // Évite le clignotement au chargement


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
