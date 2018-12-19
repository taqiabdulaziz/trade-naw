const Routes = require('express').Router()
const {User, TransactionB2B, Currency} = require('../../models')


Routes.get("/", (req, res) => {
    res.send("ini user")
})

Routes.get("/buy", (req, res) => {
    Currency.findAll({
        attributes: ["buyPrice"],
        group: ["name"]
    }).then((result) => {
        res.send(result)
        // res.render(`./user/buy.ejs`, {
        //     data: result
        // })
    }).catch((err) => {
        res.send(err)
    });
    
})

module.exports = Routes