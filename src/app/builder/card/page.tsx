'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { GiftBoxProvider } from '@/context/giftBox';
import Button from '@/components/gift-box/button';
import GreetingCardOption from '@/components/gift-box/giftbox-card';
import MessageInput from '@/components/gift-box/giftbox-msg';
import { toast } from 'react-toastify';

interface CardType {
    cardId: string;
    type: string;
    image: string;
}

export default function Page() {
    const [options, setOptions] = useState<CardType[]>([]);
    const [selectedGreetingCard, setSelectedGreetingCard] = useState<string | null>(null);
    const [cardMessage, setCardMessage] = useState<string>("");

    const [selectedTheme, setSelectedTheme] = useState<string | null>(null);



    const router = useRouter();

    useEffect(() => {
        axios.get<CardType[]>('http://localhost:8080/cardType')
            .then(response => {
                console.log(response);

                setOptions(response.data);
            })
            .catch(error => {
                console.error('Error fetching card options:', error);
            });

        const storedCard = localStorage.getItem('setSelectedGreetingCard');
        if (storedCard) {
            setSelectedGreetingCard(storedCard);
        }
        const storedMsg = localStorage.getItem('setCardMessage');
        if (storedMsg) {
            setCardMessage(storedMsg);
        }
    }, []);

    const handleOptionClick = (optionId: string) => {
        setSelectedGreetingCard(optionId);
        localStorage.setItem('setSelectedGreetingCard', optionId);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCardMessage(event.target.value);
        localStorage.setItem('setCardMessage', event.target.value);
    };

    const backbtn = () => {
        router.push('/builder/theme');
    };

    const handleSubmit = () => {
        if (selectedGreetingCard) {
            console.log("Theme:", selectedGreetingCard);
            router.push('/builder/products');
            console.log("Message:", cardMessage);
            console.log("card:", selectedGreetingCard);
          } else {
            toast.error('Please select a Greeting Card');
          }

    };
    console.log(options);

    return (
        <GiftBoxProvider>
            
            <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
                <form onSubmit={handleSubmit}>
                    <div className="SelectCard w-80 h-12 text-stone-900 text-xl font-medium">
                        Select a greeting card  {selectedTheme}
                    </div>
                    <div className="flex justify-left flex-col md:flex-row md:overflow-hidden">
                        {options.map((option) => (
                            <GreetingCardOption
                                key={option.cardId}
                                cardId={option.cardId}
                                type={option.type}
                                image={option.image}
                                selectedGreetingCard={selectedGreetingCard}
                                handleOptionClick={handleOptionClick}
                            />
                        ))}
                    </div>
                    <MessageInput value={cardMessage} onChange={handleMessageChange} />
                    <div className="flex items-center justify-between">
                        <Button label="back" onClick={backbtn}/>
                        <Button label="Next" onClick={handleSubmit}/>
                    </div>
                </form>
            </div>
        </GiftBoxProvider>
    );
}