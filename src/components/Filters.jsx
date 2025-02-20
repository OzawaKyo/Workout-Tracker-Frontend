import React, { useState } from "react";
import "../assets/css/Filters.css";

const Filters = ({ options, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div className="filters-container">
      {options.map((option) => (
        <button
          key={option}
          className={`filter-button ${selected === option ? "selected" : ""}`}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Filters;
