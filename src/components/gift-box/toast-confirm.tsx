import { useState } from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
  }

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsConfirmed(true);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete the gift box?</h2>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md">Cancel</button>
          <button onClick={handleConfirm} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
