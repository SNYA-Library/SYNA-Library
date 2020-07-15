const express = require("express");
const users = require("./resources/news/newsRouter");
const db = require("./db");
const cors = require('cors');
const auth = require('./withAuth.js')
const app = express();
app.use(express.json())
app.use(cors())
app.use(withAuth)
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("home route");
});

module.exports = app;
