const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
const { validateCreateSchool } = require('../validator/SchoolValidator');
const { checkExistedSchool } = require('../middleware/validateUser');

//controlle
const SchoolController = require('../controllers/School_controller');
//prueba de fina¿dall user con roles y roles con users
router.get('/api/v1/schools',auth.validateToken,SchoolController.allSchool);
router.post('/api/v1/school',auth.validateToken,validateCreateSchool, checkExistedSchool, SchoolController.createSchool);
router.get('/api/v1/school/:id', SchoolController.allSchoolId);
router.put('/api/v1/school/:id', SchoolController.updateSchool );
router.delete('/api/v1/school/:id', SchoolController.deleteSchool);

//** ruta para saber las escuelas a que localidades pertenecen */
/*router.get('/api/v1/regiones/:id/municipios', RegionController.getRegioMunicipios);*/



module.exports = router;