'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/common/navbar';

interface GiftBox {
    giftBoxId: string;
    boxColor: {
        boxColorId: string;
        color: string;
        image: string;
        price: number;
    };
    cardType: {
        cardId: string;
        type: string;
        image: string;
    };
    message: string;
    products: Array<{
        product: {
            productId: string;
            name: string;
            price: number;
        };
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }>;
    totalAmount: number;
}


const GiftBoxTable = () => {
    const [giftBoxes, setGiftBoxes] = useState<GiftBox[]>([]);


    useEffect(() => {
        const fetchGiftBoxes = async () => {
            try {
                const response = await axios.get<GiftBox[]>('http://localhost:8080/giftBox');
                setGiftBoxes(response.data);
            } catch (error) {
                console.error('Error fetching gift boxes:', error);
            }
        };

        fetchGiftBoxes();
    }, []);

    return (
        <div>
            <div className="text-center text-stone-900 text-l font-bold font-inter m-5">Created Gift Boxes</div>
            <div className="container mx-auto">
               
                <table className="table-auto border-collapse border border-stone-800 text-sm">

                    <thead>
                        <tr>
                            <th className="border border-white-400 p-2 bg-fuchsia-900 text-white">Gift Box ID</th>
                            <th className="border border-white-400 p-2 bg-fuchsia-900 text-white">Box Color</th>
                            <th className="border border-white-400 p-2 bg-fuchsia-900 text-white">Card Type</th>
                            <th className="border border-white-400 p-2 bg-fuchsia-900 text-white">Message</th>
                            <th className="border border-white-400 p-2 bg-fuchsia-900 text-white">Products</th>
                            <th className="border border-white-400 p-2 bg-fuchsia-900 text-white">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {giftBoxes.map((giftBox) => (
                            <tr key={giftBox.giftBoxId}>
                                <td className="border border-white-400 p-2 bg-thistle">{giftBox.giftBoxId}</td>
                                <td className="border border-white-400 p-2 bg-thistle">{giftBox.boxColor.color}</td>
                                <td className="border border-white-400 p-2 bg-thistle">{giftBox.cardType.type}</td>
                                <td className="border border-white-400 p-2 bg-thistle">{giftBox.message}</td>
                                <td className="border border-white-400 p-2 bg-thistle">
                                    <ul className="list-disc p-5">
                                        {giftBox.products.map((product, index) => (
                                            <li key={index}>
                                                {product.name} X {product.quantity}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="border border-white-400 p-2 bg-thistle">{giftBox.totalAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GiftBoxTable;
