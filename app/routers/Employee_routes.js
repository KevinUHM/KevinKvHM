const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
//controller
const EmpController = require('../controllers/Employee_controller');

router.get('/api/employee-user', EmpController.allEmpleadoUser);

module.exports = router;