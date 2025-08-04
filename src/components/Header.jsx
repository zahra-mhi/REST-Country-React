import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="shadow-md py-6 px-6 md:px-16 flex justify-between items-center container-padding">
      <h1 className="text-lg md:text-2xl font-extrabold">
        Where in the world?
      </h1>
      <ThemeToggle />
    </header>
  );
}
