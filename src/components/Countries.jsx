import React, { use } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
