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
    user_bio VARCHAR(255),
    user_pw VARCHAR(255)
);
`);

db.exec(`CREATE TABLE IF NOT EXISTS posts (
    post_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fk_user_id int null, 
    post_category VARCHAR(255),
    post_title VARCHAR(255),
    post_content VARCHAR(255),
    FOREIGN KEY(fk_user_id) REFERENCES users(user_id)
 
    )`)

db.exec(`CREATE TABLE IF NOT EXISTS comments (
    comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fk_user_id int null,
    fk_post_id int null,
    comment_content VARCHAR(255),
    FOREIGN KEY(fk_user_id) REFERENCES users(user_id),
    FOREIGN KEY(fk_post_id) REFERENCES posts(post_id)
)`)

if (isInDeleteMode) {

    db.run(`INSERT INTO users
    ( user_name, user_mail,user_bio, user_pw) 
    VALUES
    ("TestUser","test@mail.com","A little about me is that im a movie director, writer and photograpgher", "123");`);

    db.run(`INSERT INTO posts
    (fk_user_id, post_category, post_title, post_content)
    VALUES
    (1, "filmmaking", "This is the post title", "This is some not very long post content");`);

    db.run(`INSERT INTO comments 
    (fk_user_id, fk_post_id, comment_content)
    VALUES
    (1,1,"This is the db Comment")`)

}
