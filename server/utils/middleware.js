import db from '../database/connection_sqlite.js'

function userGuard(req, res, next) {

    if (req.session.userId !== Number(req.params.id)) {

        return res.status(401).send({ message: "Not signed in" })
    } else {

        return res.send({ message: "access granted" })
    }
    next()
}

export async function loginAuth(req, res, next) {
    const user = await db.get(`SELECT user_id FROM users where user_id=?`, [req.body.userid])
    if (user.user_id === req.body.userid) {
        req.user = user
        next()
    } else {
        res.status(403).send({ message: "Not authorized to post here" })
    }
}
