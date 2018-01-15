const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const db = require('../db/models/sync');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/api/', routes);

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`server now is listening on ${port}`)
})
const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`server now is listening on ${port}`)
})