import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label
      className="toggle-switch"
      htmlFor="toggle"
      onChange={handleToggleSwitchChange}
    >
      <input type="checkbox" id="toggle" className="toggle-switch__checkbox" />
      <span className="toggle-switch__bubble"></span>
      <span className="toggle-switch__text toggle-switch__text_f">F</span>
      <span className="toggle-switch__text toggle-switch__text_c">C</span>
    </label>
  );
}

export default ToggleSwitch;
