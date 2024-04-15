"use client";
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from "./searchbar";
// import { useRouter } from 'next/router'; // Import useRouter hook

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
    // const router = useRouter(); // Initialize the useRouter hook

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

    const navigateToAddProduct = async () => {
        if (typeof window !== 'undefined') {
            const { default: Router } = await import('next/router');
            Router.push('/InventoryManagement/addProduct');
        }
    };

    useEffect(() => {
        // Call the function to navigate when component mounts
        navigateToAddProduct();
    }, []); // Empty dependency array ensures the effect runs only once after initial mount

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
        <div className="ml-[320px]"> {/* Styling for margin-left */}
            <div className="mt-[30px] mt-[90px]"> {/* Styling for margin-top */}
                <SearchBar title="Search " /> {/* Render the SearchBar component with title prop */}

                <button className="relative rounded-[50px] bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex  flex-row flex-wrap items-center justify-center py-[0.75rem] px-[1rem] text-left text-[1rem] text-white font-inter border-[1px] border-solid border-darkmagenta"
                    onClick={navigateToAddProduct} > {/* Call the function to navigate when button is clicked */}
                    {/* Button for adding new product */}
                    <div className="relative font-semibold">+ Add New Product</div>
                </button>

            </div>

            <div className="relative w-full flex flex-row items-start justify-center p-2.5  text-left text-smi text-darkslategray">
                {/* Section for displaying product details */}
                {products.map((product, index) => (
                    <div key={index} className="w-[65px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">

                        <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            {/* product Id column */}
                            {/* Each product's category is displayed here */}
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Product ID</b>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">{product.productId}</div>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">{product.productId}</div>
                            </div>
                        </div>

                        <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            {/* Product column */}
                            {/* Each product name and image are displayed here */}
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Product</b>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                                <img className="w-6 relative h-6 object-cover" alt="" src={product.imageUrl} />
                                <div className="relative tracking-[0.01em]">{product.name}</div>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                                <img className="w-6 relative h-6 object-cover" alt="" src={product.imageUrl} />
                                <div className="relative tracking-[0.01em]">{product.name}</div>
                            </div>
                        </div>

                        <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            {/* Category column */}
                            {/* Each product's category is displayed here */}
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Category</b>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">{product.category.name}</div>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">{product.category.name}</div>
                            </div>
                        </div>

                        <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            {/* Size column */}
                            {/* Each product's category is displayed here */}
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Size</b>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">{product.size.name}</div>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">{product.size.name}</div>
                            </div>
                        </div>

                        <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            {/* Description column */}
                            {/* Each product's description is displayed here */}
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Description</b>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">{product.description}</div>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">{product.description}</div>
                            </div>
                        </div>

                        <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            {/* Price column */}
                            {/* Each product's price is displayed here */}
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                                <b className="relative tracking-[0.01em]">Price</b>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">Rs. {product.price}</div>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                                <div className="relative tracking-[0.01em]">Rs. {product.price}</div>
                            </div>
                        </div>

                        <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                            {/* GiftBoxProduct column */}
                            {/* Each product's category is displayed here */}
                            <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                                <b className="relative tracking-[0.01em]">GiftBox Product</b>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                                <div className="relative tracking-[0.01em]">{product.giftBoxProduct ? 'True' : 'False'}</div>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                                <div className="relative tracking-[0.01em]">{product.giftBoxProduct ? 'True' : 'False'}</div>
                            </div>
                        </div>

                        <div className="w-[80px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px] text-sm text-white">
                            {/* Action column */}
                            {/* Icons for edit and delete actions are displayed here */}
                            <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                                <b className="relative tracking-[0.01em]">Action</b>
                            </div>
                            <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                                <button onClick={() => handleEdit(product.productId)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="" /></button>
                                <button onClick={() => handleDelete(product.productId)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="" /></button>
                            </div>
                            <div className="self-stretch rounded-t-none rounded-br-3xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                                <button onClick={() => handleEdit(product.productId)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="" /></button>
                                <button onClick={() => handleDelete(product.productId)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="" /></button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;

