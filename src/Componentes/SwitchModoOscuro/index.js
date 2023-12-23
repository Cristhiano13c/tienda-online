import React from "react";

export const SwitchModoOscuro = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="custom-switch">
      <input
        type="checkbox"
        className="custom-switch-input"
        id="darkSwitch"
        onChange={toggleDarkMode}
        checked={darkMode}
      />
      <label className="custom-switch-label" htmlFor="darkSwitch">
        <div className="moon-icon">
          <box-icon name="moon"></box-icon>
        </div>Modo Oscuro
        <div className="custom-switch-inner"></div>
        <div className="custom-switch-switch"></div>
      </label>
    </div>
  );
};

