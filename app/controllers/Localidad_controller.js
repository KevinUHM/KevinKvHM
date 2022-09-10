const db = require('../models'); //prueba exitosa pero con difine
module.exports = {

async createLocalidad(req, res) {
    const { inegi, name } = req.body;
    let localidad = await db.localidad.create({
        inegi,
        name,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.json(localidad)
},

async allLocalidades(req,res){
    let localidad = await db.localidad.findAll();
    res.json(localidad)
}


}