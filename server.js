require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const headers = require('./middleware/checkheaders');
const log = require('./middleware/logger');
const routeShoppingList = require('./routes/shoppingList');


//SERVER SETUP
    //Configuration
    const server = express();
    const port = process.env.PORT || 3000;


    //Middleware PRE
    server.use(headers);
    server.use(log);
    server.use(express.json());

    //Static hosting
    server.use('/', express.static('client/dist'));

    //Routing
    server.use('/api/shoppinglist', routeShoppingList);

    //Middleware POST
    server.use(require('./middleware/notfound'));


//DB SETUP
    //Models
    require('./persistence/models/shoppinglistItem');

    //Connection
    const connectionString = process.env.DB
        .replace('<user>', process.env.USERNAME)
        .replace('<pass>', process.env.PASS);

    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', () => console.log('connection error'));
    db.once('open', () => console.log('db connected'));


server.listen(port, () => console.log('server is now up and listening'));