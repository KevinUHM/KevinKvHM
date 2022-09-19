const db = require('../models');
const { body, validationResult } =  require ('express-validator');


exports.bodyLocalidadValidator = [
    body("nameLoc", "Es Necesario Introducir El Nombre De La Localidad").trim().notEmpty().toLowerCase(),
    body("claveLocOfi", "Es Necesario Introducir La Clave De La Localidad").trim().notEmpty(),
    body("claveLocOfi", "Introducir 9 digitos").isLength({ min: 9, max:9 }),
    (req, res, next) => {
         let errors = validationResult(req); 
        if(!errors.isEmpty()){
        //console.log(errors.array());
        return res.status(400).json({errors: errors.array()});
    }
    next();
    }
    
];

exports.bodyMunicipioValidator = [
    body("name", "Es Necesario Introducir El Nombre Del Municipio").notEmpty().toUpperCase(),
    (req, res, next) => {
         let errors = validationResult(req); 
        if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
    }
];

exports.bodyRegionValidator = [
    body("nameRegion", "Es Necesario Introducir El Nombre De La Region").notEmpty().toUpperCase(),
    (req, res, next) => {
         let errors = validationResult(req); 
        if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
    }
];

//verificar si la clave de la localidad ya existe
exports.checkClaveLocalidadExisted = async (req, res, next) => {
    const claveLocOfi = await db.localidad.findOne({claveLocOfi: req.body.claveLocOfi})
    if (claveLocOfi) return res.status(404).json("La Clave De La Localidad Ya Existe")
    next();
}