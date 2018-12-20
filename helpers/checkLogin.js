function checkLogin(req, res, next) {
    //return function(req, res, next) {
        if (req.session.user) {
            next()
        } else {
            res.redirect('/login')
        }
    //}
}

module.exports = checkLogin


