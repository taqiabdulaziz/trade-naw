const rp = require(`request-promise`)
const session = require("express-session")
var express = require('express');
var app = express()
var server = require('http').Server(app);
const Model = require(`./models`)
const Router = require('./routes')
var io = require('socket.io')(server);


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.use("/", Router)

server.listen(3000)


app.get('/chatbox', function (req, res) {
    res.render(`chatbox.ejs`)
});

//BACA SOCKET.IO
io.on('connection', function (socket) {
    console.log(`user connected`);

    socket.on('chat message', function (msg) {
        io.emit('chat message', `Taqi: ${msg}`);
        console.log(msg);

    });
});

//SEEDING DATA
setInterval(() => {
    const curr = [`USD`, `HKD`, `EUR`]
    curr.forEach(element => {
        rp(`https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${element}&to_symbol=IDR&interval=5min&apikey=NYQXR70QLDSCRYEI`)
            .then((result) => {
                setTimeout(() => {
                    let data = JSON.parse(result)
                    let date = new Date(Object.keys(data[`Time Series FX (5min)`])[0])
                    let valueSell = Number(data[`Time Series FX (5min)`][Object.keys(data[`Time Series FX (5min)`])[0]]["4. close"])
                    let valueBuy = valueSell + valueSell * 2 / 100
                    console.log(date.setHours(20))
                    console.log(`HARGA ${element}: ${valueSell}`);
                    console.log(`HARGA ${element}: ${valueBuy}`);
                    Model.Currency.create({
                        name: element,
                        sellPrice: valueSell,
                        buyPrice: valueBuy,
                        createdAt: new Date(),
                        updatedAt: date
                    }).then((result) => {

                    }).catch((err) => {

                    });

                }, 2000);
            }).catch((err) => {
                console.log(err);
            });
    });
}, 100000000);




