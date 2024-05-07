'use client'
import React, { useState } from "react";
import Link from 'next/link';
//import Header from "@/components/common/header";
//import Link from 'next/link';

const AddAddress: React.FC = () => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    zipCode: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate ZIP code format
  if (formData.zipCode.length !== 5 || !/^\d{5}$/.test(formData.zipCode)) {
    alert('Please enter a valid 5-digit ZIP code');
    return;
  }

    try {
      const response = await fetch('http://localhost:8080/addresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Address saved successfully');
        // Reset form data
        setFormData({
          street: '',
          city: '',
          zipCode: ''
        });
      } else {
        console.error('Failed to save address');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mx-auto mt-10 p-10 bg-white shadow-md rounded-md flex flex-col items-center"style={{ backgroundColor: '#DEC6EE', paddingBottom: '20px', border: '2px solid white' ,width: '800px', height: '600px' }}>
      <div style={{ border: '2px solid #C395D9', padding: '20px', borderRadius: '10px' }}>
      <h2 className="mb-8 text-3xl font-bold"style={{ fontSize: '24px', color: 'black', fontWeight: 'bold',paddingTop: '20px' }}>Add Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="street" className="block text-xl font-bold">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-xl font-bold">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-xl font-bold">ZIP Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="mr-8 px-8 py-4 text-xl bg-purple-400 rounded-lg font-bold"style={{ backgroundColor: '#871A99'}}>Add Address</button>
        <Link href="/user-management/AddressList">
        <button className="mr-8 px-8 py-4 text-xl bg-purple-400 rounded-lg font-bold"style={{ backgroundColor: '#871A99'}}>
          View
        </button>
      </Link>
      </form>
      </div>
      <Link href="/user-management/Customer">
        <button className="mt-8 mr-8 px-8 py-4 text-xl bg-purple-400 rounded-lg font-bold">
          Back 
        </button>
      </Link>
    
    </div>
  );
};

export default AddAddress;
