const { verfiy } = require("../security-support/generateToken")

module.exports = async (req, res, next) => {
    try {
        let token = req.headers.authorization.split(" ")[1];
        const decode = await verfiy(token, process.env.KEY);
        if (decode) {
            req.body.username = decode.username;
            next()
        }
        else {
            res.status(500).send({
                done: false,
                error: {
                    code: 2,
                    msg: "authentcations failled"
                }
            })
        }
    } catch (err) {
        res.status(500).send({
            done: false,
            error: {
                code: 2,
                msg: "authentcations failled"
            }
        })
    }
}