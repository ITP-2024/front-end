"use client";
import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import SearchBar from "./searchbar";

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
            const response = await axios.get<Product[]>('http://localhost:8080/api/products');
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const navigateToAddProduct = async () => {
        if (typeof window !== 'undefined') {
            const { default: Router } = await import('next/router');
            Router.push('/InventoryManagement/addProduct');
        }
    };

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
                <SearchBar title="Search " /> {/* Render the SearchBar component with title prop */}

                <button className="relative rounded-[50px] bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex  flex-row flex-wrap items-center justify-center py-[0.75rem] px-[1rem] text-left text-[1rem] text-white font-inter border-[1px] border-solid border-darkmagenta"
                    onClick={navigateToAddProduct} > 
                    <div className="relative font-semibold">+ Add New Product</div>
                </button>
            </div>

            {/* Product details section */}
            <div className="relative w-full flex flex-row items-start justify-center p-2.5 text-left text-smi text-darkslategray">
            
                {/* Checkbox column */}
                <div className="w-[65px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded bg-thistle  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5">
                            <input type="checkbox" value={product.id} className="w-[18px] h-[18px] rounded border-[1px] border-solid border-black appearance-none checked:bg-darkmagenta checked:border-transparent" />
                        </div>
                    ))}
                </div>

                {/* Product ID column */}
                <div className="w-[100px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product ID</b>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">{product.productId}</div>
                    </div>
                    ))}
                </div>

                {/* Product column */}
                <div className="w-[320px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
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
                        <div className="relative tracking-[0.01em]">{product.size.name}</div>
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
                        <div className="relative tracking-[0.01em]">{product.giftBoxProduct ? 'True' : 'False'}</div>
                    </div>
                    ))}
                </div>

                {/* Price column */}
                <div className="w-[100px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Price</b>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">{product.price}</div>
                    </div>
                    ))}
                </div>

                {/* Quantity column */}
                <div className="w-[90px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Quantity</b>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">{product.quantity}</div>
                    </div>
                    ))}
                </div>

                {/* Action column */}
                <div className="w-[80px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px] text-sm text-white">
                    <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <b className="relative tracking-[0.01em]">Action</b>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <button onClick={() => handleEdit(product.productId)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="Edit" src="https://i.ibb.co/bJf0SfB/edit.png"/></button>
                        <button onClick={() => handleDelete(product.productId)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="Delete" src="https://i.ibb.co/cNX07t0/delete.png"/></button>
                    </div>
                    ))}
                </div> 

            </div> 

        </div>
    );
    
};

export default Products;
