const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: "*" },
    allowEIO3: true,
    transports: ['websocket', 'polling']
});

io.on('connection', (socket) => {
    console.log('✅ Dispositivo conectado: ' + socket.id);

    // O "Offer" é a proposta inicial de conexão
    socket.on('offer', (data) => {
        console.log('📡 Encaminhando offer de ' + socket.id);
        socket.broadcast.emit('offer', data);
    });

    // O "Answer" é a resposta do Guide à proposta do Operator
    socket.on('answer', (data) => {
        console.log('📡 Encaminhando answer de ' + socket.id);
        socket.broadcast.emit('answer', data);
    });

    // O "Candidate" são os caminhos de rede (IPs) para a conexão P2P
    socket.on('candidate', (data) => {
        socket.broadcast.emit('candidate', data);
    });

    socket.on('disconnect', (reason) => {
        console.log('❌ Desconectado: ' + socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor de sinalização rodando em http://0.0.0.0:${PORT}`);
});