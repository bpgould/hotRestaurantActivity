// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Reservations (DATA)
// =============================================================
var reservations = [
  {
    routeName: "ronswanson",
    name: "Ron Swanson",
    id: "1776",
    phoneNumber: 8887311234,
    email: "ron@parksandrec.com",
  },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "html/homePage.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "html/reservations.html"));
});

app.get("/viewTables", function (req, res) {
  res.sendFile(path.join(__dirname, "html/viewTables.html"));
});

// Create New Reservations - takes in JSON input
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newReservation
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name
    .replace(/\s+/g, "")
    .toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
