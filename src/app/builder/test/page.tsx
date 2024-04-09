'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NextButton from '@/components/gift-box/next-button';
import ProductItem from '@/components/common/product-item';

interface Product {
    productID: string;
    name: string;
    description: string;
    price: number;
    status: string;
    image: string;
    categoryID: string;
    sizes: { size: string; quantity: number }[];
    giftBoxProduct: boolean;
}


const GiftBoxProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Fetch gift box products from backend
        axios.get<Product[]>('http://localhost:8080/products/giftbox-products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching gift box products:', error);
            });
    }, []);

    const addToCart = (product: Product) => {
        setSelectedProducts(prevCart => [...prevCart, product]);
        console.log(selectedProducts);
    };

    const addToGiftBox = (product: Product) => {
        // Your logic to add to gift box
    };

    const handleClick = (product: Product) => {

    };
    return (
        <div>
            <section className="mx-auto max-w-7xl pb-16">
                <ul className="flex flex-wrap">
                    {products.map((product) => (
                        <ProductItem 
                            key={product.productID} 
                            product={product} 
                            action={'Add to Gift Box'} 
                            handleClick={handleClick} 
                        />
                    ))}
                </ul>
            </section>
            <div className="flex justify-end">
                <NextButton />
            </div>
        </div>
    );
};

export default GiftBoxProducts;
