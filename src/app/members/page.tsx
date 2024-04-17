'use client';
import * as React from "react";
import { useState } from "react";
import Link from 'next/link';

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    address: '',
    password: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    emailError: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.includes('@') || !(formData.email.includes('.com') || formData.email.includes('.lk'))) {
      setErrors(prevState => ({
        ...prevState,
        emailError: 'Valid email must be added'
      }));
      return;
    }

    try {
      // Send form data to backend for saving
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Data saved successfully');
        setSuccessMessage('Data saved successfully');
        // Clear form fields after successful submission
        setFormData({
          userName: '',
          address: '',
          password: '',
          email: ''
        });
      } else {
        console.error('Failed to save data');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}></div>
        {/* Highlighted rectangle container */}
        <div style={{ border: '2px solid #D8BFD8', borderRadius: '10px', padding: '20px', marginBottom: '30px' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="userName" style={{ fontSize: '18px', fontWeight: 'bold' }}>Username:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="address" style={{ fontSize: '18px', fontWeight: 'bold' }}>Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password" style={{ fontSize: '18px', fontWeight: 'bold' }}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ fontSize: '18px', fontWeight: 'bold' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.emailError && <span style={{ color: 'red', fontSize: '14px' }}>{errors.emailError}</span>}
          </div>
          <button type="submit" style={{ marginRight: '20px', padding: '20px 30px', fontSize: '20px', backgroundColor: '#D8BFD8', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Create User</button>
        </div>
      </form>
      {successMessage && <p style={{ fontSize: '16px', color: 'green', fontWeight: 'bold' }}>{successMessage}</p>}
    </div>
  );
};

export default CreateUserForm;
