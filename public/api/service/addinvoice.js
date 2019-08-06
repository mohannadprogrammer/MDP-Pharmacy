const getTotal = require("./calculateTotal")
const addData = require("./addData")
const addItemToStock = require("./addItemToSk")
const addItemToBatch = require("./addToBatch")


module.exports = async (invoiceData) => {
    return new Promise(async (res, rej) => {
        const { transtype, itemsDetail, storeid, supplierid } = invoiceData;
        const wprice = await getTotal(itemsDetail)
        const creater = invoiceData.username;
        const now = new Date();
        const id = transtype + "-" + now.getFullYear() + '' + now.getMonth() + '' + now.getDay() + '' +
            now.getHours() + '' + now.getMinutes() + '' + now.getMilliseconds();

        //save invoce transaction as promise
        const invoice = addData("invoice", { id, transtype, storeid, supplierid, wprice, creater })

        //retrun array of promise of add items to store 
        let itemTostock = await addItemToStock(id, storeid, itemsDetail);

        //add invoice transaction to items to stock promises
        itemTostock.push(invoice);

        let itemToBatch = await addItemToBatch(itemsDetail, storeid);

        //store to array in transaction
        let transactions = itemTostock.concat(itemToBatch);




        Promise.all(transactions)
            .then(() => res(id))
            .catch(error => error)
    })


}

