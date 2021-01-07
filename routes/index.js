const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const createEmp = require('../controllers/create-emp');

router.get('/', homeController.home );

router.post('/create-emp', createEmp.createEmp );

module.exports = router;