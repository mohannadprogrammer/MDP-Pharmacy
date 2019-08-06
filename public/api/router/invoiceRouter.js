/*
this module is used to handle user routes
and forward this route to its corespondend controller
*/

const express = require("express")

//extract express router 
const router = express.Router();


const { addInvoice } = require("../controller/invoiceControll")
const auth = require("../middleware/authentcation")



router.post('/add', auth, addInvoice)


//export router module
module.exports = router;