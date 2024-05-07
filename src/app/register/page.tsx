'use client'
import React, { useState } from "react";

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    address: '',
    password: '',
    email: '',
    street: '',
    city: '',
    zipCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("User registered successfully!"); // Show success message
        setFormData({
          userName: "",
          address: "",
          password: "",
          email: "",
          street: "",
          city: "",
          zipCode: "",
        });
      } else {
        throw new Error("Failed to register user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register user. Please try again.");
    }
  };
  
  return (
    <main className="flex justify-end bg-violet-200">
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="w-2/5">
          <h1 className="text-l font-bold text-center mb-8">Registration</h1>

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <div>
                <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2"> Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="street" className="block text-gray-700 text-sm font-bold mb-2">Street:</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700 text-sm font-bold mb-2">ZIP Code:</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-10 hover:bg-fuchsia-900 w-40 h-15">Register</button>
            </div>
            <div className="mt-4 text-center">
                <p className="text-sm">Already have an account? <a className="text-blue-500" href="/login">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateUserForm;
