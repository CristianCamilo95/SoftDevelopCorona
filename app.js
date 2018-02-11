/*Variables usadas para el funcionamiento del sistema y control de variables
y rutasde archivos*/
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require("path");
var dateFormat = require('dateformat');
var engines = require('consolidate');
var app = express();

//Módulos usados para mostrar las paginas HTML
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

//Parametros para Conexión a BD
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqldb",
  database: "corona"
});

//Función para conectar con la base de datos
con.connect(function(err) {
  console.log("Connected!");
});

//Función para mostrar el index de la Aplicación
app.get("/", function(req, res) {
  res.render("views/index");
});

//Función para mostrar la interfaz de seguimiento de cotizaciones
app.get("/SeguimientoCotizacion", function(req, res) {
  res.render("views/SeguimientoCotizacion");
});

//Funcion para el envio del formulario de inicio de sesión
app.post("/iniciarSesion", function(req, res) {
  res.render("views/vistaAsesor");
});

//Función para el ingreso de productos
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

//Función para el ingreso de la cotizacion en la BD
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

//Función para la busqueda de productos con filtro de tipo de produco
app.post("/buscar", function(req, resp) {
  var producto = req.body['producto'];
  var sql = "select * from producto where UPPER(descripcion)=UPPER('" + producto + "')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("seleccionado correctamente!!!!");
    console.log(result);
    resp.writeHead(200, {
      "Content-Type": "text/html"
    });
    var pagina = '<html ><head><link href="/includes/boostrap3/css/bootstrap.css" type="text/css" rel="stylesheet"><style type="text/css"> .thead { color: #000000; background-color: #000000; } </style></head><body background="/imgs/fondoCorona.jpg"><div class="col-xs-12"><center><img src="/imgs/corona.png"><img></center></div> <div class="col-xs-6 col-xs-offset-3"><table  class="table table-striped table-inverse">';
    pagina += ' <tr>  <th class="thead">Nombre</th>     <th>Precio xU</th></tr>';
    if (result.length == 0) {
      console.log("No hay productos asociados")
    }
    for (var i = 0; i < result.length; i++) {
      pagina += '<tr>    <td>' + result[i].nombre + '</td>      <td>' + result[i].precio + '</td></tr>';
    }
    pagina += '</table></div><div class="col-xs-2  col-xs-offset-6"> <a id="btn-fblogin" href="javascript:window.history.back();" class="btn btn-primary">Regresar</a></div></body></html >';
    resp.write(pagina);
    resp.end();
  });
});

//Función para evaluar el presupuesto ingresado por el usuario y mostrar los productos alcanzables.
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

//Variables para el protocolo de comunicacion con el webService de productos del cual alimentaremos la base de datos
var http = require('http');
var data = JSON.stringify({
  'id': '1'
});

//JSON con los parmetros de configuración del web service
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

//Función que obtiene los datos del webservice y alimenta la base de datos.
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

//Funcion para calcular llos galones de pintura necesarios de acuerdo a un presupuesto previo
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

//Funcion para definir los mtreos necesarios para un piso de x metros cuadrados
function pisonecesario(metros) {
  var m2 = parseInt(metros, 10);
  var resultado = m2 * 6;
  return resultado;
}

//PUerto por el que escucha peticiones el servidor.
server = app.listen(8080);
