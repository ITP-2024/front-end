"use client"


import React, { useState, useEffect } from 'react';
import Header from '@/components/common/header';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AddPayment from '../saveCard/page';

interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
}
const CheckoutPage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [bankDetails, setBankDetails] = useState<any>(null); // State to store bank details
    const [showForm, setShowForm] = useState(false); // State to toggle the display of the form
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {
        const storedSelectedProducts = localStorage.getItem('selectedProducts');
        if (storedSelectedProducts) {
            setSelectedProducts(JSON.parse(storedSelectedProducts));
        }
    }, []);

    const getTotalAmount = () => {
        return selectedProducts.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    };

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        if (option === 'Bank') {
            // If Bank is selected, show the form
            setShowForm(true);
        } else {
            // If another option is selected, hide the form
            setShowForm(false);
        }
    };

    const handleSaveBankDetails = (details: any) => {
        // Save bank details and hide the form
        setBankDetails(details);
        setShowForm(false); // Hide the form
    };

    const handleProceedToPayment = () => {
        // Navigate to success payment page
        router.push('/payment/success-payment');
    };

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '960px', margin: '0 auto' }}>
                <div style={{ flex: 1, marginRight: '16px' }}>
                    <div className="mx-auto max-w-4xl px-4 py-8">
                        <h1 className="text-2xl font-bold">Checkout</h1>
                        <div className="mt-8">
                            <p>Review your order details and proceed to checkout:</p>
                            <div className="mt-4">
                                {selectedProducts.map((product, index) => (
                                    <div key={index} className="border-b py-2">
                                        <p><span className="font-semibold">Product Name:</span> {product.name}</p>
                                        <p><span className="font-semibold">Quantity:</span> {product.quantity}</p>
                                        <p><span className="font-semibold">Price:</span> Rs. {product.price * product.quantity}</p> {/* Price multiplied by quantity */}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <p className="font-bold">Total Price: Rs.{getTotalAmount()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="mx-auto max-w-4xl px-4 py-8">
                        <div style={{ flex: 1, marginRight: '16px' }}>
                            <div onClick={() => handleSelectOption('Bank')}>Bank</div>
                            {showForm && (
                                <AddPayment onSave={handleSaveBankDetails} />
                            )}
                            {bankDetails && (
                                <div>
                                    <p>Bank Details Saved</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mx-auto max-w-4xl px-4 py-8">
                        <div style={{ flex: 1, marginLeft: '16px' }}>
                            <div onClick={() => handleSelectOption('COD')}>COD</div>
                            {selectedOption === 'COD' && (
                                <div style={{ flex: 1 }}>
                                    {/* Show empty page for COD */}
                                    <button type="button" onClick={handleProceedToPayment} className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900 w-full md:w-auto">Proceed to Payment</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
