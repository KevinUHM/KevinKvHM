const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
//controller
const LocalidadController = require('../controllers/Localidad_controller');
//prueba de fina¿dall user con roles y roles con users
router.get('/api/localidades', LocalidadController.allLocalidades);
router.post('/api/create-localidad', LocalidadController.createLocalidad);

module.exports = router;