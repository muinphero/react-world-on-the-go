import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleVisistedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  const [flagVisited, setFlagVisited] = useState(false);

  const handleVisit = () => {
    const newVisited = !visited;
    setVisited(newVisited);
    handleVisistedCountries(country, newVisited);
  };

  const handleFlagVisit = () => {
    const newFlagVisited = !flagVisited;
    setFlagVisited(newFlagVisited);
    handleVisitedFlags(country.flags.flags.png, newFlagVisited);
  };

  return (
    <div
      className={`country ${visited ? "country-visited" : "country-not-visited"}`}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3 className="country-title">Country Name: {country.name.common}</h3>
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <div className="country-actions">
        <button onClick={handleVisit}>{visited ? "Visited" : "Not Visited"}</button>
        <button onClick={handleFlagVisit}>
          {flagVisited ? "Flag Added" : "Add Visited Flag"}
        </button>
      </div>
    </div>
  );
};

export default Country;
