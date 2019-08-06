/*
this module is responsible for login
1. connect to database
2. perform the query
3. close the connection
*/
const connect = require("../../db/connect")
const { sign } = require("../../security-support/generateToken")


module.exports = async (username, password) => {
    return new Promise(async (res, rej) => {
        //get connection pool
        let knex = connect;

        //execute the query
        const users = await knex("users")
            .select("*")
            .where({ username, password, active: 1 })
            .then(result => result)
            .catch(e => rej(e))


        //check if there is user with specific username and password
        if (!users || users.length == 0) {
            rej({ code: 1, msg: "user not found or account is inactive" });
            return
        }

        //gerate token for this user
        const token = await sign({ username }, process.env.KEY).then(tok => tok)

        //add token to return object
        users[0].token = token
        res(users[0])
    })
}