import React from 'react';

interface GreetingCardOptionProps {
  cardId: string;
  type: string;
  image: string;
  selectedGreetingCard: string | null;
  handleOptionClick: (cardId: string) => void;
}

const GreetingCardOption: React.FC<GreetingCardOptionProps> = ({ cardId, type, image, selectedGreetingCard, handleOptionClick }) => {
  return (
    <div key={cardId} className="flex items-center">
      <div id={cardId} onClick={() => handleOptionClick(cardId)} />
      <div className={`flex items-center cursor-pointer ${selectedGreetingCard === cardId ? 'border border-fuchsia-800 rounded-lg p-1' : ''}`}>
        <img src={image} alt={type} className="w-21 h-18" onClick={() => handleOptionClick(cardId)} />
        <span className="sr-only">{type}</span>
      </div>
    </div>
  );
};

export default GreetingCardOption;
