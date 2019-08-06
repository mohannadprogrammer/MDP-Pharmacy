/*
this module is responsible for activate or disactive user
1. connect to database
2. perform the query
3. close the connection
*/
const knex = require("../db/connect")

module.exports = async (table, upadteData, id) => {
    return new Promise(async (res, rej) => {

        {
            knex(table)
                .where({ id })
                .update(upadteData)
                .then(() => res())
                .catch(e => rej(e))
        }

    })
}