const insert = require("../service/addData");
const update = require("../service/updateData")

const addSupplier = async (req, res) => {
    const {
        name,
        accnum,
        email,
        address,
        phone,
    } = req.body;

    const registeduser = req.body.username


    insert("supplier", {
        name,
        accnum,
        email,
        address,
        phone,
        registeduser

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
const updateSupplier = async (req, res) => {
    const { id, updatedData } = req.body
    const updateduser = req.body.username
    const updatedate = "now()"

    update("supplier", {
        ...updatedData,
        updateduser,
        updatedate
    }, id)
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
    addSupplier,
    updateSupplier
}