const db = require('../models'); //prueba exitosa pero con difine
module.exports = {

async createMunicipio(req, res) {
    const { clave, name } = req.body;
    let municipio = await db.municipio.create({
        clave,
        name,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.json(municipio)
},

async allMunicipios(req,res){
    let municipios = await db.municipio.findAll();
    res.json(municipios)
}


}