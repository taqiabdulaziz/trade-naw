const rp = require(`request-promise`)
var express = require('express');
var app = express()
var server = require('http').Server(app);
const Router = require('./routes')
var io = require('socket.io')(server);

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))

app.use("/", Router)

server.listen(3000)

app.get('/login', (req, res) => {
    res.render(`login.ejs`)
});

app.get('/', (req, res) => {
    res.render(`index.ejs`)
});

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

rp(`https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=USD&to_symbol=IDR&interval=5min&apikey=NYQXR70QLDSCRYEI`)
    .then((result) => {
        let data = JSON.parse(result)
        
        console.log(Object.keys(data[`Time Series FX (5min)`])[0].toString());
        
        
        
    }).catch((err) => {
        console.log(err);
        
    });
