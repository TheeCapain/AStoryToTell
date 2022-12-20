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
        DROP TABLE IF EXISTS posts;
        DROP TABLE IF EXISTS comments
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(255),
    user_mail VARCHAR(255),
    user_pw VARCHAR(255)
);
`);

db.exec(`CREATE TABLE IF NOT EXISTS posts (
    post_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id int FOREIGN KEY REFERENCES users(user_id),
    post_category VARCHAR(255)
    post_title VARCHAR(255),
    post_content VARCHAR(255)
    )`)

db.exec(`CREATE TABLE IF NOT EXISTS comments (
    comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id int FOREIGN KEY REFERENCES users(user_id)
    post_id int FOREIGN KEY REFERENCES posts(post_id)
    comment_content VARCHAR(255)
)`)

if (isInDeleteMode) {
    db.run(`INSERT INTO users
    ( user_name ,user_mail, user_pw) 
    VALUES
    ("TestUser","test@mail.com", "123");`);

    db.run(`INSERT INTO posts
    (user_id, post_category, post_title, post_content)
    VALUES
    (1, filmmaking, "This is the post title", "This is some not very long post content");`);
}