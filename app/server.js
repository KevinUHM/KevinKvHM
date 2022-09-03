const express = require('express');
const app = express();
const conect = require('./models/index'); 

// Log requests to the console.
const PORT = parseInt(process.env.PORT, 10) || 7000;
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routers/User_routes'));
app.use(require('./routers/Role_routes'));
app.use(require('./routers/Employee_routes'));

// Setup a default catch-all route that sends back a welcome message in JSON format.

app.listen(PORT, function(){
    console.log('servidor corriendo en el puerto: ' +PORT);    

    conect.sequelize.sync({ alter:true }).then(() => {
        console.log("Se ha establecido la conexión");
    }).catch(error => {
        console.log('Se ha producido un error', error)
    })
})

