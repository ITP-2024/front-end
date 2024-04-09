import React from 'react';
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
    return (
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
                    type="button"
                    className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-2 hover:bg-fuchsia-900"
                    onClick={() => handleClick(product)}
                >
                    {action}
                </button>
            </div>
        </li>
    );
};

export default ProductItem;
