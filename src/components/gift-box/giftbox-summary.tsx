// ParentComponent.js
import React, { useState } from 'react';
import GiftBoxOption from './giftbox-themes';
import GiftBoxSelection from '@/app/builder/theme/page';
import GreetingCardOption from './giftbox-card';
import MessageInput from './giftbox-msg';
import ProductItem from '../common/product-item';

const ParentComponent = () => {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [selectedGreetingCard, setSelectedGreetingCard] = useState(null);
    const [cardMessage, setCardMessage] = useState('');

    return (
        <div>
            <GiftBoxSelection
                setSelectedTheme={selectedTheme}
            />
            <GreetingCardOption
                selectedGreetingCard={selectedGreetingCard}
            />

            <MessageInput
                cardMessage={cardMessage}
            />
        </div>
    );
};

export default ParentComponent;

