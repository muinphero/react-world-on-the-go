import { use } from "react";
import Country from "./Country";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlags = (flag, isVisited) => {
    setVisitedFlags((prevVisitedFlags) => {
      const exists = prevVisitedFlags.includes(flag);

      if (isVisited && !exists) {
        return [...prevVisitedFlags, flag];
      }

      if (!isVisited && exists) {
        return prevVisitedFlags.filter((visitedFlag) => visitedFlag !== flag);
      }

      return prevVisitedFlags;
    });
  };

  const handleVisistedCountries = (country, isVisited) => {
    setVisitedCountries((prevVisitedCountries) => {
      const exists = prevVisitedCountries.some(
        (visitedCountry) => visitedCountry.name.common === country.name.common,
      );

      if (isVisited && !exists) {
        return [...prevVisitedCountries, country];
      }

      if (!isVisited && exists) {
        return prevVisitedCountries.filter(
          (visitedCountry) =>
            visitedCountry.name.common !== country.name.common,
        );
      }

      return prevVisitedCountries;
    });
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ol>
      <h3>Visited Flags: {visitedFlags.length}</h3>
      <div className="visited-flags">
        {visitedFlags.map((flag) => (
          <img
            key={flag}
            className="visited-flag-image"
            src={flag}
            alt="Visited country flag"
          />
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleVisistedCountries={handleVisistedCountries}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
