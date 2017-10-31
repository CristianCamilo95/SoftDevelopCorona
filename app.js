/**var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect("mongodb://localhost/ejemplo_corona", { useMongoClient: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Definir el schema de nuestros productos
var productSchema ={
  preliminares:String,
  demoliciones:String,
  pañetes:String,
  enchape:String,
  pintura:String,
  instalacion:String,
  aseo:String
};

var Product = mongoose.model("Product", productSchema);

app.set("view engine","jade");

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
///  })
  res.render("index");
});

app.get("/menu", function(req,res){
  Product.find(function(err, documento){
    if (err){console.log(err);}
    res.render("menu/SeguimientoCotizacion.html",{products: documento})
  });
});

app.post("/menu", function(req,res){
  //console.log(req.bodyParser);

  var data = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: "data.png",
    pricing: req.body.pricing
  }

  var product = new Product(data);

  product.save(function(err){
    console.log(product);
    res.render("index");
  })
});

app.get("/menu/new_menu", function(req,res){
  res.render("menu/new_menu");
});

server = app.listen(8080);
**/

var http = require('http'),
    fs = require('fs');

fs.readFile('./views/menu/SeguimientoCotizacion.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});
