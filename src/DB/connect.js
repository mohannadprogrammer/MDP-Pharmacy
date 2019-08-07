const sql = require('mssql')



const getData = async (callback) => {
    try {
        await sql.connect('mssql://sa:flatron@localhost:1433/myDB')
        callback("done")
    } catch (err) {
        callback(err.message)
    }
}


export default getData;