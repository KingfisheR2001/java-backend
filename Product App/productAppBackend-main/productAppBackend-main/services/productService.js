const { createProduct } = require('../controllers/productController');
const Product = require('../models/Product');

const productService = {
  async getProducts() {
    const products = await Product.find();
    return products;
  },

  async getProductById(productId) {
    const product = await Product.findById(productId);
    return product;
  },

  async createProduct(product){
    const newProduct = await Product.create(product);
    return newProduct;
  }
};

module.exports = productService;