/*
this module is used to handle user routes
and forward this route to its corespondend controller
*/

const express = require("express")

//extract express router 
const router = express.Router();

const { register, changeUserStatus, login, updateUser } = require("../controller/userControll")
const auth = require("../middleware/authentcation")


router.post('/register', auth, register)
router.post('/changUserStatus', auth, changeUserStatus)
router.post('/login', login)
router.post("/update", auth, updateUser)


//export router module
module.exports = router;