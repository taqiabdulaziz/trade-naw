const Routes = require('express').Router()
const userRoutes = require("./Users")
const registerRoutes = require('./register')
const loginRoutes = require('./login')


Routes.get('/', (req, res) => {
    res.render('index.ejs')
})
Routes.get('/session', (req, res) => {
    res.send(req.session)
})
Routes.use('/register', registerRoutes)
Routes.use('/login', loginRoutes)

Routes.use('/user', userRoutes)


module.exports = Routes