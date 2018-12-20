function checkRole (req, res, next) {
    if (req.session.user.role === "admin") {
        next()
    } else {
        res.redirect(`/?error= anda tidak punya akses`)
    }
}


module.exports = checkRole