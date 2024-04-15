"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    type Product = {
        id: string;
        productId: string;
        category: {
          id: string;
          name: string;
        };
        name: string;
        size: {
          id: string;
          name: string;
        };
        imageUrl: string;
        description: string;
        giftBoxProduct: boolean;
        price: number;
        quantity: number;
      };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  };

  const createProduct = async (product: Product) => {
    await axios.post('/api/products', product);
    fetchProducts();
  };
  
  const updateProduct = async (id: string, updatedProduct: Product) => {
    await axios.put(`/api/products/${id}`, updatedProduct);
    fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  };

  const handleCreateButtonClick = () => {
    // Open the form and get the product data
    // This is just a placeholder, replace it with your actual implementation
    const productData = {
      id: 'newId',
      productId: 'newProductId',
      category: {
        id: 'newCategoryId',
        name: 'newCategoryName',
      },
      name: 'newName',
      size: {
        id: 'newSizeId',
        name: 'newSizeName',
      },
      imageUrl: 'newImageUrl',
      description: 'newDescription',
      giftBoxProduct: false,
      price: 0,
      quantity: 0,
    };
  
    createProduct(productData);
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category.name}</p>
            <p>Size: {product.size.name}</p>
            <p>Image URL: {product.imageUrl}</p>
            <p>Gift Box Product: {product.giftBoxProduct ? 'Yes' : 'No'}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <button onClick={() => updateProduct(product.id, product)}>Update</button>
        </div>
        ))}
      <button onClick={handleCreateButtonClick}>Create</button>
    </div>
  );
};

export default Products;
