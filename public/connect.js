const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';


// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    if (!err) {
        console.log("Connected successfully to server");
        client.close();
    }
    else console.log(err.message)


});