'use client'
import React, { useState, useEffect } from 'react';
interface ReportItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    total: number;
}

interface CartSummaryProps {
    report: ReportItem[] | undefined; // Allow undefined value for the report prop
}

const CartSummary: React.FC<CartSummaryProps> = ({ report }) => {
    const handlePrint = () => {
        window.print(); // Opens the browser's print dialog
    };

    const handleClickPrint = () => {
        handlePrint();
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Cart Summary</h1>
            <div>
                {/* Display your report data here */}
                {report && report.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: {item.total}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => handlePrint()} className="bg-fuchsia-800 text-white px-4 py-2 rounded-md hover:bg-fuchsia-900 mt-4">
    Print
</button>
        </div>
    );
};

export default CartSummary;
