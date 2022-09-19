const db = require('../models'); //prueba exitosa pero con difine
module.exports = {

async createLocalidad(req, res) {
     
     try {
      const { nameLoc, claveLocOfi,municipioId} = req.body;

      const localidad = await db.localidad.create({
        nameLoc,
        claveLocOfi,
        municipioId,
        createdAt: new Date(),
        updatedAt: new Date()
        });
        return res.status(201).json({localidad});

     } catch (error) {
        console.log(error);
        return res.status(500).json({error: "error del servidor"});
     }
},

async allLocalidades(req,res){
   try {
      const localidad = await db.localidad.findAll({
         include: ['municipio']
      }
      );
      return res.status(202).json(localidad); 
   } catch (error) {
       console.log(error);
        return res.status(500).json({error: "error del servidor"});
   }
    
},

async allLocalidadId (req,res){
   const {id} = req.params;
   try {
      const localidad = await db.localidad.findOne({
         where:{id},
          include: ['municipio']
         //TODO: attributes nosa permite devolver solo los campos que deseamos
        // attributes: ['nameLoc','claveLocOfi']
            })
            if (!localidad) {
               return res.status(404).json({error: "La Localidad No Existe"});
            } else 
               return res.status(200).json(localidad);
            
   } catch (error) {
      console.log(error);
        return res.status(500).json({error: "error del servidor"}); 
   }
},

   async updateLocalidad (req, res){
      try {
      
         const {id}= req.params;

         const localidad = await db.localidad.findOne({
            where:{id},
            include: ['municipio']
         });
         if (!localidad) {
            return res.status(404).json({error: "La Localidad No Existe"});
         } else {
         //TODO: con la funcion set solo actualiza los campos que mande el frontend y los demas los mantiene igual
         localidad.set(req.body);
         await localidad.save();

         return res.status(201).json(localidad);
         }

      } catch (error) {
         console.log(error);
            return res.status(500).json({error: "error del servidor"}); 
      } 
},

async deleteLocalidad (req, res){
   try {
      const {id} = req.params;
      const result = await db.localidad.findByPk(id);
      if (!result) {
          return res.status(404).json({error: "No Existe La Localidad"});
      } else {
         await db.localidad.destroy({
         where: {id}
      });
      return res.status(201).json({msg: "Localidad eliminada"});
      }

   } catch (error) {
       console.log(error);
        return res.status(500).json({error: "error del servidor"}); 
   }
}

}
