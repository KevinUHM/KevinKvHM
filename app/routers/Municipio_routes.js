const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
//controller
const MunicipioController = require('../controllers/Municipio_controller');
//prueba de fina¿dall user con roles y roles con users
router.get('/api/municipios',MunicipioController.allMunicipios);
router.post('/api/create-municipios',MunicipioController.createMunicipio);

module.exports = router;