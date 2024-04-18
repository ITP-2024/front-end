"use client";

import React, { useEffect, useState } from "react";
import Card from "@/app/Components/card";
import UpdateForm from "@/app/Components/updateForm";

import { MdCloudDone } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

const Complain: React.FC = () => {
  interface TableData {
    ComplainId: string;
    orderId: string;
    customerMail: string;
    complainType: string;
    complainStatus: string;
    complainDetails: string;
  }

  const [tableData, setTableData] = useState<TableData[]>([]);
  const [count, setCount] = useState<number>(4);
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`ml-[320px] mt-[90px] ${showForm ? "filter blur-sm" : ""}`}
      >
        <div className="flex justify-start mt-[20px] gap-4">
          <Card
            icon={<MdCloudDone />}
            title="Solved "
            value={count.toString()}
          />
          <Card
            icon={<MdPendingActions />}
            title="Pending"
            value={pendingCount.toString()}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={toggleForm}
            className="bg-purple-400 hover:bg-fuchsia-800 text-black hover:text-white font-bold py-2 px-4  mr-[20px] rounded"
          >
            Update Status
          </button>
          <button className="bg-purple-400 hover:bg-fuchsia-800 text-black hover:text-white font-bold py-2 px-4  mr-[20px] rounded">
            Assign Complain
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-[10px] mr-[20px] ">
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
                <tr className="h-12 text-center bg-zinc-300 text-black">
                  <td></td>
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
        <button>
          <IoNotifications />
        </button>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <UpdateForm />
        </div>
      )}
    </div>
  );
};

export default Complain;
