import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { register } from "../services/authService";
import useAuth from "../hooks/useAuth";

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
    try {
      await register(userData);
      navigate("/login"); // Redirige après inscription réussie
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register">
      <div className="register-header">
        <h1 className="register-t1">Join Us!</h1>
        <h2 className="register-t2">Create an account and start tracking!</h2>
      </div>

      <div className="register-form">
        <input
          className="register-input"
          type="text"
          name="name"
          placeholder="Enter name"
          value={userData.name}
          onChange={handleChange}
        />
        <input
          className="register-input"
          type="email"
          name="email"
          placeholder="Enter email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>

      {error && <p className="register-error">{error}</p>}

      <Button text="Sign Up" onClick={handleRegister} />

      <h3 className="register-t3">
        Already have an account? <a className="register-login" href="/login">Login here</a>
      </h3>
    </div>
  );
};

export default Register;
