const db = require('../models'); //prueba exitosa pero con difine

module.exports = {
        
//trae todos los roles y su usuario
async allRolesUser(req,res){
  
    let rolesUser = await db.role.findAll({ 
        include: ['user']
    })
    res.json(rolesUser)
},

// All roles
async allRoles(req,res){
  
    let roles = await db.role.findAll()
    res.json(roles)
},

//Crear roles
async createRole(req, res) {
    const { name_role } = req.body;
            
            let rol = await db.role.create({
                name_role,
             });
            //res.json(rol)
},

//get role

async getRole(req, res) {
    let role = await db.role.findByPk(req.params.id);

        if(!role) {
            res.status(404).json({ msg: "El role no ha sido encontrado" });
        } else {
            res.json(role);
        }
    },


//eliminar roles 

async deleteRole(req, res) {
    let role = await db.role.findByPk(req.params.id);
    if(!role) {
        res.status(404).json({ msg: "El role no ha sido encontrado" });
    } else {
        role.destroy().then(role => {
            res.json({ msg: "El role ha sido eliminado "});
        })
    }
},


}