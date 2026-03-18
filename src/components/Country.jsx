import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleVisistedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    const newVisited = !visited;
    setVisited(newVisited);
    handleVisistedCountries(country, newVisited);
  };

  return (
    <div
      className={`country ${visited ? "country-visited" : "country-not-visited"}`}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Country Name: {country.name.common}</h3>
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
