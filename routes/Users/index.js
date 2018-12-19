const Routes = require('express').Router()
const checkLogin = require('../../helpers/checkLogin')
const {User, TransactionB2B, Currency, CurrencyHistory} = require('../../models')



Routes.get('/',checkLogin, (req, res) =>{
    // res.send(req.session)
    User.findAll({where:{
        id:req.session.user.id
    }})
    .then((user) => {
        res.send(user)
     
    })
    .catch((err) => {
        res.redirect(`/?error= ${err}`)
    })
})



Routes.get("/buy", (req, res) => {
    CurrencyHistory.findAll().then((result) => {
        res.send(result)
        // res.render(`./user/buy.ejs`, {
        //     data: result
        // })
    }).catch((err) => {
        res.send(err)
    });
    
})

Routes.get("/delete", (req, res) => {
    User.destroy({where:{id:req.session.user.id}})
    .then((data) => {
        res.redirect('/login')
    })
    .catch((err) => {
        res.redirect(`/profile?error=${err}`)
    })
})

module.exports = Routes