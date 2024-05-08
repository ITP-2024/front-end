"use client"

import React, { useState } from 'react';

const AddPayment = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(true); // State to track form visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/savecard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardDetails),
      });
      if (response.ok) {
        alert('Card details successfully submitted!');
        setCardDetails({
          cardNumber: '',
          cardHolderName: '',
          expirationDate: '',
          cvv: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to submit card details: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting card details.');
    }
  };

  const validateForm = () => {
    const { cardNumber, cardHolderName, expirationDate, cvv } = cardDetails;
    const cardNumberRegex = /^[0-9]{16}$/; // Regex for a 16-digit card number
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Regex for MM/YY format
    const cvvRegex = /^[0-9]{3,4}$/; // Regex for a 3 or 4 digit CVV

    // Validate card number format
    if (!cardNumberRegex.test(cardNumber)) {
      alert('Please enter a valid 16-digit card number');
      return false;
    }

    // Validate expiration date format
    if (!expirationDateRegex.test(expirationDate)) {
      alert('Please enter a valid expiration date in MM/YY format');
      return false;
    }

    // Validate CVV length
    if (!cvvRegex.test(cvv)) {
      alert('Please enter a valid CVV (3 or 4 digits)');
      return false;
    }

    // Check if all required fields are filled
    if (!cardNumber || !cardHolderName || !expirationDate || !cvv) {
      alert('Please fill in all required fields');
      return false;
    }

    return true;
  };

  const handleCancel = () => {
    setCardDetails({
      cardNumber: '',
      cardHolderName: '',
      expirationDate: '',
      cvv: '',
    });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {isFormVisible && (
        <div style={{ backgroundColor: '#000000', borderRadius: '20px', padding: '20px', width: '400px' }}>
          <form onSubmit={handleSubmit}>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#000000', width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', marginBottom: '15px' }}
              />
            </label>
            <label>
              Card Holder Name:
              <input
                type="text"
                name="cardHolderName"
                value={cardDetails.cardHolderName}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#000000', width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', marginBottom: '15px' }}
              />
            </label>
            <label>
              Expiration Date:
              <input
                type="text"
                name="expirationDate"
                value={cardDetails.expirationDate}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#000000', width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', marginBottom: '15px' }}
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#000000', width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', marginBottom: '15px' }}
              />
            </label>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit" className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900 w-full md:w-auto">
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddPayment;
