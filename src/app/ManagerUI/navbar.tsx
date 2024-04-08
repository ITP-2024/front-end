"use client";

import React, { use } from "react";
import DropDown from "./dropdown";
import TopBar from "./topbar";

const Navbar: React.FC = () => {
  return (
    <div className="w-[290px] h-full bg-violet-300 fixed top-0  left-0">
      <DropDown />{/* Rendering the DropDown component */}
      <TopBar />{/* Rendering the TopBar component */}
    </div>
  );
};

export default Navbar;
