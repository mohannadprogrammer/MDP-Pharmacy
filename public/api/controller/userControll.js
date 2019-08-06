/*
this module is responsible for serveing user request
it extract data form request body then pass this data
to responsible service if needed
*/
const UserRegister = require("../service/userservice/registerService")
const disableUser = require("../service/userservice/disableUser")
const loginService = require("../service/userservice/loginService")
const update = require("../service/userservice/updateUser")

const register = (req, res) => {
    //destruce user data from requst body
    const { username, password, email, jobtitle, phone } = req.body;

    //call register service to store data in db
    UserRegister(username, password, email, jobtitle, phone)
        .then(() => {
            res.status(200).json({ done: true })
        })
        .catch(error => {

            res.status(500).json({
                done: false,
                error
            })
        })
}

const changeUserStatus = async (req, res) => {
    const { username, value } = req.body;

    disableUser(username, value)
        .then(() => {
            res.status(200).json({ done: true })
        })
        .catch(error => {
            res.status(500).json({
                done: false,
                error: 1
            })
        })
}

const login = async (req, res) => {
    const { username, password } = req.body;

    loginService(username, password)
        .then((user) => {
            res.status(200).json({
                done: true,
                user
            })
        })
        .catch(error => {
            res.status(500).json({
                done: false,
                error
            })
        })
}

const updateUser = async (req, res) => {
    let { username, updatedData } = req.body

    //check if the updated data contain username
    //username should never get updated !
    if (updatedData.username) {
        let { username, ...rest } = updatedData;

        updatedData = { ...rest };
    }

    update(username, updatedData)
        .then(() => {
            res.status(200).json({
                done: true
            })
        })
        .catch(error => {
            res.status(500).json({
                done: false,
                error
            })
        })
}

module.exports = {
    register,
    changeUserStatus,
    login,
    updateUser
}