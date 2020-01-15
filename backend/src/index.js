const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://rickelton:recrboy14@cluster0-zgxyb.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
// Falando para o express entender que a requisições seram em JSON.
app.use(express.json());
app.use(routes);


app.listen(3333);