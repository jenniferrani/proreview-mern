// routes/productRoutes.js
const express = require("express");
const {
  getProducts,
  createProduct,
  addReview,
  deleteProduct,
  updateProduct,  // Add the updateProduct function here
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);           // Get all products
router.post("/", createProduct);        // Create a new product
router.put("/:id", updateProduct);      // ✅ Update a product (use PUT method)
router.post("/:id/reviews", addReview); // Add a review
router.delete("/:id", deleteProduct);   // Delete a product

module.exports = router;
