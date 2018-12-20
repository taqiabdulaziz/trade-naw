const Routes = require('express').Router()
const {User} = require('../../models')


Routes.get('/', (req, res) => {
    res.render('register.ejs',{user: req.params.user})
})

Routes.post('/', (req, res) => {
    let insert = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        ktp: req.body.ktp,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender
    }
    User.create(insert)
        .then((data) => {
            res.redirect("/login?info=success register data")
        })
        .catch((err) => {
            res.redirect(`/register?error=${err}`)
        })

    // console.log(insert)
})



module.exports = Routes