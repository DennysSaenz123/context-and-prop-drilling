import { conditionIcon, hourLabel } from "../conditions.js";
import Temperature from "./Temperature.jsx";

function HourCard({ hour, units }) {
  return (
    <li className="hour">
      <span className="hour-time">{hourLabel(hour.hour)}</span>
      <span className="hour-icon">{conditionIcon(hour.condition)}</span>
      <Temperature celsius={hour.celsius} units={units} />
    </li>
  );
}

export default HourCard;
