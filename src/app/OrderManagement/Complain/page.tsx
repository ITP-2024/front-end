"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/orderManagement/card";
import UpdateForm from "@/components/orderManagement/updateForm";
import AssignForm from "@/components/orderManagement/AssignComplainForm";
import axios from "axios";
import { MdCloudDone } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import ImageCard from "@/components/orderManagement/imageCard";
import Navbar from "@/components/common/navbar";

const Complain: React.FC = () => {
  interface TableData {
    ComplainId: string;
    orderId: string;
    customerMail: string;
    complainType: string;
    complainStatus: string;
    complainDetails: string;
    image: string;
  }

  const sampleData: TableData[] = [
    {
      ComplainId: "001",
      orderId: "ORD001",
      customerMail: "customer1@example.com",
      complainType: "Delivery",
      complainStatus: "Pending",
      complainDetails: "Delayed delivery",
      image: "/path/to/image1.jpg",
    },
    {
      ComplainId: "002",
      orderId: "ORD002",
      customerMail: "customer2@example.com",
      complainType: "Product Quality",
      complainStatus: "Solved",
      complainDetails: "Received damaged product",
      image: "/path/to/image2.jpg",
    },
  ];

  const [TableData, setTableData] = useState<TableData[]>([]);
  const [count, setCount] = useState<number[]>([]);
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showAssignForm, setShowAssignForm] = useState(false);
  const [selectedComplainId, setSelectedComplainId] = useState<string | null>(
    null
  );

  const handleAssignComplainClick = (complainId: string) => {
    setSelectedComplainId(complainId);
    setShowUpdateForm(false);
    setShowAssignForm(true);
  };

  const handleUpdateStatusClick = () => {
    setShowUpdateForm(true);
    setShowAssignForm(false);
  };

  useEffect(() => {
    setTableData(sampleData);
  }, []);

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

  return (
    <div>
      <Navbar />
      <div
        className={`ml-[320px] mt-[90px] ${
          showUpdateForm || showAssignForm ? "filter blur-sm" : ""
        }`}
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
            onClick={handleUpdateStatusClick}
            className="bg-purple-400 hover:bg-fuchsia-800 text-black hover:text-white font-bold py-2 px-4  mr-[20px] rounded"
          >
            Update Status
          </button>
          <button
            onClick={() => handleAssignComplainClick(selectedComplainId || "")}
            className="bg-purple-400 hover:bg-fuchsia-800 text-black hover:text-white font-bold py-2 px-4 mr-[20px] rounded"
          >
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
          <div className="mt-4 max-h-[400px] overflow-y-auto border border-purple-300">
            <div className="grid grid-cols-4 gap-4 mt-[10px] mr-[20px]">
              {TableData.map((data: TableData, index: number) => (
                <ImageCard
                  key={index}
                  image={data.image}
                  complainId={data.ComplainId}
                  customerMail={data.customerMail}
                  orderId={data.orderId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {showUpdateForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <UpdateForm setShowForm={setShowUpdateForm} tableData={TableData} />
        </div>
      )}
      {showAssignForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <AssignForm
            setShowAssignForm={setShowAssignForm}
            tableData={TableData}
          />
        </div>
      )}
    </div>
  );
};

export default Complain;
