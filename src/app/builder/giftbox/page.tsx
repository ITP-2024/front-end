'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@/components/gift-box/button';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import ConfirmationModal from '@/components/gift-box/toast-confirm';
import html2pdf from 'html2pdf.js';

interface Product {
  id: string;
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const GiftBoxSummary: React.FC = () => {
  //const [selectedProducts, setSelectedProducts] = useState<{ productName: string; count: number }[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedGreetingCard, setSelectedGreetingCard] = useState<string | null>(null);
  const [cardMessage, setCardMessage] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<{ id: string; productId: string; name: string; price: number; quantity: number; }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const [giftBoxId, setGiftBoxId] = useState<string | null>(
    typeof localStorage !== 'undefined' ? localStorage.getItem('giftBoxId') || null : null
  );
  const [isDeleted, setIsDeleted] = useState(false);
  const router = useRouter();

  // Calculate the total amount
  const totalAmount = selectedProducts.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0) + 1200;



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

    const getCookie = (name:string) => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          const email = cookie.substring(name.length + 1); // Extract email value
          console.log('Email retrieved from cookie:', email); // Log the email value
          return email;
        }
      }
      return '';
    };

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
        quantity: selectedProduct.quantity
      }));

      // Get email from cookie
      const email = getCookie('email');

      

      const giftBoxPayload = {
        giftBoxId: giftBoxId,
        userEmail: email,
        boxColor: boxColorData,
        cardType: cardTypeData,
        message: cardMessage,
        products: giftBoxProducts,
        totalAmount: totalAmount,
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
      toast.success('Gift Box Successfully Saved');

    } catch (error) {
      console.error('Error saving GiftBox:', error);
    }
    const email = getCookie('email');
    console.log('Email retrieved from cookie:', email);
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
    const storedSelectedProducts: { id: string; productId: string; quantity: number }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.endsWith('quantity')) {
        const id = key.slice(0, -9);
        const productId = key.slice(0, -9); // Remove '_count' suffix
        const quantity = parseInt(localStorage.getItem(key) || '0');
        storedSelectedProducts.push({ id, productId, quantity });
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
        id: selectedProduct.id,
        productId: selectedProduct.productId,
        name: productNames[selectedProduct.productId], // Use 'name' instead of 'productName'
        price: parseFloat(productPrices[selectedProduct.productId]),
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

  // console.log('GiftBox :' + giftBoxId + 'products' + selectedProducts);
  // console.log(JSON.stringify(selectedProducts, null, 2));

  const handleDelete = async () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = async () => {
    try {
      // Make an HTTP request to delete the gift box based on its ID
      await axios.delete(`http://localhost:8080/giftBox/${giftBoxId}`);
      setIsModalOpen(false); // Close the confirmation modal upon successful deletion
      router.push('/builder');
    } catch (error) {
      console.error('Error deleting gift box:', error);
    }
  };

  const summary = async () => {
    try {
      const response = await axios.post('http://localhost:8080/giftBox/generate-pdf');
      const message = response.data;

      // Check if the PDF was generated successfully
      if (message === 'PDF reports generated successfully!') {
        // PDF was generated successfully, prompt the user to download it
        window.open('http://localhost:8080/gift_box_report.pdf');
      } else {
        // Handle error if PDF generation failed
        console.error('Error generating PDF report:', message);
        // Show error message to the user
        toast.error('Error generating PDF');
      }
    } catch (error) {
      // Handle network error
      console.error('Error generating PDF report:', error);
      // Show error message to the user
      toast.error('Error generating PDF report');
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById('print-content');
    if (printContent) {
      // Get current date and time
      const now = new Date();
      const formattedDateTime = now.toLocaleString();
  
      // Define the heading content
      const heading = `
        <h1 class="text-xl font-bold mb-4 text-center text-gray-500">Gift Box Summary</h1>
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
          <!-- Load Tailwind CSS -->
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        ${header}<header class="mb-8 text-sm text-gray-500 text-center">
        No: 87, Kandy Road, Kiribathgoda, Sri Lanka. </br> 076 366 3881 </br> <hr class="mt-4 w-9/10 mx-auto border-t border-gray-400">
          </header>
          
        <body class="flex flex-col items-center justify-center h-full">
          ${heading}
          <div class="gift-box-summary flex flex-col items-center justify-center h-full">
            ${printContent.innerHTML}
          </div>
          <footer class="mt-8 mb-4 text-sm text-gray-500 text-center">
          <hr class="w-full mx-auto border-t border-gray-400">Generated by Custom Gift Box Builder </br>${formattedDateTime}</br>
          </footer>
        </body>
        </html>
      `;
  
      // Convert the wrapper HTML content to a PDF
      html2pdf()
        .from(wrapper)
        .save('gift_box_summary.pdf');
    } else {
      console.error('Print content not found');
    }
  };
  


  const addToCart = () => {
    localStorage.setItem('giftBoxId', giftBoxId || '');
    router.push('/CartManagement/cartUI');
    console.log('boxid'+giftBoxId);
};

  




  return (
    <div className='flex justify-center'>
      <div>
        <div>

          <h2 className='text-xl, font-bold text-center leading-10 text-black' >Gift Box Summary</h2>
          <div className='flex justify-center' id="print-content">
          <table className="min-w-half divide-y divide-gray-200 margin: auto">
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
                        <div className="text-sm font-medium text-gray-900">{selectedProduct.name}</div>

                      </td>
                      <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.price}</td>
                      <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.quantity}</td>
                      <td className="text-sm font-medium text-center text-gray-900">{selectedProduct.quantity * selectedProduct.price}</td>
                    </tr>
                  )))}

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">{selectedTheme} Color Gift Box</td>
                  <td className="text-sm font-medium text-center text-gray-900">1200</td>
                  <td className="text-sm font-medium text-center text-gray-900">1</td>
                  <td className="text-sm font-medium text-center text-gray-900">1200</td>
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
          </div>
          <div className="flex items-center justify-between" >

            <Button label="Save Gift Box" onClick={saveGiftBox} />
            <Button label="Add to cart" onClick={addToCart} />

          </div>
          <div className="flex items-center justify-between">
            <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleModalConfirm} />
            <Button label="Print Summary" onClick={handlePrint} />
            {giftBoxId && !isDeleted && <Button label="Delete Gift Box" onClick={handleDelete} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftBoxSummary;
