"use client";

import React, { use } from "react";
import DropDown from "./dropdown";

const Navbar: React.FC = () => {
  return (
    <div className="w-[290px] h-full bg-violet-300 fixed top-0  left-0">
      <DropDown />
    </div>
  );
};

export default Navbar;
