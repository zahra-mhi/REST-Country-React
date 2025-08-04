import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full md:w-[400px]">
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full px-6 py-3 rounded-md shadow-md text-sm placeholder-gray"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
