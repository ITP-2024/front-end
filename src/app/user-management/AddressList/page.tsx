'use client'
import React, { useState, useEffect } from "react";
//import EditAddress from "./EditAddress"; 

interface Address {
  addressId: string;
  street: string;
  city: string;
  zipCode: string;
}

const AddressList: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAddressID, setSelectedAddressID] = useState<Address | null>(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await fetch("http://localhost:8080/addresses");
      if (response.ok) {
        const data = await response.json();
        setAddresses(data);
      } else {
        throw new Error("Failed to fetch addresses");
      }
      setLoading(false);
      setError(null);
    } catch (error:unknown) {
      const errorMessage = (error as Error).message;
      setError(errorMessage);
      setLoading(false);
    }
  };

  const handleDeleteAddress = async (addressId: string) => {
    //console.log("Deleting address with ID:", addressID);
    try {
      const response = await fetch(`http://localhost:8080/addresses/${addressId}`, {
        method: "DELETE"
      });
      //console.log("Delete response:", response);
      if (response.ok) {
        setAddresses(addresses.filter((address) => address.addressId !== addressId));
      } else {
        throw new Error("Failed to delete address");
      }
    } catch (error: unknown) {
        if (error instanceof Error) {
            setError(() => error.message);
          } else {
            setError(() => "An unknown error occurred.");
          }
    }
  };
  
  const handleEditAddress = (addressId: string) => {
    const selectedAddress = addresses.find(address => address.addressId === addressId);
    if (selectedAddress) {
      setSelectedAddressID(selectedAddress);
    } else {
      console.error('Address not found');
    }
  };

  const handleUpdateAddress = async (updatedAddress: Address) => {
    try {
      const response = await fetch(`http://localhost:8080/addresses/${updatedAddress.addressId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAddress),
      });
      if (response.ok) {
        setAddresses(
          addresses.map((address) =>
            address.addressId === updatedAddress.addressId ? updatedAddress : address
          )
        );
        setSelectedAddressID(null);
      } else {
        throw new Error("Failed to update address");
      }
    } catch (error) {
      console.error('Error updating address:', error);
      setError("Failed to update address");
    }
  };
  
  const handleDeleteClick = (addressId: string) => {
    //setSelectedAddressID(addressId);
    handleDeleteAddress(addressId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ml-[295px]">
      <div className="mt-[30px] mt-[60px]"> 
        <div className="flex flex-col items-center"style={{ backgroundColor: '#EED9FF', padding: '100px' }}>
          
          <h2 style={{ fontSize: '24px', color: 'black', fontWeight: 'bold',paddingTop: '30px', paddingBottom: '20px' }}>Address List</h2>
          
          <table style={{ borderCollapse: 'collapse', width: '100%',border: '2px solid white' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid black' }}>
                <th style={{ padding: '10px', textAlign: 'left',color: 'black',fontWeight: 'bold' }}>Street</th>
                <th style={{ padding: '10px', textAlign: 'left' ,color: 'black',fontWeight: 'bold'}}>City</th>
                <th style={{ padding: '10px', textAlign: 'left',color: 'black',fontWeight: 'bold' }}>ZIP Code</th>
              
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#f3e5f5' }}>
              {addresses.map((address) => (
                <tr key={address.addressId}>
                  <td style={{ padding: '10px', textAlign: 'left',color: 'black' }}>{address.street}</td>
                  <td style={{ padding: '10px', textAlign: 'left',color: 'black' }}>{address.city}</td>
                  <td style={{ padding: '10px', textAlign: 'left',color: 'black' }}>{address.zipCode}</td>
                  <td style={{ padding: '10px', textAlign: 'left' ,color: 'black'}}>
                    <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}onClick={() => handleEditAddress(address.addressId)}>Edit</button>
                    <button  style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}onClick={() => handleDeleteAddress(address.addressId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedAddressID && (
            <div className="flex flex-col items-center">
              <h2 className="mb-8 text-3xl font-bold">Edit Address</h2>
              <form onSubmit={() => handleUpdateAddress(selectedAddressID)}>
                <div className="mb-4">
                  <label htmlFor="street" className="block text-xl font-bold">Street:</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={selectedAddressID.street}
                    onChange={(e) =>
                      setSelectedAddressID({ ...selectedAddressID, street: e.target.value })
                    }
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
                    value={selectedAddressID.city}
                    onChange={(e) =>
                      setSelectedAddressID({ ...selectedAddressID, city: e.target.value })
                    }
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
                    value={selectedAddressID.zipCode}
                    onChange={(e) =>
                      setSelectedAddressID({ ...selectedAddressID, zipCode: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <button type="submit"style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Update Address</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressList;
