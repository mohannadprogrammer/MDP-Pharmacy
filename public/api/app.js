/*
this module is responsible for configuring the express
*/

const express = require("express")
const app = express();

//require needed modules for configuring
const bodyParser = require("body-parser")
const morgan = require("morgan")

//require environment configration
require("./config/environment")



//requiring for routes
const userRouter = require("./router/userRoute");
const itemRoute = require("./router/itemRoute");
const supplierRoute = require("./router/supplierRoute")
const storeRoute = require("./router/storeRoute")
const invoiceRouter = require("./router/invoiceRouter")

//body parser to format request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//morgan to log the request
app.use(morgan("dev"))

//express to serve static file
app.use(express.static("public"));
app.use(express.static("views"));

//forwarad request to specific router
app.use('/user', userRouter);
app.use('/item', itemRoute);
app.use('/supplier', supplierRoute)
app.use("/store", storeRoute)
app.use("/getAll", require("./middleware/authentcation"), require("./controller/getAllcontroll"))
app.use('/invoice', invoiceRouter)

// handles errors
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;