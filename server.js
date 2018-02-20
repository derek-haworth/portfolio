var express = require('express');
var handleExpress = require('express-handlebars');
var path = require('path');
var http = require('http');

var app = express();
var PORT = process.env.PORT || 3000;

// access to the public folder
app.use(express.static(path.join(__dirname, '/app/public')))

// handlebars
app.engine('handlebars', handleExpress({
  defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')


// listener
app.listen(PORT, function () {
  console.log('App is listening on port: ' + PORT)
})
