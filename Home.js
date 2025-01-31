/*import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Fetch products from the backend API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);  // Set the products from the backend
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Add a new product via the backend API
  const addProduct = async () => {
    if (!name || !description || !imageUrl) return;

    const newProduct = { name, description, imageUrl, reviews: [] };

    try {
      const response = await axios.post("http://localhost:5000/api/products", newProduct);
      setProducts([...products, response.data]);  // Add the new product to the state
      setName("");
      setDescription("");
      setImageUrl("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Delete a product via the backend API
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));  // Remove the product from state
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Add a review to a product via the backend API
  const addReview = async (id, review) => {
    if (!review) return;

    try {
      const response = await axios.post(`http://localhost:5000/api/products/${id}/reviews`, { review });
      const updatedProducts = products.map((product) =>
        product._id === id ? { ...product, reviews: response.data.reviews } : product
      );
      setProducts(updatedProducts);  // Update the product with new reviews
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className="home">
      <div className="add-product-form">
        <h3>Add a New Product:</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={() => deleteProduct(product._id)}
            onAddReview={(review) => addReview(product._id, review)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;*/

import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productQuality, setProductQuality] = useState(""); 
  const [productType, setProductType] = useState(""); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);  
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (!name || !description || !price || !productQuality || !productType) return;

    const newProduct = {
      name,
      description,
      price,
      productQuality,
      productType,
      reviews: [] // Initialize empty reviews array
    };

    try {
      const response = await axios.post("http://localhost:5000/api/products", newProduct);
      setProducts([...products, response.data]);  
      setName("");
      setDescription("");
      setPrice("");
      setProductQuality("");
      setProductType("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));  
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addReview = async (productId, review) => {
    try {
      await axios.post(`http://localhost:5000/api/products/${productId}/reviews`, { review });
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId ? { ...product, reviews: [...product.reviews, review] } : product
        )
      );
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className="home">
      <div className="add-product-form">
        <h3>Add a New Product:</h3>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Product Quality" value={productQuality} onChange={(e) => setProductQuality(e.target.value)} />
        <input type="text" placeholder="Product Type" value={productType} onChange={(e) => setProductType(e.target.value)} />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} onDelete={() => deleteProduct(product._id)} onAddReview={(review) => addReview(product._id, review)} />
        ))}
      </div>
    </div>
  );
}

export default Home;
