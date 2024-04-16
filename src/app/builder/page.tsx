'use client'
import React, { useEffect } from 'react';
import Button from '@/components/gift-box/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  useEffect(() => {
   
    localStorage.clear();
  }, []);

  const router = useRouter();

  const createGiftBox = () => {
    router.push('/builder/theme');
}

  return (
    <main className="flex justify-end ">
      <div className="flex justify-end">
        <Button label="Get Started" onClick={createGiftBox} />
      </div>
      
    </main>
  );
}