const { check,body } = require('express-validator') //TODO <---
const { validateResult } = require('../validator/validateHelper')

const validateCreate = [ //TODO:name, age, email
body('name_role').trim().notEmpty().exists(),
(req, res, next) => {
    validateResult(req, res, next)
}
]
module.exports = { validateCreate }