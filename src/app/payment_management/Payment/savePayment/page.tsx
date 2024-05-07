"use client"


import React, { useState } from 'react';

const AddPayment = () => {
  const [payment, setPayment] = useState({
    paymentId: '',
    name: '',
    paymentType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!payment.paymentId || !payment.name || !payment.paymentType) {
      alert('Please fill in all required fields');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
      });
      if (response.ok) {
        alert('Payment successfully created!');
        setPayment({
          paymentId: '',
          name: '',
          paymentType: '',
        });
      } else {
        const errorData = await response.json();
        alert('Error creating payment.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the payment.');
    }
  };

  const handleCancel = () => {
    setPayment({
      paymentId: '',
      name: '',
      paymentType: '',
    });
  };

  return (
    <div className="         [backdrop-filter:blur(2.5px)] h-[500px]  shrink-0 flex flex-col items-center justify-center text-left text-xl text-black">
      <div style={{ backgroundColor: '#d8bfd8', borderRadius: '20px', padding: '20px', width: '400px' }}>
        <form onSubmit={handleSubmit}>
          <label>
            Payment ID:
            <input
              type="text"
              name="paymentId"
              value={payment.paymentId}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', marginBottom: '15px' }}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={payment.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', marginBottom: '15px' }}
            />
          </label>
          <label>
            Payment Type:
            <input
              type="text"
              name="paymentType"
              value={payment.paymentType}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', marginBottom: '15px' }}
            />
          </label>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" style={{ backgroundColor: '#8b008b', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>Save</button>
            <button type="button" onClick={handleCancel} style={{ backgroundColor: '#8b008b', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPayment;
