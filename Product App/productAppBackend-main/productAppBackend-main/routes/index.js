const express = require('express');
const router = express.Router();

// Import your controller modules
// const userController = require('./userController');
const productController = require('../controllers/productController');
// const orderController = require('./orderController');

// // User routes
// router.post('/register', userController.registerUser);
// router.post('/login', userController.loginUser);
// router.get('/api/logout', userController.logoutUser);
// router.get('/api/profile', userController.getUserProfile);
// router.put('/api/profile', userController.updateUserProfile);

// Product routes
router.post('/products', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);

// // Order routes
// router.post('/api/orders', orderController.createOrder);
// router.get('/api/orders', orderController.getUserOrders);

module.exports = router;