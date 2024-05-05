'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@/components/gift-box/button';
import html2pdf from 'html2pdf.js';

interface GiftBox {
    giftBoxId: string;
    userEmail: string,
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

    const handlePrint = () => {
        const printContent = document.getElementById('table-container');
        if (printContent) {
            // Gather summary information
            const colors: { [key: string]: number } = {};
            const cards: { [key: string]: number } = {};
            const products: { [key: string]: number } = {};

            let totalRevenue = 0;

            const now = new Date();
            const formattedDateTime = now.toLocaleString();

            // Iterate through gift boxes to gather data
            giftBoxes.forEach((giftBox) => {
                // Count box colors
                if (giftBox.boxColor.color in colors) {
                    colors[giftBox.boxColor.color]++;
                } else {
                    colors[giftBox.boxColor.color] = 1;
                }

                // Count card types
                if (giftBox.cardType.type in cards) {
                    cards[giftBox.cardType.type]++;
                } else {
                    cards[giftBox.cardType.type] = 1;
                }

                // Count products
                giftBox.products.forEach((product) => {
                    if (product.name in products) {
                        products[product.name] += product.quantity;
                    } else {
                        products[product.name] = product.quantity;
                    }
                });

                // Calculate total revenue
                totalRevenue += giftBox.totalAmount;

                totalRevenue = parseFloat(totalRevenue.toFixed(2));
            });

            // Find most selected color
            const mostSelectedColor = Object.keys(colors).reduce((a, b) => colors[a] > colors[b] ? a : b);

            // Find most selected greeting card
            const mostSelectedCard = Object.keys(cards).reduce((a, b) => cards[a] > cards[b] ? a : b);

            // Find most selected product
            const mostSelectedProduct = Object.keys(products).reduce((a, b) => products[a] > products[b] ? a : b);

            // Define the heading content
            const heading = `
                <h1 class="text-xl font-bold mb-4 text-center">Gift Box Summary</h1>
            `;
            // Define the summary content
            const summary = `
                <div class="text-left mb-8">
                    <p>Most Selected Color: ${mostSelectedColor}</p>
                    <p>Most Selected Greeting Card: ${mostSelectedCard}</p>
                    <p>Most Selected Product: ${mostSelectedProduct}</p>
                    <p>Total Revenue from Gift Boxes: ${totalRevenue}</p>
                </div>
            `;

            const header = `
        <h1 class="text-xl font-semi-bold mt-8 text-center text-gray-500">KpopShop Nexus</h1>
      `;

            // Create a new HTML element to wrap the content
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Gift Box Summary</title>
                    <!-- Load Tailwind CSS -->
                    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                </head>
                ${header}<header class="mb-8 text-sm text-gray-500 text-center">
                No: 87, Kandy Road, Kiribathgoda, Sri Lanka. </br> 076 366 3881 </br> <hr class="mt-4 w-9/10 mx-auto border-t border-gray-400">
                  </header>
                <div class="ml-20 mr-20">
                    <div class="flex flex-col items-center justify-center h-full">
                    ${heading}
                    <div class="gift-box-summary flex flex-col items-center justify-center">
                        ${printContent.innerHTML}   
                    </div>
                    </div>
                    ${summary}
                    <footer class="mt-8 mb-4 text-sm text-gray-500 text-center">
          <hr class="w-full mx-auto border-t border-gray-400">Generated by Gift Box Management </br>${formattedDateTime}</br>
          </footer>
                </div>
                </html>
            `;

            // Convert the wrapper HTML content to a PDF
            html2pdf()
                .from(wrapper)
                .save('builder_summary.pdf');
        } else {
            console.error('Print content not found');
        }
    };



    return (
        <div>
            <div>
                <div className="container mx-auto">
                    <div className="text-center text-stone-900 text-l font-bold font-inter m-5">Created Gift Boxes</div>
                    <div id="table-container">
                        <table className="table-auto border-collapse border border-stone-800 text-sm">

                            <thead>
                                <tr>
                                    <th className="border border-white-400 p-2 bg-fuchsia-900 text-white">Email</th>
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
                                        <td className="border border-white-400 p-2 bg-thistle">{giftBox.userEmail}</td>
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

            </div>
            <Button label="Summary" onClick={handlePrint} />

        </div>
    );
};

export default GiftBoxTable;
