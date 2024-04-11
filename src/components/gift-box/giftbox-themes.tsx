import React from 'react';

interface GiftBoxOptionProps {
  boxColorId: string;
  color: string;
  image: string;
  selectedTheme: string | null;
  handleOptionClick: (boxColorId: string) => void;
}

const GiftBoxOption: React.FC<GiftBoxOptionProps> = ({ boxColorId, color, image, selectedTheme, handleOptionClick }) => {
  return (
    
    <div id={boxColorId} onClick={() => handleOptionClick(boxColorId)}>
      <div className={`flex items-center cursor-pointer ${selectedTheme === boxColorId ? 'border border-fuchsia-800 rounded-lg p-1' : ''}`}>
        <img src={image} alt={color} className="w-21 h-18" onClick={() => handleOptionClick(boxColorId)} />
        <span className="sr-only">{color}</span>
      </div>
    </div>
  );
};

export default GiftBoxOption;
