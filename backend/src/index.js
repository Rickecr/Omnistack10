const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
// Extraindo o servidor HTTP do express.
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://rickelton:recrboy14@cluster0-zgxyb.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
// Falando para o express entender que a requisições seram em JSON.
app.use(express.json());
app.use(routes);


server.listen(3333);