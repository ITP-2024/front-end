'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Button from '@/components/gift-box/button';
import { useRouter } from 'next/navigation';

interface Product {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}


interface GiftBoxColor {
  boxColorId: string;
  color: string;
  image: string;
}

interface CardType {
  cardId: string;
  type: string;
  image: string;
}

interface GiftBox {
  giftBoxId: string;
  boxColor: GiftBoxColor;
  cardType: CardType;
  message: string;
  products: GiftBoxProduct[];
  totalAmount: number;
}

interface GiftBoxProduct {
  product: Product;
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  giftBoxData?: GiftBox[];
  error?: string;
}

const UpdateGiftBox: React.FC<Props> = ({ giftBoxData, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
}
  
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch gift box data from the server
                const giftBoxResponse = await axios.get('http://localhost:8080/giftBox');
                const giftBoxData = giftBoxResponse.data;
                renderGiftBoxData(giftBoxData);
            } catch (error) {
                console.error('Error fetching gift box data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='flex justify-center'>
      <div><h2 className='text-xl, font-bold text-center leading-10 text-black' >Gift Box Summary</h2>
        <table className="min-w-half divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-700 tracking-wider w-1/2">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-700 tracking-wider w-1/8">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-700 tracking-wider w-1/8">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-700 tracking-wider w-1/8">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {giftBoxData.products.map((selectedProduct, index) => (
              selectedProduct.quantity > 0 && (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">

                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{selectedProduct.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.price}</td>
                <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.quantity}</td>
                <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.quantity * selectedProduct.price}</td>
              </tr>
            )))}

            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">{selectedTheme} Color Gift Box</td>
              <td className="text-sm font-medium text-center text-gray-900">1300</td>
              <td className="text-sm font-medium text-center text-gray-900">1</td>
              <td className="text-sm font-medium text-center text-gray-900">1300</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">Greeting Card: {selectedGreetingCard  ? selectedGreetingCard : 'Not selected'} </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">Greeting Card message : {cardMessage ? cardMessage : 'None'}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">Total Amount</td>
              <td></td>
              <td></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">{totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-between">
        </div>
      </div>
    </div>
    );
};

export default UpdateGiftBox;