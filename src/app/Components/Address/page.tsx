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
    <div>
      <h2 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>Addresses</h2>
      {addresses && addresses.length > 0 ? (
        addresses.map(address => (
          <div key={address.addressID} style={{ border: "2px solid #D8BFD8", borderRadius: "10px", padding: "20px", marginBottom: "20px" }}>
            
            <p><strong>Street:</strong> {address.street}</p>
            <p><strong>City:</strong> {address.city}</p>
            <p><strong>ZIP Code:</strong> {address.zipCode}</p>
            <button onClick={() => handleDeleteAddress(address)} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#DC143C", border: "none", borderRadius: "5px", fontWeight: "bold" }}>Delete Address</button>
          </div>
        ))
      ) : (
        <p>No addresses found.</p>
      )}
      {successMessage && <p style={{ fontSize: "16px", color: "green", fontWeight: "bold" }}>{successMessage}</p>}
    </div>
  );
};

export default Address;
