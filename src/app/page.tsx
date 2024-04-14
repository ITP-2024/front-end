"use client";

import React, { useState } from "react";

import Dashboard from "./Dashboard/page";
import Orders from "./Order/page";
import Complain from "./Complain/page";
import Welcome from "./Welcome/page";

type Page = "Dashboard" | "Orders" | "Complain";

export default function Home() {
  return (
    <div className="page">
      <Complain />
    </div>
  );
}
