'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@/components/gift-box/button';
import { useRouter } from 'next/navigation';

const GiftBoxSummary: React.FC = () => {
  //const [selectedProducts, setSelectedProducts] = useState<{ productName: string; count: number }[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedGreetingCard, setSelectedGreetingCard] = useState<string | null>(null);
  const [cardMessage, setCardMessage] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<{ productId: string; name: string; price: number; quantity: number; }[]>([]);
  const [giftBoxId, setGiftBoxId] = useState<string | null>(
    typeof localStorage !== 'undefined' ? localStorage.getItem('giftBoxId') || null : null
  );
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  
  useEffect(() => {
    // Retrieve the initial buttonClicked state from localStorage during client-side rendering
    const savedState = localStorage.getItem('buttonClicked');
    if (savedState) {
      setButtonClicked(JSON.parse(savedState));
    }
  }, []);



  const router = useRouter();

  // Calculate the total amount
  const totalAmount = selectedProducts.reduce((total, product) => {
    return total + product.quantity * product.price + 1300;
  }, 0);



  const saveGiftBox = async () => {
    const storedBoxId = localStorage.getItem('giftBoxId');
    const boxIdResponse = await axios.get(`http://localhost:8080/giftBoxColor/${storedBoxId}`);
    const boxIdData = boxIdResponse.data;

    const storedTheme = localStorage.getItem('setSelectedTheme');
    const boxColorResponse = await axios.get(`http://localhost:8080/giftBoxColor/${storedTheme}`);
    const boxColorData = boxColorResponse.data;

    const storedCard = localStorage.getItem('setSelectedGreetingCard');
    const cardTypeResponse = await axios.get(`http://localhost:8080/cardType/${storedCard}`);
    const cardTypeData = cardTypeResponse.data;

    const storedSelectedProducts: { productId: string; quantity: number }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.endsWith('quantity')) {
        const productId = key.slice(0, -9); // Remove '_count' suffix
        const quantity = parseInt(localStorage.getItem(key) || '0');
        storedSelectedProducts.push({ productId, quantity });
      }
    }

    try {
      const productDataPromises = storedSelectedProducts.map(async ({ productId }) => {
        try {
          const response = await axios.get(`http://localhost:8080/products/${productId}`);
          return response.data;
        } catch (error) {
          console.error(`Error fetching product data for productId ${productId}:`, error);
          return null; // Handle error gracefully
        }
      });

      const productsData = await Promise.all(productDataPromises);

      const giftBoxProducts = selectedProducts.map(selectedProduct => ({
        productId: selectedProduct.productId,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: selectedProduct.quantity,
        totalPrice: selectedProduct.price * selectedProduct.quantity
      }));

      const giftBoxPayload = {
        giftBoxId: giftBoxId,
        boxColor: boxColorData,
        cardType: cardTypeData,
        message: cardMessage,
        products: giftBoxProducts,
        totalAmount: totalAmount
      };

      let response;

      if (giftBoxId) {
        // If giftBoxId exists, it means you're updating an existing gift box
        response = await axios.put(`http://localhost:8080/giftBox/${giftBoxId}`, giftBoxPayload);
      } else {
        // If giftBoxId doesn't exist, it means you're creating a new gift box
        response = await axios.post('http://localhost:8080/giftBox', giftBoxPayload);
        const createdGiftBoxId = response.data.giftBoxId;


        // Update the giftBoxId state with the newly created or updated gift box ID
        setGiftBoxId(createdGiftBoxId);
        localStorage.setItem('giftBoxId', createdGiftBoxId);
      }
      console.log('GiftBox saved:', response.data);

    } catch (error) {
      console.error('Error saving GiftBox:', error);
    }
    setIsButtonVisible(true);
    setButtonClicked(true);
  };





  useEffect(() => {
    // Retrieve selected box color from local storage

    if (!selectedTheme) {
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
    const storedSelectedProducts: { productId: string; quantity: number }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.endsWith('quantity')) {
        const productId = key.slice(0, -9); // Remove '_count' suffix
        const quantity = parseInt(localStorage.getItem(key) || '0');
        storedSelectedProducts.push({ productId, quantity });
      }
    }


    // Fetch product names based on product IDs
    const fetchProductNames = async () => {
      const productNames: { [key: string]: string } = {}; // Map to store product names by ID
      const productPrices: { [key: string]: string } = {};
      await Promise.all(
        storedSelectedProducts.map(async (selectedProduct) => {
          try {
            const response = await axios.get(`http://localhost:8080/products/${selectedProduct.productId}`); // Use backticks for string interpolation
            productNames[selectedProduct.productId] = response.data.name; // Store product name
            productPrices[selectedProduct.productId] = response.data.price;
          } catch (error) {
            console.error('Error fetching product data:', error);
          }
        })
      );

      // Map product IDs to product names in selected products array
      const updatedSelectedProducts = storedSelectedProducts.map((selectedProduct) => ({
        productId: selectedProduct.productId,
        name: productNames[selectedProduct.productId], // Use 'name' instead of 'productName'
        price: parseFloat(productPrices[selectedProduct.productId]), // Use 'price' instead of 'productPrice'
        quantity: selectedProduct.quantity
      }));



      setSelectedProducts(updatedSelectedProducts);

    };


    fetchProductNames();

    if (!giftBoxId) {
      const storedGiftBoxId = localStorage.getItem('giftBoxId');
      if (storedGiftBoxId) {
        setGiftBoxId(storedGiftBoxId);
        const fetchGiftBoxId = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/giftBox/{giftBoxId}`);
            const giftBoxId = response.data.giftBoxId;
            setGiftBoxId(giftBoxId); // Update the giftBoxId state
          } catch (error) {
            console.error('Error fetching gift box ID:', error);
          }
        };
        fetchGiftBoxId();
      }
    }
  }, []);

  console.log('GiftBox :' + giftBoxId);

  const handleDeleteButton = () => {
    setIsButtonVisible(false);
  };

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
            {selectedProducts.map((selectedProduct, index) => (
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">Greeting Card: {selectedGreetingCard} </td>
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
        
        <Button label={buttonClicked ? 'Update Gift Box' : 'Save Gift Box'} onClick={saveGiftBox} />
          <Button label="Add to Cart" onClick={saveGiftBox} />
          
        </div>
        <div className="flex items-center justify-between">
        {isButtonVisible && (
        <Button label="Delete Gift Box" onClick={handleDeleteButton} />)}</div>
      </div>
    </div>
  );
};

export default GiftBoxSummary;
