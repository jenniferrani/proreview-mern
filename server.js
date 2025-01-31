const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors=require("cors");
const productRoutes = require("./backend/routes/productRoutes");
const connectDB =require("./backend/config/db");

dotenv.config();

connectDB();

const app = express();
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Database connection error:", error));

// Use product routes
app.use("/api/products", productRoutes); // Mounting product routes under "/api/products"

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
