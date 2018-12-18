
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.set('view engine', 'ejs');

server.listen(3000)

app.get('/', function (req, res) {
    res.render(`chatbox.ejs`)

});

io.emit('some event', { for: 'everyone' });
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

