const express = require('express');

const mainController = require('../controllers/mainControllers')

const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/product-cart', mainController.productCart);
router.get('/product-detail', mainController.productDetail);
router.get('/product-admin', mainController.productAdmin);
router.get('/product-edit', mainController.productEdit);


module.exports = router