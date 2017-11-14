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

con.connect(function(err) {
  //if (err) throw err;
  console.log("Connected!");
});

app.get("/", function(req, res) {
  res.render("views/index");
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

app.post("/iniciarSesion", function(req, res) {
  /**  var title = req.body['title'];
    var des = req.body['description'];
    var cant = req.body['pricing'];
    console.log(title)
    console.log(des)
    console.log(cant)
    var sql = "INSERT INTO producto (nombre, descripcion, cantidad) VALUES ('"+title+"', '"+des+"', '"+cant+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });**/
  res.render("views/vistaAsesor");
});


app.post("/menu", function(req, res) {
  var title = req.body['title'];
  var des = req.body['description'];
  var cant = req.body['pricing'];
  console.log(title)
  console.log(des)
  console.log(cant)
  var sql = "INSERT INTO producto (nombre, descripcion, cantidad) VALUES ('" + title + "', '" + des + "', '" + cant + "')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  res.render("views/menu/prod");
});

app.post("/informacion", function(req, res) {

  /**var sql = "CREATE TABLE cotizacion (puntoVenta VARCHAR(50), asesor VARCHAR(50), cliente VARCHAR(50), identificacion VARCHAR(50), noOrden VARCHAR(20), fechaCotizacion DATE, vigencia DATE)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created cit");
  });**/

  console.log("Hola");


  //res.render("views/menu/prod");
});

app.get("/menu/prod", function(req, res) {
  res.render("menu/prod");
});

server = app.listen(8080);
