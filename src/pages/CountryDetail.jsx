// src/pages/CountryDetailPage.jsx
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import countriesData from "../data/data.json";

const CountryDetailPage = () => {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const selectedCountry = countriesData.find(
      (c) => c.alpha3Code === alpha3Code
    );
    setCountry(selectedCountry);
  }, [alpha3Code]);

  if (!country) return <div className="text-center p-8">Loading...</div>;

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flags,
  } = country;

  const borderCountries = borders?.map((code) => {
    const match = countriesData.find((c) => c.alpha3Code === code);
    return match?.name || code;
  });

  return (
    <div className="min-h-screen p-6 md:px-20 md:py-10 font-sans transition-colors duration-300">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block shadow-md px-6 py-2 rounded text-sm font-light mb-10"
      >
        ← Back
      </Link>

      {/* Main layout: mobile column, desktop row */}
      <div className="flex flex-col md:flex-row md:items-start gap-14">
        {/* Flag */}
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src={flags?.png}
            alt={name}
            className="w-full rounded shadow-md"
          />
        </div>

        {/* Info Section */}
        <div className="md:flex-1">
          <h2 className="text-2xl font-extrabold mb-6">{name}</h2>

          {/* Two-column grid info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-sm mb-10">
            <p>
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p>
              <strong>Top Level Domain:</strong> {topLevelDomain?.join(", ")}
            </p>
            <p>
              <strong>Population:</strong> {population?.toLocaleString()}
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {currencies?.map((c) => c.name).join(", ")}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {languages?.map((l) => l.name).join(", ")}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>

          {/* Border Countries */}
          <div className="text-sm">
            <h3 className="font-semibold mb-2">Border Countries:</h3>
            <div className="flex flex-wrap gap-3">
              {borderCountries?.length ? (
                borderCountries.map((name, index) => (
                  <span
                    key={index}
                    className="shadow px-4 py-1 rounded text-xs"
                  >
                    {name}
                  </span>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
