const Routes = require('express').Router()
const Model = require(`../../models`)
const convertTime = require(`../../helpers/convertTime`)

Routes.get(`/:id`, (req, res) => {
    Model.Currency.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((result) => {
            return Model.CurrencyHistory.findAll({
                where: {
                    name: result.name
                },
                order: [[`updatedAt`, `DESC`]]
            })
        }).then((histories) => {
            
            let data = []
            let timeSet = []
            for (let i = 0; i < histories.length; i+=5) {
                if (data.length <= 30) {
                    data.push(histories[i].buyPrice)
                    timeSet.push(convertTime(histories[i].updatedAt))
                }
            }
            
            res.render(`./user/currencyHistory.ejs`, {
                data: histories,
                x: data,
                y: timeSet,
                user: req.session.user
            })
        }).catch((err) => {
            res.send(err)
        });
})

module.exports = Routes