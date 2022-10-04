const db = require('../models');

    module.exports = {
     //Comprueba que exista el usuario
       async checkExisted(req, res, next){
        let nameRole = await db.role.findOne({
            where:
            {
                name_role: 'user'
            }
        });
        let user = await db.user.findOne({
            where: {
                email: req.body.email
            },
            include: [ 'employee' ]
            }).then(user => {
            //Si no existe crea el usuario y le asigna un role por default
                if (!user) {
                    if(!req.body.roleId){
                        
                        //let name = nameRole
                        req.role = nameRole;
                        next()
                        //tratar con un ciclo for
                        //res.status(401).json({msg:"holamundo" })
                    }
    
                } else {
                    res.status(401).json({ msg: "El usuario ya existe" })
                }
            
            }).catch(err => {
                res.status(500).json(err);
            })
       },
    //Comprueba que sea administrador
    //Determinar a que informacion tendran acceso los usuarios
        //metodo para verificar el role y otorgar permiso

    async isAdmin(req, res, next) {
        let roles = await db.role.findOne({
            where: {
                id: req.user.role.id
            },
            include: [ 'user' ]}).then(roles => {
               //for(let i= 0; i < roles.lenth; i++){
                if(roles.name_role === 'admin'){
                    req.rol = roles;
                    next()
                    //res.status(500).json('Eres admin'); 
                }
                else {
                    res.status(401).json({msg: "No estas autorizado para ver esta informacion, requieres ser administrador"}); 
                }
                
            }).catch(err => {
                    res.status(500).json(err);
                })
        },
    //comprueba si es otro usuario que no sea damin
    async isNotAdmin(req, res, next) {
        let roles = await db.role.findOne({
            where: {
                id: req.user.role.id
            },
            include: [ 'user' ]}).then(roles => {
               //for(let i= 0; i < roles.lenth; i++){
                if(roles.name_role === 'user'){
                    req.rol = roles;
                    next()
                    //res.status(500).json('Eres admin'); 
                }
                else {
                    res.status(401).json({msg: "No estas autorizado para ver esta informacion, requieres ser de un role"}); 
                }
                
            }).catch(err => {
                    res.status(500).json(err);
                })
        },

//checka que la escuela exista si no la crea
async checkExistedSchool(req, res, next){
        
    let school = await db.school.findOne({
        where: {
            email: req.body.email_school
        },
        include: [ {all: true} ]
        }).then(school => {
        //Si no existe crea el usuario y le asigna un role por default
            if (!school) {
                
                next()
                //res.status(401).json({ msg: "La escuela con este correo no existe" })
                
            } else {
                res.status(401).json({ msg: "Ya se encuentra registrada una escuela con este correo" })
            }
        
        }).catch(err => {
            res.status(500).json(err);
        })
   },
}

/*
//-------------------------------------------------------
//Validacion Para hacer acutalizaciones al la info del usuario
async updateData(req,res,nect){
    let user = await db.user.findOne(
        {   where:{
            id: req.user.id
        }
     }
        ).then(user => {
        //Si no existe crea el usuario y le asigna un role por default
            if (!user) {
                
                next()
                //res.status(401).json({ msg: "La escuela con este correo no existe" })
                
            } else {
                res.status(401).json({ msg: "Ya se encuentra registrada una escuela con este correo" })
            }
        
        }).catch(err => {
            res.status(500).json(err);
        })
},
*/