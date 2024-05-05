'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface User {
  userID: string;
  userName: string;
  addressID: string;
  address: string;
  password: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
}

export default function CustomerInfo() {
  const [CustomerInfo, setCustomerInfo] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch customer information from your backend API
    const fetchCustomerInfo = async () => {
      try {
        const response = await fetch('http://localhost:8080/users');

       if (!response.ok) {
          throw new Error('Failed to fetch customer information');
        }
        const data = await response.json();
        setCustomerInfo(data);
        setLoading(false);
        setError(null);
      } catch (error:unknown) {
        const errorMessage = (error as Error).message;
      setError(errorMessage);
      setLoading(false);
      }
    };

    fetchCustomerInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-2xl font-bold">Customer Information</h2>
      <div className="mb-10">
        <div className="border-4 border-purple-400 rounded-lg p-6 mb-10">
          <div>
            <div className="mb-2">
              <strong>Name:</strong> {CustomerInfo ? CustomerInfo.userName : 'N/A'}
            </div>
            <div className="mb-2">
              <strong>Address:</strong> {CustomerInfo ? CustomerInfo.address : 'N/A'}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {CustomerInfo ? CustomerInfo.email : 'N/A'}
            </div>
            <div className="mb-2">
              <strong>Street:</strong> {CustomerInfo ? CustomerInfo.street : 'N/A'}
            </div>
            <div className="mb-2">
              <strong>City:</strong> {CustomerInfo ? CustomerInfo.city : 'N/A'}
            </div>
            <div className="mb-2">
              <strong>ZipCode:</strong> {CustomerInfo ? CustomerInfo.zipCode : 'N/A'}
            </div>
            {/* Add more details as needed */}
          </div>
        </div>
        <Link href="/user-management/AddAddress">
          <button className="px-4 py-2 text-lg bg-purple-400 rounded-md cursor-pointer">
         Add Address
        </button>
       </Link>

      </div>
      <Link href="/">
        <button className="px-4 py-2 text-lg bg-purple-400 rounded-md cursor-pointer">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
