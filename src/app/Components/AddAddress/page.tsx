'use client'
// AddAddress.tsx
import React, { useState, useEffect } from "react";


interface AddressData {
  addressID: string;
  street: string;
  city: string;
  zipCode: string;
}

const AddAddress: React.FC = () => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    zipCode: ''
  });

  const [errors, setErrors] = useState({
    zipCodeError: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [userAddresses, setUserAddresses] = useState<AddressData[]>([]);

  useEffect(() => {
    // Fetch existing addresses from backend API
    fetchAddresses();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate ZIP code format (5 digits)
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(formData.zipCode)) {
      setErrors(prevState => ({
        ...prevState,
        zipCodeError: 'ZIP code must be 5 digits'
      }));
      return;
    }

    try {
      // Send new address data to backend for saving
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Address saved successfully');
        setSuccessMessage('Address saved successfully');
        // Clear form fields after successful submission
        setFormData({
          street: '',
          city: '',
          zipCode: ''
        });
        // Refresh addresses
        fetchAddresses();
      } else {
        console.error('Failed to save address');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
    }
  };

  const handleDeleteAddress = async (address: AddressData) => {
    try {
      // Send request to backend to delete address
      const response = await fetch(`http://localhost:8080/users/${address.addressID}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        console.log('Address deleted successfully');
        setSuccessMessage('Address deleted successfully');
        // Refresh addresses
        fetchAddresses();
      } else {
        console.error('Failed to delete address');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
    }
  };

  const fetchAddresses = () => {
    // Fetch existing addresses from backend API
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => {
        setUserAddresses(data);
      })
      .catch(error => console.error('Error fetching addresses:', error));
  };

  return (
    <div className="flex flex-col items-center">
  <h2 className="mb-8 text-3xl font-bold">Add Address</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4"></div>
    <div className="border-2 border-purple-400 rounded-lg p-5 mb-10">
      <div className="mb-4">
        <label htmlFor="street" className="block text-xl font-bold">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {errors.zipCodeError && <span className="text-red-600 text-sm">{errors.zipCodeError}</span>}
      </div>
      <button type="submit" className="mr-8 px-8 py-4 text-xl bg-purple-400 rounded-lg font-bold">Add Address</button>
    </div>
  </form>
</div>

  );
};

export default AddAddress;
