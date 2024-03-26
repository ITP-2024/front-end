"use client";

import React, { useState } from "react";
import Card from "./card";
import SearchBar from "./searchbar";
import { MdCloudDone } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

const Complain = () => {
  const [status, setStatus] = useState("Processing");

  const toggleStatus = () => {
    if (status === "Clear") {
      alert("You cannot change the status from 'Clear'.");
    } else {
      const confirmation = window.confirm(
        "Are you sure you want to change the status to Clear?"
      );
      if (confirmation) {
        setStatus("Clear");
      }
    }
  };

  return (
    <div className="ml-[320px]">
      <div className=" mt-[30px] mt-[90px]">
        <SearchBar title="Search " />
        <div className="text-[36px] pr-9 grid justify-end">
          <svg
            stroke="#871a99"
            fill="#871a99"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66zM256 480a80.06 80.06 0 0 0 70.44-42.13 4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480z"></path>
          </svg>
        </div>
      </div>

      <div className="flex justify-start mt-[20px] gap-4">
        <Card icon={<MdCloudDone />} title="Solved " value="19" />
        <Card icon={<MdPendingActions />} title="Pending" value="03" />
      </div>
      <div className="flex flex-col gap-4 mt-[50px] mr-[20px] ">
        <div className="max-h-[350px] overflow-y-auto">
          <table className="w-full table-auto ">
            <thead>
              <tr className="h-12">
                {[
                  "Complain ID",
                  "Order ID",
                  "Customer Mail",
                  "Complain Type",
                  "Complain Status",
                  "Complain Details",
                ].map((header, index) => (
                  <th key={index} className="sticky top-0 bg-fuchsia-800">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="h-12 text-center bg-zinc-300 text-black ">
                <td>1024</td>
                <td>984AhB</td>
                <td>saneef1231@gmail.com</td>
                <td>Exchange</td>
                <td className="cursor-pointer" onClick={toggleStatus}>
                  {status}
                </td>
                <td className="bg-zinc-300 text-black">
                  The color was mistake
                </td>
              </tr>
              <tr className="h-12 text-black text-center bg-zinc-400">
                <td>4302</td>
                <td>5784AQ</td>
                <td>saheel87@gmail.com</td>
                <td>Refund</td>
                <td className="cursor-pointer" onClick={toggleStatus}>
                  {status}
                </td>
                <td>The item was different</td>
              </tr>
              <tr className="h-12 text-black text-center bg-zinc-300">
                <td>"fsfaft"</td>
                <td>"fdsaf"</td>
                <td>"dsfsf"</td>
                <td>"asfaf"</td>
                <td>fagaggg</td>
                <td>fagaggg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button>
        <IoNotifications />
      </button>
    </div>
  );
};

export default Complain;
