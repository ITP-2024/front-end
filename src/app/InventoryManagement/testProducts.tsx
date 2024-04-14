//testProducts.tsx
"use client";
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const navigateToAddProduct = () => {
    try {
      router.push('/InventoryManagement/addProduct');
    } catch (error) {
      console.error("Navigation error", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const handleEdit = async (product: Product) => {
    const response = await axios.put(`/api/products/${product.id}`, product);
    // Update the state with the updated product
};

const handleDelete = async (product: Product) => {
    const response = await axios.delete(`/api/products/${product.id}`);
    // Remove the deleted product from the state
};

  return (
    <div className="ml-[320px]">
        <div className="mt-[30px] mt-[90px]">
            <SearchBar title="Search " />
            <button className="relative rounded-[50px] bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex  flex-row flex-wrap items-center justify-center py-[0.75rem] px-[1rem] text-left text-[1rem] text-white font-inter border-[1px] border-solid border-darkmagenta"
                onClick={navigateToAddProduct} >
                <div className="relative font-semibold">+ Add New Product</div>
            </button>
        </div>

        <div className="relative w-full flex flex-row items-start justify-center p-2.5  text-left text-smi text-darkslategray">
            {/* Section for displaying product details */}
            {products.map((product) => (
                <div key={product.id} className="flex">
                    {/* Checkbox column */}
                    <div className="w-[65px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                        <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                            <div className="w-[18px] relative rounded bg-thistle  h-[18px] border-[1px] border-solid border-black">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />
                            </div>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                            <div className="w-[18px] relative rounded  h-[18px] border-[1px] border-solid border-black">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs  border-[2px] border-solid border-checkbox-empty" />{product.id}
                            </div>
                        </div>
                    </div>

                    {/* product Id column */}
                    <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                        <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                            <b className="relative tracking-[0.01em]">Product ID</b>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <div className="relative tracking-[0.01em]">{product.productId}</div>
                        </div>
                    </div>

                    {/* Product column */}
                    <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                        <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                            <b className="relative tracking-[0.01em]">Product</b>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                            <img className="w-6 relative h-6 object-cover" alt="" src={product.imageUrl} />
                            <div className="relative tracking-[0.01em]">{product.name}</div>
                        </div>
                    </div>

                    {/* Category column */}
                    <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                        <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                            <b className="relative tracking-[0.01em]">Category</b>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <div className="relative tracking-[0.01em]">{product.category.name}</div>
                        </div>
                    </div>

                    {/* Size column */}
                    <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                        <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                            <b className="relative tracking-[0.01em]">Size</b>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <div className="relative tracking-[0.01em]">{product.size.name}</div>
                        </div>
                    </div>

                    {/* Description column */}
                    <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                        <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                            <b className="relative tracking-[0.01em]">Description</b>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <div className="relative tracking-[0.01em]">{product.description}</div>
                        </div>
                    </div>

                    {/* Price column */}
                    <div className="w-[120px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                        <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                            <b className="relative tracking-[0.01em]">Price</b>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <div className="relative tracking-[0.01em]">{product.price}</div>
                        </div>
                    </div>

                    {/* GiftBoxProduct column */}
                    <div className="w-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                        <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                            <b className="relative tracking-[0.01em]">GiftBox Product</b>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                            <div className="relative tracking-[0.01em]">{product.giftBoxProduct.toString()}</div>
                        </div>
                    </div>

                    {/* Action column */}
                    <div className="w-[80px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px] text-sm text-white">
                        <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                            <b className="relative tracking-[0.01em]">Action</b>
                        </div>
                        <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                            <button onClick={() => handleEdit(product)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="clarity:note-edit-solid.svg" /></button>
                            <button onClick={() => handleDelete(product)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="ic:baseline-delete-forever.svg" /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Products;

