'use client'
import React, { useState, useEffect } from 'react';
import Header from '@/components/common/header';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import CartSummary from '../cartSummary/page';
import { toast } from 'react-toastify';
import Link from 'next/link';

interface ReportItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  total: number;
}


interface Product {
    id: string;
    productId: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

const CartUI: React.FC = () => {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {
        const storedSelectedProducts = localStorage.getItem('selectedProducts');
        if (storedSelectedProducts) {
            setSelectedProducts(JSON.parse(storedSelectedProducts));
        }
    }, []);

   

    const handleRemove = (productId: string) => {
        const updatedProducts = selectedProducts.filter(product => product.productId !== productId);
        setSelectedProducts(updatedProducts);
        localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
    };

    const handleUpdateQuantity = (productId: string, newQuantity: number) => {
        const updatedProducts = selectedProducts.map(product => {
            if (product.productId === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        setSelectedProducts(updatedProducts);
        localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
    };

    const getTotalAmount = () => {
        return selectedProducts.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    };


  
    return (
        <div>
            <Header />
            <div className="mx-auto max-w-4xl px-4 py-8">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                {selectedProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center space-x-4">
                        <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover" />
                        <div>
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-500">Rs. {product.price}</p>
                            <div className="flex items-center">
                            <button
    onClick={() => handleUpdateQuantity(product.productId, Math.max(0, product.quantity - 1))}
    className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900">-</button>
                                <p className="text-gray-500 mx-2">Quantity: {product.quantity}</p>
                                <button onClick={() => handleUpdateQuantity(product.productId, product.quantity + 1)} className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900">+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleRemove(product.productId)} className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900">Remove</button>
                    </div>
                </div>
                
                ))}
                <div className="mt-4">
                    <h2 className="font-bold text-xl">Cart Total: Rs. {getTotalAmount()}</h2>
                </div>
                <div className="mt-4 space-y-2 md:space-y-0 md:flex md:justify-between">
                    <div className="md:mr-2">
                        <button onClick={() => router.push('/checkout')} className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900 w-full md:w-auto">Proceed to Checkout</button>
                    </div>
                    <div className="md:mx-2">
                        <Link href="members">
                            <button className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900 w-full md:w-auto">Share My Cart</button>
                        </Link>
                    </div>
                    <div className="md:ml-2">
                    <div className="md:ml-2">
                    <Link href="cartSummary"> {/* Adjust the href path as needed */}
    <button className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900 w-full md:w-auto">Cart Summary</button>
</Link>

</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartUI;
