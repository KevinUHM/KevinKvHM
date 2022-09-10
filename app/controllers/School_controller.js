const db = require('../models'); //prueba exitosa pero con difine

module.exports = {

//crear directorio

async createSchool(req, res){
    const { name_school, cct, nivel, calle, 
            noExterior, numeroInterior, asentamiento,
            email_school, telefono} = req.body;
    const {name_director, sindicato, telephone, puesto, email_director,status, atencion} = req.body
    const {name_supervisor, telephone_supervisor,email_suoervisor, recuperado, fecha_recuperado} = req.body
            let iduser = req.user
    let school = await db.school.create({
        name_school,
        cct,
        nivel,
        calle,
        noExterior,
        numeroInterior,
        asentamiento,
        email: email_school,
        telefono,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: iduser.id,
        director: {
            name: name_director,
            sindicato,
            telephone,
            puesto,
            email: email_director,
            status,
            atencion,
            supervisor: [{
                name: name_supervisor
            }] 
        } 
    },
    {
     
        include: [{
          association: db.school.associations.director,
          include: [ 'supervisor' ],
          
        }]
      }
 
    );
    res.json({school})
},

async allSchool(req,res){
    let school = await db.school.findAll({
        include: [ 'usuario' ]
    })
    res.json(school)
},

}