import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country.name.common);
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Country Name: {country.name.common}</h3>
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
    </div>
  );
};

export default Country;
