var generator = require('./generator');
var express   = require('express');

var app = express();

app.get("/", function(req, res) {
  var number = req.params.number;
  var helloWorldArray = generator.generateHelloWorlds(number);

  res.send(200, helloWorldArray);
});

app.listen(3000);