const express = require('express');
const router = express.Router();
//middleware
const regionValidator = require("../middleware/validatorManager");
const auth = require('../middleware/auth');
//controller
const RegionController = require('../controllers/Region_controller');
//prueba de fina¿dall user con roles y roles con users

router.post('/api/v1/region',regionValidator.bodyRegionValidator,RegionController.createRegion);
router.get('/api/v1/regiones', RegionController.allRegion);
router.get('/api/v1/region/:id',RegionController.allRegionId);
router.put('/api/v1/region/:id',regionValidator.bodyRegionValidator, RegionController.updateRegion);
router.delete('/api/v1/region/:id', RegionController.deleteRegion);

router.get('/api/v1/regiones/:id/municipios', RegionController.getRegioMunicipios);

module.exports = router;