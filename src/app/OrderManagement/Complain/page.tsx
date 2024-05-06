"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/orderManagement/card";
import UpdateForm from "@/components/orderManagement/updateForm";
import axios from "axios";
import { MdCloudDone } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";

import Navbar from "@/components/common/navbar";

const Complain: React.FC = () => {
  interface TableData {
    ComplainId: string;
    orderId: string;
    customerMail: string;
    complainType: string;
    complainStatus: string;
    complainDetails: string;
  }

  const [TableData, setTableData] = useState<TableData[]>([]);
  const [count, setCount] = useState<number[]>([]);
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/complains")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar />
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
                {TableData.map((data, index) => (
                  <tr
                    key={index}
                    className="h-12 text-center bg-zinc-300 text-black"
                  >
                    <td>{data.ComplainId}</td>
                    <td>{data.orderId}</td>
                    <td>{data.customerMail}</td>
                    <td>{data.complainType}</td>
                    <td>{data.complainStatus}</td>
                    <td>{data.complainDetails}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <UpdateForm setShowForm={setShowForm} tableData={TableData} />
        </div>
      )}
    </div>
  );
};

export default Complain;
