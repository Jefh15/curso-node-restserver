const { response, request } = require('express');


// ESTE ES MI CONTROLADOR




// CONTROLADOR 
const usuariosGet = (req = request, res = response) => {
    
    
    //query params
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;



    // le agrego el status() que me anade segun el status de mi respuesta
    // res.status(403).json({
    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey, 
        page,
        limit
    });
}


const usuariosPost = (req, res = response) => {
    

    // const body = req.body;
    const { nombre, edad } = req.body;

    // le agrego el status() que me anade segun el status de mi respuesta
    // res.status(403).json({
    res.json({
        msg: "post API - usuariosPost",
        nombre,
        edad
    });
};



const usuariosPut = (req, res = response) => {
    
    // para recibir el id como parametro
    const { id } = req.params;
    

    // le agrego el status() que me anade segun el status de mi respuesta
    // res.status(403).json({
    res.json({
        msg: "put API - usuariosPut",
        id
    });
};


const usuariosPatch = (req, res = response) => {
    // le agrego el status() que me anade segun el status de mi respuesta
    // res.status(403).json({
    res.json({
        msg: "patch API - usuariosPatch"
    });
};



const usuariosDelete = (req, res = response) => {
    // le agrego el status() que me anade segun el status de mi respuesta
    // res.status(403).json({
    res.json({
        msg: "delete API - usuariosDelete"
    });
};






module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}