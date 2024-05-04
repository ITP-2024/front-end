// src/app/user-management/customers/components/CreateUserForm.tsx
'use client'
import React, { useState } from "react";

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    address: '',
    //password: '',
    email: '',
    street: '',
    city: '',
    zipCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Send this data to backend for further processing
    // Reset form data after submission
    setFormData({
      userName: '',
      address: '',
      //password: '',
      email: '',
      street: '',
      city: '',
      zipCode: ''
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="userName" className="block text-sm font-semibold mb-1 text-black">Username:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-semibold mb-1 text-black">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1 text-black">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="street" className="block text-sm font-semibold mb-1 text-black">Street:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-semibold mb-1 text-black">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-semibold mb-1 text-black">ZIP Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
        </div>
        <button type="submit" className="mt-6 w-full px-4 py-2 bg-purple-600 text-white rounded-md font-semibold">Register</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
