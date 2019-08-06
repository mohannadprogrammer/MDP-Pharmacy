/*
this module is handle two functions:
    1. sign with jwt
    2.verfiy with jwt
*/
const jwt = require("jsonwebtoken")

const sign = async (objToSin, key) => {
    //genrate token
    const token = await jwt.sign(objToSin, key);

    return token;
}

const verfiy = async (token, key) => {

    //decode the data
    try {
        const decoded = await jwt.verify(token, key);

        return decoded;
    } catch (error) {
        return null;
    }
}

module.exports = { sign, verfiy };