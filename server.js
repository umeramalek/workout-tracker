const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');

// connect to the port 
const PORT = process.env.PORT || 3000;

const app = express();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// connect to mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
