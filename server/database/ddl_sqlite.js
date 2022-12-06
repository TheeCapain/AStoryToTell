import db from '../database/connection_sqlite.js'


const isInDeleteMode = true;

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users;
    `);
}

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users;
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(255),
    user_mail VARCHAR(255),
    user_pw VARCHAR(255)
);
`);

if (isInDeleteMode) {
    db.run(`INSERT INTO users
    ( user_name ,user_mail, user_pw) 
    VALUES
    ("TestUser","test@mail.com", "123");`);
}