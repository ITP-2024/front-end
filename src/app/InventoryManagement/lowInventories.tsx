"use client";

import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchBar from "./searchbar";

interface Size {
    id: string;
    name: string;
}

interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    productId: string;
    category: Category;
    name: string;
    size: Size;
    imageUrl: string;
    description: string;
    giftBoxProduct: boolean;
    price: number;
    quantity: number;
}

const LowInventories: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [newQuantity, setNewQuantity] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products/low-inventory')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, product: Product) => {
        if (event.target.checked) {
            setSelectedProduct(product);
            setNewQuantity(product.quantity);
        } else {
            setSelectedProduct(null);
        }
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, product: Product) => {
        if (selectedProduct?.id === product.id) {
            setNewQuantity(Number(event.target.value));
        }
    };

    const handleEditClick = () => {
        if (selectedProduct) {
            axios.put(`http://localhost:8080/api/products/${selectedProduct.id}`, {
                ...selectedProduct,
                quantity: newQuantity
            })
            .then(response => {
                setProducts(products.map(product => product.id === response.data.id ? response.data : product));
                setSelectedProduct(null);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }
    };

  	return (
        <div className="ml-[320px]">
            <div className=" mt-[30px] mt-[90px]">
            
                <SearchBar title="Search " /> {/* Render the SearchBar component with title prop */}

                <button className="relative rounded-[50px] bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row flex-wrap items-center justify-center py-[0.75rem] px-[1rem] text-left text-[1rem] text-white font-inter border-[1px] border-solid border-darkmagenta">
                    <div className="relative font-semibold">Print Report</div>
                </button>

            </div>

            <div className="relative w-full flex flex-row items-start justify-center p-2.5 text-left text-smi text-darkslategray">

                {/* Checkbox column */}
                <div className="w-[65px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]"> 
                    <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5">
                        <div className="w-[18px] relative rounded bg-thistle h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch rounded-t-none rounded-br-none rounded-bl-3xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5">
                        <input type="checkbox" id={`product-${product.id}`} value={product.id} onChange={(e) => handleCheckboxChange(e, product)} className="w-[18px] relative rounded h-[18px] border-[1px] border-solid border-black" />
                    </div>
                    ))}
                </div>

                {/* product Id column */}   
                <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product ID</b>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">{product.productId}</div>
                    </div>
                    ))}
                </div>

                {/* Product name column */}
                <div className="w-[180px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product Name</b>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">{product.name}</div>
                    </div>
                    ))}
                </div>

                {/* Category column */}
                <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Category</b>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">{product.category.name}</div>
                    </div>
                    ))}
                </div>
                
                {/* Price column */}
                <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Price</b>
                    </div>
                    {products.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
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
                        <div className="relative tracking-[0.01em]">{product.giftBoxProduct ? 'True' : 'False'}</div>
                    </div>
                    ))}
                </div>

                {/* Quantity column */}
                <div className="w-[100px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Quantity</b>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                            <input type="number" value={selectedProduct?.id === product.id ? newQuantity : product.quantity} disabled={selectedProduct?.id !== product.id} onChange={(e) => handleQuantityChange(e, product)} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* Action column */}
                <div className="w-[80px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px] text-sm text-white">
                    <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5">
                        <b className="relative tracking-[0.01em]">Action</b>
                    </div>
                    {products.map((product, index) => (
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <button onClick={handleEditClick}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="Edit" src="https://i.ibb.co/bJf0SfB/edit.png"/></button>
                    </div>
                    ))}
                </div>

            </div>

        </div>
    );

};

export default LowInventories;

