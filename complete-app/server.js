'use strict';

// Importing express module for our node middleware
var express = require('express');

var fs = require('fs');
var path = require('path');
var lodash = require('lodash');

var bodyParser = require('body-parser');

// ------------------------------------------------------------------
// Configurable variables section...
// ------------------------------------------------------------------
// Web server port
// If 8080 doesn't work try 9080
var BASE_PORT = 8080;

// Compute the working directory for serving static files
// makes assumptions about layout of node and directory structure
// working directories/projects etd.
var ROOT_DIR = __dirname + '/src';
ROOT_DIR = fs.realpathSync(ROOT_DIR);
if (!fs.existsSync(ROOT_DIR)) {
    console.log('Error: cannot find working directory: ' + ROOT_DIR);
    exit();
}

/**
 * Create the "express" server for routing and static files.
 **/
var app = express();

/**
 * Adds a simple logging, "mounted" on the root path.
 * Using Express middleware
 **/
app.use(function(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

app.use(bodyParser.json());

var currentUser = { id: 1, name: "Jimmy"  };
var monsterFilePath = 'data/monsters.json';
var monsters;

fs.readFile(monsterFilePath, function(err, data) {
    if(err) {
        console.log(err);
        return
    }
    monsters = JSON.parse(data);

});

app.get('/api/monster', function (req, res) {
    res.setHeader('Content-Type','application/json');
    // monsters = monsters.sort(function(m1, m2) { return m2.id - m1.id; });
    monsters = monsters.sort(function(m1, m2) { return new Date(m2.modified) - new Date(m1.modified); });
    res.send(monsters);
});


app.get('/api/monster/:id', function (req, res) {

    var monsterId = Number(req.params.id);

    var _monsters = lodash.filter(monsters, function(m) { return m.id === monsterId; });
    var monster = _monsters.length > 0 ? _monsters[0] : null;

    res.setHeader('Content-Type','application/json');
    res.send(monster);
});

app.post('/api/monster', function(req, res) {

    var monster = req.body;
    monster.id = lodash.max(monsters.map(function(m) { return m.id; })) + 1;
    monster.modified = new Date().toJSON();
    monster.sellerId = currentUser.id;

    monsters.push(monster);

    // monsters = monsters.sort(function(m1, m2) { return m2.id - m1.id; });

    res.send(monster);

});

app.put('/api/monster/:id', function(req, res) {

    var monsterId = Number(req.params.id);

    var monster = req.body;
    lodash.remove(monsters, function(m) { return m.id === monsterId; });
    monsters.push(monster);

    // monsters = monsters.sort(function(m1, m2) { return m2.id - m1.id; });

    res.send('{ "message": "OK" }');

});

app.delete('/api/monster/:id', function(req, res) {

    var monsterId = Number(req.params.id);

    var monster = req.body;
    lodash.remove(monsters, function(m) { return m.id === monsterId; });

    res.send('{ "message": "OK" }');

});


app.use(express.static(ROOT_DIR));

app.listen(BASE_PORT, function() {
    console.log('Node server started @ http://localhost:' + BASE_PORT);
    console.log('Serving static files from ' + ROOT_DIR);
    console.log('Press Ctrl + c for server termination');
});