const add = require("../service/addinvoice")
const transaction = require("../service/itemsTransactionLogger")

const addInvoice = async (req, res) => {
    const { transtype } = req.body;

    let promise = null;

    switch (transtype) {
        case "add":
            promise = add
            break;
    }

    await promise(req.body)
        .then(async (id) => {
            await transaction(req.body.itemsDetail, id).catch(err => console.log(err))
            res.status(200).json({
                done: true
            })
        })
        .catch((erorr) => {
            res.status(500).json({
                done: false,
                erorr
            })
        })
}

module.exports = {
    addInvoice
}