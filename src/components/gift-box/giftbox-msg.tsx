// MessageInput.tsx
import React from 'react';

interface Props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MessageInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div className="txtfield mt-8">
            <label htmlFor="dropdown" className="text-stone-900 text-xl font-medium">
                Enter your message for greeting card
            </label>
            <input
                type="text"
                placeholder="Enter your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mt-5"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MessageInput;
