'use client'
import React, { useEffect, useState } from 'react';
import Button from '@/components/gift-box/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Home() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // e.preventDefault(); // Prevent default form submission behavior

    // try {
    //const response = await axios.post('/api/login', { email, password }); // Make POST request to login API endpoint
    //if (response.status === 200) {
    // Login successful
    // Save user email to localStorage
    localStorage.setItem('userEmail', email);
    const emails = localStorage.getItem('userEmail');
    console.log('userEmail'+emails);
    // Redirect to the desired page
    router.push('/builder/');
    //} else {
    // Handle login failure
    // console.error('Login failed');
    // }
    // } catch (error) {
    // Handle error
    //  console.error('Error occurred:', error);
  //}
};

return (
  <main className="flex justify-end bg-violet-200">

    <div className="container mx-auto flex justify-center items-center h-screen">

      <div className="w-2/5">
        <h1 className="text-l font-bold text-center mb-8">Welcome!</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" required />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" required />
          </div>
          <div className="flex items-center">
            <Button label="Login" onClick={handleLogin} />

          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <input className="mr-2 leading-tight" type="checkbox" id="rememberMe" name="rememberMe" />
              <label className="text-sm" htmlFor="rememberMe">Remember me</label></div>
            <a className="text-sm text-blue-500" href="htmlForgotPassword.php">Forgot password?</a>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm">Don't have an account? <a className="text-blue-500" href="userSignup.php">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  </main>
);
}
