const sqlite3 = require('sqlite3');
const dbName = 'dua_main.db';

let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("connected to database");
        db.run('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)', (err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Table created or existed");
            }
        });
    }
});

module.exports = db;
