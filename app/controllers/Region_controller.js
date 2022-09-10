const db = require('../models'); //prueba exitosa pero con difine
module.exports = {

async createRegion(req, res) {
    const { idregion, region } = req.body;
    let reg = await db.region.create({
        idregion,
        region,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.json(reg)
},

async allRegion(req,res){
    let regiones = await db.region.findAll();
    res.json(regiones)
}


}