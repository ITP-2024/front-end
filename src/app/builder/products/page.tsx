'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '@/components/gift-box/button';
import ProductItem from '@/components/common/product-item';

interface Product {
    productId: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}


const GiftBoxProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    //const [selectedProducts, setSelectedProducts] = useState<{ productId: string; name: string; price: number; quantity: number; }[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    
    const getQuantity = (productId: string): number => {
        const selectedProduct = selectedProducts.find(product => product.productId === productId);
        return selectedProduct ? selectedProduct.quantity : 0; // Return the quantity if the product is found, otherwise return 0
    };
    

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

            const storedSelectedProducts = localStorage.getItem('selectedProducts');
        if (storedSelectedProducts) {
            setSelectedProducts(JSON.parse(storedSelectedProducts));
        }
    }, []);

    /*const addToCart = (product: Product) => {
        setSelectedProducts(prevCart => [...prevCart, product]);
        console.log(selectedProducts);
    };*/

    const addToGiftBox = (product: Product) => {
        setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, product]);
    };

    const handleClick = (product: Product) => {
        const index = selectedProducts.findIndex(p => p.productId === product.productId);
        if (index === -1) {
            addToGiftBox(product);
        } else {
            const updatedProducts = [...selectedProducts];
            updatedProducts.splice(index, 1);
            setSelectedProducts(updatedProducts);
        }
    };
    console.log(selectedProducts);
    return (
        <div>
            <section className="mx-auto max-w-7xl pb-16">
                <ul className="flex flex-wrap">
                    {products.map((product) => (
                        
                        <ProductItem 
                        
                            key={product.productId} 
                            product={{ ...product, quantity: getQuantity(product.productId) }}
                            action={'Add to Gift Box'} 
                            handleClick={handleClick} 
                            
                        />
                    ))}
                </ul>
            </section>
            <div className="flex justify-end">
            <Button label="Next"/>
            </div>
        </div>
    );
};

export default GiftBoxProducts;
