const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());


const db = require('./../database/index');
const NewsModel = db.NewsModel;

app.get('/', (req, res) => res.send('Hello World!'));


var port = 4000;

app.listen(port, () => {
    console.log("app listening on port: " + port);
});