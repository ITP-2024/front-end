'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GiftBoxSummary: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<{ productName: string; count: number }[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedGreetingCard, setSelectedGreetingCard] = useState<string | null>(null);
  const [cardMessage, setCardMessage] = useState<string>("");



  useEffect(() => {
    // Retrieve selected box color from local storage
    const storedTheme = localStorage.getItem('setSelectedTheme');
    if (storedTheme) {
      setSelectedTheme(storedTheme);
      axios.get(`http://localhost:8080/giftBoxColor/${storedTheme}`)
        .then(response => {
          setSelectedTheme(response.data.color);
        })
        .catch(error => {
          console.error('Error fetching theme color:', error);
        });
    }

    // Retrieve selected greeting card from local storage
    const storedCard = localStorage.getItem('setSelectedGreetingCard');
    if (storedCard) {
      setSelectedGreetingCard(storedCard);
      axios.get(`http://localhost:8080/cardType/${storedCard}`)
        .then(response => {
          setSelectedGreetingCard(response.data.type);
        })
        .catch(error => {
          console.error('Error fetching greeting card:', error);
        });
    }

    // Retrieve the greeting card message from local storage
    const storedMsg = localStorage.getItem('setCardMessage');
    if (storedMsg) {
      setCardMessage(storedMsg);
    }


    // Retrieve selected products from local storage
    const storedSelectedProducts: { productID: string; count: number }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.endsWith('_count')) {
        const productID = key.slice(0, -6); // Remove '_count' suffix
        const count = parseInt(localStorage.getItem(key) || '0');
        storedSelectedProducts.push({ productID, count });
      }
    }

    // Fetch product names based on product IDs
    const fetchProductNames = async () => {
      const productNames: { [key: string]: string } = {}; // Map to store product names by ID
      const productPrices: { [key: string]: string } = {};
      await Promise.all(
        storedSelectedProducts.map(async (selectedProduct) => {
          try {
            const response = await axios.get(`http://localhost:8080/products/${selectedProduct.productID}`); // Use backticks for string interpolation
            productNames[selectedProduct.productID] = response.data.name; // Store product name
            productPrices[selectedProduct.productID] = response.data.price;
          } catch (error) {
            console.error('Error fetching product data:', error);
          }
        })
      );

      // Map product IDs to product names in selected products array
      const updatedSelectedProducts = storedSelectedProducts.map((selectedProduct) => ({
        productName: productNames[selectedProduct.productID],
        productPrice: productPrices[selectedProduct.productID],
        count: selectedProduct.count,
      }));
      setSelectedProducts(updatedSelectedProducts);
    };

    fetchProductNames();
  }, []);

  return (
    <div className='flex justify-center'>
      <div className="font-manrope font-bold text-xl text-center leading-10 text-black"><h2 >Gift Box Summary</h2>
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
            {selectedProducts.map((selectedProduct, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      {/*image*/}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{selectedProduct.productName}</div>
                    </div>
                  </div>
                </td>
                <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.productPrice}</td>
                <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.count}</td>
                <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.count * selectedProduct.productPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiftBoxSummary;
