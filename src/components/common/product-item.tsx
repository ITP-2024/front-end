import React, { useState, useEffect } from 'react';
import { ProductImageWrapper } from './ProductImageWrapper';

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

interface ProductProps {
    product: Product;
    action: 'Add to Cart' | 'Add to Gift Box';
    handleClick: (product: Product) => void;
}

const ProductItem: React.FC<ProductProps> = ({ product, action, handleClick }) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const storedCount = localStorage.getItem(product.productID + '_count');
        if (storedCount) {
            setCount(parseInt(storedCount));
        }
        const storedSelected = localStorage.getItem(product.productID + '_isSelected');
        if (storedSelected) {
            setIsSelected(storedSelected === 'true');
        }
    }, [product]);

    const handleButtonClick = () => {
        setIsSelected(true);
        setCount(prevCount => prevCount + 1);
        localStorage.setItem(product.productID + '_isSelected', 'true');
        localStorage.setItem(product.productID + '_count', String(count + 1));
        handleClick(product);
    };
    

    return (
        <li key={product.productID} className="p-4 flex-shrink-0 w-1/3">
        <div className={`relative flex flex-col ${isSelected ? 'border border-fuchsia-800 rounded-lg p-2' : ''}`}>
            <ProductImageWrapper
                src={product.image}
                alt={product.name}
                width={350}
                height={250}
            />
            <h3>{product.name}</h3>
            <h3>Rs.{product.price}</h3>
            <button
                type="button"
                className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-2 hover:bg-fuchsia-900"
                onClick={handleButtonClick}
            >
                {action}
            </button>
            {isSelected && (
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    {count}
                </div>
            )}
        </div>
    </li>
    
    );
};

export default ProductItem;
