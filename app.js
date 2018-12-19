
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.set('view engine', 'ejs');

server.listen(3000)

app.get('/chatbox', function (req, res) {
    res.render(`chatbox.ejs`)
});

// io.to(123).emit(`event`, `aiwdjaw`)

// io.on('chat message', function (data) {
//     console.log(data);
//     data.to(123).emit('chat message', data.msg);
// });


// socket.emit('subscribe', conversation_id);

// socket.emit('send message', {
//     room: conversation_id,
//     message: "Some message"
// });

// socket.on('conversation private post', function(data) {
//     //display data.message
// });

io.on('connection', function (socket) {
    console.log(`user connected`);
    
    socket.on('chat message', function (msg) {
        io.emit('chat message', `Taqi: ${msg}`);
        console.log(msg);
        
    });
});


