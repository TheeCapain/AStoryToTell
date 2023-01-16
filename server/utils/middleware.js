import db from '../database/connection_sqlite.js'
function userGuard(req, res, next) {
    console.log("Hello there")
    if (req.session.userId !== Number(req.params.id)) {
        console.log("not signed in")
        return res.status(401).send({ message: "Not signed in" })
    } else {
        console.log("access granted")
        return res.send({ message: "access granted" })
    }
    next()
}

export async function loginAuth(req, res, next) {
    const user = await db.get(`SELECT user_name FROM users where user_id=?`, [req.body.userid])
    if (user.user_name === req.body.userName) {
        console.log("Authorized")
        req.user = user
        next()
    } else {
        res.status(403).send({ message: "Not authorized to post here" })
    }
}
