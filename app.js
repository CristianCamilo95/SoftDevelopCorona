var express = require('express');
var mysql = require('mysql');
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require("path");
var engines = require('consolidate');
var app = express();


app.set('views', __dirname);
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//mongoose.Promise = require('bluebird');
//mongoose.connect("mongodb://localhost/dbcorona", { useMongoClient: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

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



//Definir el schema de nuestros productos
/**var productSchema ={
  preliminares:String,
  demoliciones:String,
  pañetes:String,
  enchape:String,
  pintura:String,
  instalacion:String,
  aseo:String
};**/

//var Product = mongoose.model("Product", productSchema);

//app.set("view engine","jade");

app.use(express.static("public"));

app.get("/", function(req,res){
  /*var data={
    preliminares:"preliminares",
    demoliciones:"Epa",
    pañetes:"Colombia",
    enchape:"Rico",
    pintura:"Ricos",
    instalacion:"Ricooos",
    aseo:"aseeme este"
  }

  var product = new Product(data);

  product.save(function(err){
    console.log(product);
  })*/
  res.render("views/index");
});

app.get("/SeguimientoCotizacion", function(req,res){
  res.render("views/SeguimientoCotizacion");

  });

  app.get("/detalles", function(req,res){
    res.render("views/detalles");
    });

app.get("/menu", function(req,res){
  //Product.find(function(err, documento){
    //if (err){console.log(err);}
    res.render("views/menu/prod")
  //});
});


app.post("/menu", function(req,res){
  //console.log(req.bodyParser);
  var title = req.body['title'];
  var des = req.body['description'];
  var cant = req.body['pricing'];
  console.log(title)
  console.log(des)
  console.log(cant)
  var sql = "INSERT INTO producto (nombre, descripcion, cantidad) VALUES ('"+title+"', '"+des+"', '"+cant+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
res.render("views/menu/prod");

  /**var data = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: "data.png",
    pricing: req.body.pricing
  }

  var product = new Product(data);

  product.save(function(err){
    console.log(product);
    res.render("views/menu/prod");
  })**/
});

app.get("/menu/prod", function(req,res){
  res.render("menu/prod");
});

server = app.listen(8080);
