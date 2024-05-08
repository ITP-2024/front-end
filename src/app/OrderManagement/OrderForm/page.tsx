"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const OrderForm: React.FC = () => {
  const [date, setDate] = useState<string>(getCurrentDate());

  function getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const validationSchema = Yup.object().shape({
    customerId: Yup.string().required("Customer ID is required"),
    productId: Yup.string().required("Product ID is required"),
    productQty: Yup.number()
      .required("Product quantity is required")
      .min(1, "Product quantity must be at least 1"),
    address: Yup.string().required("Address is required"),
    date: Yup.string().required("Date is required"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 border rounded-md bg-gray-100">
      <Formik
        initialValues={{
          customerId: "",
          productId: "",
          productQty: "",
          address: "",
          date: date,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="customerId"
                className="block text-sm font-medium text-gray-700"
              >
                Customer ID
              </label>
              <Field
                type="text"
                name="customerId"
                id="customerId"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="customerId"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productId"
                className="block text-sm font-medium text-gray-700"
              >
                Product ID
              </label>
              <Field
                type="text"
                name="productId"
                id="productId"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="productId"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productQty"
                className="block text-sm font-medium text-gray-700"
              >
                Product Quantity
              </label>
              <Field
                type="number"
                name="productQty"
                id="productQty"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="productQty"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <Field
                as="textarea"
                name="address"
                id="address"
                rows={3}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <Field
                type="text"
                name="date"
                id="date"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                readOnly
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
