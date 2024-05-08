'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import footer from '@/components/common/footer';

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

export default function Home() {
  const [customerInfo, setCustomerInfo] = useState<User | null>(null);
  const [showCustomerInfo, setShowCustomerInfo] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setCustomerInfo(JSON.parse(storedUserData));
    }
  }, []);

  const handleInformationClick = () => {
    setShowCustomerInfo(true);
  };

  // Define the CustomerInfoPage component directly within the Home component
  const CustomerInfoPage = () => {
    return (
      <div className="flex flex-col items-center">
      <h2 className="mb-6 text-2xl font-bold">Customer Information</h2>
      {customerInfo && (
        <div className="mb-10">
          <div className="border-4 border-purple-400 rounded-lg p-6 mb-10">
            <div>
              <div className="mb-2">
                <strong>Name:</strong> {customerInfo.userName}
              </div>
              <div className="mb-2">
                <strong>Address:</strong> {customerInfo.address}
              </div>
              <div className="mb-2">
                <strong>Email:</strong> {customerInfo.email}
              </div>
              <div className="mb-2">
                <strong>Street:</strong> {customerInfo.street}
              </div>
              <div className="mb-2">
                <strong>City:</strong> {customerInfo.city}
              </div>
              <div className="mb-2">
                <strong>ZipCode:</strong> {customerInfo.zipCode}
              </div>
              {/* Add more details as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
    );
  };

  return (
    <div className="flex flex-col items-center" style={{ backgroundColor: '#EED9FF', padding: '100px' }}>

      <h2 className="mb-6 text-2xl font-bold" style={{ fontSize: '24px', color: 'black', fontWeight: 'bold' }}>My Account</h2>
      <div className="mb-10"></div>

      <div className="border-2 border-purple-400 rounded-lg p-6 mb-30 h-95h-[350px] w-[700px]">
        <div className="flex">
          <div className="mr-6">
            <button onClick={handleInformationClick} className="mr-4 px-6 py-4 text-lg bg-purple-400 rounded-md" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
              Information
            </button>
            <Link href="/user-management/AddAddress">
              <button className="mr-4 px-6 py-4 text-lg bg-purple-400 rounded-md" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
                Address
              </button>
            </Link>
            <Link href="/review-management/review">
              <button className="px-6 py-4 text-lg bg-purple-400 rounded-md" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
                My posts & followers
              </button>
            </Link>
          </div>
        </div>
        <div className="mb-10"></div>

        <div className="flex">
          <Link href="/builder">
            <button className="mr-4 px-6 py-4 text-lg bg-purple-400 rounded-md" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
              Create your own gift box
            </button>
          </Link>
          <button className="mr-4 px-6 py-4 text-lg bg-purple-400 rounded-md" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
            Old Orders
          </button>
          <button className="px-6 py-4 text-lg bg-purple-400 rounded-md" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
            Vouchers
          </button>
        </div>

        {/* Display CustomerInfoPage component when showCustomerInfo is true */}
        {showCustomerInfo && <CustomerInfoPage />}
      </div>

      <Link href="/">
        <button className="mt-8 mr-8 px-8 py-4 text-xl bg-purple-400 rounded-lg font-bold" style={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}>
          Back to home
        </button>
      </Link>
    </div>
  );
}