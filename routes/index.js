const Routes = require('express').Router()
const userRoutes = require("./Users")
const Model = require(`../models`)
const registerRoutes = require('./register')
const loginRoutes = require('./login')
const convertTime = require(`../helpers/convertTime`)
const currencyRoutes = require(`../routes/currency`)

Routes.use('/register', registerRoutes)
Routes.use('/login', loginRoutes)

Routes.get('/', (req, res) => {
    res.render(`index.ejs`, {
        x: undefined,
        y: undefined,
        user: req.session.user
    })
    console.log(req.session.user);
    
    
})
Routes.post(`/`, (req, res) => {
    Model.CurrencyHistory.findAll({
        where: {
            name: req.body.name
        },
        order: [[`updatedAt`, `DESC`]]
    }).then((result) => {
            let data = []
            let timeSet = []
            for (let i = 0; i < result.length; i+=5) {
                if (data.length <= 15) {
                    data.push(result[i].buyPrice)
                    timeSet.push(convertTime(result[i].updatedAt))
                }
            }
            res.render('index.ejs', {
                data: result,
                x: data,
                y: timeSet,
                user: req.session.user
            })
            // res.send(result)
        }).catch((err) => {

        });
})
Routes.get('/session', (req, res) => {
    res.send(req.session)
})
Routes.use('/user', userRoutes)
Routes.use(`/currency`, currencyRoutes)

module.exports = Routes