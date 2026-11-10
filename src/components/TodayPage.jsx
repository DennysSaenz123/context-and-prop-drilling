import CurrentConditions from "./CurrentConditions.jsx";
import HourlyStrip from "./HourlyStrip.jsx";

function TodayPage({ city, units }) {
  return (
    <section className="page">
      <h2 className="page-title">
        {city.name}, {city.region}
      </h2>
      <CurrentConditions current={city.current} units={units} />
      <HourlyStrip hours={city.hourly} units={units} />
    </section>
  );
}

export default TodayPage;
