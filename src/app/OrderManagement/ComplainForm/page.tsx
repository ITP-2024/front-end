"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ComplainForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    customerMail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="max-w-lg mx-auto mt-20 border border-gray-300 rounded-md p-6">
      <Formik
        initialValues={{
          complainId: "",
          orderId: "",
          customerMail: "",
          complainType: "",
          complainDetails: "",
          image: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="orderId"
                className="block text-sm font-medium text-white"
              >
                Order ID
              </label>
              <Field
                type="text"
                name="orderId"
                id="complainId"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-48 h-8 text-black border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="customerMail"
                className="block text-sm font-medium text-white"
              >
                Mail Address
              </label>
              <Field
                type="email"
                name="customerMail"
                id="customerMail"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-64 h-8 text-black border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="customerMail"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div>
              <label
                htmlFor="complainType"
                className="block text-sm font-medium text-white"
              >
                Complain Type
              </label>
              <Field
                as="select"
                name="complainType"
                id="complainType"
                className="mt-1 block w-64 h-8 py-2 px-3 border border-gray-300 bg-darkmagenta text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select</option>
                <option value="Refund">Refund</option>
                <option value="Return">Return</option>
              </Field>
            </div>
            <div>
              <label
                htmlFor="complainDetails"
                className="block text-sm font-medium text-white"
              >
                Complain Details
              </label>
              <Field
                as="textarea"
                name="complainDetails"
                id="complainDetails"
                rows={3}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-black border-gray-300 rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className={`w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-darkmagenta text-white hover:bg-darkmagenta hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ComplainForm;
