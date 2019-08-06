/*
this module is used to handle user routes
and forward this route to its corespondend controller
*/

const express = require("express")

//extract express router 
const router = express.Router();


const { addSupplier, updateSupplier } = require("../controller/SupplierControll")
const auth = require("../middleware/authentcation")



router.post('/addsupplier', auth, addSupplier)
router.post('/update', auth, updateSupplier)



//export router module
module.exports = router;