import React, { use } from "react";
import "./Country.css";
import { useState } from "react";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  console.log(country.name.common);

  const handleVisit = () => {
    setVisited(!visited);
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
