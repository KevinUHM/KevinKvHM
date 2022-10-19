const { check,body } = require('express-validator') //TODO <---
const { validateResult } = require('../validator/validateHelper')

const validateCreateSchool = [ //TODO:name, age, email
body('name_school').trim().notEmpty().exists(),
body('cct').trim().notEmpty().exists().isNumeric(),
body('nivel').trim().notEmpty().exists(),
body('calle').trim().notEmpty().exists(),
body('noExterior').trim().notEmpty().exists().isNumeric(),
body('numeroInterior').trim().notEmpty().exists().isNumeric(),
body('asentamiento').trim().notEmpty().exists(),
body('email_school').trim().isEmail().normalizeEmail(),
body('telefono').trim().notEmpty().exists().isNumeric(),
body('localidadId').trim().notEmpty().exists().isNumeric(),

    validateDirector = [
        body('name_director').trim().notEmpty().exists(),
        validateSupervisor = [
            body('name_supervisor').trim().notEmpty().exists(),
        ],
    ],

(req, res, next) => {
    validateResult(req, res, next)
}
]
module.exports = { validateCreateSchool }