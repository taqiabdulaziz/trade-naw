const rp = require(`request-promise`)
const session = require("express-session")
var express = require('express');
var app = express()
var server = require('http').Server(app);
const Model = require(`./models`)
const Router = require('./routes')
var io = require('socket.io')(server);
const checkLogin = require(`./helpers/checkLogin`)
let name = null

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use("/", Router)
let port = process.env.PORT

app.get('/chatbox', checkLogin, function (req, res) {
    res.render(`chatbox.ejs`, {
        name: req.session.user.name,
        user: req.session.user
    })
    if (req.session.user.role == `admin`) {
        name = `Admin`
    } else {
        name = req.session.user.name
    }

});

//BACA SOCKET.IO
io.on('connection', function (socket) {
    console.log(`user connected`);
    socket.on('chat message', function (msg) {
        io.emit('chat message', `${msg}`);
        console.log(msg);
    });
});


server.listen(port)





