'use client'
// CartSummaryPage.tsx

import React, { useState, useEffect } from 'react';
import Header from '@/components/common/header';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

const CartSummaryPage: React.FC = () => {
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

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <div className="mx-auto max-w-4xl px-4 py-8 "> 
    <h1 className="text-3xl font-bold mb-4 text-center">KpopShop Nexus</h1> {/* Business name with larger fonts */}
    <p className="text-3xl text-center">Address: Kiribathgoda, Sri Lanka</p> {/* Business address */}
                <h2 className="text-2xl font-bold text-center">Cart Summary</h2>
                <p>Printed on: {new Date().toLocaleString()}</p>
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
                    <h2 className="font-bold text-xl">Cart Total: Rs. {getTotalAmount()}</h2>
                    <p className="font-bold">Total Items: {selectedProducts.reduce((total, product) => total + product.quantity, 0)}</p> {/* Total number of items */}
                </div>
                <div className="mt-4">
                    <button onClick={handlePrint} className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900">Print Report</button>
                    <Link href="cartUI">
                        <button className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900 ml-2">Go Back to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartSummaryPage;
