/*
this module is responsible for activate or disactive user
1. connect to database
2. perform the query
3. close the connection
*/
const connect = require("../../db/connect")

module.exports = async (username, upadteData) => {
    return new Promise(async (res, rej) => {

        //get connection pool
        let knex = connect;

        //if there is an email 
        //first we need to check if the email is not related
        //to any account except the current one
        if (upadteData.email) {
            await knex("users")
                .select("username")
                .where({ email: upadteData.email })
                .then(async (rows) => {
                    //if there is no match between curent user and
                    //user with this email return updated email is 
                    //already in use with another account
                    if (rows.length > 1 && username != rows[0].username) {

                        rej({ code: 1, msg: "updated email is already in use" })
                        return;
                    }
                    else {
                        await knex("users")
                            .where({ username })
                            .update(upadteData)
                            .then(() => res())
                            .catch(e => rej(e))

                        return;

                    }


                })
        } else {
            knex("users")
                .where({ username })
                .update(upadteData)
                .then(() => res())
                .catch(e => rej(e))
        }

    })
}