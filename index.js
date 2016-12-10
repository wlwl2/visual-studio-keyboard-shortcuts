var express = require('express');
var app = express();
const fs = require('fs');
var parseString = require('xml2js').parseString;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

var xmlToJs = function (data) {
  parseString(data, function (err, result) {
    console.log(result);
  });
}

fs.readFile('keyboard.vssettings', 'utf8', (err, data) => {
  if (err) throw err;
  xmlToJs(data);
});
