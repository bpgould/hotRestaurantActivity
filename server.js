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

<<<<<<< HEAD
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "html/reservations.html"));
});

app.get("/viewTables", function (req, res) {
  res.sendFile(path.join(__dirname, "html/viewTables.html"));
});

// Create New Reservations - takes in JSON input
app.post("/api/reservations", function (req, res) {
=======
app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "html/reservations.html"));
});

// Displays all characters
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/reservations/:reservation", function (req, res) {
  var chosen = req.params.reservation;

});
// Create New Characters - takes in JSON input
app.post("/api/reservation", function (req, res) {
>>>>>>> 2f4a094ff042f1aa9db8062f9016d0768d38f41a
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newReservation
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
<<<<<<< HEAD
  newReservation.routeName = newReservation.name
    .replace(/\s+/g, "")
    .toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);
=======
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  characters.push(newReservation);
>>>>>>> 2f4a094ff042f1aa9db8062f9016d0768d38f41a

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
