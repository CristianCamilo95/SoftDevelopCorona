var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require("path");
var engines = require('consolidate');
var app = express();


app.set('views', __dirname);
app.engine('html', engines.mustache);
app.set('view engine', 'html');

mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost/dbcorona", { useMongoClient: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);


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
  Product.find(function(err, documento){
    if (err){console.log(err);}
    res.render("views/menu/prod",{products: documento})
  });
});


app.post("/menu", function(req,res){
  //console.log(req.bodyParser);
  var tmp = req.body['title'];

    console.log(tmp)
  var data = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: "data.png",
    pricing: req.body.pricing
  }

  var product = new Product(data);

  product.save(function(err){
    console.log(product);
    res.render("views/menu/prod");
  })
});

app.get("/menu/prod", function(req,res){
  res.render("menu/prod");
});

server = app.listen(8080);
