// src/app/user-management/customers/components/CreateUserForm.tsx
'use client'
import React, { useState } from "react";
import Link from 'next/link';
//import Header from '@/components/common/header';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("User registered successfully!"); // Show success message
        setFormData({
          userName: "",
          address: "",
          email: "",
          street: "",
          city: "",
          zipCode: "",
        });
      } else {
        throw new Error("Failed to register user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register user. Please try again.");
    }
  };
  

  return (
    <div className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-md"style={{width: '800px', height: '600px', backgroundColor: '#EED9FF', padding: '80px' }}>
  <div className="mb-6 text-2xl font-bold text-center"style={{ fontSize: '24px', color: 'black', fontWeight: 'bold',paddingTop: '10px',marginBottom: '40px' }}> {/* Added text-center class */}
  User Registration
</div>

  
  <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="userName" className="block text-sm font-semibold mb-1 text-black"style={{ fontSize: '17px', color: 'black', fontWeight: 'bold',paddingTop: '10px' }} >Username:</label>
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
        <label htmlFor="address" className="block text-sm font-semibold mb-1 text-black"style={{ fontSize: '17px', color: 'black', fontWeight: 'bold',paddingTop: '10px' }}> Address:</label>
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
        <label htmlFor="email" className="block text-sm font-semibold mb-1 text-black"style={{ fontSize: '17px', color: 'black', fontWeight: 'bold',paddingTop: '10px' }}>Email:</label>
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
        <label htmlFor="street" className="block text-sm font-semibold mb-1 text-black"style={{ fontSize: '17px', color: 'black', fontWeight: 'bold',paddingTop: '10px' }}>Street:</label>
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
        <label htmlFor="city" className="block text-sm font-semibold mb-1 text-black"style={{ fontSize: '17px', color: 'black', fontWeight: 'bold',paddingTop: '10px' }}>City:</label>
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
        <label htmlFor="zipCode" className="block text-sm font-semibold mb-1 text-black"style={{ fontSize: '17px', color: 'black', fontWeight: 'bold',paddingTop: '10px' }}>ZIP Code:</label>
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
    <Link href="/user-management/Customer">
    <button type="submit" className="mt-6 w-full px-4 py-2 bg-purple-600 text-white rounded-md font-semibold">User Account</button>
    </Link>
  </form>
</div>


  );
};

export default CreateUserForm;
