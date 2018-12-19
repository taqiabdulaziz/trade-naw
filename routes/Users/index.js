const Routes = require('express').Router()
const {User, TransactionB2B, Currency} = require('../../models')


Routes.get("/", (req, res) => {
    res.send("ini user")
})








module.exports = Routes