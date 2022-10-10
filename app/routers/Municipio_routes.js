const express = require('express');
const router = express.Router();

//middlewaress
const municipioValidator = require("../middleware/validatorManager");
const auth = require('../middleware/auth');

//controller
const MunicipioController = require('../controllers/Municipio_controller');

//GET              /api/v1/municipios                  all 
//Get             /api/municipio/:id               single 
//POST           /api/municipio                    create 
//PATCH/PUT      /api/municipio/:id                update 
//DELETE         /api/v1/municipio/:id                remove 

router.post('/api/v1/municipio', municipioValidator.bodyMunicipioValidator, MunicipioController.createMunicipio);
router.get('/api/v1/municipios',MunicipioController.allMunicipios);
router.get('/api/v1/municipio/:id',MunicipioController.allMunicipioId);
router.put('/api/v1/municipio/:id', MunicipioController.updateMunicipio);
router.delete('/api/v1/municipio/:id', MunicipioController.deleteMunicipio);

// ruta para traer todas las localides que le pertenecen a un municipio
router.get('/api/v1/municipios/:id/localidades',MunicipioController.getMunicipioLocalidades);
module.exports = router;