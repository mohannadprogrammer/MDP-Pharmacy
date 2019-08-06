/*
this module is responsible for performing register user
1. connect to database
2. perform the query
3. close the connection
*/
const connect = require("../../db/connect")

module.exports = async (username, password, email, jobtitle, phone) => {
    return new Promise(async (res, rej) => {
        //get connection pool
        let knex = connect;

        //frist fetch user with same user name and email
        const users = await knex.from('users').select("username", "email")
            .where({ username }).orWhere({ email })
            .then((rows) => rows)

        //check if email is deplicate or username or both

        const error = await checkForDuplicate(users, username, email)
        //check for error
        if (error.emailError || error.usernameErorr) {
            //if there is an error reject the promis
            rej(error)
            return
        }

        knex('users').insert({
            username,
            password,
            email,
            jobtitle,
            phone
        }).then(() => res())



    })

}


checkForDuplicate = async (rows, username, email) => {
    let error = {
        emailError: false,
        usernameErorr: false
    }

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].email == email)
            error.emailError = true;
        if (rows[i].username == username)
            error.usernameErorr = true;
    }

    return error;
}
