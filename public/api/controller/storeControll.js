/*
this module is responsible for serveing user request
it extract data form request body then pass this data
to responsible service if needed
*/

const insert = require("../service/addData");
const updateStore = require("../service/updateData")

const addStore = async (req, res) => {
    const { name, location } = req.body;

    insert("store", { name, location })
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
const update = async (req, res) => {
    const { id, updatedData } = req.body;
    updateStore("store", updatedData, id)
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
    addStore,
    update
}