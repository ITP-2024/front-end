"use client";

import { FC, useEffect } from 'react';
// import { useRouter } from 'next/router'; // Import useRouter hook

import SearchBar from "./searchbar";

const Products: FC = () => {
    // const router = useRouter(); // Initialize the useRouter hook

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
                <div className="w-[65px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    {/* Checkbox column */}
                    {/* (Each checkbox here seems to represent a product) */}
                    <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded bg-thistle  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    <div className="self-stretch rounded-t-none rounded-br-none rounded-bl-3xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                </div>

                <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    {/* product Id column */}
                    {/* Each product's category is displayed here */}
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product ID</b>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">P001</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">P002</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">P003</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">P004</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">P005</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">P006</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">P007</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">P008</div>
                    </div>
                </div>

                <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    {/* Product column */}
                    {/* Each product name and image are displayed here */}
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product</b>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 object-cover" alt="" src="Photo_kpopShop.png" />
                        <div className="relative tracking-[0.01em]">Bag</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 object-cover" alt="" src="Photo_kpopShop.png" />
                        <div className="relative tracking-[0.01em]">T-Shirt</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 object-cover" alt="" src="Photo_kpopShop.png" />
                        <div className="relative tracking-[0.01em]">Lomo Card Pack</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 object-cover" alt="" src="Photo_kpopShop.png" />
                        <div className="relative tracking-[0.01em]">Gel Pens</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 object-cover" alt="" src="Photo_kpopShop.png" />
                        <div className="relative tracking-[0.01em]">T-Shirt</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 object-cover" alt="" src="Photo_kpopShop.png" />
                        <div className="relative tracking-[0.01em]">Bag</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 object-cover" alt="" src="Photo_kpopShop.png" />
                        <div className="relative tracking-[0.01em]">T-Shirt</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 object-cover" alt="" src="Photo_kpopShop.png" />
                        <div className="relative tracking-[0.01em]">Squishy Plush</div>
                    </div>
                </div>

                <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    {/* Category column */}
                    {/* Each product's category is displayed here */}
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Category</b>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Astro</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Celine</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">BlackPink</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">BTS</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">NCE</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Astro</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">TXT</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">EXO</div>
                    </div>
                </div>

                <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    {/* Size column */}
                    {/* Each product's category is displayed here */}
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Size</b>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]"></div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Small</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]"></div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]"></div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Medium</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]"></div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Large</div>
                    </div>
                    
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]"></div>
                    </div>
                </div>

                <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    {/* Description column */}
                    {/* Each product's description is displayed here */}
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Description</b>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Sample</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Sample</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Sample</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Sample</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Sample</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Sample</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Sample</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Sample</div>
                    </div>
                </div>

                <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    {/* Price column */}
                    {/* Each product's price is displayed here */}
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Price</b>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Rs. 1850.00</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Rs. 1900.00</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Rs. 950.00</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Rs. 275.00</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Rs. 1900.00</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Rs. 950.00</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Rs. 1850.00</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <div className="relative tracking-[0.01em]">Rs. 1800.00</div>
                    </div>
                </div>

                <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    {/* GiftBoxProduct column */}
                    {/* Each product's category is displayed here */}
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">GiftBox Product</b>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">True</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">True</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">False</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">True</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">True</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">False</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">True</div>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                        <div className="relative tracking-[0.01em]">False</div>
                    </div>
                </div>

                <div className="w-[80px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px] text-sm text-white">
                    {/* Action column */}
                    {/* Icons for edit and delete actions are displayed here */}
                    <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <b className="relative tracking-[0.01em]">Action</b>
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" />
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" />
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" />
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" />
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" />
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" />
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" />
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" />
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" />
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" />
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" />
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" />
                    </div>
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" />
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" />
                    </div>
                    <div className="self-stretch rounded-t-none rounded-br-3xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" />
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;

