// Comment
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = 3000;

// Needed in order to take post and put data easily
// Tell Express to use bodyParser - the post or put body
// send data over the wire to the server
// in order to work with it easily, it parses and structures it
// 98% of the time, the below never changes
// bodyParser is considered middleware
app.use(bodyParser.json());
// handles url encoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// take json data sent through post or put
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

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

// post /add
app.post('/add', function (req, res) {
    // request is inbound information
    console.log(req.body);
    // if req.body exists,
    if (req.body) {
        // add it to the end of the student roster array
        // req.body is where the data is
        roster.push(req.body);
        res.send('Student added joe!');
    } else {
        res.send('You wrong! Enter data next time! Layer 8 issue!');
    }
});

// server listening
app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});