import { Link } from "react-router"; 

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.alpha3Code}`}>
      <div className="card shadow-md rounded overflow-hidden transition hover:scale-105 duration-200">
        <img
          src={country.flags?.png}
          alt={`${country.name} flag`}
          className="w-full h-60 object-cover"
        />
        <div className="p-5 font-sans text-sm mb-10">
          <h2 className="text-lg font-extrabold mb-3">{country.name}</h2>
          <p>
            <strong>Population:</strong>{" "}
            {country.population?.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
