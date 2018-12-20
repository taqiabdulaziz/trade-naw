const Routes = require('express').Router()
const checkLogin = require('../../helpers/checkLogin')
const { User, TransactionB2B, Currency, CurrencyHistory } = require('../../models')
const user = require(`../../helpers/checkLogin`)

Routes.get('/', checkLogin, (req, res) => {
    // res.send(req.session)
    User.findOne({
        where: {
            id: req.session.user.id
        }
    })
        .then((user) => {
            res.render("./user/profile.ejs", { user:user })

        })
        .catch((err) => {
            console.log(err);
            
            res.redirect(`/login/?error= ${err}`)
        })
})

Routes.get("/buy", (req, res) => {
    Currency.findAll().then((result) => {
        // res.send(result)
        res.render(`./user/buy.ejs`, {
            data: result
        })
    }).catch((err) => {
        res.send(err)
    });

})

Routes.get("/delete", (req, res) => {
    User.destroy({ where: { id: req.session.user.id } })
        .then((data) => {
            res.redirect('/login')
        })
        .catch((err) => {
            res.redirect(`/profile?error=${err}`)
        })
})

module.exports = Routes