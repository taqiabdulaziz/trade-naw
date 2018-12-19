const Routes = require('express').Router()
const {User} = require('../../models')


Routes.get('/', (req, res) => {
    res.send('buat register')
})



module.exports = Routes