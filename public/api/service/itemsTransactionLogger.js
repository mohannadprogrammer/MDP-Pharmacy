const knex = require("../db/connect")
const getTotal = require("./calculateTotal")
const addData = require("./addData")

module.exports = async (items, invoiceid) => {
    let promises = [];

    for (item of items) {
        //get number of sales unit using entry unit
        const row = await knex
            .from("item")
            .select("packetsize")
            .where({ id: item.id })
            .then(rows => rows)

        let quantity = row[0].packetsize * item.quantity;
        const price = item.price;

        promises.push(addData("transactions", { itemid: item.id, invoiceid, quantity, price }))

    }
    return promises;
}