var express = require('express');
var mysql = require('mysql');

var bodyParser = require('body-parser');
var path = require("path");
var dateFormat = require('dateformat');
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



});

var http = require('http');
var data = JSON.stringify({
  'id': '1'
});

var options = {
  host: 'corona.com',
  port: '80',
  path: '/WebServiceCoronaProducts.php/Products',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

function seviceWeb(options) {
  var req = http.request(options, function(res) {
    var msg = '';

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      msg += chunk;
    });
    res.on('end', function() {
      console.log(JSON.parse(msg));
      for (var i = 0; i < result.length; i++) {
        var sql = "INSERT INTO producto (nombre, descripcion, cantidad) VALUES ('" + msg.title[i] + "', '" + msg.des[i] + "', '" + msg.cant[i] + "')";
        con.query(sql, function(err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });

        res.render("views/index");
      }

    });
  });

  req.write(data);
  req.end();
}


function galonesnecesarios(metros) {
  var m2 = parseInt(metros, 10);
  var resultado = 0;
  if (m2 % 35 > 0) {
    resultado = Math.trunc((m2 / 35) + 1);

  } else {
    resultado = Math.trunc(m2 / 35);
  }

  return resultado;

}

function pisonecesario(metros) {
  var m2 = parseInt(metros, 10);
  var resultado = m2 * 6;

  return resultado;

}

server = app.listen(8080);
