const Routes = require('express').Router()
const userRoutes = require("./Users")
const Model = require(`../models`)
const registerRoutes = require('./register')
const loginRoutes = require('./login')

Routes.use('/register', registerRoutes)
Routes.use('/login', loginRoutes)

Routes.get('/', (req, res) => {
    Model.CurrencyHistory.findAll({
        where: {
            name: `HKD`,
        },
        order: [[`updatedAt`,`DESC`]]
    }).then((result) => {
        let data = []
        for (let i = 0; i <result.length; i++) {
            if (data.length <= 6) {
                data.push(result[i].id)
            }
            
        }
        console.log(data);
        
        res.render('index.ejs', {
            data: result,
            x: data
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