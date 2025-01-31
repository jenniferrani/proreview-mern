const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);  // Send all products as response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { name, description, price, productQuality, productType } = req.body;

  if (!name || !description || !price || !productQuality || !productType) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      productQuality,
      productType,
    });

    await newProduct.save();  // Save new product to DB
    res.status(201).json(newProduct);  // Return the newly created product
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a review to a product
const addReview = async (req, res) => {
  const { id } = req.params;
  const { review } = req.body;

  if (!review) {
    return res.status(400).json({ message: "Review cannot be empty" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.reviews.push(review);  // Add the review to the product
    await product.save();  // Save the updated product with the new review

    res.status(200).json(product);  // Return the updated product
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });  // Send success message
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, productQuality, productType } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, productQuality, productType },
      { new: true }  // Return the updated product
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);  // Send updated product as response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  addReview,
  deleteProduct,
  updateProduct,  // Export updateProduct
};
