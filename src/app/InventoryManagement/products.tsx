"use client";
import SearchBar from "./searchbar";

import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';

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

const Products: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [editedProducts, setEditedProducts] = useState<Record<string, Product>>({});
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>('http://localhost:8080/api/products');
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:8080/api/products');
            // Handle response here
        } catch (error: any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in Node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const navigateToAddProduct = () => {
        Router.push('/InventoryManagement/addProduct');
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        if (event.target.checked) {
            setSelectedProducts([...selectedProducts, id]);
        } else {
            setSelectedProducts(selectedProducts.filter(id => id !== id));
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string, fieldName: string) => {
        let value;
        if (fieldName === 'quantity') {
            value = parseInt(event.target.value);
        } else if (fieldName === 'price') {
            value = parseFloat(event.target.value);
        } else if (fieldName === 'giftBoxProduct') {
            value = event.target.value === 'True' ? true : false;
        } else if (fieldName === 'size' || fieldName === 'category') {
            value = { id: event.target.value, name: event.target.value };
        } else {
            value = event.target.value;
        }
    
        setEditedProducts({
            ...editedProducts,
            [id]: {
                ...editedProducts[id],
                [fieldName]: value
            }
        });
    };
    
    const handleEdit = async (id: string) => {
        if (selectedProducts.includes(id) && editedProducts[id]) {
            console.log(`Editing product with ID: ${id} and new value: ${editedProducts[id]}`);
            try {
                const { id: productId, ...productData } = editedProducts[id]; // Exclude 'id' from the request body
                await axios.put(`http://localhost:8080/api/products/${id}`, productData);
                fetchProducts(); // Refresh the products list after editing
            } catch (error) {
                console.error('Error editing product:', error);
            }
        }
    };
    
    const handleDelete = async (id: string) => {
        if (selectedProducts.includes(id)) {
            console.log(`Deleting product with ID: ${id}`);
            try {
                await axios.delete(`http://localhost:8080/api/products/${id}`);
                fetchProducts(); // Refresh the products list after deleting
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    const handleSearch = (query: string) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = products.filter(product => 
          product.productId.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="ml-[320px]">

            <div className="mt-[30px] mt-[90px]">
                
                <SearchBar title="Search " onSearch={handleSearch} /> 

                <button className="relative rounded-[50px] bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex  flex-row flex-wrap items-center justify-center py-[0.75rem] px-[1rem] text-left text-[1rem] text-white font-inter border-[1px] border-solid border-darkmagenta"
                    onClick={navigateToAddProduct} > 
                    <div className="relative font-semibold">+ Add New Product</div>
                </button>
            </div>

            {/* Product details section */}
            <div className="relative w-full flex flex-row items-start justify-center p-2.5 text-left text-smi text-darkslategray">
            
                {/* Checkbox column */}
                <div className="w-[2.5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded bg-thistle  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5">
                            <input type="checkbox" value={product.id} onChange={event => handleCheckboxChange(event, product.id)} className="w-[18px] h-[18px] rounded border-[1px] border-solid border-black appearance-none checked:bg-darkmagenta checked:border-transparent" />
                        </div>
                    ))}
                </div>

                {/* Product ID column */}
                <div className="w-[5.5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product ID</b>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <input type="text" value={editedProducts[product.id]?.productId || product.productId} onChange={event => handleInputChange(event, product.id, 'productId')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* Product column */}
                <div className="w-[32%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product</b>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                            <img className="w-6 relative h-6 object-cover" alt="" src={product.imageUrl} />
                            <input type="text" value={editedProducts[product.id]?.name || product.name} onChange={event => handleInputChange(event, product.id, 'name')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                            <input type="text" value={editedProducts[product.id]?.imageUrl || product.imageUrl} onChange={event => handleInputChange(event, product.id, 'imageUrl')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '40%', marginRight: '2%'}} />
                        </div>
                    ))}
                </div>

                {/* Category column */}
                <div className="w-[8%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Category</b>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <input type="text" value={editedProducts[product.id]?.category?.name || product.category.name} onChange={event => handleInputChange(event, product.id, 'category')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* Size column */}
                <div className="w-[7.5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Size</b>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <input type="text" value={editedProducts[product.id]?.size?.name || product.size.name} onChange={event => handleInputChange(event, product.id, 'size')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* GiftBoxProduct column */}
                <div className="w-[5.5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">GiftBox Product</b>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                            <input type="text" value={product.giftBoxProduct ? 'True' : 'False'} onChange={event => handleInputChange(event, product.id, 'giftBoxProduct')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* Price column */}
                <div className="w-[5.5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Price</b>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <input type="number" step="0.01" value={editedProducts[product.id]?.price || product.price} onChange={event => handleInputChange(event, product.id, 'price')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* Quantity column */}
                <div className="w-[5.5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Quantity</b>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <input type="number" min="1" value={editedProducts[product.id]?.quantity || product.quantity} onChange={event => handleInputChange(event, product.id, 'quantity')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
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
                        <button onClick={() => handleEdit(product.id)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="Edit" src="https://i.ibb.co/bJf0SfB/edit.png"/></button>
                        <button onClick={() => handleDelete(product.id)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="Delete" src="https://i.ibb.co/cNX07t0/delete.png"/></button>
                    </div>
                    ))}
                </div> 

            </div> 

        </div>
    );
    
};

export default Products;
