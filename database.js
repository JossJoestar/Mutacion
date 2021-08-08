var pg = require('pg');

//configuracion extra de SSL para evitar errores
pg.defaults.ssl = true;

//Objeto de configuracion.
var config = {
    user: 'wpzzijjqcoiajg',
    host: 'ec2-52-0-67-144.compute-1.amazonaws.com',
    database: 'd6daoml3q9pf2d',
    password: 'e8f08f59caf5f04c0ccd26a2500fbcc460522ddbc50fe93c09b8ea787a584188',
    port: 5432,
    ssl:true
};

//Creacion de la conexion;
var client = new pg.Client(config);
client.connect();

module.exports = client;