'use client'
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
   
    localStorage.clear();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
