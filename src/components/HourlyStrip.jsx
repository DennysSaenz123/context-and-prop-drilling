import HourCard from "./HourCard.jsx";

function HourlyStrip({ hours, units }) {
  return (
    <ol className="hours">
      {hours.map((hour) => (
        <HourCard key={hour.hour} hour={hour} units={units} />
      ))}
    </ol>
  );
}

export default HourlyStrip;
