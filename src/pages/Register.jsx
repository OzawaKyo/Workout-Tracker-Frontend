import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { register } from "../services/authService";
import useAuth from "../hooks/useAuth";
import "../assets/css/Login.css";

const Register = () => {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home"); // Redirige vers la page d'accueil si connecté
    }
  }, [isAuthenticated, navigate]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError(null);

    // Vérifier si tous les champs sont remplis
    if (!userData.name || !userData.email || !userData.password) {
        setError("All fields are required");
        return;
    }

    try {
        await register(userData);
        navigate("/login"); // Redirige après inscription réussie
    } catch (err) {
        setError(err.response?.data?.message || "Registration failed");
    }
};


  return (
    <div className="login">
      <div className="login-header">
        <h1 className="login-t1">Join Us!</h1>
        <h2 className="login-t2">Create an account and start tracking!</h2>
      </div>

      <div className="login-form">
        <input
          className="login-input"
          type="text"
          name="name"
          placeholder="Enter name"

          required

          value={userData.name}
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Enter email"
          value={userData.email}
          onChange={handleChange}
          required

        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          required

          value={userData.password}
          onChange={handleChange}
        />
      </div>

      {error && <p className="login-error">{error}</p>}

      <Button text="Sign Up" onClick={handleRegister} />

      <h3 className="login-t3">
        Already have an account? <a className="login-register" href="/login">Login here</a>
      </h3>
    </div>
  );
};

export default Register;
