/*
this module is responsible for activate or disactive user
1. connect to database
2. perform the query
3. close the connection
*/
const connect = require("../../db/connect")

module.exports = async (username, value) => {
    return new Promise(async (res, rej) => {
        //get connection pool
        let knex = connect;


        //execute the query
        knex('users')
            .where({ username })
            .update({ active: value })
            .then(() => res())
            .catch(e => rej(e))
    })
}