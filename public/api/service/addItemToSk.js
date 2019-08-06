const knex = require("../db/connect")
const addData = require("./addData")

module.exports = async (invoiceid, storeid, items) => {
    let promises = [];

    for (item of items) {
        const row = await knex
            .from("stock")
            .select("available")
            .where({ storeid, itemid: item.id })
            .then(rows => rows)

        //check if the item is in the store or not
        //if it in the store then incress the quantity
        //other wise add it to stoke
        if (row.length == 0) {

            promises.push(addData("stock", { itemid: item.id, storeid, available: item.quantity }))
        }
        else {
            //incress the qunatity
            let available = row[0].available;
            available += item.quantity;
            promises.push(update(item.id, storeid, available))
        }
    }

    return promises;
}

const update = async (itemid, storeid, available) => {
    return new Promise(async (res, rej) => {

        {
            knex("stock")
                .where({ itemid, storeid })
                .update({ available })
                .then(() => res())
                .catch(e => rej(e))
        }

    })
}