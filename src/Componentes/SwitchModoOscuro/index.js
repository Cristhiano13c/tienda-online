import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export const SwitchModoOscuro = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="custom-switch">
      <input
        type="checkbox"
        className="custom-switch__input"
        id="darkSwitch"
        onChange={toggleDarkMode}
        checked={darkMode}
      />
      <label className="custom-switch__label" htmlFor="darkSwitch">
        <div className="moon-icon">
          <box-icon name="moon"></box-icon>
        </div>Modo Oscuro
        <div className="custom-switch__inner"></div>
        <div className="custom-switch__switch"></div>
      </label>
    </div>
  );
};

