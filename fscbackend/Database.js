const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('fsc.db', (err) => {
    err ? console.log('err', err) : console.log("connected");
})

db.close((err) => {
    err ? console.log('err', err) : console.log("Successfully database closed !")
})