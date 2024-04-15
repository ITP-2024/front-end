"use client";
import { FC, useEffect, useState } from 'react';
import axios from 'axios';

type Product = {
    id: string;
    productId: string;
    category: {
      id: string;
      name: string;
    };
    name: string;
    size: {
      id: string;
      name: string;
    };
    imageUrl: string;
    description: string;
    giftBoxProduct: boolean;
    price: number;
    quantity: number;
};

const Products: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>('http://localhost:8080/api/product'); // change to /products
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Function to handle edit button click
    const handleEdit = (productId: string) => {
        console.log(`Editing product with ID: ${productId}`);
        // Add your edit logic here
    };

    // Function to handle delete button click
    const handleDelete = (productId: string) => {
        console.log(`Deleting product with ID: ${productId}`);
        // Add your delete logic here
    };

return (
    <div className="ml-[320px]">
        <div className="mt-[30px] mt-[90px]">
            {/* Product details section */}
            <div className="relative  flex flex-row items-start justify-center p-2.5 text-left text-smi text-darkslategray">
                {/* Mapping through the fetched products and displaying product details */}
                
                    <div className="w-[65px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">

                        <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                            <div className="w-[18px] relative rounded bg-thistle  h-[18px] border-[1px] border-solid border-black">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                            </div>
                        </div>
                    
                        <div className="self-stretch rounded-t-none rounded-br-none rounded-bl-3xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                            <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                            </div>
                        </div>

                        {/* Product ID column */}
                        <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                                <b className="relative tracking-[0.01em]">Product ID</b>
                            </div>
                            {products.map((product, index) => (
                            <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                {/* Display the product ID fetched from the API */}
                                <div className="relative tracking-[0.01em]">{product.productId}</div>
                            </div>
                            ))}
                        </div>

                        {/* Product column */}
                        <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                                <b className="relative tracking-[0.01em]">Product</b>
                            </div>
                            {products.map((product, index) => (
                            <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                                <img className="w-6 relative h-6 object-cover" alt="" src={product.imageUrl} />
                                <div className="relative tracking-[0.01em]">{product.name}</div>
                            </div>
                            ))}
                        </div>

                        {/* Category column */}
                        <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Category</b>
                            </div>
                            {products.map((product, index) => (
                            <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                {/* Display the category fetched from the API */}
                                <div className="relative tracking-[0.01em]">{product.category.name}</div>
                            </div>
                            ))}
                        </div>

                        {/* Size column */}
                        <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Size</b>
                            </div>
                            {products.map((product, index) => (
                            <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                {/* Display the size fetched from the API */}
                                <div className="relative tracking-[0.01em]">{product.size.name}</div>
                            </div>
                            ))}
                        </div>

                        {/* Description column */}
                        <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Description</b>
                            </div>
                            {products.map((product, index) => (
                            <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                {/* Display the description fetched from the API */}
                                <div className="relative tracking-[0.01em]">{product.description}</div>
                            </div>
                            ))}
                        </div>

                        {/* Price column */}
                        <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Price</b>
                            </div>
                            {products.map((product, index) => (
                            <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                {/* Display the price fetched from the API */}
                                <div className="relative tracking-[0.01em]">{product.price}</div>
                            </div>
                            ))}
                        </div>

                        {/* GiftBoxProduct column */}
                        <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                                <b className="relative tracking-[0.01em]">GiftBox Product</b>
                            </div>
                            {products.map((product, index) => (
                            <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                                {/* Display the GiftBox Product fetched from the API */}
                                <div className="relative tracking-[0.01em]">{product.giftBoxProduct ? 'True' : 'False'}</div>
                            </div>
                            ))}
                        </div>

                        {/* Action column */}
                        <div className="w-[80px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px] text-sm text-white">
                            <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                                <b className="relative tracking-[0.01em]">Action</b>
                            </div>
                            {products.map((product, index) => (
                            <div key={index} className="self-stretch rounded-t-none rounded-br-3xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                                <button onClick={() => handleEdit(product.productId)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="" /></button>
                                <button onClick={() => handleDelete(product.productId)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="" /></button>
                            </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    </div>
);
    
};

export default Products;
