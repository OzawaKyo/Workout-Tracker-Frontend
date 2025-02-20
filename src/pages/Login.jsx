import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import Button from "../components/Button";
import { login } from "../services/authService";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const isAuthenticated = useAuth(); // Vérifie si l'utilisateur est déjà connecté
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home"); // Redirige vers la page d'accueil si connecté
    }
  }, [isAuthenticated, navigate]);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError(null);
    try {
      await login(credentials.email, credentials.password);
      navigate("/"); // Redirige après connexion réussie
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login">
      <div className="login-header">
        <h1 className="login-t1">Hello Again!</h1>
        <h2 className="login-t2">Welcome back, you've been missed!</h2>
      </div>

      <div className="login-form">
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Enter email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>

      {error && <p className="login-error">{error}</p>}

      <Button text="Sign in" onClick={handleLogin} />

      <h3 className="login-t3">
        Not a member? <a className="login-register" href="/register">Register now</a>
      </h3>
    </div>
  );
};

export default Login;
