/*
this module is used to handle user routes
and forward this route to its corespondend controller
*/

const express = require("express")

//extract express router 
const router = express.Router();


const {
    addUnit,
    updateUnit,
    addCategory,
    updateCategory,
    addItem,
    updateItem
} = require("../controller/itemControll")
const auth = require("../middleware/authentcation")



router.post('/addunit', auth, addUnit)
router.post('/updateunit', auth, updateUnit)
router.post('/addcategory', auth, addCategory)
router.post('/updatecategory', auth, updateCategory)
router.post("/additem", auth, addItem)
router.post("/updateitem", auth, updateItem)


//export router module
module.exports = router;