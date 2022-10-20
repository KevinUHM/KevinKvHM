const express = require('express');
const app = express();
const conect = require('./models/index'); 
const { validationResult } = require('express-validator');
// Log requests to the console.
const PORT = parseInt(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routers/User_routes'));
app.use(require('./routers/Role_routes'));
app.use(require('./routers/Employee_routes'));
app.use(require('./routers/School_routes'));
app.use(require('./routers/Regiones_routes'));
app.use(require('./routers/Municipio_routes'));
app.use(require('./routers/Localidad_routes'));

// Setup a default catch-all route that sends back a welcome message in JSON format.

app.listen(PORT, function(){
    /*try {
            
    conect.sequelize.authenticate();
    console.log('servidor corriendo en el puerto: ' +PORT);
        console.log("Se ha establecido la conexión");
    } catch (error) {
        console.log('Se ha producido un error', error)
    }*/
    
    console.log('servidor corriendo en el puerto: ' +PORT);    
    conect.sequelize.sync({ force: true }).then(() => {
        console.log("Se ha establecido la conexión");
    }).catch(error => {
        console.log('Se ha producido un error', error)
    })
})


