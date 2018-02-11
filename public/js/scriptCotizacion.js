//variables para el control de los capitulos de obra
var nmet = 0.0;
var preliminares = 0.00;
var demoliciones = 0.00;
var panetes = 0.00;
var enchape = 0.00;
var pintura = 0.00;
var aparatos = 0.00;
var aseo = 0.00;
var adicionales = 0.00;

/*
funcion para ingresar la informacion general de la Cotización
como son punto de venta, asesor, cliente, dias de obra, medidas del terreno.
Tambien se define parte de la informacion de los capitulos de obra como son
pinturas, aseo, adicionales, enchapes y por ultimo se define el valor total de
la cotizacion.
*/
$(function() {
  $("#btnCotizacion").button().on("click", function(event) {
    var fecha = new Date(document.getElementById("fecha").value);
    var f = (fecha.getMonth() + 1) + "/" + fecha.getDate() + "/" + fecha.getFullYear();
    document.getElementById('form1').submit();
  })

  $("#btnMedidas").button().on("click", function(event) {
    var ancho = parseFloat(document.getElementById('ancho').value);
    var largo = parseFloat(document.getElementById('largo').value);
    document.getElementById('nMetros').value = ancho * largo;
    nmet = document.getElementById('nMetros').value;
    alert("Medidas Ingresadas. Prosiga a definir los detalles del capitulo de obra!");
  })

  $("#btnCalcular").button().on("click", function(event) {
    var cantidadpc1 = parseFloat(document.getElementById('prec1').value);
    var prevu1 = parseFloat(document.getElementById('prevu1').value);
    document.getElementById('prevt1').value = cantidadpc1 * prevu1;
    var prevt = parseFloat(document.getElementById('prevt1').value);
    var divisor = parseFloat(document.getElementById('nMetros').value);
    document.getElementById('preliminares').setAttribute("checked", "true");
    document.getElementById('prepf1').value = parseFloat(prevt / divisor).toFixed(2);

    var cantidadpc2 = parseFloat(document.getElementById('prec2').value);
    var prevu2 = parseFloat(document.getElementById('prevu2').value);
    document.getElementById('prevt2').value = cantidadpc2 * prevu2;
    var prevt2 = parseFloat(document.getElementById('prevt2').value);
    document.getElementById('prepf2').value = parseFloat(prevt2 / divisor).toFixed(2);

    var cantidadpc3 = parseFloat(document.getElementById('prec3').value);
    var prevu3 = parseFloat(document.getElementById('prevu3').value);
    document.getElementById('prevt3').value = cantidadpc3 * prevu3;
    var prevt3 = parseFloat(document.getElementById('prevt3').value);
    document.getElementById('prepf3').value = parseFloat(prevt3 / divisor).toFixed(2);

    var cantidadpc4 = parseFloat(document.getElementById('prec4').value);
    var prevu4 = parseFloat(document.getElementById('prevu4').value);
    document.getElementById('prevt4').value = cantidadpc4 * prevu4;
    var prevt4 = parseFloat(document.getElementById('prevt4').value);
    document.getElementById('prepf4').value = parseFloat(prevt4 / divisor).toFixed(2);

    var cantidadpc5 = parseFloat(document.getElementById('prec5').value);
    var prevu5 = parseFloat(document.getElementById('prevu5').value);
    document.getElementById('prevt5').value = cantidadpc5 * prevu5;
    var prevt5 = parseFloat(document.getElementById('prevt5').value);
    document.getElementById('prepf5').value = parseFloat(prevt5 / divisor).toFixed(2);

    var cantidadpc6 = parseFloat(document.getElementById('prec6').value);
    var prevu6 = parseFloat(document.getElementById('prevu6').value);
    document.getElementById('prevt6').value = cantidadpc6 * prevu6;
    var prevt6 = parseFloat(document.getElementById('prevt6').value);
    document.getElementById('prepf6').value = parseFloat(prevt6 / divisor).toFixed(2);

    var cantidadpc7 = parseFloat(document.getElementById('prec7').value);
    var prevu7 = parseFloat(document.getElementById('prevu7').value);
    document.getElementById('prevt7').value = cantidadpc7 * prevu7;
    var prevt7 = parseFloat(document.getElementById('prevt7').value);
    document.getElementById('prepf7').value = parseFloat(prevt7 / divisor).toFixed(2);

    var cantidadpc8 = parseFloat(document.getElementById('prec8').value);
    var prevu8 = parseFloat(document.getElementById('prevu8').value);
    document.getElementById('prevt8').value = cantidadpc8 * prevu8;
    var prevt8 = parseFloat(document.getElementById('prevt8').value);
    document.getElementById('prepf8').value = parseFloat(prevt8 / divisor).toFixed(2);

    var cantidadpc9 = parseFloat(document.getElementById('prec9').value);
    var prevu9 = parseFloat(document.getElementById('prevu9').value);
    document.getElementById('prevt9').value = cantidadpc9 * prevu9;
    var prevt9 = parseFloat(document.getElementById('prevt9').value);
    document.getElementById('prepf9').value = parseFloat(prevt9 / divisor).toFixed(2);
    document.getElementById('valt').value = parseFloat(prevt + prevt2 + prevt3 + prevt4 + prevt5 + prevt6 + prevt7 + prevt8 + prevt9).toFixed(2);
    document.getElementById('precfm').value = parseFloat((prevt + prevt2 + prevt3 + prevt4 + prevt5 + prevt6 + prevt7 + prevt8 + prevt9) / divisor).toFixed(2);
    document.getElementById('vuxmpre').value = document.getElementById('precfm').value;
    document.getElementById('vtpre').value = document.getElementById('precfm').value * divisor;
    preliminares = document.getElementById('precfm').value * divisor;
  })


  $("#btnCalcularDemo").button().on("click", function(event) {
    var cantidadpcdemo1 = parseFloat(document.getElementById('precdemo1').value);
    var prevudemo1 = parseFloat(document.getElementById('prevudemo1').value);
    document.getElementById('prevtdemo1').value = cantidadpcdemo1 * prevudemo1;
    var prevtdemo = parseFloat(document.getElementById('prevtdemo1').value);
    var divisor = parseFloat(document.getElementById('nMetros').value);
    document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfdemo1').value = parseFloat(prevtdemo / divisor).toFixed(2);

    var cantidadpcdemo2 = parseFloat(document.getElementById('precdemo2').value);
    var prevudemo2 = parseFloat(document.getElementById('prevudemo2').value);
    document.getElementById('prevtdemo2').value = cantidadpcdemo2 * prevudemo2;
    var prevtdemo2 = parseFloat(document.getElementById('prevtdemo2').value);
    document.getElementById('prepfdemo2').value = parseFloat(prevtdemo2 / divisor).toFixed(2);

    var cantidadpcdemo3 = parseFloat(document.getElementById('precdemo3').value);
    var prevudemo3 = parseFloat(document.getElementById('prevudemo3').value);
    document.getElementById('prevtdemo3').value = cantidadpcdemo3 * prevudemo3;
    var prevtdemo3 = parseFloat(document.getElementById('prevtdemo3').value);
    document.getElementById('prepfdemo3').value = parseFloat(prevtdemo3 / divisor).toFixed(2);

    document.getElementById('valtdemo').value = parseFloat(prevtdemo + prevtdemo2 + prevtdemo3).toFixed(2);
    document.getElementById('precfmdemo').value = parseFloat((prevtdemo + prevtdemo2 + prevtdemo3) / divisor).toFixed(2);
    document.getElementById('vuxmdem').value = document.getElementById('precfmdemo').value;
    document.getElementById('vtdem').value = document.getElementById('precfmdemo').value * divisor;
    demoliciones = document.getElementById('precfmdemo').value * divisor;
  })

  $("#btnCalcularPan").button().on("click", function(event) {
    var cantidadpcpan1 = parseFloat(document.getElementById('precpan1').value);
    var prevupan1 = parseFloat(document.getElementById('prevupan1').value);
    document.getElementById('prevtpan1').value = cantidadpcpan1 * prevupan1;
    var prevtpan = parseFloat(document.getElementById('prevtpan1').value);
    var divisor = parseFloat(document.getElementById('nMetros').value);
    document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfpan1').value = parseFloat(prevtpan / divisor).toFixed(2);

    var cantidadpcpan2 = parseFloat(document.getElementById('precpan2').value);
    var prevupan2 = parseFloat(document.getElementById('prevupan2').value);
    document.getElementById('prevtpan2').value = cantidadpcpan2 * prevupan2;
    var prevtpan2 = parseFloat(document.getElementById('prevtpan2').value);
    document.getElementById('prepfpan2').value = parseFloat(prevtpan2 / divisor).toFixed(2);

    var cantidadpcpan3 = parseFloat(document.getElementById('precpan3').value);
    var prevupan3 = parseFloat(document.getElementById('prevupan3').value);
    document.getElementById('prevtpan3').value = cantidadpcpan3 * prevupan3;
    var prevtpan3 = parseFloat(document.getElementById('prevtpan3').value);
    document.getElementById('prepfpan3').value = parseFloat(prevtpan3 / divisor).toFixed(2);

    var cantidadpcpan4 = parseFloat(document.getElementById('precpan4').value);
    var prevupan4 = parseFloat(document.getElementById('prevupan4').value);
    document.getElementById('prevtpan4').value = cantidadpcpan4 * prevupan4;
    var prevtpan4 = parseFloat(document.getElementById('prevtpan4').value);
    document.getElementById('prepfpan4').value = parseFloat(prevtpan4 / divisor).toFixed(2);

    var cantidadpcpan5 = parseFloat(document.getElementById('precpan5').value);
    var prevupan5 = parseFloat(document.getElementById('prevupan5').value);
    document.getElementById('prevtpan5').value = cantidadpcpan5 * prevupan3;
    var prevtpan5 = parseFloat(document.getElementById('prevtpan5').value);
    document.getElementById('prepfpan5').value = parseFloat(prevtpan5 / divisor).toFixed(2);

    var cantidadpcpan6 = parseFloat(document.getElementById('precpan6').value);
    var prevupan6 = parseFloat(document.getElementById('prevupan6').value);
    document.getElementById('prevtpan6').value = cantidadpcpan6 * prevupan6;
    var prevtpan6 = parseFloat(document.getElementById('prevtpan6').value);
    document.getElementById('prepfpan6').value = parseFloat(prevtpan6 / divisor).toFixed(2);

    var cantidadpcpan7 = parseFloat(document.getElementById('precpan7').value);
    var prevupan7 = parseFloat(document.getElementById('prevupan7').value);
    document.getElementById('prevtpan7').value = cantidadpcpan7 * prevupan7;
    var prevtpan7 = parseFloat(document.getElementById('prevtpan7').value);
    document.getElementById('prepfpan7').value = parseFloat(prevtpan7 / divisor).toFixed(2);

    document.getElementById('valtpan').value = parseFloat(prevtpan + prevtpan2 + prevtpan3 + prevtpan4 + prevtpan5 + prevtpan6 + prevtpan7).toFixed(2);
    document.getElementById('precfmpan').value = parseFloat((prevtpan + prevtpan2 + prevtpan3 + prevtpan4 + prevtpan5 + prevtpan6 + prevtpan7) / divisor).toFixed(2);
    document.getElementById('vuxmpan').value = document.getElementById('precfmpan').value;
    document.getElementById('vtpan').value = document.getElementById('precfmpan').value * divisor;
    panetes = document.getElementById('precfmpan').value * divisor;;
  })

  $("#btnTot").button().on("click", function(event) {
      document.getElementById('subt').value = demoliciones + preliminares + enchape + aparatos +aseo + panetes + pintura;
      document.getElementById('tota').value = demoliciones + preliminares + enchape + aparatos +aseo + panetes + pintura + adicionales;
      document.getElementById('valor').value = demoliciones + preliminares + enchape + aparatos +aseo + panetes + pintura + adicionales;
  })

  $("#btnSave").button().on("click", function(event) {
      alert("Cotizacón Guardada.");
  })
});
