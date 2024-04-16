'use client'
import { ProductImageWrapper } from '@/components/common/ProductImageWrapper';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NextButton from '@/components/gift-box/button';

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

    const addToGiftBox = (product: Product) => {
        setSelectedProducts(prevCart => [...prevCart, product]);
        console.log(selectedProducts);
    };

    
    const handleClick = () => {
        router.push('/builder/giftbox');
    };

    return (
        <div >
            <section className="mx-auto max-w-7xl pb-16">
                <ul className="flex flex-wrap">
                    {products.map((product) => (
                        <li key={product.productID} className="p-4 flex-shrink-0 w-1/3">
                            <div className="flex flex-col">
                                <ProductImageWrapper
                                    src={product.image}
                                    alt={product.name}
                                    width={350}
                                    height={250}
                                />
                                <h3>{product.name}</h3>
                                <h3>Rs.{product.price}</h3>
                                <button
                                    type="submit"
                                    className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-2 hover:bg-fuchsia-900"
                                    onClick={() => addToGiftBox(product)}
                                >
                                    Add to Gift Box
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <div className="flex justify-end">
            
            </div>
        </div>

    );


};

export default GiftBoxProducts;
