const express = require('express');
const router = express.Router();
//middleware
const localidadValidator = require("../middleware/validatorManager");
const auth = require('../middleware/auth');
//controller
const LocalidadController = require('../controllers/Localidad_controller');



router.post('/api/v1/localidad',localidadValidator.bodyLocalidadValidator ,LocalidadController.createLocalidad);
router.get('/api/v1/localidades', LocalidadController.allLocalidades);
router.get('/api/v1/localidades/:id',LocalidadController.allLocalidadId);
router.put('/api/v1/localidades/:id', LocalidadController.updateLocalidad);
router.delete('/api/v1/localidades/:id', LocalidadController.deleteLocalidad);

module.exports = router;


/*
// ruta para crear una localidad cuando el municipio no existe en la bas de datos 
router.post('/api/create-localidad', localidadValidator.bodyLocalidadValidator ,LocalidadController.createLocalidad);*/