import React from "react";
import "../assets/css/Button.css";

const Button = ({ text, onClick }) => { 
  return (
    <button className="button1" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
