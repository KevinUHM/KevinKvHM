const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
//controller
const RegionController = require('../controllers/Region_controller');
//prueba de fina¿dall user con roles y roles con users
router.get('/api/regiones', RegionController.allRegion);
router.post('/api/create-region',RegionController.createRegion);

module.exports = router;