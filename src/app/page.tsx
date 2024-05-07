"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/common/header";
import axios from "axios";
import CartItem from '@/components/common/cart-item';
import Footer from "@/components/common/footer";

interface Product {
  id: string;
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getQuantity = (productId: string): number => {
    const selectedProduct = selectedProducts.find(
      (product) => product.productId === productId
    );
    return selectedProduct ? selectedProduct.quantity : 0;
  };

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gift box products:", error);
      });

    const storedSelectedProducts = localStorage.getItem("selectedProducts");
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []);

  const addToCart = (product: Product) => {
    setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, product]);
  };

  const handleClick = (product: Product) => {
    const index = selectedProducts.findIndex(p => p.productId === product.productId);
    if (index !== -1) {
        const updatedProducts = [...selectedProducts];
        updatedProducts[index] = { ...updatedProducts[index], quantity: updatedProducts[index].quantity + 1 };
        setSelectedProducts(updatedProducts);
    } else {
        setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, { ...product, quantity: 1 }]);
    }
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="p-4">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <section className="mx-auto max-w-7xl pb-16">
        <ul className="flex flex-wrap">
          {filteredProducts.map((product) => (
            <CartItem
              key={product.id}
              product={{ ...product, quantity: getQuantity(product.id) }}
              action={'Add to Cart'}
              handleClick={handleClick}
              isVisible={product.name.toLowerCase().includes(searchQuery.toLowerCase())}
            />
          ))}
        </ul>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;