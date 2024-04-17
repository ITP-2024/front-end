'use client'
import React, { useEffect, useState } from 'react';
import { ProductImageWrapper } from '@/componants/common/ProductImageWrapper';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '@/componants/header';
import Link from 'next/link';


interface Product {
  productID: string;
  name: string;
  description: string;
  price: number;
  status: string;
  image: string;
  categoryID: string;
  sizes: { size: string; quantity: number }[];
  giftBoxProduct: boolean;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState<string>('');
  

  useEffect(() => {
    // Fetch products from backend API
    axios.get('http://localhost:8080/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (productId: string) => {
    // Send request to add item to cart
    axios.post('http://localhost:8080/cart/add', { productId})
      .then(response => {
        setMessage('Item added to cart successfully.');
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
        setMessage('Failed to add item to cart.');
      });
  };

  return (
    <div>
      <Header />
      <section className="mx-auto max-w-7xl pb-16">
        <ul className="flex flex-wrap">
          {products.map((product) => (
            <li key={product.productID} className="p-4 flex-shrink-0 w-1/3">
              <div className="flex flex-col">
                <ProductImageWrapper
                  src={product.image}
                  alt={product.name}
                  width={350}
                  height={250}
                />
                <h3>{product.name}</h3>
                <h3>Rs.{product.price}</h3>
                <button
                  type="button"
                  className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-2 hover:bg-fuchsia-900"
                  onClick={() => addToCart(product.productID)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {message && (
        <div className="flex justify-center">
          <p className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">{message}</p>
          <Link href="cartUI">
          <button
            className="bg-fuchsia-800 text-white px-4 py-2 rounded-md ml-4 mt-2"
            onClick={() => {
              setMessage('');
             
            }}
          >
            View Cart
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
