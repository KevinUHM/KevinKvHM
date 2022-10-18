require('dotenv').config();

module.exports = {
   
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    //"host": "127.0.0.1",
    dialect: process.env.DB_DIALECT || "postgres", 
  
  /*
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_DATABASE || "prueba",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "postgres", 
  define: {
    timestamps: false,

    //Genera claves foraneas de tipo model_id en lugar de modelId
    udescored: true
   
    
  }*/
  
}
