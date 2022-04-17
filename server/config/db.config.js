const mysql = require('mysql');

// Create here mysql connect 

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'shopx'
});


dbConnect.connect(function(error) {
    if (error) throw error;
    console.log("Databas connect Success");
})

module.exports  = dbConnect;