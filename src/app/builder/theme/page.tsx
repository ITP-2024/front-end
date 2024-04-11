'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiftBoxProvider } from '@/context/giftBox';
import NextButton from '@/components/gift-box/next-button';
import GiftBoxOption from '@/components/gift-box/giftbox-themes';

interface GiftBoxOption {
  boxColorId: string;
  color: string;
  image: string;
}

const GiftBoxSelection: React.FC = () => {
  const [options, setOptions] = useState<GiftBoxOption[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch gift box options from backend
    axios.get<GiftBoxOption[]>('http://localhost:8080/giftBoxColor')
      .then(response => {
        console.log(response);
        setOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching gift box options:', error);
      });

    const storedTheme = localStorage.getItem('setSelectedTheme');
    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  const handleOptionClick = (optionId: string) => {
    setSelectedTheme(optionId);
    localStorage.setItem('setSelectedTheme', optionId);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedTheme) {
      console.log("Theme:", selectedTheme);
      router.push(`/builder/card?theme=${selectedTheme}`);
    } else {
      toast.error('Please select a gift box color');
    }
  };

  return (
    <GiftBoxProvider>
      <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="SelectYourGiftBoxColor w-80 h-12 text-stone-900 text-xl font-medium">
            Select your gift box color {selectedTheme}
          </div>
          <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
            {options.map((option) => (
              <GiftBoxOption
                key={option.boxColorId}
                boxColorId={option.boxColorId}
                color={option.color}
                image={option.image}
                selectedTheme={selectedTheme}
                handleOptionClick={handleOptionClick}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <NextButton />
          </div>
        </form>
      </div>
    </GiftBoxProvider>
  );
};

export default GiftBoxSelection;
