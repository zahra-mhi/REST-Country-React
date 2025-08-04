import { useEffect, useState } from "react";
import countriesData from "../data/data.json";
import CountryCard from "../components/CountryCard";

import SearchBar from "../components/SearchBar";
import FilterRegion from "../components/FilterRegion";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    setCountries(countriesData);
  }, []);  

  // فیلتر کردن بر اساس جستجو و منطقه
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRegion = region === "" || country.region === region;
    return matchesSearch && matchesRegion;
  });

  return (
    <main className=" min-h-screen px-4 md:px-8 lg:px-16 py-8 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterRegion region={region} setRegion={setRegion} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-15 xl:gap-20 mx-10 md:mx-0">
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </main>
  );
};

export default Home;
