import forecasts from "../data/forecasts.json";

function CityPicker({ cityId, onCityChange }) {
  return (
    <label className="city-picker">
      City
      <select value={cityId} onChange={(e) => onCityChange(e.target.value)}>
        {forecasts.map((forecast) => (
          <option key={forecast.id} value={forecast.id}>
            {forecast.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CityPicker;
