'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiftBoxProvider } from '@/context/giftBox';


interface GiftBoxOption {
  boxColorId: string;
  color: string;
  image: string;
}

const GiftBoxSelection: React.FC = () => {
  const [Options, setOptions] = useState<GiftBoxOption[]>([]);
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
  }, []);

  const handleOptionClick = (optionId: string) => {
    setSelectedTheme(optionId);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedTheme) {
      console.log("Theme:",selectedTheme);
      router.push('/builder/card');
      
    } else {
      toast.error('Please select a gift box color');
    }
  };

  return (
    <GiftBoxProvider>
    <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
      <form onSubmit={handleSubmit}>
        <div className="SelectYourGiftBoxColor w-80 h-12 text-stone-900 text-xl font-medium">
          Select your gift box color
        </div>
        <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
          {Options.map((option) => (
            <div key={option.boxColorId} className="flex items-center">
              <div
                id={option.boxColorId}
                // name="options"
                // value={option.color}
                // checked={selectedOption === option.BoxColorId}
                onClick={() => handleOptionClick(option.boxColorId)}
                // required
                // style={{ display: 'none' }} // Hide the actual radio button
              >
              <div
                // htmlFor={option.BoxColorId}
                className={`flex items-center cursor-pointer ${
                  selectedTheme === option.boxColorId ? 'border border-fuchsia-800 rounded-lg p-1' : ''
                }`}
              >
                <img
                  src={option.image}
                  alt={option.color}
                  className="w-21 h-18"
                  onClick={() => handleOptionClick(option.boxColorId)} // Handle click on the image
                />
                <span className="sr-only">{option.color}</span>
              </div>
            </div>
            </div>

          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-10 hover:bg-fuchsia-900"
          >
            Next
          </button>
        </div>
      </form>
    </div>
    </GiftBoxProvider>
  );
};


export default GiftBoxSelection;
