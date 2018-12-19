const Routes = require('express').Router()
const {User} = require('../../models')

Routes.get('/', (req, res) => {
    let info = req.query.info
    let err = req.query.error
    
    res.render("login.ejs", {info, err})
})

Routes.post('/', (req,res) => {
    res.send(req.body)
})




module.exports = Routes