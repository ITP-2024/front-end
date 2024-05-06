'use client'
import React, { useState, useEffect } from 'react';
import Header from '@/components/common/header';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '@/components/gift-box/button';
import ProductItem from '@/components/common/cart-item';
import { toast } from 'react-toastify';
import { useGiftBoxContext } from '@/context/giftBox';
import CartItem from '@/components/common/cart-item';

interface Product {
  id: string;
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const GiftBoxProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  //const [selectedProducts, setSelectedProducts] = useState<{ productId: string; name: string; price: number; quantity: number; }[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const getQuantity = (productId: string): number => {
    const selectedProduct = selectedProducts.find(
      (product) => product.productId === productId
    );
    return selectedProduct ? selectedProduct.quantity : 0; // Return the quantity if the product is found, otherwise return 0
  };

  useEffect(() => {
    // Fetch gift box products from backend
    axios
      .get<Product[]>("http://localhost:8080/products")
      .then((response) => {
        console.log("response" + response.data);
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

  /*const addToCart = (product: Product) => {
        setSelectedProducts(prevCart => [...prevCart, product]);
        console.log(selectedProducts);
    };*/

    const addToCart = (product: Product) => {
        setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, product]);
    };

  // Updated handleClick function
const handleClick = (product: Product) => {
    const index = selectedProducts.findIndex(p => p.productId === product.productId);
    if (index !== -1) {
        // Product already in the cart, update its quantity
        const updatedProducts = [...selectedProducts];
        updatedProducts[index] = { ...updatedProducts[index], quantity: updatedProducts[index].quantity + 1 };
        setSelectedProducts(updatedProducts);
    } else {
        // Product not in the cart, add it with quantity 1
        setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, { ...product, quantity: 1 }]);
    }
    // Save selected products to local storage
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
};

    
    
    
    

  const router = useRouter();

    const route = () => {
        if (selectedProducts.length > 0) {
            router.push('/CartManagement/cartUI');
            console.log('selected products' + selectedProducts)
        } else {
            toast.error('Please select at least one product');
        }
    };


  console.log("products" + selectedProducts);
  console.log(JSON.stringify(selectedProducts, null, 2));

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter products based on search query
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
            <div className="flex items-center justify-between">
                    
                        <Button label="Next" onClick={route}/>
                    </div>
        </div>
    );
};

export default GiftBoxProducts;
