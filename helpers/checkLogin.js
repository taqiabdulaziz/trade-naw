function checkLogin(req, res, next) {
    //return function(req, res, next) {
        if (req.session.user) {
            console.log(req.session)
            console.log("masuk ========")
            next()
        } else {
            console.log("gak session =====")
            res.redirect('/login')
        }
    //}
}

module.exports = checkLogin