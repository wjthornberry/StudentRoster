// Comment
var express = require('express');
var app = express();

var PORT = 3000;

var roster = [
    {
        name: 'Mark'
    },
    {
        name: 'Allen'
    },
    {
        name: 'Techson the Great'
    }
]

// define a get route that returns a welcome message
app.get('/', function (req, res) {
    res.send('Welcome.');
});
app.get('/students', function (req, res) {
    res.json(roster);
});
// return a student by ID (index in the array)
// URL or route with a paramter that we pass in
// like calling a function and passing in a variable
// Can do the same thing with the route
// General route path, but here's a special param
app.get('/students/:studentId', function (req, res) {
    res.json(roster[
        // params object is from Express       
        req.params.studentId]);
});

// server listening
app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});