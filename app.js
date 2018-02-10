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


app.post("/iniciarSesion", function(req, res) {

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

  res.render("views/index");
});

app.post("/informacion", function(req, res) {
  var puntoVenta = req.body['puntoVenta'];
  var asesor = req.body['asesor'];
  var cliente = req.body['cliente'];
  var identificacion = req.body['identificacion'];
  var nOrden = req.body['nOrden'];
  var fecha = dateFormat(req.body['fecha'], "yyyy-mm-dd h:MM:ss");
  var vigencia = dateFormat(req.body['vigencia'], "yyyy-mm-dd h:MM:ss");
  var sql = "INSERT INTO cotizacion (puntoVenta, asesor, cliente, identificacion, noOrden, fechaCotizacion, vigencia) VALUES ('" + puntoVenta + "', '" + asesor + "', '" + cliente + "', '" + identificacion + "','" + nOrden + "', '" + fecha + "', '" + vigencia + "')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("informacion general inserted");
  });
  res.render("views/SeguimientoCotizacion");
});


app.post("/calcular", function(req, resp) {
  var pres = req.body['presupuesto'];
  var cate = req.body['categoria'];
  var m2 = req.body['m2'];
  var cantidad = 0;
  if (cate === "Pinturas") {
    cantidad = galonesnecesarios(m2);
  }
  if (cate === "Pisos") {
    cantidad = pisonecesario(m2);
  }

  console.log(pres);
  var sql = "select * from producto where precio<=" + pres + " and descripcion='" + cate + "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("seleccionado correctamente!!!!");
    console.log(result);
    resp.writeHead(200, {
      "Content-Type": "text/html"
    });
    var pagina = '<html ><head><link href="/includes/boostrap3/css/bootstrap.css" type="text/css" rel="stylesheet"></head><body background="/imgs/fondoCorona.jpg"><div class="col-xs-12"><center><img src="/imgs/corona.png"><img></center></div><table  class="col-xs-6 col-xs-offset-3" border="2px">';
    pagina += '<tr>  <td>Codigo</td>  <td>Nombre</td>  <td>Descripcion</td>  <td>Cantidad Necesaria</td>  <td>Precio xU</td></tr>';
    for (var i = 0; i < result.length; i++) {
      pagina += '<tr>  <td>' + result[i].codigo + '</td>  <td>' + result[i].nombre + '</td>  <td>' + result[i].descripcion + '</td>  <td>' + cantidad + '</td>  <td>' + result[i].precio + '</td></tr>';
    }
    pagina += '</table><div class="col-xs-2  col-xs-offset-6"><button type="submit" class="btn btn-primary" onClick="javascript:history.back(1)">REGRESAR</a"></button></div></body></html >';

    resp.write(pagina);
    resp.end();

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
