/*
this module is used to handle user routes
and forward this route to its corespondend controller
*/

const express = require("express")

//extract express router 
const router = express.Router();


const { addStore, update } = require("../controller/storeControll")
const auth = require("../middleware/authentcation")



router.post('/addstore', auth, addStore)
router.post('/update', auth, update)


//export router module
module.exports = router;