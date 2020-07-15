const mongoose = require("mongoose");

const dbURI = "mongodb://localhost:27017/news-app";

const db = mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("Err connecting to db");
  });

  mongoose.promise = global.promise;

module.exports = db;
