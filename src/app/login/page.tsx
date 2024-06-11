'use client'
import React, { useEffect, useState } from 'react';
import Button from '@/components/gift-box/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Home() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Get the email input value
    const emailInput = document.getElementById('email') as HTMLInputElement;
    if (emailInput) {
        const email = emailInput.value;
        
        // Set the email as a cookie for the current session
        document.cookie = `email=${email}; path=/`;
        
        // Perform other login actions, such as submitting the form
        // For example, you can submit the form using JavaScript
        // document.getElementById('loginForm').submit();
        router.push('/');
    }
};

return (
  <>
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
            <div className="flex justify-center">
              <Button label="Login" onClick={handleLogin} />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <input className="mr-2 leading-tight" type="checkbox" id="rememberMe" name="rememberMe" />
                <label className="text-sm" htmlFor="rememberMe">Remember me</label></div>
              <a className="text-sm text-blue-500" href="#">Forgot password?</a>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm">Don't have an account? <a className="text-blue-500" href="/register">Sign up</a></p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm">Are you admin? <a className="text-blue-500" href="/InventoryManagement/">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </main>
  </>
  );
}
