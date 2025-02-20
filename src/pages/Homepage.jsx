import { useNavigate } from "react-router-dom"; 
import "../assets/css/Homepage.css";
import runner from "../assets/images/running.gif";
import Button from "../components/Button";

const Homepage = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/login"); 
  };

  return (
    <div className="homepage">
      <img className="homepage-runner" src={runner} alt="Runner" />
      <h1 className="homepage-title">Your Passport to Fitness Success!</h1>
      <Button onClick={handleClick} text="Let's go!" /> 
    </div>
  );
};

export default Homepage;
