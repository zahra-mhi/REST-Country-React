import React from "react";

export default function FilterRegion({ region, setRegion }) {
  return (
    <div className="w-[200px]">
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="w-full px-5 py-3 rounded-md shadow-md text-sm"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}