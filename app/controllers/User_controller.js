const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth'); 
const db = require('../models'); 
module.exports = {

//Login-----------------------------------------------------------------------
async SignIn(req, res) {
    let { email, password } = req.body;

    // Buscar usuario
await db.user.findOne({
    where: {
        email: email
    },
    include: [ {
        all:true
    } ]
}).then(user => {

    if (!user) {
        res.status(404).json({ msg: "Usuario con este correo no encontrado" });
    } else {

        if (bcrypt.compareSync(password, user.password) ) {

            // Creamos el token
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                user: user,
                token: token
            })

        } else {

            // Unauthorized Access
            res.status(401).json({ msg: "Contraseña incorrecta" })
        }

    }

}).catch(err => {
    res.status(500).json(err);
})

},
//Crear cuenta --------------------------------------------------------------------------
    async createCou(req, res) {
    
        // Encriptamos la contraseña
        let contraseña = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        //varialbles
        const {username, email,} = req.body
        const {full_name, number_phone, oficina} = req.body
        //const role = req.role;
        let idrole = req.employee
        await db.user.create({
            username,
            email,
            password: contraseña,
            roleId: idrole,
            employee: {
                full_name,
                email,
                number_phone,
                oficina
            }
        },
        {
            include: [ 'employee' ]
        }
        ).then(user => {

           // Creamos el token
           let token = jwt.sign({ user: user }, authConfig.secret, {
               expiresIn: authConfig.expires
           });

           res.json({
               user: user,
               token: token,
           });

       }).catch(err => {
           res.status(500).json(err);
       });
   },

//trae todos los usuarios con su respectivo role -------------------------------------
async allUserRole(req, res) {
    let user = await db.user.findAll({
        include: [ 'role' ]
    })
    res.json(user) 
},
//trae todos los usuarios
async allUsers(req, res) {
let user = await db.user.findAll()
res.json(user) 
},
//Usuario + sus datos como empleado
async allUserEmpleado(req, res) {
    let emp = await db.user.findAll(
        {
            include: ['employee']
        }
    )
    res.json(emp) 

},
//obtiene al usuario y sus datos ------------------------------
async getUser(req, res) {
    let user = await db.user.findByPk(req.params.id,
        {
            include: [ { all: true } ]
        });

        if(!user) {
            res.status(404).json({ msg: "El usuario no ha sido encontrado" });
        } else {
            res.json(user);
        }
    },

//actuazilr datos de usuario-------------------------------------------------
async updateUser(req, res) {
const {id} = req.params;

let users = await db.user.findOne({
    where: {id}
});
    if(!users) {
        res.status(404).json({ msg: "Usuario no encontrado" });
    } else {
        users.set(req.body)
        await users.save(users)
        res.json(users)        
    }
},
//eliminar usuario-------------------------------------------------
async deleteUser(req, res) {
    let user = await db.user.findByPk(req.params.id,{
        include: [ 'employee' ]
    });
    let empleado = user.employee
    //let iduser = user.id
    
    if(!user) {
        res.status(404).json({ msg: "El usuario no ha sido encontrado" });
    } else {
       
        //res.json({user, empleado})
        empleado.destroy();
        user.destroy().then(user=> {
        res.json({ msg: "El usuario ha sido eliminado "});
        });

    }
},
}

