require('dotenv').config();

module.exports = {
  development: {
    username: "postgres",
    password: "1234",
    database: "prueba",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "postgres",
  }
};
  /*
   development: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    dialect: process.env.DB_DIALECT || "postgres",
   },
   test:{
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    dialect: process.env.DB_DIALECT || "postgres", 
   },
   production:{
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    dialect: process.env.DB_DIALECT || "postgresql",
   }
   */
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
  
