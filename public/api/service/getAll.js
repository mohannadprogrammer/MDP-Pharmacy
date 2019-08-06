const knex = require("../db/connect")

module.exports = async (type) => {
    return new Promise((res, rej) => {
        knex.from(type).select("*")
            .then((rows) => res(rows))
            .catch((err) => rej(err))

    })

}

