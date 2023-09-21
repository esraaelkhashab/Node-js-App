const express = require('express');
const app = express();
const port = 8000;

//const mongooes = require('mongoose');
const mongoose = require('mongoose');


const db_user = 'root';
const db_password='example';
const db_port = 27017;

app.get('/', (req,res) =>res.send(`<h1> Hello World this node app listen on port: ${port}</h1>`));

app.listen(port, () => console.log(`app is running on port: ${port}`));

const URI = `mongodb://${db_user}:${db_password}@mongo:${db_port}`;
//mongoose.connect('mongodb://username:password@host:port/database?options...');

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connect to MongoDB')).catch(error => console.log('failed to connect to mongodb: ',error));


