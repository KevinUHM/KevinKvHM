'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes} = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/database')[env];
//const config = require(__dirname + '/../config/config.js')[env];
const db = {};

//Coneccion a la bd
//const sequelize = new Sequelize(config.database, config.username, config.password, config);

//Asociasiones y vinculaciones
//User = require('../models/user')(sequelize, DataTypes)
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//try {
  

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//} catch (err) {
//  console.error(err)
//}
 //Conection
//db.connection = new Sequelize(config.database, config.username, config.password, config);

//Associasiones y vinculaciones de modelos con la bd


db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db.User = require('../models/user')(db.sequelize, DataTypes); 
//+ User = require('../models/user') en el controller
module.exports = db;
