const getAll = require("../service/getAll")
module.exports = async (req, res) => {
    const { type } = req.body;
    getAll(type)
        .then((rows) => res.status(200).json({
            done: true,
            data: rows
        }))
        .catch((erorr) => {
            res.status(500).json({
                done: false,
                erorr
            })
        })
}