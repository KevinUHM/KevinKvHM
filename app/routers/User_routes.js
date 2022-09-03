const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
//controller
const UserController = require('../controllers/User_controller');

// Home
//router.get('/', (req, res) => res.json({ foo: "bar" }))

//Rutas users
//rutas de prueba con asosiaciones
    //prueba de login de usuario con rolo 

router.get('/api/users-employee',auth, UserController.allUserEmpleado);
router.get('/api/users/roles',auth, UserController.allUserRole);
router.get('/api/user-data/:id',auth, UserController.getUser);
router.post('/api/users/signin', UserController.SignIn);
router.post('/api/users/signup', UserController.createCou);
router.post('/api/users/update/:id',auth, UserController.updateUser);
router.delete('/api/users/delete/:id',auth, UserController.deleteUser);

module.exports = router;