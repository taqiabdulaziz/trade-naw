const Routes = require('express').Router()
const userRoutes = require("./Users")
const registerRoutes = require('./register')


Routes.get('/', (req, res) => {
    res.send("Welcome every body")
})

Routes.use('/register', registerRoutes )

Routes.use('/user', userRoutes )


module.exports = Routes