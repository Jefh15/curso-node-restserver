const express = require('express');
const cors = require('cors');

class Server {

    constructor (){
        
        // USE MI APP
        this.app = express()

        // PUERTO
        this.port = process.env.PORT;

        // API DE USUARIOS
        this.usuariosPath = '/api/usuarios';

        // Middlewares, es una funcion que siempre va a ejecutarse cuando levantemos nuestro servidor
        this.middlewares();

        // rutas de mi aplicacion
        this.routes();
    }

    middlewares(){


        // CORS
        // recordar importar cors
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );


        // DIRECTORIO PUBLICO
        // lo que me interesa publicar es la carpeta publica
        this.app.use( express.static('public') );

    }


    routes(){

        this.app.use( this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;