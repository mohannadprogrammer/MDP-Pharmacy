/* 
this module is resbonsible for inserting data 
it reseive table and data to insert
*/

const knex = require("../db/connect")

module.exports = async (table, values) => {
    return new Promise(async (res, rej) => {
        await knex(table)
            .insert(values)
            .returning("*")
            .then((row) => res(row))
            .catch(error => rej(error))
    })

}
