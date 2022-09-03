const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth'); 
const db = require('../models'); 
module.exports = {


//asosciacion de prueba para empleados
async allEmpleadoUser(req, res) {
    let emp = await db.employee.findAll(
        {
            include: ['user']
        }
    )
    res.json(emp) 

},

}
