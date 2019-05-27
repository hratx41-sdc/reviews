const express = require('express')
const app = express()
const port = 3001
const mongo = require('mongodb')
const mongoose = require('mongoose')
const db = require('./db_index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'));


app.get((req, res) => res.send('app.get is working!'))

app.listen(port, () => console.log(`Listening on port ${port}!`))