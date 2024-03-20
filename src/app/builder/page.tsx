'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const options = [
  { id: 'option1', value: 'Purple', imageUrl: '/op1.jpg' },
  { id: 'option2', value: 'Pink', imageUrl: '/op2.jpg' },
  { id: 'option3', value: 'Black', imageUrl: '/op3.jpg' },
];

export default function Page() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const router = useRouter();

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if both radio button and dropdown are selected
    if (selectedOption && selectedColor) {
      router.push('/builder/card');
      console.log('Form submitted');
    } else {
      // Form is invalid, display error message or handle accordingly
      console.log('Please select both an option and a color');
    }
  };

  return (
    <div className="flex justify-left flex-col md:flex-row md:overflow-hidden ml-56">
      <form onSubmit={handleSubmit}>
        <div className="SelectYourGiftBoxColor w-80 h-12 text-stone-900 text-xl font-medium">
          Select your gift box color
        </div>
        <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="radio"
                id={option.id}
                name="options"
                value={option.value}
                checked={selectedOption === option.id}
                onChange={() => handleOptionClick(option.id)}
                className="sr-only"
                required
              />
              <label
                htmlFor={option.id}
                className={`flex items-center cursor-pointer ${
                  selectedOption === option.id ? 'border border-fuchsia-800 rounded-lg p-1' : ''
                }`}
              >
                <img src={option.imageUrl} alt={option.value} className="w-57 h-60 mr-2" />
                <span className="sr-only">{option.value}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="dropdown mt-8">
          <label htmlFor="dropdown" className="text-stone-900 text-xl font-medium">
            Select ribbon color
          </label>
          <select
            id="dropdown"
            name="dropdown"
            className="block w-half bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none mt-2"
            onChange={handleColorChange}
            value={selectedColor}
            required
          >
            <option value="">Select One</option>
            <option value="option1">Violet</option>
            <option value="option2">Pink</option>
            <option value="option3">Black</option>
            <option value="option4">Red</option>
            <option value="option5">White</option>
          </select>
        </div>

        <div className="flex justify-end">
         
            <button
              type="submit"
              className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-10 hover:bg-fuchsia-900"
               // Disable button if either option or color is not selected
            >
              Next
            </button>
          
        </div>
      </form>
    </div>
  );
}
