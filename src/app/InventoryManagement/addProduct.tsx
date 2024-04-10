"use client";

import React, { ChangeEvent, useState } from 'react';

interface Product {
    productId: string;
    category: string;
    name: string;
    size: string;
    imageUrl: string;
    description: string;
    giftBoxProduct: string;
    price: number;
    quantity: number;
}

const AddProduct = () => {
    const [product, setProduct] = useState<Product>({
        productId: '',
        category: 'astro', // Set default value
        name: '',
        size: 'extra-small', // Set default value
        imageUrl: '',
        description: '',
        giftBoxProduct: 'true', // Set default value
        price: 0.0, // Set default value 
        quantity: 0, // Set default value
    });

    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const requiresSize = value.toLowerCase().includes('t-shirt');
        const newSize = requiresSize ? 'extra-small' : product.size;
        setProduct({ ...product, [name]: value, size: newSize });
    };

    const handleSubmit = async () => {
        // Basic form validation
        if (!product.name || !product.price || !product.quantity || !product.category || !product.imageUrl || !product.description || !product.giftBoxProduct) {
            alert('Please fill in all required fields');
            return;
        }
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                setSuccessMessage('Product successfully created!');
                setErrorMessage(''); // Reset error message
                
                setProduct({
                    productId: '',
                    category: 'astro',
                    name: '',
                    size: 'extra-small',
                    imageUrl: '',
                    description: '',
                    giftBoxProduct: 'true',
                    price: 0.0,
                    quantity: 0,
                });
            } else {
                // Handle error (e.g., display error message)
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Error creating product.');
                setSuccessMessage(''); // Reset success message
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred while creating the product.');
            setSuccessMessage(''); // Reset success message
        }
    };

  	return (
        
        <div className="w-full relative [backdrop-filter:blur(2.5px)] h-[978px] overflow-hidden shrink-0 flex flex-col items-center justify-center text-left text-xl text-black">
            <div className="flex flex-col items-center bg-shadeofpurple justify-center">
                <form>
                    <div className="w-[863px] h-[656px] flex flex-row items-center justify-center">
                        <div className="w-[863px] relative bg-shadeofpurple h-[656px]">

                            <div className="absolute top-[2px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[102px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Product Id</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    type="text" name='productId' value={product.productId} onChange={handleChange} placeholder="P001"/>
                                </div>
                            </div>

                            <div className="absolute top-[75px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[92px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Category</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <select className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    name="category" value={product.category} onChange={handleChange}>
                                    <option value="astro">Astro</option>
                                    <option value="bts">BTS</option>
                                    <option value="txt">TXT</option>
                                    <option value="nce">NCE</option>
                                    <option value="exo">EXO</option>
                                    </select>
                                </div>
                            </div>

                            <div className="absolute top-[148px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[57px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Name</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    type="text" name='name' value={product.name} onChange={handleChange} placeholder="Bag"
                                    />
                                </div>
                            </div>

                            <div className="absolute top-[221px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[42px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Size</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <select className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    name="size" value={product.size} onChange={handleChange}>
                                    <option value="extra-small">Extra Small</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="excel">Excel</option>
                                    </select>
                                </div>
                            </div>

                            <div className="absolute top-[294px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[94px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Image Url</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    type="text" name='imageUrl' value={product.imageUrl} onChange={handleChange} placeholder="<dev><img src=example.image</dev>"
                                    />
                                </div>
                            </div>

                            <div className="absolute top-[367px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[114px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Description</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <textarea className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    name='description' value={product.description} onChange={handleChange}  placeholder="example description"
                                    />
                                </div>
                            </div>

                            <div className="absolute top-[440px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[157px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">GiftBox Product</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <select className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    name='giftBoxProduct' value={product.giftBoxProduct} onChange={handleChange}>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                    </select>
                                </div>
                            </div>

                            <div className="absolute top-[513px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[51px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Price</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    type="number" step="0.01" min="1" name='price' value={product.price} onChange={handleChange} placeholder="2990.85"
                                    />
                                </div>
                            </div>

                            <div className="absolute top-[586px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[85px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Quantity</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                    type="number" min="1" name='quantity' value={product.quantity} onChange={handleChange} placeholder="26"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <div className="w-[863px] h-[68px] flex flex-row items-center justify-center text-white">
                    <div className="rounded-31xl [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-col items-start justify-start p-2.5">
                        <button className="rounded-31xl bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-3 px-2.5 border-[1px] border-solid border-darkmagenta">
                            <div className="relative font-semibold">Cancel</div>
                        </button>
                    </div>
                    <div className="rounded-31xl [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-col items-start justify-start p-2.5 ml-[-10px]">
                        <button className="rounded-31xl bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-3 px-2.5 border-[1px] border-solid border-darkmagenta" onClick={handleSubmit}>
                            <div className="relative font-semibold">Save</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>     
    );
};

export default AddProduct;
