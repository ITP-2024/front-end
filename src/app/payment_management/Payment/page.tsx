"use client";
import React, { FC, useState, useEffect } from "react";
import SearchBar from "@/components/payment_management/searchbar";
import Navbar from "@/components/common/navbar";
import axios from "axios";
import Link from "next/link";

interface Payment {
  id: string;
  paymentId: string;
  name: string;
  paymentType: string;
  paymentDate: Date;
  updateDate: Date;
  completed: boolean;
}

const Payment: FC = () => {
  const [filteredPayments, setFilteredPayments] = useState<Payment[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [formData, setFormData] = useState<Payment>({
    id: "",
    paymentId: "",
    name: "",
    paymentType: "",
    paymentDate: new Date(),
    updateDate: new Date(),
    completed: false,
  });

  useEffect(() => {
    axios
      .get<Payment[]>("http://localhost:8080/payment")
      .then((response) => {
        console.log(response);
        setFilteredPayments(response.data);
        setPayments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching payments:", error);
      });
  }, []);

  const editPayment = (paymentId: string) => {
    const payment = payments.find((p) => p.id === paymentId);
    if (payment) {
      setFormData(payment);
    }
  };

  const deletePayment = async (paymentId: string) => {
    try {
      await axios.delete(`http://localhost:8080/payment/${paymentId}`);
      alert("Payment deleted successfully");
      setPayments(payments.filter((p) => p.id !== paymentId));
    } catch (error) {
      console.error("Error deleting payment:", error);
      alert("Failed to delete payment");
    }
  };

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filter = payments.filter((payment) => 
      payment.paymentId.toLowerCase().includes(lowerCaseQuery) ||
      payment.paymentType.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredPayments(filter);
  };

  const updatePayment = async () => {
    try {
      await axios.put(
        `http://localhost:8080/payment/${formData.id}`,
        formData
      );
      alert("Payment updated successfully");
      // Update state with the updated payment data
      setPayments((prevPayments) =>
        prevPayments.map((p) => (p.id === formData.id ? formData : p))
      );
    } catch (error) {
      console.error("Error updating payment:", error);
      alert("Failed to update payment");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-[90px] ml-[320px]">
        <div>
          <SearchBar title="Search " onSearch={handleSearch} />
          <br />
          <br />
          <div className="flex flex-row items-start justify-start gap-[2.125rem] max-w-full mq750:flex-wrap">
            <button className="cursor-pointer py-[0.687rem] px-[3.062rem] bg-darkmagenta rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-darkmagenta rounded-[50px] hover:bg-mediumorchid hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumorchid">
              <Link href="/payment_management/Payment/savePayment">
                <b className="relative text-[1rem] text-white text-left">
                  + Add Payment
                </b>
              </Link>
            </button>
            
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-[20px] mr-[20px]">
          <div className="max-h-[350px] overflow-y-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="h-12">
                  <th scope="col" className="sticky top-0 bg-fuchsia-800">
                    Payment ID
                  </th>
                  <th scope="col" className="sticky top-0 bg-fuchsia-800">
                    Customer Name
                  </th>
                  <th scope="col" className="sticky top-0 bg-fuchsia-800">
                    Payment Type
                  </th>
                  <th scope="col" className="sticky top-0 bg-fuchsia-800">
                    Payment Date and Time
                  </th>
                  <th scope="col" className="sticky top-0 bg-fuchsia-800">
                    Update Date and Time
                  </th>
                  <th scope="col" className="sticky top-0 bg-fuchsia-800">
                    Option
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="h-12 text-center bg-zinc-300 text-black">
                    <td>{payment.paymentId}</td>
                    <td>{payment.name}</td>
                    <td>{payment.paymentType}</td>
                    <td>{new Date(payment.paymentDate).toLocaleString()}</td>
                    <td>{new Date(payment.updateDate).toLocaleString()}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => editPayment(payment.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deletePayment(payment.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Form for updating payment */}
            <table className="w-full table-auto">
              <tbody>
                <tr className="h-12 text-center bg-zinc-300 text-black">
                  <td>
                    <input
                      type="text"
                      className="w-20"
                      name="paymentId"
                      value={formData.paymentId}
                      onChange={(e) =>
                        setFormData({ ...formData, paymentId: e.target.value })
                      }
                      placeholder="0001"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Lakshan W V D"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="paymentType"
                      className="w-20"
                      value={formData.paymentType}
                      onChange={(e) =>
                        setFormData({ ...formData, paymentType: e.target.value })
                      }
                      placeholder="COD/Bank"
                    />
                  </td>
                  <td>
                    <input type="text" name="paymentDate" value={new Date(formData.paymentDate).toLocaleString()} readOnly />
                  </td>
                  <td>
                    <input type="text" name="updateDate" value={new Date(formData.updateDate).toLocaleString()} readOnly />
                  </td>
                  <td>
                    <button type="button" className="btn btn-warning" onClick={updatePayment}>
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
