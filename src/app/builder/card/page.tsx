'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { GiftBoxProvider } from '@/context/giftBox';
import Button from '@/components/gift-box/button';



interface CardType {
    cardId: string;
    type: string;
    image: string;
}



export default function Page() {
    const [options, setOptions] = useState<CardType[]>([]);
    const [selectedGreetingCard, setSelectedGreetingCard] = useState<string | null>(null);
    const [cardMessage, setCardMessage] = useState<string>("");



    const router = useRouter();

    useEffect(() => {
        // Fetch gift box options from backend
        axios.get<CardType[]>('http://localhost:8080/cardType')
            .then(response => {
                console.log(response);

                setOptions(response.data);
            })
            .catch(error => {
                console.error('Error fetching card options:', error);
            });
    }, []);

    const handleOptionClick = (optionId: string) => {
        setSelectedGreetingCard(optionId);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCardMessage(event.target.value);
    };

    const handleClick = () => {
        router.push('/builder/products');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push('/builder/products');
        console.log("Message:", cardMessage);
        console.log("card:", selectedGreetingCard);
 
    };

    return (
        <GiftBoxProvider>
        <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
        <form onSubmit={handleSubmit}>
                <div className="SelectCard w-80 h-12 text-stone-900 text-xl font-medium">
                    Select a greeting card
                </div>
                <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
                    {options.map((option) => (
                        <div key={option.cardId} className="flex items-center">
                            <div
                                id={option.cardId}
                                onClick={() => handleOptionClick(option.cardId)}
                            />
                            <div
                                className={`flex items-center cursor-pointer ${selectedGreetingCard === option.cardId ? 'border border-fuchsia-800 rounded-lg p-1' : ''
                                    }`}
                            >
                                <img
                                    src={option.image}
                                    alt={option.type}
                                    className="w-21 h-18"
                                    onClick={() => handleOptionClick(option.cardId)} // Handle click on the image
                                />
                                <span className="sr-only">{option.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="txtfield mt-8">
                
                    <label htmlFor="dropdown" className="text-stone-900 text-xl font-medium">
                        Enter your message for greeting card
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mt-5"
                        value={cardMessage} 
                        onChange={handleMessageChange}
                    /></div>
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
}