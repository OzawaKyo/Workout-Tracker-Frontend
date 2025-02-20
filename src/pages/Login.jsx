import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import Button from "../components/Button";
import { login } from "../services/authService"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    try {
      await login(email, password); 
      navigate("/dashboard"); 
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
          placeholder="Enter email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          className="login-input" 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
