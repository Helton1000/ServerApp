const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: { origin: "*" },
    allowEIO3: true,
    transports: ['websocket', 'polling']
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('✅ Dispositivo conectado: ' + socket.id);

    socket.on('frame', (data) => {  
        socket.broadcast.emit('frame', data);
    });

    socket.on('audio', (data) => {
        socket.broadcast.emit('audio', data);
    });

    socket.on('disconnect', (reason) => {
        console.log('❌ Desconectado: ' + reason);
    });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📱 No Android, use o IP da sua rede na porta ${PORT}`);
});