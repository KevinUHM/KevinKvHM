const db = require('../models'); //prueba exitosa pero con difine

module.exports = {

//crear directorio

async createSchool(req, res){
    const { name_school, cct, nivel, calle, 
            noExterior, numeroInterior, asentamiento,
            email_school, telefono, localidadId} = req.body;
    const {name_director, sindicato, telefono_director, puesto, email_director,status, atencion} = req.body
    const {name_supervisor, telefono_supervisor,email_supervisor, recuperado, fecha_recuperado} = req.body
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
        localidadId,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: iduser.id,
        director: {
            name: name_director,
            sindicato,
            telephone: telefono_director,
            puesto,
            email: email_director,
            status,
            atencion,
            supervisor: [{
                name: name_supervisor,
                telephone: telefono_supervisor,
                email: email_supervisor,
                recuperado,
                //directorio_recuperado: new Date()
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