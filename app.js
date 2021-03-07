// Importaciones de terceros van arriba

// requiero mi paquete de dotenv para mis variables de entorno
require('dotenv').config();





// requiero de mi models mi clase server
const Server = require('./models/server');


// Hago mi instancia de server
const server = new Server();

// lanzo el metodo listen 
server.listen();
