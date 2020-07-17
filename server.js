const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const cors = require('cors');

const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// DB Config
const db = require("./config/key").mongoURI;

// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('BackEnd Server for News application project');
})
  
  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));