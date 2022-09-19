const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');

const validate = require('../middleware/validateUser');
const { validateCreate } = require('../validator/UserValidator');
//controller
const UserController = require('../controllers/User_controller');

// Home
//router.get('/', (req, res) => res.json({ foo: "bar" }))

//Rutas users
//rutas de prueba con asosiaciones
    //prueba de login de usuario con rolo 

router.get('/api/users',auth,validate.isAdmin,UserController.allUsers);
router.get('/api/users/employee',auth,validate.isAdmin,UserController.allUserEmpleado);
router.get('/api/users/roles',auth,validate.isAdmin,UserController.allUserRole);
router.get('/api/user-data/:id',auth,validate.isAdmin,UserController.getUser);

router.post('/api/users/signin', UserController.SignIn);
router.post('/api/users/signup',validateCreate,validate.checkExisted,UserController.createCou);

router.post('/api/users/update/:id',auth, UserController.updateUser);
router.delete('/api/users/delete/:id',auth,validate.isAdmin,UserController.deleteUser);
//saber que modificacion puede hacer el usuario normal y el usuario admin

module.exports = router;