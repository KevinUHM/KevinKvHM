const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
//controller
const SchoolController = require('../controllers/School_controller');
//prueba de fina¿dall user con roles y roles con users
router.get('/api/schools',auth, SchoolController.allSchool);
router.post('/api/create-school',auth, SchoolController.createSchool);



module.exports = router;