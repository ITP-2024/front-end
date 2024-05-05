import React, { useState, useEffect } from "react";

interface EditAddressProps {
  addressId: string;
}

interface Address {
  addressId: string;
  street: string;
  city: string;
  zipCode: string;
}

const EditAddress: React.FC<EditAddressProps> = ({ addressId }) => {
  const [formData, setFormData] = useState<Address>({
    addressId: '',
    street: '',
    city: '',
    zipCode: ''
  });

  useEffect(() => {
    fetchAddressDetails();
  }, []);

  const fetchAddressDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/addresses/${addressId}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        throw new Error("Failed to fetch address details");
      }
    } catch (error) {
      console.error('Error fetching address details:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/addresses/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Address updated successfully');
        // Redirect or show a success message
      } else {
        console.error('Failed to update address');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-8 text-3xl font-bold">Edit Address</h2>
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
        <button type="submit" className="mr-8 px-8 py-4 text-xl bg-purple-400 rounded-lg font-bold">Update Address</button>
      </form>
    </div>
  );
};

export default EditAddress;
