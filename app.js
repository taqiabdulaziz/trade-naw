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

app.use(session({
    secret: 'keyboard cat',
    resave: false,
}))

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

//SEEDING DATA, NYESEL BUKA INI
// setInterval(() => {
//     console.clear()
//     const curr = [`KWD`, `BHD`, `OMR`, `GBP`, `CHF`, `AZN`]
//     const APIKEY = [
//         `4HSDVQ3MX055QKU2`,
//         `21SQ7KI8XII3ACSB`,
//         `CEYMZTRGRDBVYYPQ`,
//     ]
//     for (let i = 0; i < curr.length; i++) {
//         setTimeout(() => {

//             APIKEY.forEach(element => {
//                 setInterval(() => {
//                     rp(`https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${curr[i]}&to_symbol=IDR&interval=5min&apikey=${element}`)
//                         .then((result) => {
//                             let data = JSON.parse(result)
//                             let date = new Date(Object.keys(data[`Time Series FX (5min)`])[0])
//                             let valueSell = Number(data[`Time Series FX (5min)`][Object.keys(data[`Time Series FX (5min)`])[0]]["4. close"])
//                             let valueBuy = valueSell + valueSell * 2 / 100
//                             console.log(date.setHours(20))
//                             console.log(`HARGA ${curr[i]}: ${valueSell}`);
//                             console.log(`HARGA ${curr[i]}: ${valueBuy}`);
//                             Model.CurrencyHistory.create({
//                                 name: curr[i],
//                                 sellPrice: valueSell,
//                                 buyPrice: valueBuy,
//                                 createdAt: new Date(),
//                                 updatedAt: date
//                             }).then((result) => {

//                             }).catch((err) => {
//                                 console.log(err);

//                             });
//                             Model.Currency.findOne({
//                                 where: {
//                                     name: curr[i]
//                                 }
//                             }).then((result) => {
//                                 if (!result) {
//                                     Model.Currency.create({
//                                         name: curr[i],
//                                         buyPrice: valueBuy,
//                                         sellPrice: valueSell
//                                     }).then((result) => {
//                                         console.log(result);

//                                     }).catch((err) => {
//                                         console.log(err);

//                                     });
//                                 } else {
//                                     Model.Currency.update({
//                                         buyPrice: valueBuy,
//                                         sellPrice: valueSell
//                                     }, {
//                                             where: {
//                                                 name: curr[i],
//                                             }
//                                         }).then((result) => {
//                                             console.log(result);

//                                         }).catch((err) => {
//                                             console.log(err);

//                                         });
//                                 }
//                                 console.log(`ini resultttt`, result);

//                             }).catch((err) => {
//                                 console.log(err);

//                             });
//                         }).catch((err) => {
//                             console.log(err);
//                         });
//                 });
//             }, 20000);
//         }, 30000);
//     }
// }, 30000);




