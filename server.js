const express = require("express");
const app = express();
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/", function(req, res) {
  res.send("Welcome to fasil-work");
});
app.listen(PORT, function() {
  console.log("App is listening to port 3001");
});
