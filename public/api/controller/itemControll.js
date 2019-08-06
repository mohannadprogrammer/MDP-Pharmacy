/*
this module is responsible for serveing user request
it extract data form request body then pass this data
to responsible service if needed
*/

const insert = require("../service/addData");
const update = require("../service/updateData")

const addUnit = async (req, res) => {
    const { name } = req.body;

    insert("unit", { name })
        .then(() => res.status(200).json({
            done: true
        }))
        .catch((erorr) => {
            res.status(500).json({
                done: false,
                erorr
            })
        })
}
const updateUnit = async (req, res) => {
    const { id, updatedData } = req.body;

    update("unit", updatedData, id)
        .then(() => res.status(200).json({
            done: true
        }))
        .catch((erorr) => {
            res.status(500).json({
                done: false,
                erorr
            })
        })
}

const addCategory = async (req, res) => {
    const { name } = req.body;

    insert("category", { name })
        .then(() => res.status(200).json({
            done: true
        }))
        .catch((erorr) => {
            res.status(500).json({
                done: false,
                erorr
            })
        })
}
const updateCategory = async (req, res) => {
    const { id, updatedData } = req.body;

    update("category", updatedData, id)
        .then(() => res.status(200).json({
            done: true
        }))
        .catch((erorr) => {
            res.status(500).json({
                done: false,
                erorr
            })
        })
}

const addItem = async (req, res) => {
    const {
        generalname,
        tradname,
        company,
        category,
        barcode,
        minlevel,
        salsunit,
        entryunit,
        packetsize,
        price
    } = req.body;

    const registeduser = req.body.username;
    const registerdate = "now()"

    insert("item", {
        generalname,
        tradname,
        company,
        category,
        barcode,
        minlevel,
        salsunit,
        entryunit,
        packetsize,
        price,
        registeduser,
        registerdate
    })
        .then(() => res.status(200).json({
            done: true
        }))
        .catch((erorr) => {
            res.status(500).json({
                done: false,
                erorr
            })
        })
}
const updateItem = async (req, res) => {
    const { id, updatedData } = req.body;

    update("item", updatedData, id)
        .then(() => res.status(200).json({
            done: true
        }))
        .catch((erorr) => {
            res.status(500).json({
                done: false,
                erorr
            })
        })
}

module.exports = {
    addUnit,
    updateUnit,
    addCategory,
    updateCategory,
    addItem,
    updateItem
}