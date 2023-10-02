import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TextInput } from "@tremor/react";
import React from "react";

const Navbar = () => {
  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className="font-bold md:text-lg text-gray-300">Dashboard</h1>
      <div className="py-2">
        <TextInput icon={MagnifyingGlassIcon} placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;
