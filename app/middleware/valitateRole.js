const db = require('../models');

/*const checkExisted = () =>{

}*/
    module.exports = {
 
       async checkExisted(req, res, next){
        let rolle = await db.role.findOne({
            where: {
                name_role: req.body.name_role}
            }).then(rol => {

                if (!rol) {
                    next()
                } else {
                    res.status(401).json({ msg: "El role ya existe" })
                }
            
            }).catch(err => {
                res.status(500).json(err);
            })
            

       }
}