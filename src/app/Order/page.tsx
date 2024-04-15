"use client";

import React from "react";
import Navbar from "../Components/navbar";
import SearchBar from "../Components/searchbar";
import Card from "../Components/card";

import { MdCloudDone } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";

const Orders: React.FC = () => {
  interface TableData {
    ComplainId: number;
    orderId: string;
    customerMail: string;
    complainType: string;
    complainStatus: string;
    complainDetails: string;
  }

  return (
    <div>
      <Navbar />
      <div className="mt-[90px] ml-[320px]">
        <SearchBar
          title="Search "
          onSearch={function (query: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <div className="flex justify-start mt-[20px] gap-4">
          <Card icon={<MdCloudDone />} title="Total Order " value={"234"} />
          <Card icon={<MdPendingActions />} title="Pending" value={"4"} />
        </div>
        <div className="flex flex-col gap-4 mt-[20px] mr-[20px] ">
          <div className="max-h-[350px] overflow-y-auto">
            <table className="w-full table-auto ">
              <thead>
                <tr className="h-12">
                  {[
                    "Order ID",
                    "Customer ID",
                    "Product ID",
                    "Product Qty",
                    "Address",
                  ].map((header, index) => (
                    <th key={index} className="sticky top-0 bg-fuchsia-800">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="h-12 text-center bg-zinc-300 text-black">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
