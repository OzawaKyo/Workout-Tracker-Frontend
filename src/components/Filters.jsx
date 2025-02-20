import React, { useState, useEffect } from "react";
import "../assets/css/Filters.css";

const Filters = ({ options, onSelect }) => {
  const [selected, setSelected] = useState(options[0]); // Sélectionner le premier filtre par défaut

  useEffect(() => {
    onSelect(options[0]); // Déclencher `onSelect` au montage avec le premier filtre
  }, [options, onSelect]);

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
