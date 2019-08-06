/*
this module is use to connect to db
*/
var knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        password: 'abubaker0924952329',
        host: '172.18.130.106',
        database: 'PharmacyDB',
        user: 'postgres'
    }
});

module.exports = knex;
