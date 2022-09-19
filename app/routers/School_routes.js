const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
const { validateCreateSchool } = require('../validator/SchoolValidator');
const { checkExistedSchool } = require('../middleware/validateUser');

//controlle
const SchoolController = require('../controllers/School_controller');
//prueba de fina¿dall user con roles y roles con users
router.get('/api/schools',auth,SchoolController.allSchool);
router.post('/api/create-school',auth,validateCreateSchool, checkExistedSchool, SchoolController.createSchool);



module.exports = router;