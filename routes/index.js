const Routes = require('express').Router()
const userRoutes = require("./Users")
const Model = require(`../models`)
const registerRoutes = require('./register')
const loginRoutes = require('./login')
const convertTime = require(`../helpers/convertTime`)

Routes.use('/register', registerRoutes)
Routes.use('/login', loginRoutes)

Routes.get('/', (req, res) => {
    res.render(`index.ejs`, {
        x: undefined,
        y: undefined
    })
})

Routes.post(`/`, (req, res) => {
    Model.CurrencyHistory.findAll({
        where: {
            name: req.body.name
        },
        order: [[`updatedAt`, `DESC`]],
        offset: 1
    }).then((result) => {
            let data = []
            let timeSet = []
            for (let i = 0; i < result.length; i++) {
                if (data.length <= 10) {
                    data.push(result[i].buyPrice)
                    timeSet.push(convertTime(result[i].updatedAt))
                }
            }
            res.render('index.ejs', {
                data: result,
                x: data,
                y: timeSet
            })
            // res.send(result)
        }).catch((err) => {

        });
})
Routes.get('/session', (req, res) => {
    res.send(req.session)
})
Routes.use('/user', userRoutes)

module.exports = Routes