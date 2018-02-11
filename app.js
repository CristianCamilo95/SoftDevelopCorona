var express = require('express');
var mysql = require('mysql');

var bodyParser = require('body-parser');
var path = require("path");
var engines = require('consolidate');
var app = express();

app.set('views', __dirname);
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqldb",
  database: "corona"
});


app.get("/SeguimientoCotizacion", function(req, res) {
  res.render("views/SeguimientoCotizacion");

});



app.get("/detalles", function(req, res) {
  res.render("views/detalles");
});

app.get("/menu", function(req, res) {

  res.render("views/menu/prod")

});

app.get("/seleccionProductos", function(req, res) {

  res.render("views/menu/selectionP")


});

app.post("/informacion", function(req, res) {


});

app.get("/menu/prod", function(req, res) {
  res.render("menu/prod");
});

server = app.listen(8080);
