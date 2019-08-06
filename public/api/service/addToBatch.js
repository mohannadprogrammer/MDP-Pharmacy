const knex = require("../db/connect")
const addData = require("./addData")

module.exports = async (items, storeid) => {
    let promises = []
    for (item of items) {
        //get number of sales unit using entry unit
        const row = await knex
            .from("item")
            .select("packetsize")
            .where({ id: item.id })
            .then(rows => rows)

        let quantity = row[0].packetsize * item.quantity;

        const batch = await knex
            .from("batch")
            .where({ itemid: item.id })
            .max("id")
            .then(rows => rows)

        let batchnum = (!batch[0].max) ? 1 : batch[0].max + 1;


        promises.push(addData("batch", {
            id: batchnum,
            itemid: item.id,
            stroeid: storeid,
            expiredate: item.expiredate,
            quantity

        })
        )

    }
    return promises;

}