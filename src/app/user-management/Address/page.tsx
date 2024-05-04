// Address.tsx
import React from "react";

interface AddressProps {
  addresses: {
    addressID: string;
    street: string;
    city: string;
    zipCode: string;
  }[];
  handleDeleteAddress: (address: { addressID: string }) => void;
  successMessage: string;
}

const Address: React.FC<AddressProps> = ({ addresses, handleDeleteAddress, successMessage }) => {
  return (
    <div className="mt-8">
    <h2 className="mb-4 text-2xl font-bold">Addresses</h2>
    {addresses && addresses.length > 0 ? (
      addresses.map((address) => (
        <div key={address.addressID} className="border-2 border-gray-300 rounded-lg p-4 mb-4">
          <p className="mb-2">
            <strong>Street:</strong> {address.street}
          </p>
          <p className="mb-2">
            <strong>City:</strong> {address.city}
          </p>
          <p className="mb-2">
            <strong>ZIP Code:</strong> {address.zipCode}
          </p>
          <button
            onClick={() => handleDeleteAddress(address)}
            className="px-4 py-2 bg-red-600 text-white rounded-md font-semibold"
          >
            Delete Address
          </button>
        </div>
      ))
    ) : (
      <p>No addresses found.</p>
    )}
    {successMessage && <p className="text-green-600 font-semibold">{successMessage}</p>}
  </div>
  
  );
};

export default Address;
